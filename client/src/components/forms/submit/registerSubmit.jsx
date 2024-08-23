import Swal from 'sweetalert2';
import { CustomFetch } from '../../../api/CustomFetch';
import styles from '../../../assets/css/register.module.css';
import useAuth from '../../../hook/useAuth.js'

export const RegisterSubmit = (stateForm) => {

  const { login } = useAuth();
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (stateForm.stateForm.password !== stateForm.stateForm.passwordConfirmacion) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const data = await CustomFetch('http://localhost:4000/api/auth/register', "POST", {
        userName: stateForm.stateForm.nombre,
        email: stateForm.stateForm.email,
        password: stateForm.stateForm.password,
    });
    login(data.token)
    
    Swal.fire({
      title: "Éxito",
      text: "Usuario registrado correctamente",
      icon: "success",
      width: "50%",
      padding: "1rem",
      background: "#FFF",
      grow: "row",
  });
    
    } catch (err) {
      console.error(err);
      alert('Error al registrar');
      return;
    } 
  };

  

  return (
    <button onClick={handleSubmit} type='submit' className={styles['btn-primary']}>
    Registrarse
    </button>
  )
}
