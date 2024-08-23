import styles from '../../assets/css/login.module.css'; 

const Login = () => {
  return (
    <div className={styles.loginContainer}>
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
          <button type="submit" className={styles.btnPrimary}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
