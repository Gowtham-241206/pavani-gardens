import { useState } from 'react';
import { Phone, Calendar, User, Mail, Users, CheckCircle, Sparkles } from 'lucide-react';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'wedding',
    eventDate: '',
    guestCount: '500-800',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-+]/g, '').slice(-10))) {
      tempErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.eventDate) {
      tempErrors.eventDate = "Please select an event date";
    } else {
      const selected = new Date(formData.eventDate);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selected < today) {
        tempErrors.eventDate = "Event date cannot be in the past";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Save query locally
      localStorage.setItem('pavani_gardens_inquiry', JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString()
      }));
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventType: 'wedding',
      eventDate: '',
      guestCount: '500-800',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="inquiry" className="inquiry-section">
      <div className="container">
        
        <div className="section-header reveal">
          <p>Book Your Event</p>
          <h2 className="font-serif">Check <span>Availability</span></h2>
        </div>

        <div className="inquiry-grid reveal-stagger">
          
          {/* Quick Contact Block */}
          <div className="inquiry-info-card glass reveal reveal-left">
            <span className="info-tag">Instant Booking Assistance</span>
            <h3 className="info-title font-serif">Let's Design Your <span className="gold-text">Big Day</span></h3>
            <p className="info-desc">
              Have questions about seating setups, vendor access timings, or package prices? Reach out directly. Mahesh and our reservation team will help you configure everything.
            </p>

            <div className="quick-contacts-list">
              <div className="q-contact-item">
                <span className="q-label">Office & Reservation Desk</span>
                <a href="tel:+917093815333" className="q-link font-serif">+91 7093815333</a>
                <a href="tel:+919247927971" className="q-link font-serif">+91 9247927971</a>
              </div>
              <div className="q-contact-item">
                <span className="q-label">Chat Instantly on WhatsApp</span>
                <a 
                  href="https://wa.me/919440207366?text=Hi%20Pavani%20Gardens%2C%20I%20am%20enquiring%20about%20event%20pricing%20and%20availability." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="q-link-wa font-serif"
                >
                  Start WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="info-amenity-highlights">
              <div className="info-badge-item">
                <Sparkles size={16} className="text-gold" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="info-badge-item">
                <Sparkles size={16} className="text-gold" />
                <span>External Caterers Welcome</span>
              </div>
              <div className="info-badge-item">
                <Sparkles size={16} className="text-gold" />
                <span>Large Dedicated AC Suite rooms</span>
              </div>
            </div>
          </div>

          {/* Form Block */}
          <div className="inquiry-form-card glass reveal reveal-right">
            {isSubmitted ? (
              <div className="form-success-state">
                <div className="success-icon-wrapper">
                  <CheckCircle size={48} className="success-icon" />
                </div>
                <h3 className="success-title font-serif">Inquiry Submitted Successfully!</h3>
                <p className="success-text">
                  Thank you, <strong>{formData.name}</strong>. We have registered your inquiry for a <strong>{formData.eventType}</strong> on <strong>{formData.eventDate}</strong>.
                </p>
                <p className="success-subtext">
                  Our coordinator, Mahesh, will review the date calendar and contact you at <strong>{formData.phone}</strong> within 2 hours.
                </p>
                <button onClick={resetForm} className="btn btn-secondary success-btn">
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form">
                
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name"><User size={16} /> Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                {/* Grid row: Phone & Email */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="phone"><Phone size={16} /> Mobile Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className={errors.phone ? 'input-error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email"><Mail size={16} /> Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@domain.com"
                      className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                {/* Grid row: Event Type & Date */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="eventType"><Sparkles size={16} /> Event Type</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                    >
                      <option value="wedding">Wedding & Reception</option>
                      <option value="engagement">Engagement Ceremony</option>
                      <option value="sangeet">Sangeet / Mehendi Night</option>
                      <option value="birthday">Birthday Celebration</option>
                      <option value="corporate">Corporate Seminar / Expo</option>
                      <option value="cultural">Cultural Gathering</option>
                      <option value="other">Other Celebration</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="eventDate"><Calendar size={16} /> Event Date *</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={errors.eventDate ? 'input-error' : ''}
                    />
                    {errors.eventDate && <span className="error-message">{errors.eventDate}</span>}
                  </div>
                </div>

                {/* Guest count */}
                <div className="form-group">
                  <label htmlFor="guestCount"><Users size={16} /> Estimated Guest Count</label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                  >
                    <option value="under-200">Under 200 Guests</option>
                    <option value="200-500">200 to 500 Guests</option>
                    <option value="500-800">500 to 800 Guests</option>
                    <option value="800-1200">800 to 1,200 Guests</option>
                    <option value="above-1200">More than 1,200 Guests</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Special Requirements / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your catering, decoration, or audio-visual preferences..."
                    rows="4"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full submit-btn"
                >
                  {isSubmitting ? "Processing Date Availability..." : "Submit Verification Inquiry"}
                </button>
                
                <span className="form-microcopy">
                  * We value your privacy. Your contact details are stored securely to verify availability.
                </span>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
