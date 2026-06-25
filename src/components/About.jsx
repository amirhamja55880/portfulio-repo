import React from 'react';
// আপনার photo এখানে import করুন:
import myPhoto from '../assets/hamza.jpeg';

const About = () => {
  
  

  return (
    <>
      <style>{`
        .about {
          background: var(--bg2);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 64px;
          align-items: center;
        }

        /* ─── Photo Side ─── */
        .about-photo-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        /* Outer glow ring */
        .photo-glow-ring {
          position: relative;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(135deg, #4f8ef7, #a855f7, #22d3ee, #4f8ef7);
          background-size: 300% 300%;
          animation: gradientSpin 4s linear infinite;
          box-shadow:
            0 0 30px rgba(79,142,247,0.35),
            0 0 60px rgba(168,85,247,0.2);
        }

        @keyframes gradientSpin {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Inner white gap between gradient ring and photo */
        .photo-inner-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          padding: 4px;
          background: var(--bg2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Actual photo circle */
        .photo-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: var(--card);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .photo-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        /* Placeholder when no photo */
        .photo-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: var(--muted);
        }
        .photo-placeholder .avatar-icon {
          font-size: 5rem;
          filter: drop-shadow(0 0 12px rgba(79,142,247,0.5));
        }
        .photo-placeholder p {
          font-size: 0.8rem;
          text-align: center;
          opacity: 0.6;
          font-family: 'Fira Code', monospace;
        }

        /* Floating badge - top right */
        .photo-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: linear-gradient(135deg, #4f8ef7, #a855f7);
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          font-family: 'Fira Code', monospace;
          padding: 5px 10px;
          border-radius: 20px;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 12px rgba(79,142,247,0.4);
          white-space: nowrap;
        }

        /* Floating dot decorations */
        .photo-dot {
          position: absolute;
          border-radius: 50%;
          animation: floatDot 3s ease-in-out infinite;
        }
        .photo-dot-1 {
          width: 12px; height: 12px;
          background: #4f8ef7;
          top: 20px; left: -20px;
          animation-delay: 0s;
          box-shadow: 0 0 10px rgba(79,142,247,0.6);
        }
        .photo-dot-2 {
          width: 8px; height: 8px;
          background: #a855f7;
          bottom: 30px; left: -15px;
          animation-delay: 0.8s;
          box-shadow: 0 0 10px rgba(168,85,247,0.6);
        }
        .photo-dot-3 {
          width: 10px; height: 10px;
          background: #22d3ee;
          bottom: 10px; right: -18px;
          animation-delay: 1.5s;
          box-shadow: 0 0 10px rgba(34,211,238,0.6);
        }

        @keyframes floatDot {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }

        /* Name tag below photo */
        .photo-name-tag {
          margin-top: 22px;
          text-align: center;
        }
        .photo-name-tag h3 {
          font-size: 1.2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #4f8ef7, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }
        .photo-name-tag span {
          font-size: 0.8rem;
          color: var(--muted);
          font-family: 'Fira Code', monospace;
        }

        /* Tech stack pills */
        .tech-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 14px;
        }
        .tech-pill {
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 20px;
          font-family: 'Fira Code', monospace;
          background: var(--card);
          border: 1px solid var(--border);
          color: var(--muted);
          transition: all 0.3s ease;
        }
        .tech-pill:hover {
          border-color: #4f8ef7;
          color: #4f8ef7;
        }

        /* ─── Content Side ─── */
        .about-content p {
          color: var(--muted);
          line-height: 1.85;
          margin-bottom: 18px;
          font-size: 0.98rem;
        }

        .about-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 28px;
        }

        .about-info-item {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px 16px;
          transition: border-color 0.3s, transform 0.3s;
        }
        .about-info-item:hover {
          border-color: #4f8ef7;
          transform: translateY(-2px);
        }

        .about-info-label {
          font-size: 0.75rem;
          color: var(--muted);
          font-family: 'Fira Code', monospace;
          margin-bottom: 4px;
        }

        .about-info-value {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text);
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .about-photo-wrapper {
            align-items: center;
          }
          .photo-glow-ring {
            width: 240px;
            height: 240px;
          }
          .about-info {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="about section-alt" id="about">
        <div className="section-inner">
          <div className="section-tag reveal">// about me</div>
          <div className="about-grid">

            {/* ── Photo Column ── */}
            <div className="about-photo-wrapper reveal">

              {/* Gradient ring + photo */}
              <div style={{ position: 'relative' }}>
                <div className="photo-glow-ring">
                  <div className="photo-inner-ring">
                    <div className="photo-circle">
                      {myPhoto ? (
                        <img src={myPhoto} alt="Amir Hamza" />
                      ) : (
                        <div className="photo-placeholder">
                          <span className="avatar-icon">🧑‍💻</span>
                          <p>photo.jpg<br/>import করুন</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="photo-badge">✦ Full Stack Dev</div>

                {/* Floating dots */}
                <div className="photo-dot photo-dot-1"></div>
                <div className="photo-dot photo-dot-2"></div>
                <div className="photo-dot photo-dot-3"></div>
              </div>

              {/* Name tag */}
              <div className="photo-name-tag">
                <h3>Amir Hamza</h3>
                <span>// React · Node.js · MongoDB</span>
              </div>

              {/* Tech pills */}
              <div className="tech-pills">
                {['React', 'Next.js', 'Node.js', 'MongoDB', 'AI'].map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>

            </div>

            {/* ── Content Column ── */}
            <div className="about-content">
              <h2 className="section-title reveal">
                Who I <span>Am</span>
              </h2>
              <p className="reveal">
                আমি <strong>Amir Hamza</strong>, একজন passionate Full Stack Web Developer। Modern web technologies ব্যবহার করে beautiful, fast ও functional websites তৈরি করি।
              </p>
              <p className="reveal">
                আমি React, Next.js, Node.js, MongoDB সহ AI integration নিয়ে কাজ করি। Client এর vision কে real product এ রূপ দেওয়াই আমার লক্ষ্য।
              </p>
              <p className="reveal">
                Currently Diploma in Computer Science & Technology (CST) পড়ছি এবং একই সাথে real-world projects এ কাজ করছি।
              </p>

              <div className="about-info">
                <div className="about-info-item reveal stagger-1">
                  <div className="about-info-label">// location</div>
                  <div className="about-info-value">Bangladesh 🇧🇩</div>
                </div>
                <div className="about-info-item reveal stagger-2">
                  <div className="about-info-label">// availability</div>
                  <div className="about-info-value" style={{color:'#22c55e'}}>● Available</div>
                </div>
                <div className="about-info-item reveal stagger-3">
                  <div className="about-info-label">// experience</div>
                  <div className="about-info-value">2+ Years</div>
                </div>
                <div className="about-info-item reveal stagger-4">
                  <div className="about-info-label">// language</div>
                  <div className="about-info-value">Bangla, English</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;