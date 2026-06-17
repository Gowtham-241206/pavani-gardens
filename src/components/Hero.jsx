import { Calendar, Star, MapPin } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Pavani Gardens, I would like to inquire about venue availability and pricing for my upcoming event.");
    window.open(`https://wa.me/919440207366?text=${message}`, '_blank');
  };

  const scrollToInquiry = () => {
    const element = document.getElementById('inquiry');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title font-serif animate-fade-in-up">
            Where Grand Occasions Turn Into <span className="gold-text">Lifetime Memories</span>
          </h1>

          <p className="hero-telugu font-serif animate-fade-in-up">
            పావనీ గార్డెన్స్ — అద్భుతమైన వేడుకలకు ఒకే ఒక వేదిక
          </p>

          <p className="hero-description animate-fade-in-up">
            Experience luxury hosting at Nellore's premium multipurpose convention centre. Complete with elegant, fully air-conditioned spaces, a spacious separate dining hall, and the city's largest parking grounds.
          </p>

          <div className="hero-ctas animate-fade-in-up">
            <button onClick={handleWhatsAppClick} className="btn btn-whatsapp">
              {/* SVG WhatsApp Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '4px' }}>
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.37 5.047L2 22l5.127-1.341a9.927 9.927 0 0 0 4.883 1.283h.005c5.507 0 9.99-4.478 9.99-9.986 0-2.67-1.037-5.18-2.92-7.062A9.925 9.925 0 0 0 12.012 2zm5.836 14.199c-.32.898-1.579 1.644-2.18 1.714-.523.062-1.026.353-3.325-.602-2.94-1.222-4.831-4.224-4.978-4.42-.147-.196-1.196-1.588-1.196-3.031 0-1.443.755-2.152 1.024-2.443.27-.291.589-.364.785-.364h.564c.18 0 .42.008.627.498.21.498.718 1.748.78 1.873.063.124.104.27.021.436-.083.166-.124.27-.249.415-.125.145-.262.324-.375.436-.125.124-.256.26-.111.51.145.249.643 1.06 1.38 1.713.95.843 1.749 1.103 2.022 1.218.272.115.431.096.592-.087.161-.183.693-.805.877-1.08.184-.274.368-.228.623-.133.256.096 1.62.764 1.898.905.279.14.464.21.533.327.069.117.069.677-.251 1.575z"/>
              </svg>
              <span>Book on WhatsApp</span>
            </button>
            <button onClick={scrollToInquiry} className="btn btn-secondary">
              <Calendar size={18} />
              <span>Schedule Venue Tour</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust animate-fade-in">
            <div className="trust-item">
              <div className="trust-rating">
                <Star className="star-icon" size={18} fill="currentColor" />
                <span className="rating-value">4.3</span>
              </div>
              <span className="trust-label">481+ Google Reviews</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-number font-serif">1000+</span>
              <span className="trust-label">Guest Capacity</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <div className="trust-location">
                <MapPin className="pin-icon" size={18} />
                <span className="location-value">Nellore</span>
              </div>
              <span className="trust-label">Mini Bypass Road</span>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="scroll-indicator" onClick={scrollToInquiry}>
        <span className="scroll-mouse">
          <span className="scroll-wheel" />
        </span>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </header>
  );
};

export default Hero;
