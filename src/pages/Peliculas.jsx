import '../styles/Peliculas.css'
import { Link } from 'react-router-dom'
import movie from '../components/movie'
import Nav from '../components/Nav.jsx'

const Peliculas = () => {
  return (
    <div className="list-item top10">
      <Nav />
      <div className="peliculas-wrapper">
        <ul className="peliculas">
          <div className="peliculas-list">
            {movie.map((movie, index) => (
              <li key={index}>
                <div className="movie-card" >
                  <Link className="card-button" to={`/pelidetalles/${movie.number}`}>
                    <picture className="img-container">
                      <div className="plapla">
                        <img loading="lazy" src={movie.imgSrc} className="imgCard" alt={movie.title} />
                      </div>
                      <h3 className="namemovie">{movie.title}</h3>
                    </picture>
                  </Link>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <footer id="footer">
        <div className="wrap"></div>
        <h2 className='futer'>Estrenos Studios » Ver peliculas gratis, estrenos online GRATIS</h2><p>© estrenostudios.arg</p>
      </footer>
    </div>
  )
}

export default Peliculas