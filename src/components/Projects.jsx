import React, { useState } from 'react';

// ── Project data ──────────────────────────────────────────────
// image field এ আপনার project এর screenshot path দিন
// যেমন: image: '/projects/worldcup.png'
// অথবা online URL: image: 'https://i.imgur.com/xxx.png'
// image না থাকলে emoji দেখাবে automatically
const projects = [
  {
    id: 1,
    image: '/projects/BoidorBD.png', // 👈 এখানে: '/projects/worldcup.png' দিন
    emoji: '🌍',
    tag: 'React + Firebase',
    category: 'React',
    title: 'BoidorBD Educational Website',
    desc: 'Reading books, Suggestion,Scholarship guidelines, Book orde system and bulding a full website. ;',
    live: 'https://boidorbd.vercel.app/',
    github: 'https://github.com/amirhamja55880/boidorbd',
  },
  {
    id: 2,
    image: '/projects/Mangobd.png', // 👈 এখানে: '/projects/ecommerce.png' দিন
    emoji: '🛒',
    tag: 'Next.js + MongoDB',
    category: 'Next.js',
    title: 'E-Commerce Platform',
    desc: 'Full-stack eCommerce site with product management, payment gateway integration and admin panel.',
    live: 'https://fresh-mangobd-repo.onrender.com',
    github: 'https://github.com/amirhamja55880/fresh-mangoBD-repo',
  },
  {
    id: 3,
    image: '/projects/Pyment sestem.png',
    emoji: '🤖',
    tag: 'Next.js + Node.js',
    category: 'AI',
    title: 'Payment gateway system',
    desc: 'Money transfer platform Demo',
    live: 'https://naimislamtor.github.io/payment-app/',
    github: 'https://github.com/naimislamtor/payment-app',
  },
  // {
  //   id: 4,
  //   image: null,
  //   emoji: '📋',
  //   tag: 'React + Express',
  //   category: 'React',
  //   title: 'Task Management App',
  //   desc: 'Full-stack task manager with drag & drop, team collaboration, deadlines and progress tracking.',
  //   live: '#',
  //   github: '#',
  // },
  // {
  //   id: 5,
  //   image: null,
  //   emoji: '🏥',
  //   tag: 'Next.js + MongoDB',
  //   category: 'Next.js',
  //   title: 'Doctor Appointment System',
  //   desc: 'Online appointment booking system for clinics with doctor profiles, scheduling and notifications.',
  //   live: '#',
  //   github: '#',
  // },
  // {
  //   id: 6,
  //   image: null,
  //   emoji: '📰',
  //   tag: 'React + Node.js',
  //   category: 'React',
  //   title: 'News Portal',
  //   desc: 'Dynamic news website with category filters, search, admin panel for publishing articles.',
  //   live: '#',
  //   github: '#',
  // },
];

const filters = ['All', 'React', 'Next.js'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      <style>{`
        .projects {
          background: var(--bg2);
        }
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
        .filter-btn:hover {
          border-color: var(--blue);
          color: var(--blue);
        }
        .filter-btn.active {
          background: var(--blue);
          border-color: var(--blue);
          color: #fff;
        }
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
        }
        .project-card:hover {
          border-color: var(--blue);
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(79,142,247,0.12);
        }

        /* ── Cover image area ── */
        .project-img {
          height: 200px;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
          background: linear-gradient(135deg, var(--bg), var(--bg2));
        }
        /* Real screenshot */
        .project-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-img img {
          transform: scale(1.05);
        }
        /* Emoji fallback */
        .project-img-emoji {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
        }
        /* Category badge on image */
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
        }
        .project-tag {
          font-size: 0.75rem;
          color: var(--cyan);
          font-family: 'Fira Code', monospace;
          margin-bottom: 8px;
        }
        .project-title {
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 10px;
          color: var(--text);
        }
        .project-desc {
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.65;
          margin-bottom: 18px;
        }
        .project-links {
          display: flex;
          gap: 10px;
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
        /* Disabled link style when # */
        .project-links a.disabled-link {
          opacity: 0.35;
          cursor: not-allowed;
          pointer-events: none;
        }

        /* Empty state */
        .projects-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: var(--muted);
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="projects section-alt" id="projects">
        <div className="section-inner">
          <div className="section-tag reveal">// projects</div>
          <h2 className="section-title reveal">My <span>Projects</span></h2>

          {/* Filter Buttons */}
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

          {/* Projects Grid */}
          <div className="projects-grid">
            {filtered.length === 0 && (
              <div className="projects-empty">// no projects found</div>
            )}
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="project-card"
              >
                {/* Cover Image */}
                <div className="project-img">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-img-emoji">{project.emoji}</div>
                  )}
                  <span className="project-img-badge">{project.tag}</span>
                </div>

                <div className="project-body">
                  <div className="project-title">{project.title}</div>
                  <div className="project-desc">{project.desc}</div>
                  <div className="project-links">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className={project.live === '#' ? 'disabled-link' : ''}
                    >
                      🔗 Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={project.github === '#' ? 'disabled-link' : ''}
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
    </>
  );
};

export default Projects;