import React from 'react';

// Icon
import gmailIcon from '../assets/mailIcon.png';
import whatsappIcon from '../assets/whatsapp.png';
import likedinIcon from '../assets/linkedin.png';
import fiverrIcon from '../assets/fiver.png';
import freelancerIcon from '../assets/freelancer.png';
import facebookIcon from '../assets/facebook.png';



const Footer = () => {
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Education', href: '#education' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { 
      icon: <img src={gmailIcon} alt="gamil" width="30" />,
      label: 'Gmail', 
      href: 'mailto:amirhamja12675@gmail.com',
      color: '#ea4335'
      },

    { 
      icon: <img src={whatsappIcon} alt="whatsapp" width="30" />,
      label: 'WhatsApp', 
      href: 'https://wa.me/8801748985357', 
      color: '#25d366' 
    },

    { icon: <img src={likedinIcon} alt="linkedin" width="30" />,
       label: 'LinkedIn', 
       href: 'https://www.linkedin.com/in/amir-hamja-8a37853b2?utm_source=share_via&utm_content=profile&utm_medium=member_android', 
       color: '#0077b5' 
      },

    { icon: <img src={fiverrIcon} alt="fiverr" width="30" />,
      label: 'Fiverr',
      href: 'https://www.fiverr.com/techiehamza', 
      color:'#1dbf73' 
    },
    { icon: <img src={freelancerIcon} alt="freelancer" width="30" />,
      label: 'Freelancer',
      href: 'https://www.freelancer.com.bd/u/ahamza2210', 
      color:'#1dbf73' 
    },
    { icon: <img src={facebookIcon} alt="facebook" width="30" />,
      label: 'Facebook',
      href: 'https://www.facebook.com/amir.hamza.771817', 
      color:'#1877F2'
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .footer {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          padding: 60px 5% 0;
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--border);
        }
        .footer-brand .logo {
          font-family: 'Fira Code', monospace;
          color: var(--cyan);
          font-size: 1.7rem;
          font-weight: 500;
          margin-bottom: 16px;
          display: block;
        }
        .footer-brand p {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.75;
          margin-bottom: 24px;
          max-width: 280px;
        }
        .footer-social {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .social-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 8px 14px;
          text-decoration: none;
          color: var(--muted);
          font-size: 0.82rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          border-color: var(--blue);
          color: var(--text);
          transform: translateY(-3px);
        }
        .footer-col h4 {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 20px;
          font-family: 'Fira Code', monospace;
          color: var(--cyan);
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          list-style: none;
        }
        .footer-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 0.88rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .footer-links a::before {
          content: '→';
          font-size: 0.75rem;
          color: var(--border);
          transition: color 0.2s ease;
        }
        .footer-links a:hover {
          color: var(--cyan);
          padding-left: 4px;
        }
        .footer-links a:hover::before {
          color: var(--cyan);
        }
        .footer-status {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px 16px;
          margin-bottom: 14px;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse 2s infinite;
          flex-shrink: 0;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .status-text {
          font-size: 0.85rem;
          color: var(--text);
          font-weight: 500;
        }
        .status-sub {
          font-size: 0.75rem;
          color: var(--muted);
          margin-top: 2px;
        }
        .footer-hire {
          background: linear-gradient(135deg, rgba(79,142,247,0.12), rgba(0,229,255,0.06));
          border: 1px solid rgba(79,142,247,0.25);
          border-radius: 10px;
          padding: 14px 16px;
          text-align: center;
        }
        .footer-hire p {
          color: var(--muted);
          font-size: 0.8rem;
          margin-bottom: 10px;
        }
        .footer-hire a {
          background: var(--blue);
          color: #fff;
          padding: 8px 20px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .footer-hire a:hover {
          opacity: 0.88;
          transform: translateY(-2px);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-copy {
          color: var(--muted);
          font-size: 0.82rem;
        }
        .footer-copy span {
          color: var(--cyan);
          font-family: 'Fira Code', monospace;
        }
        .footer-built {
          color: var(--muted);
          font-size: 0.78rem;
          font-family: 'Fira Code', monospace;
        }
        .back-to-top {
          background: var(--card);
          border: 1px solid var(--border);
          color: var(--muted);
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .back-to-top:hover {
          border-color: var(--blue);
          color: var(--blue);
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">

            {/* Brand */}
            <div className="footer-brand">
              <span className="logo">&lt;AH/&gt;</span>
              <p>
                Full Stack Web Developer from Bangladesh 🇧🇩. Building modern, fast & beautiful websites that help businesses grow.
              </p>
              <div className="footer-social">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    style={{ '--hover-color': s.color }}
                  >
                    <span>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>// quick links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status & Hire */}
            <div className="footer-col">
              <h4>// availability</h4>
              <div className="footer-status">
                <div className="status-dot"></div>
                <div>
                  <div className="status-text">Available for Work</div>
                  <div className="status-sub">Open to new projects</div>
                </div>
              </div>
              <div className="footer-hire">
                <p>Have a project in mind?</p>
                <a href="#contact">Let's Talk 🚀</a>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <div className="footer-copy">
              © 2025 <span>Amir Hamza</span>. All rights reserved.
            </div>
            <div className="footer-built">
              Built with ⚛️ React + ❤️
            </div>
            <button className="back-to-top" onClick={scrollToTop} title="Back to top">
              ↑
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;