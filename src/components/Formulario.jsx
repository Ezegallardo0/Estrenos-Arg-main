import '../styles/Formulario.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
    const [user, setUser] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}

        if (!user) {
            newErrors.user = "El email es obligatorio"
        } else if (!validateEmail(user)) {
            newErrors.user = "Ingresa un email válido"
        }

        if (!contraseña) {
            newErrors.contraseña = "La contraseña es obligatoria"
        } else if (contraseña.length < 6) {
            newErrors.contraseña = "La contraseña debe tener al menos 6 caracteres"
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            localStorage.setItem('user', user)
            navigate("/home")
        }
    }

    return (
        <section className='section'>
            <form className='formulario' onSubmit={handleSubmit}>
                <div className="login">
                    <h1 className='h1'>Iniciar Sesión</h1>
                    <div className="input-group">
                        <input
                            placeholder="Email"
                            id="email"
                            name="email"
                            type="email"
                            value={user}
                            onChange={e => setUser(e.target.value)}
                            className={errors.user ? 'error' : ''}
                        />
                        {errors.user && <span className="error-text">{errors.user}</span>}
                    </div>
                    <div className="input-group">
                        <div className="password-container">
                            <input
                                placeholder="Contraseña"
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={contraseña}
                                onChange={e => setContraseña(e.target.value)}
                                className={errors.contraseña ? 'error' : ''}
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                        {errors.contraseña && <span className="error-text">{errors.contraseña}</span>}
                    </div>
                    <button className="button" type="submit">Iniciar Sesión</button>
                </div>
            </form>
        </section>
    )
}

export default Formulario