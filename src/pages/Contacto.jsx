import Nav from '../components/Nav';
import '../styles/Contacto.css';

const Contacto = () => {
  return (
    <>
      <Nav />
      <div className="contact-container">
        <h1>Contacto</h1>
        <p>¡Ponte en contacto con nosotros!</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>info@estrenosstudio.com</p>
          </div>
          <div className="contact-item">
            <h3>Teléfono</h3>
            <p>+54 11 1234-5678</p>
          </div>
          <div className="contact-item">
            <h3>Dirección</h3>
            <p>Buenos Aires, Argentina</p>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar Mensaje</button>
        </form>
      </div>
    </>
  );
};

export default Contacto;