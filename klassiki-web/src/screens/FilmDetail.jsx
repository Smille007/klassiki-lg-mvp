import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { films } from '../../data/films';

export default function FilmDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const film = useMemo(() => films.find((f) => f.id === id), [id]);

  if (!film) return <div className="detail">Film not found</div>;

  return (
    <div className="detail">
      <button className="btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detailBody">
        <img className="poster" src={film.imageUrl} alt={film.title} />
        <div className="detailText">
          <h2>{film.title}</h2>
          <div className="meta">
            {film.year} · {film.country} · {film.durationMinutes} min
          </div>
          <p>{film.description}</p>
          <button
            className="btn primary"
            onClick={() => navigate(`/play/${film.id}`)}
          >
            ▶ Play
          </button>
        </div>
      </div>
    </div>
  );
}
