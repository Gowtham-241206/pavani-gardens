import { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      src: "/assets/hero_background.png",
      title: "Main Marriage Hall",
      subtitle: "Grand stage arrangement with floral ceiling details and warm ambient decor.",
      size: "large" // determines grid layout
    },
    {
      src: "/assets/dining_hall.png",
      title: "Clean Dining Area",
      subtitle: "Dedicated dining hall with modern layouts for multi-cuisine buffet spreads.",
      size: "medium"
    },
    {
      src: "/assets/garden_outdoor.png",
      title: "Photoshoot Garden",
      subtitle: "Lush outdoor green lawns decorated with micro lights for romantic portraits.",
      size: "medium"
    },
    {
      src: "/assets/bridal_suite.png",
      title: "Premium Bridal Suite",
      subtitle: "Fully air-conditioned luxury vanity rooms for private preparations.",
      size: "large"
    }
  ];

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    document.body.style.overflow = 'hidden'; // prevent scrolling
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        
        <div className="section-header reveal">
          <p>Explore the Grandeur</p>
          <h2 className="font-serif">Visual <span>Gallery</span></h2>
        </div>

        {/* Asymmetrical Grid */}
        <div className="gallery-grid reveal-stagger">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className={`gallery-item ${item.size} reveal reveal-scale`}
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-image-container">
                <img src={item.src} alt={item.title} className="gallery-img" />
                <div className="gallery-overlay">
                  <div className="overlay-icon">
                    <Maximize2 size={24} />
                  </div>
                  <div className="overlay-text">
                    <span className="overlay-tag">Pavani Gardens</span>
                    <h3 className="overlay-title font-serif">{item.title}</h3>
                    <p className="overlay-desc">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close gallery">
            <X size={32} />
          </button>
          
          <button className="lightbox-arrow left" onClick={prevSlide} aria-label="Previous image">
            <ChevronLeft size={36} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryItems[lightboxIndex].src} 
              alt={galleryItems[lightboxIndex].title} 
              className="lightbox-img" 
            />
            <div className="lightbox-caption glass">
              <h3 className="font-serif">{galleryItems[lightboxIndex].title}</h3>
              <p>{galleryItems[lightboxIndex].subtitle}</p>
            </div>
          </div>

          <button className="lightbox-arrow right" onClick={nextSlide} aria-label="Next image">
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
