import React from 'react';

const Skills = () => {
  const mainSkills = [
    { icon: '🌐', name: 'HTML5' },
    { icon: '🎨', name: 'CSS3' },
    { icon: '⚡', name: 'JavaScript' },
    { icon: '⚛️', name: 'React' },
    { icon: '🔷', name: 'TypeScript' },
    { icon: '▲', name: 'Next.js' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🚂', name: 'Express.js' },
    { icon: '🍃', name: 'MongoDB' },
    { icon: '💨', name: 'Tailwind CSS' },
    { icon: '🤖', name: 'AI Integration' },
  ];

  const otherSkills = [
    { icon: '📝', name: 'MS Word' },
    { icon: '📊', name: 'Excel' },
    { icon: '📊', name: 'PowerPoint' },
    { icon: '⌨️', name: 'Fast Typing' },
  ];

  return (
    <>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 16px;
        }
        .skill-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 22px 14px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: default;
        }
        .skill-card:hover {
          border-color: var(--blue);
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(79,142,247,0.12);
        }
        .skill-icon {
          font-size: 2rem;
          margin-bottom: 10px;
          display: block;
        }
        .skill-name {
          font-size: 0.82rem;
          color: var(--text);
          font-weight: 500;
        }
        .skills-divider {
          margin: 40px 0 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .skills-divider span {
          color: var(--cyan);
          font-family: 'Fira Code', monospace;
          font-size: 0.82rem;
          white-space: nowrap;
        }
        .skills-divider::before,
        .skills-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }
      `}</style>

      <section id="skills">
        <div className="section-inner">
          <div className="section-tag reveal">// skills</div>
          <h2 className="section-title reveal">My <span>Skills</span></h2>

          <div className="skills-grid">
            {mainSkills.map((skill, i) => (
              <div
                key={skill.name}
                className={`skill-card reveal stagger-${i + 1}`}
              >
                <span className="skill-icon">{skill.icon}</span>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>

          <div className="skills-divider reveal">
            <span>// also proficient in</span>
          </div>

          <div className="skills-grid">
            {otherSkills.map((skill, i) => (
              <div
                key={skill.name}
                className={`skill-card reveal stagger-${i + 1}`}
              >
                <span className="skill-icon">{skill.icon}</span>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;