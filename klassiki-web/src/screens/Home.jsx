import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { films } from '../../data/films';

export default function Home() {
  const navigate = useNavigate();
  const items = useMemo(() => films, []);
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setFocusIndex((i) => Math.min(i + 1, items.length - 1));
      }
      if (e.key === 'ArrowLeft') {
        setFocusIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter') {
        navigate(`/film/${items[focusIndex].id}`);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [focusIndex, items, navigate]);

  return (
    <div className="home">
      <h2>Featured</h2>
      <div className="row">
        {items.map((film, idx) => (
          <button
            key={film.id}
            className={`card ${idx === focusIndex ? 'focused' : ''}`}
            onClick={() => navigate(`/film/${film.id}`)}
          >
            <img src={film.imageUrl} alt={film.title} />
            <div className="cardTitle">{film.title}</div>
          </button>
        ))}
      </div>
      <p className="hint">Use ← → and Enter to navigate</p>
    </div>
  );
}
