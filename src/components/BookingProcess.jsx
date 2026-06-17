import { MessageSquare, Eye, Edit3, PartyPopper } from 'lucide-react';

const BookingProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Inquire & Check Date",
      desc: "Submit our short booking inquiry form, call us directly, or chat on WhatsApp to check if your desired auspicious date is available.",
      icon: <MessageSquare size={20} />
    },
    {
      num: "02",
      title: "Schedule a Venue Tour",
      desc: "Visit Pavani Gardens at Gomathy Nagar, Nellore. Take a private walk through our central AC hall, spacious dining hall, rooms, and massive parking spaces.",
      icon: <Eye size={20} />
    },
    {
      num: "03",
      title: "Customize & Select Vendors",
      desc: "Bring your favorite caterers, decorators, and photographers. We do not restrict you to in-house vendors, giving you 100% budget and stylistic control.",
      icon: <Edit3 size={20} />
    },
    {
      num: "04",
      title: "Secure & Celebrate!",
      desc: "Lock the date with a transparent, clear agreement and a minimal advance deposit. Rest easy knowing our backup power and valet team are on stand-by.",
      icon: <PartyPopper size={20} />
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        
        <div className="section-header reveal">
          <p>How We Host</p>
          <h2 className="font-serif">Simple Booking <span>Journey</span></h2>
        </div>

        <div className="process-timeline reveal-stagger">
          {steps.map((step, idx) => (
            <div key={idx} className="timeline-card glass reveal reveal-scale">
              <div className="timeline-number font-serif">{step.num}</div>
              <div className="timeline-icon-box">
                <div className="timeline-icon">
                  {step.icon}
                </div>
              </div>
              <h3 className="timeline-title font-serif">{step.title}</h3>
              <p className="timeline-desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BookingProcess;
