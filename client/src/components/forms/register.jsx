import { useState } from 'react';
import styles from '../../assets/css/register.module.css';

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={styles['register-container']}>
      <div className={styles['container']}>
        <h2 className={styles['register-heading']}>Registrarse</h2>
        <form>
          <div className={styles.mb3}>
            <label className={styles.formLabel}>Nombre</label>
            <input type="text" className={styles['register-form-control']} placeholder='Nombre' required />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formLabel}>Correo Electrónico</label>
            <input type="email" className={styles['register-form-control']} id="email" placeholder='Correo Electrónico' required />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="password" className={styles.formLabel}>Contraseña</label>
            <input 
              type={passwordShown ? "text" : "password"} 
              className={styles['register-form-control']} 
              id="password" 
              placeholder='Contraseña' 
              required 
            />
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
          <div className={styles.mb3}>
            <label htmlFor="confirmPassword" className={styles.formLabel}>Confirmar Contraseña</label>
            <input 
              type={passwordShown ? "text" : "password"} 
              className={styles['register-form-control']} 
              id="confirmPassword" 
              placeholder='Confirmar Contraseña'
              required 
            />
          </div>
          <button type="submit" className={styles['btn-primary']}>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
