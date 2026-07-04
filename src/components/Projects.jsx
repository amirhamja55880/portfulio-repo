// import React, { useState } from 'react';

// // ── Project data ──────────────────────────────────────────────
// // image field এ আপনার project এর screenshot path দিন
// // যেমন: image: '/projects/worldcup.png'
// // অথবা online URL: image: 'https://i.imgur.com/xxx.png'
// // image না থাকলে emoji দেখাবে automatically
// const projects = [
//   {
//     id: 1,
//     image: '/projects/BoidorBD.png', // 👈 এখানে: '/projects/worldcup.png' দিন
//     emoji: '🌍',
//     tag: 'React + Firebase',
//     category: 'React',
//     title: 'BoidorBD Educational Website',
//     desc: 'Reading books, Suggestion,Scholarship guidelines, Book orde system and bulding a full website. ;',
//     live: 'https://boidorbd.vercel.app/',
//     github: 'https://github.com/amirhamja55880/boidorbd',
//   },
//   {
//     id: 2,
//     image: '/projects/Mangobd.png', // 👈 এখানে: '/projects/ecommerce.png' দিন
//     emoji: '🛒',
//     tag: 'Next.js + MongoDB',
//     category: 'Next.js',
//     title: 'E-Commerce Platform',
//     desc: 'Full-stack eCommerce site with product management, payment gateway integration and admin panel.',
//     live: 'https://fresh-mangobd-repo.onrender.com',
//     github: 'https://github.com/amirhamja55880/fresh-mangoBD-repo',
//   },
//   {
//     id: 3,
//     image: '/projects/Pyment sestem.png',
//     emoji: '🤖',
//     tag: 'Next.js + Node.js',
//     category: 'AI',
//     title: 'Payment gateway system',
//     desc: 'Money transfer platform Demo',
//     live: 'https://naimislamtor.github.io/payment-app/',
//     github: 'https://github.com/naimislamtor/payment-app',
//   },
//   // {
//   //   id: 4,
//   //   image: null,
//   //   emoji: '📋',
//   //   tag: 'React + Express',
//   //   category: 'React',
//   //   title: 'Task Management App',
//   //   desc: 'Full-stack task manager with drag & drop, team collaboration, deadlines and progress tracking.',
//   //   live: '#',
//   //   github: '#',
//   // },
//   // {
//   //   id: 5,
//   //   image: null,
//   //   emoji: '🏥',
//   //   tag: 'Next.js + MongoDB',
//   //   category: 'Next.js',
//   //   title: 'Doctor Appointment System',
//   //   desc: 'Online appointment booking system for clinics with doctor profiles, scheduling and notifications.',
//   //   live: '#',
//   //   github: '#',
//   // },
//   // {
//   //   id: 6,
//   //   image: null,
//   //   emoji: '📰',
//   //   tag: 'React + Node.js',
//   //   category: 'React',
//   //   title: 'News Portal',
//   //   desc: 'Dynamic news website with category filters, search, admin panel for publishing articles.',
//   //   live: '#',
//   //   github: '#',
//   // },
// ];

// const filters = ['All', 'React', 'Next.js'];

// const Projects = () => {
//   const [active, setActive] = useState('All');

//   const filtered = active === 'All'
//     ? projects
//     : projects.filter((p) => p.category === active);

//   return (
//     <>
//       <style>{`
//         .projects {
//           background: var(--bg2);
//         }
//         .filter-btns {
//           display: flex;
//           gap: 12px;
//           flex-wrap: wrap;
//           margin-bottom: 40px;
//         }
//         .filter-btn {
//           background: var(--card);
//           border: 1px solid var(--border);
//           color: var(--muted);
//           padding: 8px 20px;
//           border-radius: 50px;
//           cursor: pointer;
//           font-size: 0.88rem;
//           font-family: inherit;
//           transition: all 0.3s ease;
//         }
//         .filter-btn:hover {
//           border-color: var(--blue);
//           color: var(--blue);
//         }
//         .filter-btn.active {
//           background: var(--blue);
//           border-color: var(--blue);
//           color: #fff;
//         }
//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//           gap: 24px;
//         }
//         .project-card {
//           background: var(--card);
//           border: 1px solid var(--border);
//           border-radius: 16px;
//           overflow: hidden;
//           transition: all 0.3s ease;
//         }
//         .project-card:hover {
//           border-color: var(--blue);
//           transform: translateY(-6px);
//           box-shadow: 0 12px 32px rgba(79,142,247,0.12);
//         }

