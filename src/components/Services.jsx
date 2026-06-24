import React from 'react';

const services = [
  {
    icon: '🖥️',
    title: 'Website Development',
    desc: 'Full-stack web apps with React, Next.js & Node.js. Fast, responsive & SEO friendly websites.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Modern, clean and conversion-focused designs using Tailwind CSS. Pixel-perfect implementation.',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Site',
    desc: 'Complete online store with product management, shopping cart & payment gateway integration.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    desc: 'Add AI features to your website — chatbot, content generation, smart automation & more.',
  },
  {
    icon: '📱',
    title: 'Landing Page',
    desc: 'High-converting landing pages for businesses, products & campaigns with fast load times.',
  },
  {
    icon: '🔧',
    title: 'Website Maintenance',
    desc: 'Bug fixes, updates, performance optimization and security improvements for existing websites.',
  },
];

const Services = () => {
  return (
    <>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        .service-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 30px 26px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--cyan));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .service-card:hover {
          border-color: var(--blue);
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(79,142,247,0.1);
        }
        .service-card:hover::before {
          transform: scaleX(1);
        }
        .service-icon {
          font-size: 2.2rem;
          margin-bottom: 18px;
          display: block;
        }
        .service-title {
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 12px;
          color: var(--text);
        }
        .service-desc {
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.7;
        }
        .services-cta {
          margin-top: 48px;
          text-align: center;
          padding: 40px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
        }
        .services-cta h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .services-cta p {
          color: var(--muted);
          margin-bottom: 24px;
          font-size: 0.95rem;
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="services">
        <div className="section-inner">
          <div className="section-tag reveal">// services</div>
          <h2 className="section-title reveal">What I <span>Offer</span></h2>

          <div className="services-grid">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`service-card reveal stagger-${i + 1}`}
              >
                <span className="service-icon">{service.icon}</span>
                <div className="service-title">{service.title}</div>
                <div className="service-desc">{service.desc}</div>
              </div>
            ))}
          </div>

          <div className="services-cta reveal">
            <h3>Have a project in mind? 💡</h3>
            <p>Let's discuss your requirements and build something amazing together.</p>
            <a href="#contact" className="btn-primary">Get a Free Quote →</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;