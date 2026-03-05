import { useEffect, useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { films } from '../data/films';

export default function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const film = useMemo(() => films.find((f) => f.id === id), [id]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Backspace' || e.key === 'Escape') {
        navigate(-1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [navigate]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked; user can click play
      });
    }
  }, []);

  if (!film) return <div className="player">Film not found</div>;

  return (
    <div className="player">
      <button className="btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h2>Playing: {film.title}</h2>
      <video
        ref={videoRef}
        controls
        style={{ width: '100%', maxHeight: '70vh' }}
        src={film.videoUrl}
      />
      <p className="hint">Press Backspace or Escape to go back</p>
    </div>
  );
}
