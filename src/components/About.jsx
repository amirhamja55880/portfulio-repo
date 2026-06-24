import React, { useState } from 'react';

const About = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

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
        .about-photo-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .about-photo {
          width: 100%;
          max-width: 320px;
          aspect-ratio: 1;
          border-radius: 20px;
          background: var(--card);
          border: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          transition: border-color 0.3s ease;
        }
        .about-photo:hover {
          border-color: var(--blue);
        }
        .about-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .about-photo .placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: var(--muted);
        }
        .about-photo .placeholder span {
          font-size: 4rem;
        }
        .about-photo .placeholder p {
          font-size: 0.85rem;
          text-align: center;
        }
        .photo-upload-btn {
          background: var(--card);
          border: 1px dashed var(--border);
          color: var(--blue);
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.88rem;
          font-family: inherit;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .photo-upload-btn:hover {
          border-color: var(--blue);
          background: rgba(79,142,247,0.08);
        }
        .photo-upload-input {
          display: none;
        }
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
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .about-photo-wrapper {
            align-items: center;
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

            {/* Photo */}
            <div className="about-photo-wrapper reveal">
              <div className="about-photo">
                {photo ? (
                  <img src={photo} alt="Amir Hamza" />
                ) : (
                  <div className="placeholder">
                    <span>🧑‍💻</span>
                    <p>Your photo<br/>will appear here</p>
                  </div>
                )}
              </div>
              <label className="photo-upload-btn">
                📷 {photo ? 'Change Photo' : 'Upload Your Photo'}
                <input
                  type="file"
                  accept="image/*"
                  className="photo-upload-input"
                  onChange={handlePhotoChange}
                />
              </label>
            </div>

            {/* Content */}
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