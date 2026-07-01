import React, { useState } from 'react';

const Certificates = () => {
  const [certs] = useState([
    {
      id: 1,
      name: 'Artificial Intelligence',
      issuer: 'BRACK',
      year: '2025',
      image: '/projects/AI sartificakte.jpeg',  ///projects/imgs.jpeg
    },
    // {
    //   id: 2,
    //   name: 'Node.js & Express Bootcamp',
    //   issuer: 'Coursera',
    //   year: '2024',
    //   image: null,
    // },
    // {
    //   id: 3,
    //   name: 'Next.js Full Stack Development',
    //   issuer: 'freeCodeCamp',
    //   year: '2025',
    //   image: null,
    // },
  ]);

  const [lightbox, setLightbox] = useState(null); // { image, name }

  const openLightbox = (cert) => {
    setLightbox(cert);
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <>
      <style>{`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        .cert-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
        }
        .cert-card:hover {
          border-color: var(--blue);
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(79,142,247,0.15);
        }
        .cert-image {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-bottom: 1px solid var(--border);
          transition: transform 0.3s ease;
        }
        .cert-card:hover .cert-image {
          transform: scale(1.03);
        }
        .cert-image-placeholder {
          width: 100%;
          height: 160px;
          background: linear-gradient(135deg, var(--bg), var(--bg2));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          border-bottom: 1px solid var(--border);
          transition: transform 0.3s ease;
        }
        .cert-card:hover .cert-image-placeholder {
          transform: scale(1.05);
        }
        .cert-view-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 160px;
          background: rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-size: 0.85rem;
          color: #fff;
          gap: 6px;
          font-family: 'Fira Code', monospace;
          letter-spacing: 0.5px;
        }
        .cert-card:hover .cert-view-overlay {
          opacity: 1;
        }
        .cert-body {
          padding: 18px 20px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .cert-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
        }
        .cert-name {
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 4px;
          color: var(--text);
        }
        .cert-issuer {
          color: var(--cyan);
          font-size: 0.78rem;
          font-family: 'Fira Code', monospace;
          margin-bottom: 3px;
        }
        .cert-year {
          color: var(--muted);
          font-size: 0.78rem;
        }

        /* ── Lightbox ── */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(6px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: lbFadeIn 0.25s ease;
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .lightbox-box {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          max-width: 780px;
          width: 100%;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
          animation: lbSlideUp 0.28s ease;
          position: relative;
        }
        @keyframes lbSlideUp {
          from { transform: translateY(30px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .lightbox-img {
          width: 100%;
          max-height: 480px;
          object-fit: contain;
          background: #0a0f1a;
          display: block;
        }
        .lightbox-placeholder {
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, var(--bg), var(--bg2));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
        }
        .lightbox-footer {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .lightbox-info .lb-name {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text);
          margin-bottom: 4px;
        }
        .lightbox-info .lb-issuer {
          color: var(--cyan);
          font-family: 'Fira Code', monospace;
          font-size: 0.82rem;
        }
        .lightbox-info .lb-year {
          color: var(--muted);
          font-size: 0.82rem;
          margin-top: 2px;
        }
        .lightbox-close {
          background: rgba(239,68,68,0.12);
          border: 1px solid rgba(239,68,68,0.3);
          color: #ef4444;
          border-radius: 8px;
          padding: 8px 18px;
          font-size: 0.85rem;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .lightbox-close:hover {
          background: rgba(239,68,68,0.25);
        }

        @media (max-width: 768px) {
          .certs-grid {
            grid-template-columns: 1fr;
          }
          .lightbox-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section id="certificates">
        <div className="section-inner">
          <div className="section-tag reveal">// certificates</div>
          <h2 className="section-title reveal">My <span>Certificates</span></h2>

          <div className="certs-grid">
            {certs.map((cert, i) => (
              <div
                key={cert.id}
                className={`cert-card reveal stagger-${i + 1}`}
                onClick={() => openLightbox(cert)}
              >
                {cert.image ? (
                  <img src={cert.image} alt={cert.name} className="cert-image" />
                ) : (
                  <div className="cert-image-placeholder">🏆</div>
                )}
                <div className="cert-view-overlay">
                  🔍 View Certificate
                </div>
                <div className="cert-body">
                  <div className="cert-icon">📜</div>
                  <div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-year">📅 {cert.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            {lightbox.image ? (
              <img src={lightbox.image} alt={lightbox.name} className="lightbox-img" />
            ) : (
              <div className="lightbox-placeholder">🏆</div>
            )}
            <div className="lightbox-footer">
              <div className="lightbox-info">
                <div className="lb-name">{lightbox.name}</div>
                <div className="lb-issuer">{lightbox.issuer}</div>
                <div className="lb-year">📅 {lightbox.year}</div>
              </div>
              <button className="lightbox-close" onClick={closeLightbox}>✕ Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;