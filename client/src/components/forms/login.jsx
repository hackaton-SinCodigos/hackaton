
import styles from '../../assets/css/login.module.css'; 

const Login = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <form>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formLabel}>Email ID</label>
            <input type="email" className={styles.formControl} id="email" placeholder="Email" />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="password" className={styles.formLabel}>Password</label>
            <input type="password" className={styles.formControl} id="password" placeholder="Password" />
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="form-check">
              <input type="checkbox" className={styles.formCheckInput} id="remember" />
              <label className={styles.formCheckLabel} htmlFor="remember">Remember me</label>
            </div>
            <a href="#!" className={styles.forgotPassword}>Forgot Password?</a>
          </div>
          <button type="submit" className={styles.btnPrimary}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
