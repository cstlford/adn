import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2025 ADN Vending. All rights reserved.</p>
        <p>Contact: adam@adnvending.org</p>
      </div>
    </footer>
  );
}
