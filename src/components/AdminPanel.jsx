import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';

const ADMIN_PASSWORD = 'hamza@admin2025';
const CLOUD_NAME = 'fb5nop8h';
const UPLOAD_PRESET = 'portfolio_upload';

const defaultForm = {
  title: '',
  desc: '',
  live: '',
  github: '',
  category: 'React',
  tag: '',
  image: '',
  emoji: '💻',
};

const AdminPanel = () => {
  const [authed, setAuthed] = useState(false);
  const [passInput, setPassInput] = useState('');
  const [passError, setPassError] = useState(false);

  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(defaultForm);
  const [editId, setEditId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  // ── Load projects from Firestore ──
  const fetchProjects = async () => {
    const snap = await getDocs(collection(db, 'projects'));
    const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    setProjects(data);
  };

  useEffect(() => {
    if (authed) fetchProjects();
  }, [authed]);

  // ── Login ──
  const handleLogin = () => {
    if (passInput === ADMIN_PASSWORD) {
      setAuthed(true);
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  // ── Cloudinary Upload ──
  const uploadImage = async (file) => {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: 'POST', body: formData }
    );
    const data = await res.json();
    setUploading(false);
    return data.secure_url;
  };

  // ── Save project ──
  const handleSave = async () => {
    if (!form.title || !form.desc) return;
    setSaving(true);
    try {
      if (editId) {
        await updateDoc(doc(db, 'projects', editId), form);
        setSuccessMsg('✅ Project updated!');
      } else {
        await addDoc(collection(db, 'projects'), form);
        setSuccessMsg('✅ Project added!');
      }
      setForm(defaultForm);
      setEditId(null);
      setShowForm(false);
      fetchProjects();
    } catch (e) {
      console.error(e);
    }
    setSaving(false);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  // ── Edit ──
  const handleEdit = (project) => {
    setForm({ ...project });
    setEditId(project.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── Delete ──
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'projects', id));
    setDeleteConfirm(null);
    fetchProjects();
  };

  // ── Login Screen ──
  if (!authed) {
    return (
      <>
        <style>{`
          .admin-login {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--bg);
            padding: 20px;
          }
          .login-box {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 40px;
            width: 100%;
            max-width: 400px;
            text-align: center;
          }
          .login-box h2 {
            font-size: 1.4rem;
            margin-bottom: 8px;
          }
          .login-box p {
            color: var(--muted);
            font-size: 0.88rem;
            margin-bottom: 28px;
            font-family: 'Fira Code', monospace;
          }
          .login-input {
            width: 100%;
            background: var(--bg);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 12px 16px;
            color: var(--text);
            font-size: 1rem;
            font-family: inherit;
            outline: none;
            margin-bottom: 14px;
            transition: border-color 0.2s;
          }
          .login-input:focus { border-color: var(--blue); }
          .login-error {
            color: #ef4444;
            font-size: 0.82rem;
            margin-bottom: 12px;
            font-family: 'Fira Code', monospace;
          }
          .login-btn {
            width: 100%;
            background: var(--blue);
            color: #fff;
            border: none;
            padding: 13px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            font-family: inherit;
            transition: opacity 0.2s;
          }
          .login-btn:hover { opacity: 0.88; }
        `}</style>
        <div className="admin-login">
          <div className="login-box">
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🔐</div>
            <h2>Admin Panel</h2>
            <p>// amir hamza portfolio</p>
            <input
              className="login-input"
              type="password"
              placeholder="Enter password"
              value={passInput}
              onChange={(e) => setPassInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
            {passError && <div className="login-error">❌ Wrong password!</div>}
            <button className="login-btn" onClick={handleLogin}>Login →</button>
          </div>
        </div>
      </>
    );
  }

  // ── Admin Dashboard ──
  return (
    <>
      <style>{`
        .admin {
          min-height: 100vh;
          background: var(--bg);
          padding: 0 0 60px;
        }
        .admin-header {
          background: var(--card);
          border-bottom: 1px solid var(--border);
          padding: 16px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .admin-header h1 {
          font-family: 'Fira Code', monospace;
          color: var(--cyan);
          font-size: 1.1rem;
        }
        .admin-header-btns {
          display: flex;
          gap: 12px;
        }
        .btn-sm {
          padding: 8px 18px;
          border-radius: 7px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          border: none;
          transition: all 0.2s;
        }
        .btn-sm-primary { background: var(--blue); color: #fff; }
        .btn-sm-primary:hover { opacity: 0.85; }
        .btn-sm-outline {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--muted);
        }
        .btn-sm-outline:hover { border-color: var(--blue); color: var(--blue); }
        .btn-sm-danger {
          background: rgba(239,68,68,0.12);
          border: 1px solid rgba(239,68,68,0.3);
          color: #ef4444;
        }
        .btn-sm-danger:hover { background: rgba(239,68,68,0.2); }

        .admin-body { padding: 32px 5%; max-width: 1100px; margin: 0 auto; }

        /* Success message */
        .success-banner {
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.3);
          color: #22c55e;
          padding: 12px 20px;
          border-radius: 10px;
          margin-bottom: 24px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* ── Form ── */
        .admin-form {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 36px;
        }
        .admin-form h3 {
          font-family: 'Fira Code', monospace;
          color: var(--cyan);
          font-size: 0.95rem;
          margin-bottom: 22px;
        }
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
        }
        .form-field label {
          font-size: 0.78rem;
          color: var(--muted);
          font-family: 'Fira Code', monospace;
        }
        .form-field input,
        .form-field select,
        .form-field textarea {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px 14px;
          color: var(--text);
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
        }
        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus { border-color: var(--blue); }
        .form-field textarea { height: 90px; resize: vertical; }
        .form-field select option { background: var(--card); }

        /* Image upload */
        .img-upload-label {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--bg);
          border: 1px dashed var(--border);
          border-radius: 8px;
          padding: 10px 14px;
          color: var(--muted);
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .img-upload-label:hover { border-color: var(--blue); color: var(--blue); }
        .img-preview {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 8px;
          margin-top: 10px;
          border: 1px solid var(--border);
        }
        .form-btns {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        /* ── Projects list ── */
        .admin-section-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--text);
          font-family: 'Fira Code', monospace;
        }
        .admin-projects-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .admin-project-item {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: border-color 0.2s;
        }
        .admin-project-item:hover { border-color: var(--blue); }
        .admin-project-thumb {
          width: 72px;
          height: 52px;
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
          border: 1px solid var(--border);
        }
        .admin-project-thumb-emoji {
          width: 72px;
          height: 52px;
          border-radius: 8px;
          background: var(--bg2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          flex-shrink: 0;
          border: 1px solid var(--border);
        }
        .admin-project-info { flex: 1; min-width: 0; }
        .admin-project-title {
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .admin-project-meta {
          color: var(--muted);
          font-size: 0.78rem;
          font-family: 'Fira Code', monospace;
        }
        .admin-project-links {
          display: flex;
          gap: 8px;
          margin-top: 6px;
          flex-wrap: wrap;
        }
        .admin-project-links a {
          font-size: 0.75rem;
          color: var(--blue);
          text-decoration: none;
        }
        .admin-project-links a:hover { text-decoration: underline; }
        .admin-project-actions {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }

        /* Delete confirm */
        .delete-confirm {
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.25);
          border-radius: 8px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          font-size: 0.85rem;
          color: var(--text);
        }

        /* Empty */
        .admin-empty {
          text-align: center;
          padding: 40px;
          color: var(--muted);
          font-family: 'Fira Code', monospace;
          font-size: 0.88rem;
        }

        @media (max-width: 640px) {
          .form-grid-2 { grid-template-columns: 1fr; }
          .admin-project-item { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="admin">
        {/* Header */}
        <div className="admin-header">
          <h1>&lt;AH /&gt; Admin Panel</h1>
          <div className="admin-header-btns">
            {!showForm && (
              <button
                className="btn-sm btn-sm-primary"
                onClick={() => { setForm(defaultForm); setEditId(null); setShowForm(true); }}
              >
                ➕ Add Project
              </button>
            )}
            <a href="/" style={{ textDecoration: 'none' }}>
              <button className="btn-sm btn-sm-outline">← Back to Site</button>
            </a>
            <button className="btn-sm btn-sm-outline" onClick={() => setAuthed(false)}>
              Logout
            </button>
          </div>
        </div>

        <div className="admin-body">
          {successMsg && <div className="success-banner">{successMsg}</div>}

          {/* ── Add / Edit Form ── */}
          {showForm && (
            <div className="admin-form">
              <h3>{editId ? '// edit project' : '// add new project'}</h3>

              <div className="form-grid-2">
                <div className="form-field">
                  <label>Project Title *</label>
                  <input
                    placeholder="e.g. BoidorBD Educational Website"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label>Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    <option>React</option>
                    <option>Next.js</option>
                    <option>AI</option>
                    <option>Node.js</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-field">
                  <label>Tag (shown on card)</label>
                  <input
                    placeholder="e.g. React + Firebase"
                    value={form.tag}
                    onChange={(e) => setForm({ ...form, tag: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label>Emoji (fallback if no image)</label>
                  <input
                    placeholder="e.g. 🌍"
                    value={form.emoji}
                    onChange={(e) => setForm({ ...form, emoji: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Description *</label>
                <textarea
                  placeholder="Project description..."
                   value={form.desc}
                   onChange={(e) => setForm({ ...form, desc: e.target.value })}
                    style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                />
              </div>

              <div className="form-grid-2">
                <div className="form-field">
                  <label>Live Demo URL</label>
                  <input
                    placeholder="https://yourproject.vercel.app"
                    value={form.live}
                    onChange={(e) => setForm({ ...form, live: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label>GitHub URL</label>
                  <input
                    placeholder="https://github.com/amirhamja55880/..."
                    value={form.github}
                    onChange={(e) => setForm({ ...form, github: e.target.value })}
                  />
                </div>
              </div>

              {/* Cover Image Upload */}
              <div className="form-field">
                <label>Cover Image</label>
                <label className="img-upload-label">
                  📎 {uploading ? 'Uploading...' : 'Click to upload cover image'}
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      if (!file) return;
                      const url = await uploadImage(file);
                      setForm({ ...form, image: url });
                    }}
                  />
                </label>
                {form.image && (
                  <img src={form.image} alt="preview" className="img-preview" />
                )}
              </div>

              <div className="form-btns">
                <button
                  className="btn-sm btn-sm-primary"
                  onClick={handleSave}
                  disabled={saving || uploading}
                  style={{ padding: '10px 24px' }}
                >
                  {saving ? 'Saving...' : editId ? '✅ Update Project' : '✅ Save Project'}
                </button>
                <button
                  className="btn-sm btn-sm-outline"
                  onClick={() => { setShowForm(false); setForm(defaultForm); setEditId(null); }}
                  style={{ padding: '10px 20px' }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* ── Projects List ── */}
          <div className="admin-section-title">
            // all projects ({projects.length})
          </div>

          <div className="admin-projects-list">
            {projects.length === 0 && (
              <div className="admin-empty">// no projects yet. click "Add Project" to start.</div>
            )}
            {projects.map((project) => (
              <div key={project.id}>
                {deleteConfirm === project.id ? (
                  <div className="delete-confirm">
                    <span>🗑️ Delete <strong>{project.title}</strong>?</span>
                    <button className="btn-sm btn-sm-danger" onClick={() => handleDelete(project.id)}>
                      Yes, Delete
                    </button>
                    <button className="btn-sm btn-sm-outline" onClick={() => setDeleteConfirm(null)}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="admin-project-item">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="admin-project-thumb" />
                    ) : (
                      <div className="admin-project-thumb-emoji">{project.emoji || '💻'}</div>
                    )}
                    <div className="admin-project-info">
                      <div className="admin-project-title">{project.title}</div>
                      <div className="admin-project-meta">{project.category} · {project.tag}</div>
                      <div className="admin-project-links">
                        {project.live && project.live !== '#' && (
                          <a href={project.live} target="_blank" rel="noreferrer">🔗 Live</a>
                        )}
                        {project.github && project.github !== '#' && (
                          <a href={project.github} target="_blank" rel="noreferrer">💻 GitHub</a>
                        )}
                      </div>
                    </div>
                    <div className="admin-project-actions">
                      <button className="btn-sm btn-sm-outline" onClick={() => handleEdit(project)}>
                        ✏️ Edit
                      </button>
                      <button className="btn-sm btn-sm-danger" onClick={() => setDeleteConfirm(project.id)}>
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;