import styles from './footer.module.css';
import marca from '../../assets/marca.svg';
import {FaParking, FaYoutube, FaLinkedin, FaGithub} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <img className={styles.footer__img} src={marca} alt="Logo"/>
        <span>Flavio Andrade </span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
      <div className={styles.container_socialmidia}>
        <a href="https://portfolio-one-alpha-98.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaParking color="LimeGreen" size={35} title="portifolio"/>
        </a>
        <a href="https://github.com/flavio-foa-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="black" size={35} title="portifolio"/>
        </a>
        <a href="https://www.youtube.com/watch?v=r6zV25CrscE&list=PLHT0iYvkz5nDIzS3aUHwbKj4qij1ELyWZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube color="red" size={40}title="youtube"/>
        </a>
        <a href="http://www.linkedin.com/in/flavio-foa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="dodgerblue" size={35} title="linkesin" />
        </a>
      </div>
    </footer>
  );
}
