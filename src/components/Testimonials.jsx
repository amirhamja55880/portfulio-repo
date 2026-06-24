import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    location: '🇺🇸 United States',
    platform: 'Fiverr',
    rating: 5,
    text: 'Amir delivered an exceptional website. The design was clean, fast and exactly what we needed. Very professional and responsive throughout the project.',
  },
  {
    id: 2,
    name: 'Sarah Miller',
    location: '🇬🇧 United Kingdom',
    platform: 'Upwork',
    rating: 5,
    text: 'Amazing work! Very professional, responsive and delivered on time. The website looks stunning and works perfectly. Will definitely hire again.',
  },
  {
    id: 3,
    name: 'Ahmed Khan',
    location: '🇦🇪 UAE',
    platform: 'Fiverr',
    rating: 5,
    text: 'Best developer I have worked with! Built my e-commerce site with all features I wanted. Great communication and attention to detail throughout.',
  },
  {
    id: 4,
    name: 'Maria Garcia',
    location: '🇪🇸 Spain',
    platform: 'Direct',
    rating: 5,
    text: 'Incredible work on my portfolio website. Amir understood exactly what I needed and delivered beyond expectations. Highly recommended!',
  },
  {
    id: 5,
    name: 'David Lee',
    location: '🇨🇦 Canada',
    platform: 'Upwork',
    rating: 5,
    text: 'Outstanding developer! He built a complex web app with AI integration in record time. Clean code, great design, and excellent communication.',
  },
  {
    id: 6,
    name: 'Fatima Al-Rashid',
    location: '🇸🇦 Saudi Arabia',
    platform: 'Direct',
    rating: 5,
    text: 'Amir created a beautiful landing page for our business. Very fast delivery, responsive design and exactly what we envisioned. 5 stars!',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getInitials = (name) =>
    name.split(' ').map((n) => n[0]).join('');

  const platformColor = {
    Fiverr: '#1dbf73',
    Upwork: '#14a800',
    Direct: '#4f8ef7',
  };

  return (
    <>
      <style>{`
        .testimonials {
          background: var(--bg2);
        }
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 22px;
          margin-bottom: 40px;
        }
        .testi-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s ease;
          position: relative;
        }
        .testi-card:hover {
          border-color: var(--blue);
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(79,142,247,0.1);
        }
        .testi-quote {
          font-size: 2.5rem;
          color: var(--blue);
          opacity: 0.3;
          line-height: 1;
          margin-bottom: 8px;
        }
        .testi-stars {
          color: #fbbf24;
          font-size: 1rem;
          letter-spacing: 2px;
          margin-bottom: 14px;
        }
        .testi-text {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.75;
          margin-bottom: 22px;
          font-style: italic;
        }
        .testi-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .testi-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--blue), var(--cyan));
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.95rem;
          color: #fff;
          flex-shrink: 0;
        }
        .testi-name {
          font-weight: 600;
          font-size: 0.92rem;
          margin-bottom: 2px;
        }
        .testi-location {
          color: var(--muted);
          font-size: 0.78rem;
        }
        .testi-platform {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 0.72rem;
          font-family: 'Fira Code', monospace;
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid;
          font-weight: 500;
        }
        .testi-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          padding: 32px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          flex-wrap: wrap;
        }
        .testi-stat {
          text-align: center;
        }
        .testi-stat-num {
          font-size: 2rem;
          font-weight: 700;
          color: var(--cyan);
          display: block;
        }
        .testi-stat-label {
          color: var(--muted);
          font-size: 0.82rem;
          margin-top: 4px;
        }
        @media (max-width: 768px) {
          .testi-grid {
            grid-template-columns: 1fr;
          }
          .testi-stats {
            gap: 24px;
          }
        }
      `}</style>

      <section className="testimonials section-alt" id="testimonials">
        <div className="section-inner">
          <div className="section-tag reveal">// testimonials</div>
          <h2 className="section-title reveal">Client <span>Reviews</span></h2>

          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={t.id} className={`testi-card reveal stagger-${i + 1}`}>
                <span
                  className="testi-platform"
                  style={{
                    color: platformColor[t.platform],
                    borderColor: platformColor[t.platform],
                  }}
                >
                  {t.platform}
                </span>
                <div className="testi-quote">"</div>
                <div className="testi-stars">{'★'.repeat(t.rating)}</div>
                <div className="testi-text">{t.text}</div>
                <div className="testi-author">
                  <div className="testi-avatar">{getInitials(t.name)}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-location">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="testi-stats reveal">
            <div className="testi-stat">
              <span className="testi-stat-num">10+</span>
              <div className="testi-stat-label">Happy Clients</div>
            </div>
            <div className="testi-stat">
              <span className="testi-stat-num">5.0★</span>
              <div className="testi-stat-label">Average Rating</div>
            </div>
            <div className="testi-stat">
              <span className="testi-stat-num">100%</span>
              <div className="testi-stat-label">Satisfaction Rate</div>
            </div>
            <div className="testi-stat">
              <span className="testi-stat-num">15+</span>
              <div className="testi-stat-label">Projects Done</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;