import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Calendar } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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

  const navLinks = [
    { name: 'Overview', id: 'overview' },
    { name: 'Amenities', id: 'amenities' },
    { name: 'Events', id: 'events' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
        <div className="container nav-container">
          <div className="logo-section" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-icon">✨</span>
            <div className="logo-text">
              <span className="logo-title font-serif">PAVANI GARDENS</span>
              <span className="logo-subtitle">CONVENTION CENTRE</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollToSection(link.id)} className="nav-btn">
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle light/dark theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={() => scrollToSection('inquiry')} className="btn btn-primary btn-nav-cta">
              <Calendar size={16} />
              <span>Book Tour</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer glass ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="mobile-nav-btn font-serif"
              >
                {link.name}
              </button>
            </li>
          ))}
          <li className="mobile-cta-li">
            <button
              onClick={() => scrollToSection('inquiry')}
              className="btn btn-primary w-full"
            >
              <Calendar size={18} />
              <span>Check Availability</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