//         /* ── Cover image area ── */
//         .project-img {
//           height: 200px;
//           position: relative;
//           overflow: hidden;
//           border-bottom: 1px solid var(--border);
//           background: linear-gradient(135deg, var(--bg), var(--bg2));
//         }
//         /* Real screenshot */
//         .project-img img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.4s ease;
//         }
//         .project-card:hover .project-img img {
//           transform: scale(1.05);
//         }
//         /* Emoji fallback */
//         .project-img-emoji {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 3.5rem;
//         }
//         /* Category badge on image */
//         .project-img-badge {
//           position: absolute;
//           top: 12px;
//           left: 12px;
//           background: rgba(10,15,30,0.75);
//           backdrop-filter: blur(6px);
//           border: 1px solid var(--border);
//           color: var(--cyan);
//           font-size: 0.7rem;
//           font-family: 'Fira Code', monospace;
//           padding: 4px 10px;
//           border-radius: 20px;
//         }

//         .project-body {
//           padding: 22px;
//         }
//         .project-tag {
//           font-size: 0.75rem;
//           color: var(--cyan);
//           font-family: 'Fira Code', monospace;
//           margin-bottom: 8px;
//         }
//         .project-title {
//           font-weight: 700;
//           font-size: 1.05rem;
//           margin-bottom: 10px;
//           color: var(--text);
//         }
//         .project-desc {
//           color: var(--muted);
//           font-size: 0.88rem;
//           line-height: 1.65;
//           margin-bottom: 18px;
//         }
//         .project-links {
//           display: flex;
//           gap: 10px;
//         }
//         .project-links a {
//           font-size: 0.82rem;
//           color: var(--blue);
//           border: 1px solid rgba(79,142,247,0.35);
//           padding: 7px 16px;
//           border-radius: 7px;
//           transition: all 0.2s ease;
//           font-weight: 500;
//           text-decoration: none;
//         }
//         .project-links a:hover {
//           background: rgba(79,142,247,0.12);
//           transform: translateY(-2px);
//         }
//         /* Disabled link style when # */
//         .project-links a.disabled-link {
//           opacity: 0.35;
//           cursor: not-allowed;
//           pointer-events: none;
//         }

//         /* Empty state */
//         .projects-empty {
//           grid-column: 1 / -1;
//           text-align: center;
//           padding: 60px 20px;
//           color: var(--muted);
//           font-family: 'Fira Code', monospace;
//           font-size: 0.9rem;
//         }

//         @media (max-width: 768px) {
//           .projects-grid {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>

//       <section className="projects section-alt" id="projects">
//         <div className="section-inner">
//           <div className="section-tag reveal">// projects</div>
//           <h2 className="section-title reveal">My <span>Projects</span></h2>

//           {/* Filter Buttons */}
//           <div className="filter-btns reveal">
//             {filters.map((f) => (
//               <button
//                 key={f}
//                 className={`filter-btn${active === f ? ' active' : ''}`}
//                 onClick={() => setActive(f)}
//               >
//                 {f}
//               </button>
//             ))}
//           </div>

//           {/* Projects Grid */}
//           <div className="projects-grid">
//             {filtered.length === 0 && (
//               <div className="projects-empty">// no projects found</div>
//             )}
//             {filtered.map((project, i) => (
//               <div
//                 key={project.id}
//                 className="project-card"
//               >
//                 {/* Cover Image */}
//                 <div className="project-img">
//                   {project.image ? (
//                     <img src={project.image} alt={project.title} />
//                   ) : (
//                     <div className="project-img-emoji">{project.emoji}</div>
//                   )}
//                   <span className="project-img-badge">{project.tag}</span>
//                 </div>

//                 <div className="project-body">
//                   <div className="project-title">{project.title}</div>
//                   <div className="project-desc">{project.desc}</div>
//                   <div className="project-links">
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noreferrer"
//                       className={project.live === '#' ? 'disabled-link' : ''}
//                     >
//                       🔗 Live Demo
//                     </a>
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noreferrer"
//                       className={project.github === '#' ? 'disabled-link' : ''}
//                     >
//                       💻 GitHub
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const filters = ['All', 'React', 'Next.js', 'Node.js', 'Other'];

