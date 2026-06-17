import { useState, useEffect } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Does Pavani Gardens allow external catering and decoration vendors?",
      a: "Yes! We support 100% vendor flexibility. Unlike standard venues, you can bring your choice of caterers and decorations. This gives you full stylistic control and budget freedom."
    },
    {
      q: "How much parking space is available at the venue?",
      a: "Pavani Gardens is highly praised for having one of Nellore's largest private parking areas. We accommodate over 150+ cars and multiple two-wheelers comfortably within our secure premises."
    },
    {
      q: "Is guest accommodation available on-site?",
      a: "Yes. We provide premium guest rooms and luxury air-conditioned bridal and groom dressing suites directly on-site to ensure full family comfort during long rituals."
    },
    {
      q: "Is there full power generator backup available?",
      a: "Yes, we provide heavy-duty power backup generators. This covers lighting, audio-visual systems, and air conditioning, ensuring zero interruptions to your auspicious moments."
    },
    {
      q: "What is the guest capacity of Pavani Gardens?",
      a: "Our multi-purpose convention hall comfortably holds gatherings of up to 1,200+ guests (seated and standing combined). Additionally, we feature a large, separate dining hall for catering service."
    },
    {
      q: "Where is Pavani Gardens located and is it easy to find?",
      a: "We are situated at Guduru BhaskaraRami Reddy Layout, Gomathy Nagar, Nellore, close to the Mini Bypass Road. It is highly accessible for local and traveling guests."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Inject Google FAQ Schema JSON-LD
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-jsonld';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema-jsonld');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="faqs" className="faqs-section">
      <div className="container">
        
        <div className="section-header reveal">
          <p>Common Questions</p>
          <h2 className="font-serif">Frequently Asked <span>Questions</span></h2>
        </div>

        <div className="faqs-list reveal reveal-stagger">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item glass ${isOpen ? 'open' : ''}`}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="question-text-wrapper">
                    <HelpCircle size={18} className="faq-q-icon" />
                    <h3 className="faq-q-title font-serif">{faq.q}</h3>
                  </div>
                  <button type="button" className="faq-toggle-btn" aria-label="Toggle FAQ answer">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                </div>
                
                <div className={`faq-answer-wrapper ${isOpen ? 'expanded' : ''}`}>
                  <div className="faq-answer-content">
                    <p className="faq-a-text">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
