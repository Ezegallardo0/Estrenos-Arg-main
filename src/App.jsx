import Formulario from './components/Formulario'
import Home from './components/Home'
import Peliculas from './pages/Peliculas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pelidetalles from './pages/Pelidetalles';
import Contacto from './pages/Contacto';

function App() {
  
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Formulario />} />
        <Route path="/home" element={<Home />}  />
        <Route path='/peliculas' element={<Peliculas />} />
        <Route path='/pelidetalles/:id' element={<Pelidetalles />} />
        <Route path='/contacto' element={<Contacto />} />
    </Routes>
    </Router>
    </div>
  )
}

export default App
