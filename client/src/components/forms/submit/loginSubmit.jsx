import Swal from 'sweetalert2';
import styles from '../../../assets/css/login.module.css';
import { CustomFetch } from '../../../api/CustomFetch';
import useAuth from '../../../hook/useAuth';

// eslint-disable-next-line react/prop-types
export const LoginSubmit = ({ stateForm }) => {

  const { login } = useAuth();

  // eslint-disable-next-line no-unused-vars
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const payload = {
        // eslint-disable-next-line react/prop-types
        email: stateForm.email,
        // eslint-disable-next-line react/prop-types
        password: stateForm.password,
      };

      const data = await CustomFetch('http://localhost:4000/api/auth/login', 'POST', payload);
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
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al registrar el usuario",
        icon: "error",
        width: "50%",
        padding: "1rem",
        background: "#FFF",
        grow: "row",
      });
    }
  }

  return (
    <button onClick={handleSubmit} type='submit' className={styles.btnPrimary}>
      Login
    </button>
  );
}
