import { useEffect, useMemo, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { films } from '../data/films';

export default function Home() {
  const navigate = useNavigate();
  const items = useMemo(() => films, []);
  const [focusIndex, setFocusIndex] = useState-10);
  const cardRefs = useRef([]);

  // Auto-scroll focused card into view
  useEffect(() => {
    cardRefs.current[focusIndex]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [focusIndex]);

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

  const featured = items[0];

  return (
    <div className="home">
      <div className="hero">
        <img className="heroBg" src={featured.imageUrl} alt={featured.title} />
        <div className="heroText">
          <h1>{featured.title}</h1>
        </div>
      </div>

      <div className="section">
        <div className="sectionHeader">
          <span className="sectionTitle">Trending Now</span>
          <span className="viewAll">View all</span>
        </div>
        <div className="row">
          {items.map((film, idx) => (
            <button
              key={film.id}
              className={`card ${idx === focusIndex ? 'focused' : ''}`}
              ref={(el) => (cardRefs.current[idx] = el)}
              onClick={() => navigate(`/film/${film.id}`)}
            >
              <img src={film.imageUrl} alt={film.title} />
              <span className="cardDuration">{film.durationMinutes} min</span>
              <div className="cardTitle">{film.title}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="sectionHeader">
          <span className="sectionTitle">New to Klassiki</span>
          <span className="viewAll">View all</span>
        </div>
        <div className="row">
          {[...items].reverse().map((film) => (
            <button
              key={film.id + '-new'}
              className="card"
              onClick={() => navigate(`/film/${film.id}`)}
            >
              <img src={film.imageUrl} alt={film.title} />
              <span className="cardDuration">{film.durationMinutes} min</span>
              <div className="cardTitle">{film.title}</div>
            </button>
          ))}
        </div>
      </div>

      <p className="hint">Use ← → and Enter to navigate</p>
    </div>
  );
}
