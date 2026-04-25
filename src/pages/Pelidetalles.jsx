import { useParams } from 'react-router-dom';
import movie from '../components/movie';
import Nav from '../components/Nav';
import '../styles/Pelidetalles.css';

const Pelidetalles = () => {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const pelicula = movie.find((m) => m.number === movieId);

  if (!pelicula) {
    return <div>Película no encontrada</div>;
  }

  return (
    <>
      <Nav />
      <div className="movie-details-hero" style={{ backgroundImage: `url(${pelicula.fondo})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="movie-poster">
            <img src={pelicula.imgSrc} alt={pelicula.title} />
          </div>
          <div className="movie-info">
            <h1 className="movie-title">{pelicula.title}</h1>
            <div className="movie-meta">
              <span className="year">{pelicula.releaseYear}</span>
              <span className="duration">{pelicula.duration}</span>
              <span className="genre">{pelicula.genre}</span>
            </div>
            <div className="movie-director">
              <strong>Director:</strong> {pelicula.director}
            </div>
            <div className="movie-cast">
              <strong>Reparto:</strong>
              <ul>
                {pelicula.cast?.map((actor, index) => (
                  <li key={index}>{actor}</li>
                ))}
              </ul>
            </div>
            <div className="movie-synopsis">
              <h3>Sinopsis</h3>
              <p>{pelicula.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ad-container">
        <ins
          className="ad"
          data-key="06204f8a1f807df4131aaa5bd8c90b39"
          data-cp-host="37097cad0d42436db1131930350b25c3|2|"
          data-cp-domain="37097cad0d42436db1131930350b25c3|2|"
          id="01d94676-06204f8a1f807df4131aaa5bd8c90b39-2-6071"
        >
          <ins
            id="01d94676-06204f8a1f807df4131aaa5bd8c90b39-2-6071-1"
          >
            <script type="text/javascript"></script>
          </ins>
        </ins>
      </div>
      <div className="movie-background-banner" style={{ backgroundImage: `url(${pelicula.fondo})` }}></div>
    </>
  );
};

export default Pelidetalles;
