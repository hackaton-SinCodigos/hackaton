import { useState } from 'react';
import styles from '../../assets/css/register.module.css';
import { RegisterSubmit } from './submit/registerSubmit.jsx';

const Register = () => {
  const [stateForm, setStateForm] = useState({
    nombre: '',
    email: '',
    password: '',
    passwordConfirmacion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateForm({ ...stateForm, [name]: value });
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={styles['register-container']}>
      <div className={styles['container']}>
        <h2 className={styles['register-heading']}>Registrarse</h2>
          <div className={styles.mb3}>
            <label className={styles.formLabel}>Nombre</label>
            <input
              type='text'
              name='nombre'
              value={stateForm.nombre}
              onChange={handleChange}
              className={styles['register-form-control']}
              placeholder='Nombre'
              required
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor='email' className={styles.formLabel}>
              Correo Electrónico
            </label>
            <input
              type='email'
              name='email'
              value={stateForm.email}
              onChange={handleChange}
              className={styles['register-form-control']}
              id='email'
              placeholder='Correo Electrónico'
              required
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor='password' className={styles.formLabel}>
              Contraseña
            </label>
            <input
              type={passwordShown ? 'text' : 'password'}
              name='password'
              value={stateForm.password}
              onChange={handleChange}
              className={styles['register-form-control']}
              id='password'
              placeholder='Contraseña'
              required
            />
            <div className='form-check mt-2'>
              <input
                className='form-check-input'
                type='checkbox'
                onChange={togglePasswordVisibility}
                id='showPassword'
              />
              <label className='form-check-label' htmlFor='showPassword'>
                Mostrar Contraseña
              </label>
            </div>
          </div>
          <div className={styles.mb3}>
            <label htmlFor='confirmPassword' className={styles.formLabel}>
              Confirmar Contraseña
            </label>
            <input
              type={passwordShown ? 'text' : 'password'}
              name='passwordConfirmacion'
              value={stateForm.passwordConfirmacion}
              onChange={handleChange}
              className={styles['register-form-control']}
              id='confirmPassword'
              placeholder='Confirmar Contraseña'
              required
            />
          </div>
          <RegisterSubmit stateForm={stateForm}/>
      </div>
    </div>
  );
};

export default Register;
