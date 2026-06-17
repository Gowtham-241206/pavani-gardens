import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const SocialProof = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      author: "Vinay Khanna",
      role: "Local Guide",
      rating: 5,
      date: "7 months ago",
      comment: "It's very beautiful to have this Pavani gardens in Nellore. The lighting arrangement is absolutely blowing eyes to see. Great light decoration!",
      lang: "en"
    },
    {
      author: "Khadarvalli Shaik",
      role: "Local Guide",
      rating: 5,
      date: "2 years ago",
      comment: "Very good function hall, lot of parking, and the dining hall is very clean. Overall the best venue.",
      lang: "en"
    },
    {
      author: "Telugu Visitor Review",
      role: "Verified Guest",
      rating: 4,
      date: "3 years ago",
      comment: "చాలా బాగుంది పెద్ద మండపం, కార్ parking కి పెద్ద స్థలం ఉంది. (Very beautiful and large mandapam, huge space for car parking. An excellent choice!)",
      lang: "te"
    },
    {
      author: "Triangle Services Photography",
      role: "Local Guide",
      rating: 5,
      date: "9 months ago",
      comment: "Ample parking & good spacious hall. Perfectly suited for photography and large gatherings.",
      lang: "en"
    }
  ];

  const nextReview = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Auto-play reviews slider every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="section-header reveal">
          <p>Loved by Families</p>
          <h2 className="font-serif">Guest <span>Testimonials</span></h2>
        </div>

        <div className="reviews-grid reveal-stagger">
          {/* Summary Column */}
          <div className="review-summary-card glass reveal reveal-left">
            <span className="reviews-kicker">Google rated venue</span>
            <div className="summary-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill={i < 4 ? "var(--accent-gold)" : "none"} stroke="var(--accent-gold)" />
              ))}
            </div>
            <h3 className="summary-rating font-serif">4.3 <span>/ 5</span></h3>
            <p className="summary-count">Based on 481 Google Reviews</p>
            <div className="google-badge">
              <span className="google-g">G</span>
              <span className="google-text">Google Reviews</span>
            </div>
          </div>

          {/* Testimonial Slider Column */}
          <div className="testimonial-slider-card glass reveal reveal-right">
            <div className="testimonial-topline">
              <div className="quote-icon">
                <MessageSquare size={24} className="text-gold" />
              </div>
              <span>Featured family review</span>
            </div>

            <div className="slider-wrapper">
              <div 
                className="slider-content"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {reviews.map((review, idx) => (
                  <div key={idx} className="slide-item">
                    <div className="stars-row">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < review.rating ? "var(--accent-gold)" : "none"} 
                          stroke="var(--accent-gold)" 
                        />
                      ))}
                    </div>
                    
                    <p className={`review-comment ${review.lang === 'te' ? 'telugu-text' : ''}`}>
                      "{review.comment}"
                    </p>

                    <div className="reviewer-info">
                      <div className="reviewer-avatar">
                        {review.author.charAt(0)}
                      </div>
                      <div className="reviewer-details">
                        <h4 className="reviewer-name font-serif">{review.author}</h4>
                        <span className="reviewer-role">{review.role} • {review.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Navigation */}
            <div className="slider-controls">
              <button onClick={prevReview} className="control-btn" aria-label="Previous review">
                <ChevronLeft size={20} />
              </button>
              <div className="slider-dots">
                {reviews.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveIndex(idx)}
                    className={`dot-btn ${activeIndex === idx ? 'active' : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button onClick={nextReview} className="control-btn" aria-label="Next review">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
