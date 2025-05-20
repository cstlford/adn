import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <a href="/" aria-label="Homepage">
          <img src="/logo_inverted.png" alt="" />
        </a>
        <div className={styles.navLinks}>
          <a href="#offering">Services</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
