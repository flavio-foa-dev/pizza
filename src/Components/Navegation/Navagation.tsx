import styles from './navagation.module.css';
import logo from '../../assets/FLAVITTO.svg';
import { Link } from 'react-router-dom';


export default function Navagation() {
  return (
    <nav className={styles.nav}>
      <img className={styles.nav__logo} src={logo} alt="Logo" />
      <ul className={styles.nav__list}>
        <li className={styles.nav__link}><Link to="/">Home</Link></li>
        <li className={styles.nav__link}><Link to="/products">Menu</Link></li>
        <li className={styles.nav__link}><Link to="/sobre">Sobre</Link></li>
      </ul>
    </nav>
  );
}