const Projects = () => {
  const [active, setActive] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snap = await getDocs(collection(db, 'projects'));
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setProjects(data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  // Close modal on outside click
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) setModal(null);
  };

  return (
    <>
      <style>{`
        .projects { background: var(--bg2); }
        .filter-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .filter-btn {
          background: var(--card);
          border: 1px solid var(--border);
          color: var(--muted);
          padding: 8px 20px;
          border-radius: 50px;
          cursor: pointer;
          font-size: 0.88rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .filter-btn:hover { border-color: var(--blue); color: var(--blue); }
        .filter-btn.active { background: var(--blue); border-color: var(--blue); color: #fff; }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }
        .project-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          border-color: var(--blue);
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(79,142,247,0.12);
        }
        .project-img {
          height: 200px;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
          background: linear-gradient(135deg, var(--bg), var(--bg2));
          flex-shrink: 0;
        }
        .project-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-img img { transform: scale(1.05); }
        .project-img-emoji {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
        }
        .project-img-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(10,15,30,0.75);
          backdrop-filter: blur(6px);
          border: 1px solid var(--border);
          color: var(--cyan);
          font-size: 0.7rem;
          font-family: 'Fira Code', monospace;
          padding: 4px 10px;
          border-radius: 20px;
        }
        .project-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .project-title {
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 10px;
          color: var(--text);
        }
        /* 2 line clamp */
        .project-desc {
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.65;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .read-more-btn {
          background: none;
          border: none;
          color: var(--blue);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
          margin-bottom: 16px;
          text-align: left;
          transition: opacity 0.2s;
        }
        .read-more-btn:hover { opacity: 0.75; }
        .project-links {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }
        .project-links a {
          font-size: 0.82rem;
          color: var(--blue);
          border: 1px solid rgba(79,142,247,0.35);
          padding: 7px 16px;
          border-radius: 7px;
          transition: all 0.2s ease;
          font-weight: 500;
          text-decoration: none;
        }
        .project-links a:hover {
          background: rgba(79,142,247,0.12);
          transform: translateY(-2px);
        }
        .project-links a.disabled-link {
          opacity: 0.35;
          cursor: not-allowed;
          pointer-events: none;
        }
        .projects-loading, .projects-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: var(--muted);
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
        }

        /* ── Modal ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(6px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .modal-box {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 20px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.3s ease;
          position: relative;
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        .modal-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: 20px 20px 0 0;
        }
        .modal-img-emoji {
          width: 100%;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          background: linear-gradient(135deg, var(--bg), var(--bg2));
          border-radius: 20px 20px 0 0;
        }
        .modal-close {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(0,0,0,0.5);
          border: none;
          color: #fff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .modal-close:hover { background: rgba(239,68,68,0.7); }
        .modal-body { padding: 28px; }
        .modal-tag {
          font-size: 0.75rem;
          color: var(--cyan);
          font-family: 'Fira Code', monospace;
          margin-bottom: 8px;
        }
        .modal-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--text);
        }
        .modal-desc {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 28px;
  word-break: break-word;
  white-space: normal;
  overflow-wrap: break-word;
}
        .modal-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .modal-links a {
          font-size: 0.9rem;
          color: #fff;
          background: var(--blue);
          padding: 10px 22px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s;
        }
        .modal-links a:hover { opacity: 0.85; }
        .modal-links a.github-btn {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text);
        }
        .modal-links a.github-btn:hover { border-color: var(--blue); color: var(--blue); }
        .modal-home-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: 1px solid var(--border);
          color: var(--muted);
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.88rem;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
          width: fit-content;
        }
        .modal-home-btn:hover { border-color: var(--cyan); color: var(--cyan); }

        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
          .modal-box { max-height: 95vh; }
        }
      `}</style>

      <section className="projects section-alt" id="projects">
        <div className="section-inner">
          <div className="section-tag reveal">// projects</div>
          <h2 className="section-title reveal">My <span>Projects</span></h2>

          <div className="filter-btns reveal">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn${active === f ? ' active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {loading && <div className="projects-loading">// loading projects...</div>}
            {!loading && filtered.length === 0 && (
              <div className="projects-empty">// no projects found</div>
            )}
            {!loading && filtered.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-img">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-img-emoji">{project.emoji || '💻'}</div>
                  )}
                  <span className="project-img-badge">{project.tag}</span>
                </div>
                <div className="project-body">
                  <div className="project-title">{project.title}</div>
                  <div className="project-desc">{project.desc}</div>
                  <button className="read-more-btn" onClick={() => setModal(project)}>
                    Read More →
                  </button>
                  <div className="project-links">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className={!project.live || project.live === '#' ? 'disabled-link' : ''}
                    >
                      🔗 Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={!project.github || project.github === '#' ? 'disabled-link' : ''}
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {modal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-box">
            <button className="modal-close" onClick={() => setModal(null)}>✕</button>
            {modal.image ? (
              <img src={modal.image} alt={modal.title} className="modal-img" />
            ) : (
              <div className="modal-img-emoji">{modal.emoji || '💻'}</div>
            )}
            <div className="modal-body">
              <div className="modal-tag">{modal.tag} · {modal.category}</div>
              <div className="modal-title">{modal.title}</div>
              <div className="modal-desc">{modal.desc}</div>
              <div className="modal-links">
                {modal.live && modal.live !== '#' && (
                  <a href={modal.live} target="_blank" rel="noreferrer">🔗 Live Demo</a>
                )}
                {modal.github && modal.github !== '#' && (
                  <a href={modal.github} target="_blank" rel="noreferrer" className="github-btn">💻 GitHub</a>
                )}
              </div>
              <button className="modal-home-btn" onClick={() => { setModal(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                ← Home এ ফিরে যান
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;