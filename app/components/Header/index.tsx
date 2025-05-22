import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" aria-label="Homepage">
          <img src="/logo_inverted.png" alt="" />
        </Link>
        <div className={styles.navLinks}>
          <Link href="#offering">Solutions</Link>
          <Link href="#features">Features</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
