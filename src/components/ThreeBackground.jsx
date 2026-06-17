import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Bail out if container has no dimensions
    if (width === 0 || height === 0) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 200);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Bokeh Glow Texture ---
    const createBokehTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.15, 'rgba(255, 235, 170, 0.9)');
        gradient.addColorStop(0.35, 'rgba(212, 175, 55, 0.5)');
        gradient.addColorStop(0.65, 'rgba(212, 175, 55, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const bokehTexture = createBokehTexture();

    // --- Particle System ---
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);
    const phases = new Float32Array(particleCount);
    const opacities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;       // X spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;   // Y spread
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;   // Z depth

      sizes[i] = 1.0 + Math.random() * 3.0;
      speeds[i] = 0.15 + Math.random() * 0.35;
      phases[i] = Math.random() * Math.PI * 2;
      opacities[i] = 0.3 + Math.random() * 0.7;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // --- Shader Material for per-particle size variation ---
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: bokehTexture },
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vOpacity;
        
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          // Twinkle effect based on position and time
          float twinkle = sin(uTime * 1.5 + position.x * 0.5 + position.y * 0.3) * 0.5 + 0.5;
          vOpacity = 0.3 + twinkle * 0.7;
          
          gl_PointSize = size * uPixelRatio * (80.0 / -mvPosition.z);
          gl_PointSize = max(gl_PointSize, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        varying float vOpacity;
        
        void main() {
          vec4 texColor = texture2D(uTexture, gl_PointCoord);
          gl_FragColor = vec4(texColor.rgb, texColor.a * vOpacity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // --- Mouse & Scroll Tracking ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const scrollState = { y: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollState.targetY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- Animation Loop ---
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = (performance.now() - startTime) * 0.001;

      // Update shader time uniform
      material.uniforms.uTime.value = elapsed;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
      scrollState.y += (scrollState.targetY - scrollState.y) * 0.05;

      // Animate each particle position
      const posArray = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;

        // Upward drift
        posArray[idx + 1] += speeds[i];

        // Gentle horizontal sway
        posArray[idx] += Math.sin(elapsed * 0.8 + phases[i]) * 0.04;

        // Subtle depth oscillation
        posArray[idx + 2] += Math.cos(elapsed * 0.3 + phases[i]) * 0.02;

        // Reset when a particle floats too high
        if (posArray[idx + 1] > 35) {
          posArray[idx + 1] = -35;
          posArray[idx] = (Math.random() - 0.5) * 80;
          posArray[idx + 2] = (Math.random() - 0.5) * 50;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // Mouse parallax rotation
      particles.rotation.y = mouse.x * 0.25;
      particles.rotation.x = -mouse.y * 0.15;

      // Mouse parallax position drift
      particles.position.x = mouse.x * 5;
      particles.position.y = mouse.y * 3;

      // Scroll parallax
      particles.position.y += scrollState.y * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      if (w === 0 || h === 0) return;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    };

    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      bokehTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 3,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
};

export default ThreeBackground;
