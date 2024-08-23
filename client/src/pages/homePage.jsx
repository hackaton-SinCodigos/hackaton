
import Home from "../components/Home";
import Sidebar from "../components/SideBar";
import styles from '../assets/css/homePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Sidebar className={styles.sidebar} />
      <main className={styles.content}>
        <Home />
      </main>
    </div>
  );
};

export default HomePage;
