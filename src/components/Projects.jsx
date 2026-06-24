import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    emoji: '🌍',
    tag: 'React + Firebase',
    category: 'React',
    title: 'FIFA World Cup 2026 Live Score',
    desc: 'Real-time score, schedule & streaming guide for football fans. Built with Firebase Realtime DB + Node.js backend proxy.',
    live: 'https://worldcup2026-g8he.onrender.com',
    github: 'https://github.com/amirhamja55880/FIFA-world-cup-2026-repo',
  },
  {
    id: 2,
    emoji: '🛒',
    tag: 'Next.js + MongoDB',
    category: 'Next.js',
    title: 'E-Commerce Platform',
    desc: 'Full-stack eCommerce site with product management, cart, payment gateway integration and admin panel.',
    live: '#',
    github: '#',
  },
  {
    id: 3,
    emoji: '🤖',
    tag: 'AI + Node.js',
    category: 'AI',
    title: 'AI Chat Application',
    desc: 'Intelligent chatbot with OpenAI API integration, real-time messaging and conversation history.',
    live: '#',
    github: '#',
  },
  {
    id: 4,
    emoji: '📋',
    tag: 'React + Express',
    category: 'React',
    title: 'Task Management App',
    desc: 'Full-stack task manager with drag & drop, team collaboration, deadlines and progress tracking.',
    live: '#',
    github: '#',
  },
  {
    id: 5,
    emoji: '🏥',
    tag: 'Next.js + MongoDB',
    category: 'Next.js',
    title: 'Doctor Appointment System',
    desc: 'Online appointment booking system for clinics with doctor profiles, scheduling and notifications.',
    live: '#',
    github: '#',
  },
  {
    id: 6,
    emoji: '📰',
    tag: 'React + Node.js',
    category: 'React',
    title: 'News Portal',
    desc: 'Dynamic news website with category filters, search, admin panel for publishing articles.',
    live: '#',
    github: '#',
  },
];

const filters = ['All', 'React', 'Next.js', 'AI'];

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
          box-shadow: 0 12px 32px rgba(79,142,247,0.1);
        }
        .project-img {
          height: 180px;
          background: linear-gradient(135deg, var(--bg), var(--bg2));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          border-bottom: 1px solid var(--border);
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
        }
        .project-links a:hover {
          background: rgba(79,142,247,0.12);
          transform: translateY(-2px);
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
                className={`filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className={`project-card reveal stagger-${i + 1}`}
              >
                <div className="project-img">{project.emoji}</div>
                <div className="project-body">
                  <div className="project-tag">{project.tag}</div>
                  <div className="project-title">{project.title}</div>
                  <div className="project-desc">{project.desc}</div>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      🔗 Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
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