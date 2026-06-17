import { useState } from 'react';
import { Sparkles, Calendar, ChevronRight } from 'lucide-react';

const EventShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const eventData = [
    {
      title: "Weddings & Receptions",
      description: "Host grand, traditional Telugu marriages or premium modern receptions. Our spacious air-conditioned mandapam can hold grand stage setups with exquisite floral works and custom lighting decor. With a dedicated large dining hall, your guests can enjoy an uninterrupted feast.",
      capacity: "Up to 1,200 guests",
      duration: "12 to 24 hours packages",
      features: ["Grand Stage Space", "Separate Air-Conditioned Mandapam", "Lush Pre-Wedding Photoshoot Garden", "Deluxe Bridal & Groom Dressing Rooms"],
      image: "/assets/hero_background.png",
      id: "wedding"
    },
    {
      title: "Engagements & Sangeet",
      description: "Celebrate intimate family rings and high-energy sangeet functions with full decoration freedom. Set up custom dance floors, high-end acoustics, and gorgeous stage lights. Take advantage of our external catering policy to serve your family's favorite dishes.",
      capacity: "200 to 500 guests",
      duration: "Half-day or Full-day packages",
      features: ["Custom Stage & Dance Floor Space", "Decorative Fairy Lighting Setup", "Hassle-Free Sound System Options", "Flexible Seating Layouts"],
      image: "/assets/garden_outdoor.png",
      id: "sangeet"
    },
    {
      title: "Birthdays & Family Gatherings",
      description: "Create memorable milestones for kids, silver jubilees, or traditional cradle ceremonies. Our venue is highly budget-friendly and gives you the freedom to set up custom theme decors like balloon arches, magic show booths, and kid food counters.",
      capacity: "100 to 400 guests",
      duration: "4 to 8 hours packages",
      features: ["Kids Play & Booth Area", "Theme Decoration Allowed", "Custom Buffet Setup Options", "Ample Car Parking for Local Guests"],
      image: "/assets/bridal_suite.png",
      id: "birthdays"
    },
    {
      title: "Corporate & Cultural Events",
      description: "Conduct professional seminars, product launches, corporate banquets, or school cultural functions. With heavy power backup generators, central AC, and spacious layouts, we guarantee smooth coordination for public gatherings.",
      capacity: "Up to 1,000 guests",
      duration: "Custom Hourly rates",
      features: ["Heavy Generator Power Backup", "High-Speed Internet Area Access", "Flexible Seating Formats", "Easy Loading/Unloading Entrances"],
      image: "/assets/dining_hall.png",
      id: "corporate"
    }
  ];

  const handleInquireClick = () => {
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
    <section id="events" className="events-section">
      <div className="container">
        <div className="section-header reveal">
          <p>Occasions We Celebrate</p>
          <h2 className="font-serif">Tailored Event <span>Experiences</span></h2>
        </div>

        {/* Tab Controls */}
        <div className="tab-controls-wrapper reveal">
          <div className="tab-controls glass">
            {eventData.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`tab-btn font-serif ${activeTab === idx ? 'active' : ''}`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panel */}
        <div className="tab-panel glass reveal">
          <div className="panel-grid">
            {/* Content Left */}
            <div className="panel-content">
              <div className="panel-title-row">
                <Sparkles size={20} className="text-gold" />
                <h3 className="panel-title font-serif">{eventData[activeTab].title}</h3>
              </div>
              
              <p className="panel-desc">{eventData[activeTab].description}</p>
              
              <div className="panel-specs">
                <div className="spec-item">
                  <span className="spec-label">Capacity</span>
                  <span className="spec-value">{eventData[activeTab].capacity}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Duration</span>
                  <span className="spec-value">{eventData[activeTab].duration}</span>
                </div>
              </div>

              <div className="panel-features-wrapper">
                <h4 className="features-title font-serif">Includes / Supports:</h4>
                <ul className="panel-features">
                  {eventData[activeTab].features.map((feat, idx) => (
                    <li key={idx}>
                      <ChevronRight size={16} className="text-gold" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={handleInquireClick} className="btn btn-primary panel-cta">
                <Calendar size={16} />
                <span>Inquire for {eventData[activeTab].title}</span>
              </button>
            </div>

            {/* Image Right */}
            <div className="panel-image-wrapper">
              <img 
                src={eventData[activeTab].image} 
                alt={`${eventData[activeTab].title} venue setup`}
                className="panel-img"
              />
              <div className="image-overlay-glow" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventShowcase;
