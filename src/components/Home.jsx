import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Top10PelisPlus from './Top10PelisPlus'
import Nav from './Nav.jsx'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const goToHighlights = () => {
    document.getElementById('destacados')?.scrollIntoView({ behavior: 'smooth' })
  }

  const recommendedMovies = [
    {
      title: 'El Rescate Épico',
      genre: 'Aventura',
      score: '9.2',
      badge: 'Acción',
      image: 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    },
    {
      title: 'Amor en la Ciudad',
      genre: 'Romance',
      score: '8.7',
      badge: 'Drama',
      image: 'https://image.tmdb.org/t/p/original/kDuQbn2LwhDjYOiS4obTXFkIUVh.jpg'
    },
    {
      title: 'Noche de Ciberpunk',
      genre: 'Ciencia Ficción',
      score: '8.9',
      badge: 'Thriller',
      image: 'https://image.tmdb.org/t/p/original/4L5T5TVj2CFGX7C6U0b7KTUVYfi.jpg'
    },
    {
      title: 'Comedia de Medianoche',
      genre: 'Comedia',
      score: '8.0',
      badge: 'Risas',
      image: 'https://image.tmdb.org/t/p/original/5BB9JATv0BjNZEaRRp4ZC6Zf2SI.jpg'
    }
  ]

  const upcomingReleases = [
    {
      title: 'Misión Neon',
      date: '24 Abril',
      type: 'Estreno',
      genre: 'Acción'
    },
    {
      title: 'Sombras del Pasado',
      date: '30 Abril',
      type: 'Preestreno',
      genre: 'Misterio'
    },
    {
      title: 'Planeta Aurora',
      date: '06 Mayo',
      type: 'Estreno',
      genre: 'Aventura'
    }
  ]

  const testimonials = [
    {
      quote: 'La mejor selección de estrenos, todo con un estilo increíble y fácil de usar.',
      author: 'Mía, fan del cine'
    },
    {
      quote: 'Encontré películas nuevas cada semana y el diseño es súper moderno.',
      author: 'Lucas, maratonista'
    },
    {
      quote: 'La experiencia de usuario es impecable. Me encanta ver recomendaciones claras.',
      author: 'Ana, espectadora'
    }
  ]

  const filteredMovies = recommendedMovies.filter((movie) => {
    const search = searchTerm.toLowerCase()
    return (
      movie.title.toLowerCase().includes(search) ||
      movie.genre.toLowerCase().includes(search) ||
      movie.badge.toLowerCase().includes(search)
    )
  })

  return (
    <>
      <Nav />

      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Top 5 estrenos en Estrenos Arg</h1>
          <p className="hero-subtitle">Descubre las mejores películas del momento</p>
          <div className="hero-actions">
            <button className="hero-button" onClick={goToHighlights}>Explorar ahora</button>
            <Link className="hero-alt-button" to="/peliculas">Ver cartelera</Link>
          </div>
        </div>
      </section>
        {/* Panel de búsqueda de películas */}
        <div className="search-panel">
          <input
            type="search"
            placeholder="Buscar películas, géneros, emociones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      <Top10PelisPlus />

      <footer id="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2 className='futer'>Estrenos Studios</h2>
            <p>Ver películas gratis, estrenos online GRATIS</p>
          </div>
          <div className="footer-links">
            <Link to="/home">Inicio</Link>
            <Link to="/peliculas">Películas</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
          <div className="footer-newsletter">
            <span>Suscribite para no perderte estrenos</span>
            <div className="newsletter-form">
              <input type="email" placeholder="Tu email" />
              <button>Suscribir</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social-icons">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">TikTok</a>
          </div>
          <p>© 2026 estrenostudios.arg - Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  )
}

export default Home
