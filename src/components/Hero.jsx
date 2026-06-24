import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [typed, setTyped] = useState('');
  const roles = ['Full Stack Developer', 'React Developer', 'Next.js Expert', 'AI Integrator'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setTyped(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 60 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 5%;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero::after {
          content: '';
          position: absolute;
          bottom: -150px;
          left: -150px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          padding-top: 80px;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(79,142,247,0.1);
          border: 1px solid rgba(79,142,247,0.3);
          color: var(--blue);
          padding: 6px 16px;
          border-radius: 20px;
          font-family: 'Fira Code', monospace;
          font-size: 0.82rem;
          margin-bottom: 24px;
        }
        .hero h1 {
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .hero h1 .name {
          color: var(--cyan);
        }
        .hero-role {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-family: 'Fira Code', monospace;
          color: var(--blue);
          margin-bottom: 20px;
          min-height: 2.2rem;
        }
        .hero-role .cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background: var(--cyan);
          margin-left: 3px;
          vertical-align: middle;
          animation: blink 0.8s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-sub {
          color: var(--muted);
          font-size: 1.05rem;
          max-width: 540px;
          line-height: 1.8;
          margin-bottom: 36px;
        }
        .hero-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }
        .hero-stats {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }
        .stat {
          display: flex;
          flex-direction: column;
        }
        .stat-num {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--cyan);
          line-height: 1;
        }
        .stat-label {
          color: var(--muted);
          font-size: 0.82rem;
          margin-top: 6px;
        }
        .scroll-down {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: var(--muted);
          font-size: 0.78rem;
          animation: bounce 2s infinite;
        }
        .scroll-down span {
          font-size: 1.2rem;
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 768px) {
          .hero-stats { gap: 24px; }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-badge reveal">👋 Available for Freelance Work</div>
          <h1 className="reveal">
            Hi, I'm <span className="name">Amir Hamza</span>
          </h1>
          <div className="hero-role reveal">
            {typed}<span className="cursor"></span>
          </div>
          <p className="hero-sub reveal">
            I build modern, fast & responsive web applications using React, Next.js, Node.js and AI integrations — turning your ideas into real products.
          </p>
          <div className="hero-btns reveal">
            <a href="#projects" className="btn-primary">See My Work →</a>
            <a href="#contact" className="btn-outline">Hire Me</a>
          </div>
          <div className="hero-stats">
            <div className="stat reveal stagger-1">
              <span className="stat-num">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat reveal stagger-2">
              <span className="stat-num">15+</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat reveal stagger-3">
              <span className="stat-num">10+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat reveal stagger-4">
              <span className="stat-num">5★</span>
              <span className="stat-label">Fiverr Rating</span>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <span>↓</span>
          scroll
        </div>
      </section>
    </>
  );
};

export default Hero;