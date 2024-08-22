import { useState } from 'react';
import styles from "../../assets/css/register.module.css";

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={styles['register-body']}>
      <div className={styles['register-container']}>
        <h2 className={styles['register-heading']}>Registrarse</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className={styles['register-form-control']}  placeholder='nombre'required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" placeholder='email' required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label " placeholder="hola">Contraseña</label>
            <input 
              type={passwordShown ? "text" : "password"} className="form-control" id="password" placeholder='password' required />
            <div className="form-check mt-2">
              <input 
                className="form-check-input" 
                type="checkbox" 
                onChange={togglePasswordVisibility} 
                id="showPassword" 
              />
              <label className="form-check-label" htmlFor="showPassword">
                Mostrar Contraseña
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
            <input 
              type={passwordShown ? "text" : "password"} 
              className="form-control" 
              id="confirmPassword" 
               placeholder='password'
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
