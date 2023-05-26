import styles from './footer.module.css';
import  Logo  from '../../assets/logo.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="logo" />
    </footer>
  );
}
