import { ArrowUp, Star, Sparkles } from 'lucide-react';

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        {/* Branding Column */}
        <div className="footer-brand">
          <div className="brand-header" onClick={handleScrollTop}>
            <span className="brand-logo-icon">✨</span>
            <h3 className="brand-title font-serif">PAVANI GARDENS</h3>
          </div>
          <p className="brand-desc">
            Nellore's premier wedding and multi-purpose event convention centre. We provide custom space luxury with 100% vendor freedom to host your dream celebrations.
          </p>
          <div className="footer-rating-badge">
            <Star className="star-icon" size={16} fill="currentColor" />
            <span className="rating-text">4.3 Rating (481 Reviews)</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-col">
          <h4 className="footer-title font-serif">Explore</h4>
          <ul className="footer-links">
            <li><a href="#overview">Overview</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#events">Event Spaces</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Event Types Links */}
        <div className="footer-links-col">
          <h4 className="footer-title font-serif">Host Events</h4>
          <ul className="footer-links">
            <li><a href="#events">Weddings</a></li>
            <li><a href="#events">Receptions</a></li>
            <li><a href="#events">Engagements</a></li>
            <li><a href="#events">Sangeet Nights</a></li>
            <li><a href="#events">Birthdays</a></li>
            <li><a href="#events">Corporate Banquets</a></li>
          </ul>
        </div>

        {/* Address and Contact info */}
        <div className="footer-contact-col">
          <h4 className="footer-title font-serif">Venue Location</h4>
          <p className="footer-address">
            Guduru BhaskaraRami Reddy Layout,<br />
            Gomathy Nagar, Mini Bypass Road,<br />
            Nellore, Andhra Pradesh - 524003.
          </p>
          <div className="footer-phone">
            <strong>Bookings:</strong> +91 7093815333<br />
            <strong>Office:</strong> +91 9247927971
          </div>
        </div>

      </div>

      {/* Sub Footer */}
      <div className="container sub-footer">
        <div className="sub-footer-wrapper">
          <p className="copyright-text">
            © {new Date().getFullYear()} Pavani Gardens Convention Centre. All Rights Reserved.
          </p>
          <div className="designer-tag">
            <Sparkles size={12} className="text-gold" />
            <span>Premium Event Hosting</span>
          </div>
          <button onClick={handleScrollTop} className="scroll-top-btn" aria-label="Scroll to top of page">
            <ArrowUp size={16} />
            <span>To Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
