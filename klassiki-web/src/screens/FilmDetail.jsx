import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { films } from '../data/films';

export default function FilmDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const film = useMemo(() => films.find((f) => f.id === id), [id]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        navigate(`/play/${id}`);
      }
      if (e.key === 'Backspace' || e.key === 'Escape' || e.key === 'ArrowLeft' || e.keyCode === 461) {
        navigate(-1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [id, navigate]);

  if (!film) return <div className="detail">Film not found</div>;

  return (
    <div className="detail">
      <div className="detailBody">
        <div className="detailLeft">
          <h2>{film.title}</h2>
          <div className="meta">
            Directed by {film.director} · {film.year} · {film.country}
          </div>
          <p>{film.description}</p>
          <div className="detailActions">
            <button className="btn" onClick={() => navigate(`/play/${film.id}`)}>
              ▶ Watch Trailer
            </button>
            <button className="btn secondary" onClick={() => navigate(-1)}>
              ← Back
            </button>
          </div>
        </div>
        <div className="detailRight">
          <div className="detailThumb">
            <img src={film.imageUrl} alt={film.title} />
            <div className="detailThumbLabel">{film.title}</div>
          </div>
        </div>
      </div>
      <p className="hint">Enter to play · ← or Back to return</p>
    </div>
  );
}
