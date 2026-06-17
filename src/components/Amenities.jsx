import { Car, Wind, Coffee, Power, Home, Sparkles, TreePine, Award } from 'lucide-react';

const Amenities = () => {
  const amenitiesList = [
    {
      title: "Extensive Parking Lot",
      description: "One of Nellore's largest private parking areas. Securely accommodates over 150+ cars and heavy two-wheeler traffic.",
      icon: <Car size={24} />
    },
    {
      title: "Central AC Hall",
      description: "Fully air-conditioned marriage hall ensuring full temperature comfort for guests in all seasons.",
      icon: <Wind size={24} />
    },
    {
      title: "Spacious Dining Hall",
      description: "Hygienically maintained separate dining hall accommodating massive crowds for sit-down or buffet dining.",
      icon: <Coffee size={24} />
    },
    {
      title: "Heavy Power Backup",
      description: "Industrial generator setups providing absolute power redundancy. No dark moments during auspicious rituals.",
      icon: <Power size={24} />
    },
    {
      title: "Guest Accommodation",
      description: "Comfortable, premium on-site rooms available for out-of-town guests and close family members.",
      icon: <Home size={24} />
    },
    {
      title: "Premium Bridal Suites",
      description: "Exclusively designed air-conditioned makeup and dressing rooms for the bride and groom with full privacy.",
      icon: <Sparkles size={24} />
    },
    {
      title: "Scenic Photoshoot Garden",
      description: "Lush green lawns and landscaped outdoor spaces, ideal for evening photoshoots and stage drop-offs.",
      icon: <TreePine size={24} />
    },
    {
      title: "Valet Parking Services",
      description: "Professional valet and gate security staff assisting guests with parking logistics for a smooth welcome.",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="amenities" className="amenities-section">
      <div className="container">
        
        <div className="section-header reveal">
          <p>World-Class Facilities</p>
          <h2 className="font-serif">Exceptional Venue <span>Amenities</span></h2>
        </div>

        <div className="amenities-grid reveal-stagger">
          {amenitiesList.map((item, index) => (
            <div key={index} className="amenity-card glass glass-hover reveal">
              <div className="amenity-icon-wrapper">
                <div className="amenity-icon">
                  {item.icon}
                </div>
              </div>
              <h3 className="amenity-title font-serif">{item.title}</h3>
              <p className="amenity-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Amenities;
