import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2025 ADN Vending. All rights reserved.</p>
        <p>Serving Charlotte, NC and the surrounding area</p>
        <p>
          Contact: <a href="mailto:adam@adnvending.org">adam@adnvending.org</a>
        </p>
      </div>
    </footer>
  );
}
