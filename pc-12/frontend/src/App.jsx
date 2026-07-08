import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/notes';

function Icon({ name }) {
  const paths = {
    plus: <path d="M12 5v14M5 12h14" />,
    edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" /></>,
    trash: <><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v5M14 11v5" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    note: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></>,
    sparkle: <><path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z" /></>,
  };

  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>;
}

export default function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function fetchNotes() {
    try {
      setError('');
      const { data } = await axios.get(API_URL);
      setNotes(data.notes);
    } catch {
      setError('Could not load your notes. Is the server running?');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    axios.get(API_URL)
      .then(({ data }) => setNotes(data.notes))
      .catch(() => setError('Could not load your notes. Is the server running?'))
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      setSubmitting(true);
      setError('');
      await axios.post(API_URL, {
        title: formData.get('title').trim(),
        description: formData.get('description').trim(),
      });
      form.reset();
      await fetchNotes();
    } catch {
      setError('Your note could not be created. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleEdit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      setSubmitting(true);
      setError('');
      await axios.patch(`${API_URL}/${editingNote._id}`, {
        title: formData.get('title').trim(),
        description: formData.get('description').trim(),
      });
      setEditingNote(null);
      await fetchNotes();
    } catch {
      setError('Your changes could not be saved. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    try {
      setError('');
      await axios.delete(`${API_URL}/${id}`);
      setNotes((currentNotes) => currentNotes.filter((note) => note._id !== id));
    } catch {
      setError('That note could not be deleted. Please try again.');
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Notely home">
          <span className="brand-mark"><Icon name="note" /></span>
          <span>Notely</span>
        </a>
        <span className="note-count">{notes.length} {notes.length === 1 ? 'note' : 'notes'}</span>
      </header>

      <main id="top">
       

        <section className="composer" aria-labelledby="composer-title">
          <div className="section-heading">
            <div>
              <p className="kicker">New thought</p>
              <h2 id="composer-title">Create a note</h2>
            </div>
            <span className="composer-icon"><Icon name="plus" /></span>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" placeholder="What’s on your mind?" required maxLength="100" />
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" placeholder="Write your note here..." required rows="5" maxLength="1000" />
            <button className="primary-button" type="submit" disabled={submitting}>
              <Icon name="plus" /> {submitting ? 'Saving…' : 'Add note'}
            </button>
          </form>
        </section>

        {error && <div className="error-message" role="alert">{error}</div>}

        <section className="notes-section" aria-labelledby="notes-title">
          <div className="notes-heading">
            <div>
              <p className="kicker">Your collection</p>
              <h2 id="notes-title">Recent notes</h2>
            </div>
            {notes.length > 0 && <span>{notes.length} total</span>}
          </div>

          {loading ? (
            <div className="empty-state">Loading your notes…</div>
          ) : notes.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon"><Icon name="note" /></span>
              <h3>A fresh page</h3>
              <p>Your first note will appear here. Go on—write something worth remembering.</p>
            </div>
          ) : (
            <div className="notes-grid">
              {notes.map((note, index) => (
                <article className="note-card" key={note._id} style={{ '--delay': `${index * 45}ms` }}>
                  <div className="note-card-top">
                    <span className="note-number">{String(index + 1).padStart(2, '0')}</span>
                    <div className="card-actions">
                      <button className="icon-button edit-button" type="button" onClick={() => setEditingNote(note)} aria-label={`Edit ${note.title}`} title="Edit note">
                        <Icon name="edit" />
                      </button>
                      <button className="icon-button delete-button" type="button" onClick={() => handleDelete(note._id)} aria-label={`Delete ${note.title}`} title="Delete note">
                        <Icon name="trash" />
                      </button>
                    </div>
                  </div>
                  <h3>{note.title}</h3>
                  <p>{note.description}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      {editingNote && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setEditingNote(null)}>
          <section className="edit-modal" role="dialog" aria-modal="true" aria-labelledby="edit-title">
            <div className="modal-heading">
              <div><p className="kicker">Make it better</p><h2 id="edit-title">Edit note</h2></div>
              <button className="icon-button" type="button" onClick={() => setEditingNote(null)} aria-label="Close edit dialog"><Icon name="close" /></button>
            </div>
            <form onSubmit={handleEdit}>
              <label htmlFor="edit-note-title">Title</label>
              <input id="edit-note-title" name="title" type="text" defaultValue={editingNote.title} required maxLength="100" autoFocus />
              <label htmlFor="edit-description">Description</label>
              <textarea id="edit-description" name="description" defaultValue={editingNote.description} required rows="6" maxLength="1000" />
              <div className="modal-actions">
                <button className="secondary-button" type="button" onClick={() => setEditingNote(null)}>Cancel</button>
                <button className="primary-button" type="submit" disabled={submitting}>{submitting ? 'Saving…' : 'Save changes'}</button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}
