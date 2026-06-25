import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Education', href: '#education' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0 5%;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background: rgba(10, 15, 30, 0.92);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border);
        }
        body.light .navbar.scrolled {
          background: rgba(240, 244, 255, 0.92);
        }
        .nav-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }
        .nav-logo {
          font-family: 'Fira Code', monospace;
          color: var(--cyan);
          font-size: 2rem;
          font-weight: 500;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 28px;
          list-style: none;
        }
        .nav-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--cyan);
          transition: width 0.3s ease;
        }
        .nav-links a:hover {
          color: var(--cyan);
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .theme-toggle {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 50px;
          padding: 6px 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text);
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .theme-toggle:hover {
          border-color: var(--blue);
          color: var(--blue);
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 68px;
          left: 0;
          right: 0;
          background: var(--bg2);
          border-bottom: 1px solid var(--border);
          padding: 20px 5%;
          flex-direction: column;
          gap: 4px;
          z-index: 999;
        }
        .mobile-menu.open {
          display: flex;
        }
        .mobile-menu a {
          color: var(--muted);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
          transition: color 0.2s ease;
        }
        .mobile-menu a:hover {
          color: var(--cyan);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo">&lt;AH/&gt;</a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;