import { useState } from 'react';
import styles from '../../assets/css/login.module.css';
import { LoginSubmit } from '../forms/submit/loginSubmit.jsx';

const Login = () => {
  const [stateForm, setStateForm] = useState({
    email: '',
    password: '',
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
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.mb3}>
          <label htmlFor='email' className={styles.formLabel}>
            Email ID
          </label>
          <input
            type='email'
            name='email'
            value={stateForm.email}
            onChange={handleChange}
            className={styles.formControl}
            id='email'
            placeholder='Correo Electrónico'
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor='password' className={styles.formLabel}>
            Password
          </label>
          <input
            type={passwordShown ? 'text' : 'password'}
            name='password'
            value={stateForm.password}
            onChange={handleChange}
            className={styles.formControl}
            id='password'
            placeholder='Contraseña'
            required
          />
        </div>
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
        <LoginSubmit stateForm={stateForm} />
      </div>
    </div>
  );
};

export default Login;
