import { CheckCircle2, ShieldAlert } from 'lucide-react';

const VenueOverview = () => {
  const highlights = [
    "Complete AC banquet hall accommodating large crowds comfortably",
    "Separate, hygienic dining hall ensuring clean food service",
    "Open garden space for photoshoots and outdoor pre-wedding events",
    "Robust generator power backup ensuring zero blackouts during rituals",
    "Full freedom to choose your own external catering and decoration partners",
    "Valet parking assistance with huge parking lots for guest comfort"
  ];

  return (
    <section id="overview" className="overview-section">
      <div className="container">
        <div className="overview-grid">
          
          {/* Content Column */}
          <div className="overview-content reveal reveal-left">
            <span className="overview-subtitle">About Our Venue</span>
            <h2 className="overview-title font-serif">
              Designed For Grand Celebrations & <span className="gold-text">Flawless Events</span>
            </h2>
            <p className="overview-desc">
              Pavani Gardens is a multipurpose banquet hall located in the heart of Nellore. Weddings and family events are milestones meant to be surrounded with grandeur. Choosing the right space where you can host all your ceremonies without restrictions is key.
            </p>

            <div className="flexibility-alert glass">
              <div className="flexibility-icon">
                <CheckCircle2 size={24} className="text-gold" />
              </div>
              <div className="flexibility-text">
                <h4 className="font-serif">100% Vendor Flexibility</h4>
                <p>
                  We allow you to choose external catering and design vendors. Customize the food menu and decor according to your wishes without any venue restrictions.
                </p>
              </div>
            </div>

            <ul className="highlights-list">
              {highlights.map((item, index) => (
                <li key={index} className="highlight-item">
                  <CheckCircle2 className="check-icon" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Column */}
          <div className="overview-visual reveal reveal-right">
            <div className="visual-image-wrapper">
              <img 
                src="/assets/dining_hall.png" 
                alt="Pavani Gardens spacious banquet hall and dining arrangements" 
                className="overview-img"
              />
              <div className="visual-caption glass">
                <h4 className="font-serif">Massive Separate Dining Hall</h4>
                <p>Clean, separate seating for serving global multi-cuisine buffet spreads.</p>
              </div>
            </div>
            
            {/* Small offset card to break standard grids */}
            <div className="visual-offset-card glass">
              <span className="offset-number font-serif">1000+</span>
              <span className="offset-label">Seating & Standing Capacity</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VenueOverview;
