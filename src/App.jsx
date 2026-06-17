import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import VenueOverview from './components/VenueOverview';
import EventShowcase from './components/EventShowcase';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import BookingProcess from './components/BookingProcess';
import InquiryForm from './components/InquiryForm';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    // Check local storage or default to light theme
    const savedTheme = localStorage.getItem('pavani_gardens_theme');
    if (savedTheme) return savedTheme;
    
    return 'light';
  });

  useEffect(() => {
    // Update data-theme on html element
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pavani_gardens_theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // WhatsApp click handler for quick floating chat
  const handleWhatsAppFloat = () => {
    const msg = encodeURIComponent("Hello Pavani Gardens, I am looking to inquire about booking your venue for an event.");
    window.open(`https://wa.me/919440207366?text=${msg}`, '_blank');
  };

  return (
    <div className="app-wrapper">
      {/* Structural Schema Markups - LocalBusiness JSON-LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Pavani Gardens",
          "alternateName": "Pavani Gardens Convention Centre",
          "image": "https://pavanigardens.com/assets/hero_background.png",
          "telephone": "+91-7093815333",
          "email": "mahesh.pavanigroup@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Guduru BhaskaraRami Reddy Layout, Gomathy Nagar, Mini Bypass Road",
            "addressLocality": "Nellore",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "524003",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "14.428789",
            "longitude": "79.975470"
          },
          "url": "https://pavanigardens.com",
          "priceRange": "$$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.3",
            "reviewCount": "481"
          }
        })}
      </script>

      {/* Sticky Header Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Cinematic Hero Block */}
      <Hero />

      {/* Social Proof (Verified Customer Testimonials) */}
      <SocialProof />

      {/* Core Venue Specifications */}
      <VenueOverview />

      {/* Tabbed Event Showcase */}
      <EventShowcase />

      {/* Infrastructure Amenities */}
      <Amenities />

      {/* Immersive Gallery Display */}
      <Gallery />

      {/* Booking Timeline Milestone Roadmap */}
      <BookingProcess />

      {/* Lead Inquiry Captures */}
      <InquiryForm />

      {/* Accordion FAQ Area */}
      <FAQ />

      {/* Contact Channels & Embed Maps */}
      <Contact />

      {/* Footer Branding Area */}
      <Footer />

      {/* Floating Speed Dials (Call & WhatsApp) for conversion optimization */}
      <div className="floating-actions">
        <a 
          href="tel:+917093815333" 
          className="btn-float btn-float-call" 
          aria-label="Call Reservation Desk"
        >
          <Phone size={22} />
        </a>
        <button 
          onClick={handleWhatsAppFloat} 
          className="btn-float btn-float-wa" 
          aria-label="Chat on WhatsApp"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.37 5.047L2 22l5.127-1.341a9.927 9.927 0 0 0 4.883 1.283h.005c5.507 0 9.99-4.478 9.99-9.986 0-2.67-1.037-5.18-2.92-7.062A9.925 9.925 0 0 0 12.012 2zm5.836 14.199c-.32.898-1.579 1.644-2.18 1.714-.523.062-1.026.353-3.325-.602-2.94-1.222-4.831-4.224-4.978-4.42-.147-.196-1.196-1.588-1.196-3.031 0-1.443.755-2.152 1.024-2.443.27-.291.589-.364.785-.364h.564c.18 0 .42.008.627.498.21.498.718 1.748.78 1.873.063.124.104.27.021.436-.083.166-.124.27-.249.415-.125.145-.262.324-.375.436-.125.124-.256.26-.111.51.145.249.643 1.06 1.38 1.713.95.843 1.749 1.103 2.022 1.218.272.115.431.096.592-.087.161-.183.693-.805.877-1.08.184-.274.368-.228.623-.133.256.096 1.62.764 1.898.905.279.14.464.21.533.327.069.117.069.677-.251 1.575z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
