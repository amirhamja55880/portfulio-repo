import React, { useState } from 'react';

const Certificates = () => {
  const [certs, setCerts] = useState([
    {
      id: 1,
      name: 'React — The Complete Guide',
      issuer: 'Udemy',
      year: '2024',
      image: null,
    },
    {
      id: 2,
      name: 'Node.js & Express Bootcamp',
      issuer: 'Coursera',
      year: '2024',
      image: null,
    },
    {
      id: 3,
      name: 'Next.js Full Stack Development',
      issuer: 'freeCodeCamp',
      year: '2025',
      image: null,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newCert, setNewCert] = useState({ name: '', issuer: '', year: '', image: null });
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCert((prev) => ({ ...prev, image: reader.result }));
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = () => {
    if (!newCert.name || !newCert.issuer || !newCert.year) return;
    setCerts((prev) => [
      ...prev,
      { id: Date.now(), ...newCert },
    ]);
    setNewCert({ name: '', issuer: '', year: '', image: null });
    setPreview(null);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setCerts((prev) => prev.filter((c) => c.id !== id));
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
        }
        .cert-card:hover {
          border-color: var(--blue);
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(79,142,247,0.1);
        }
        .cert-image {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-bottom: 1px solid var(--border);
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
        .cert-delete {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(239,68,68,0.15);
          border: 1px solid rgba(239,68,68,0.3);
          color: #ef4444;
          border-radius: 6px;
          padding: 4px 10px;
          font-size: 0.75rem;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s ease;
          opacity: 0;
        }
        .cert-card:hover .cert-delete {
          opacity: 1;
        }
        .cert-add-btn {
          width: 100%;
          border: 2px dashed var(--border);
          background: transparent;
          border-radius: 14px;
          padding: 28px;
          text-align: center;
          color: var(--muted);
          font-size: 0.92rem;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .cert-add-btn:hover {
          border-color: var(--blue);
          color: var(--blue);
          background: rgba(79,142,247,0.05);
        }
        .cert-form {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 28px;
          margin-top: 20px;
        }
        .cert-form h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--cyan);
          font-family: 'Fira Code', monospace;
        }
        .cert-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 14px;
          margin-bottom: 16px;
        }
        .cert-form input {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px 14px;
          color: var(--text);
          font-family: inherit;
          font-size: 0.88rem;
          outline: none;
          transition: border-color 0.2s ease;
          width: 100%;
        }
        .cert-form input:focus {
          border-color: var(--blue);
        }
        .cert-form input::placeholder {
          color: var(--muted);
        }
        .cert-upload-label {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--bg);
          border: 1px dashed var(--border);
          border-radius: 8px;
          padding: 10px 14px;
          color: var(--muted);
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 16px;
        }
        .cert-upload-label:hover {
          border-color: var(--blue);
          color: var(--blue);
        }
        .cert-preview {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 16px;
          border: 1px solid var(--border);
        }
        .cert-form-btns {
          display: flex;
          gap: 12px;
        }
        .btn-cancel {
          background: var(--bg);
          border: 1px solid var(--border);
          color: var(--muted);
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }
        .btn-cancel:hover {
          border-color: var(--muted);
          color: var(--text);
        }
        @media (max-width: 768px) {
          .cert-form-grid {
            grid-template-columns: 1fr;
          }
          .certs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="certificates">
        <div className="section-inner">
          <div className="section-tag reveal">// certificates</div>
          <h2 className="section-title reveal">My <span>Certificates</span></h2>

          <div className="certs-grid">
            {certs.map((cert, i) => (
              <div key={cert.id} className={`cert-card reveal stagger-${i + 1}`}>
                {cert.image ? (
                  <img src={cert.image} alt={cert.name} className="cert-image" />
                ) : (
                  <div className="cert-image-placeholder">🏆</div>
                )}
                <div className="cert-body">
                  <div className="cert-icon">📜</div>
                  <div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-year">📅 {cert.year}</div>
                  </div>
                </div>
                <button className="cert-delete" onClick={() => handleDelete(cert.id)}>
                  ✕ Remove
                </button>
              </div>
            ))}
          </div>

          {/* Add Button */}
          {!showForm && (
            <button className="cert-add-btn reveal" onClick={() => setShowForm(true)}>
              ＋ Add New Certificate
            </button>
          )}

          {/* Add Form */}
          {showForm && (
            <div className="cert-form">
              <h4>// add certificate</h4>
              <div className="cert-form-grid">
                <input
                  placeholder="Certificate Name"
                  value={newCert.name}
                  onChange={(e) => setNewCert({ ...newCert, name: e.target.value })}
                />
                <input
                  placeholder="Issuer (e.g. Udemy)"
                  value={newCert.issuer}
                  onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                />
                <input
                  placeholder="Year (e.g. 2024)"
                  value={newCert.year}
                  onChange={(e) => setNewCert({ ...newCert, year: e.target.value })}
                />
              </div>

              <label className="cert-upload-label">
                📎 Upload Certificate Image (optional)
                <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
              </label>

              {preview && <img src={preview} alt="preview" className="cert-preview" />}

              <div className="cert-form-btns">
                <button className="btn-primary" onClick={handleAdd}>Save Certificate</button>
                <button className="btn-cancel" onClick={() => { setShowForm(false); setPreview(null); }}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Certificates;