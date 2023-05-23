import styles from './Header.module.css'
import logo from "../../assets/logo.svg"

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
      <img src={logo} alt="Logo" />
      </nav>

      <div className={styles.header}>
        <div className={styles.header_text}>A casa da massa e do codigo</div>
      </div>

    </header>
  )
}
