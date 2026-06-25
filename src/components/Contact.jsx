import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// Icon
import gmailIcon from '../assets/mailIcon.png';
import whatsappIcon from '../assets/whatsapp.png';
import likedinIcon from '../assets/linkedin.png';
import fiverrIcon from '../assets/fiver.png';



// ✅ এখানে তোমার EmailJS info বসাও
const EMAILJS_SERVICE_ID  = 'service_apc105f';   // EmailJS → Email Services
const EMAILJS_TEMPLATE_ID = 'template_360pvjf';  // EmailJS → Email Templates
const EMAILJS_PUBLIC_KEY  = 'dp1wDCZ3HSgAxjG9j'; // EmailJS → Account → API Keys

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    setError(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject || 'Portfolio Contact',
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const contacts = [
    {
      icon: <img src={gmailIcon} alt="gamil" width="30" />,
      label: 'Email',
      value: 'amirhamja12675@gmail.com',
      href: 'mailto:amirhamja12675@gmail.com',
      color: '#ea4335',
    },
    {
      icon: <img src={whatsappIcon} alt="gamil" width="30" />,
      label: 'WhatsApp',
      value: '+8801748985357',
      href: 'https://wa.me/8801748985357',
      color: '#25d366',
    },
    {
      icon: <img src={likedinIcon} alt="gamil" width="30" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/amir-hamja-8a37853b2',
      href: 'https://www.linkedin.com/in/amir-hamja-8a37853b2?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      color: '#0077b5',
    },
    {
      icon: <img src={fiverrIcon} alt="gamil" width="30" />,
      label: 'Fiverr',
      value: 'fiverr.com/techiehamza',
      href: 'https://www.fiverr.com/techiehamza',
      color: '#1dbf73',
    },
  ];

  return (
    <>
      <style>{`
        .contact {
          background: var(--bg2);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: start;
        }
        .contact-left h3 {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--text);
        }
        .contact-left p {
          color: var(--muted);
          font-size: 0.92rem;
          line-height: 1.75;
          margin-bottom: 32px;
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .contact-link {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px 20px;
          text-decoration: none;
          color: var(--text);
          transition: all 0.3s ease;
        }
        .contact-link:hover {
          border-color: var(--blue);
          transform: translateX(6px);
        }
        .contact-link-icon {
          font-size: 1.6rem;
          flex-shrink: 0;
        }
        .contact-link-info {
          display: flex;
          flex-direction: column;
        }
        .contact-link-label {
          font-size: 0.75rem;
          color: var(--muted);
          font-family: 'Fira Code', monospace;
          margin-bottom: 2px;
        }
        .contact-link-val {
          font-weight: 500;
          font-size: 0.92rem;
        }
        .contact-link-arrow {
          margin-left: auto;
          color: var(--muted);
          font-size: 1rem;
          transition: transform 0.3s ease;
        }
        .contact-link:hover .contact-link-arrow {
          transform: translateX(4px);
          color: var(--blue);
        }
        .contact-form {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px;
        }
        .contact-form h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--cyan);
          font-family: 'Fira Code', monospace;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 14px;
        }
        .form-group label {
          font-size: 0.8rem;
          color: var(--muted);
          font-family: 'Fira Code', monospace;
        }
        .form-group input,
        .form-group textarea {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 12px 14px;
          color: var(--text);
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s ease;
          width: 100%;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--blue);
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--muted);
        }
        .form-group textarea {
          height: 130px;
          resize: vertical;
        }
        .btn-submit {
          width: 100%;
          background: var(--blue);
          color: #fff;
          border: none;
          padding: 14px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .btn-submit:hover:not(:disabled) {
          opacity: 0.88;
          transform: translateY(-2px);
        }
        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .success-msg {
          text-align: center;
          padding: 16px;
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.3);
          border-radius: 10px;
          color: #22c55e;
          font-size: 0.92rem;
          margin-top: 14px;
          font-weight: 500;
        }
        .error-msg {
          text-align: center;
          padding: 16px;
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.3);
          border-radius: 10px;
          color: #ef4444;
          font-size: 0.92rem;
          margin-top: 14px;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="contact section-alt" id="contact">
        <div className="section-inner">
          <div className="section-tag reveal">// contact</div>
          <h2 className="section-title reveal">Get In <span>Touch</span></h2>

          <div className="contact-grid">
            {/* Left — Info */}
            <div className="contact-left">
              <h3 className="reveal">Let's work together! 🚀</h3>
              <p className="reveal">
                আমি নতুন projects এর জন্য সবসময় available। আপনার idea বা project নিয়ে কথা বলতে চাইলে যেকোনো মাধ্যমে যোগাযোগ করুন।
              </p>
              <div className="contact-links">
                {contacts.map((c, i) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`contact-link reveal stagger-${i + 1}`}
                  >
                    <div className="contact-link-icon">{c.icon}</div>
                    <div className="contact-link-info">
                      <div className="contact-link-label">// {c.label.toLowerCase()}</div>
                      <div className="contact-link-val" style={{ color: c.color }}>{c.value}</div>
                    </div>
                    <span className="contact-link-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-form reveal" ref={formRef}>
              <h3>// send a message</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Discussion"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button
                className="btn-submit"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? '⏳ Sending...' : '📨 Send Message →'}
              </button>

              {sent && (
                <div className="success-msg">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {error && (
                <div className="error-msg">
                  ❌ Something went wrong. Please try again or email me directly.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;