import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/home" onClick={closeMenu}>
          Estrenos Studio
        </Link>

        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <Link className="nav-link" to="/home" onClick={closeMenu}>Home</Link>
          <Link className="nav-link" to="/peliculas" onClick={closeMenu}>Películas</Link>
          <Link className="nav-link" to="/contacto" onClick={closeMenu}>Contacto</Link>
        </div>

        <div className="navbar-user">
          <span className="welcome">Bienvenido</span>
          <span className="user-name">{user ? user.split('@')[0] : ''}</span>
          <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;