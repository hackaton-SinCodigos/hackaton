import { useState } from 'react';
import '../assets/css/login.module.css';

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Iniciar Sesión</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type={passwordShown ? "text" : "password"} className="form-control" id="password" required />
          <div className="form-check mt-2">
            <input className="form-check-input" type="checkbox" onChange={togglePasswordVisibility} id="showPassword" />
            <label className="form-check-label" htmlFor="showPassword">
              Mostrar Contraseña
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
