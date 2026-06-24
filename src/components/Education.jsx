import React from 'react';

const educations = [
  {
    icon: '🎓',
    degree: 'Diploma in Computer Science & Technology',
    institute: 'Polytechnic Institute',
    duration: '2023 — Running',
    status: 'Running',
    statusColor: '#22c55e',
    desc: 'Currently studying Computer Science & Technology (CST). Covering subjects like Programming, Web Development, Database Management, Networking and Software Engineering.',
  },
  {
    icon: '📚',
    degree: 'Secondary School Certificate (SSC)',
    institute: 'High School',
    duration: '2022',
    status: 'Completed',
    statusColor: '#4f8ef7',
    desc: 'Successfully completed Secondary School Certificate examination with good results.',
  },
];

const Education = () => {
  return (
    <>
      <style>{`
        .education {
          background: var(--bg2);
        }
        .education-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
        }
        .education-list::before {
          content: '';
          position: absolute;
          left: 28px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--blue), var(--cyan), transparent);
        }
        .edu-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 28px 28px 28px 72px;
          position: relative;
          transition: all 0.3s ease;
        }
        .edu-card:hover {
          border-color: var(--blue);
          transform: translateX(6px);
          box-shadow: 0 8px 28px rgba(79,142,247,0.1);
        }
        .edu-icon {
          position: absolute;
          left: -14px;
          top: 28px;
          width: 44px;
          height: 44px;
          background: var(--bg2);
          border: 2px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          transition: border-color 0.3s ease;
        }
        .edu-card:hover .edu-icon {
          border-color: var(--blue);
        }
        .edu-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 6px;
        }
        .edu-degree {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text);
        }
        .edu-status {
          font-size: 0.75rem;
          font-family: 'Fira Code', monospace;
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid;
          white-space: nowrap;
        }
        .edu-institute {
          color: var(--cyan);
          font-size: 0.88rem;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .edu-duration {
          color: var(--muted);
          font-size: 0.8rem;
          font-family: 'Fira Code', monospace;
          margin-bottom: 14px;
        }
        .edu-desc {
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .education-list::before {
            left: 20px;
          }
          .edu-card {
            padding: 22px 20px 22px 56px;
          }
          .edu-icon {
            left: -10px;
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }
        }
      `}</style>

      <section className="education section-alt" id="education">
        <div className="section-inner">
          <div className="section-tag reveal">// education</div>
          <h2 className="section-title reveal">My <span>Education</span></h2>

          <div className="education-list">
            {educations.map((edu, i) => (
              <div
                key={edu.degree}
                className={`edu-card reveal stagger-${i + 1}`}
              >
                <div className="edu-icon">{edu.icon}</div>
                <div className="edu-top">
                  <div className="edu-degree">{edu.degree}</div>
                  <span
                    className="edu-status"
                    style={{ color: edu.statusColor, borderColor: edu.statusColor }}
                  >
                    {edu.status}
                  </span>
                </div>
                <div className="edu-institute">{edu.institute}</div>
                <div className="edu-duration">📅 {edu.duration}</div>
                <div className="edu-desc">{edu.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;