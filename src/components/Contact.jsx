import { Phone, Mail, Clock, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactDetails = [
    {
      title: "Direct Call",
      desc: "Speak with Mahesh or our bookings team directly.",
      links: [
        { label: "+91 7093815333", href: "tel:+917093815333" },
        { label: "+91 9247927971", href: "tel:+919247927971" },
        { label: "094402 07366", href: "tel:09440207366" }
      ],
      icon: <Phone size={20} />
    },
    {
      title: "Email Inquiry",
      desc: "Send details about your event proposal.",
      links: [
        { label: "mahesh.pavanigroup@gmail.com", href: "mailto:mahesh.pavanigroup@gmail.com" }
      ],
      icon: <Mail size={20} />
    },
    {
      title: "Business Hours",
      desc: "Visit our booking office at the venue.",
      links: [
        { label: "Mon - Sun: 9:00 AM to 7:00 PM", href: "#" }
      ],
      icon: <Clock size={20} />
    },
    {
      title: "Venue Location",
      desc: "Guduru BhaskaraRami Reddy Layout, Gomathy Nagar, Mini Bypass Road, Nellore, AP 524003.",
      links: [
        { label: "Open in Google Maps", href: "https://maps.google.com/?q=Pavani+Gardens+Nellore", external: true }
      ],
      icon: <MapPin size={20} />
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="section-header reveal">
          <p>Get in Touch</p>
          <h2 className="font-serif">Plan Your <span>Visit</span></h2>
        </div>

        <div className="contact-grid reveal-stagger">
          
          {/* Details Column */}
          <div className="contact-info-list">
            {contactDetails.map((detail, idx) => (
              <div key={idx} className="contact-card glass reveal reveal-left">
                <div className="contact-card-icon-wrapper">
                  <div className="contact-card-icon">
                    {detail.icon}
                  </div>
                </div>
                
                <div className="contact-card-content">
                  <h3 className="contact-card-title font-serif">{detail.title}</h3>
                  <p className="contact-card-desc">{detail.desc}</p>
                  
                  <div className="contact-card-links">
                    {detail.links.map((link, lIdx) => (
                      <a 
                        key={lIdx} 
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="contact-action-link font-serif"
                      >
                        <span>{link.label}</span>
                        {link.external && <ExternalLink size={12} />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Map Column */}
          <div className="contact-map-wrapper glass reveal reveal-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.9739454341995!2d79.97547077590209!3d14.428789581023773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf23cf87864f1%3A0xe54d8b51d8b67f1b!2sPavani%20Gardens!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pavani Gardens Location Google Maps"
              className="google-map-iframe"
            />
            <div className="map-badge glass">
              <MapPin size={16} className="text-gold" />
              <span>Nellore, Andhra Pradesh</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
