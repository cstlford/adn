import ImageCarousel from "../ImageCarousel";
import styles from "./Offering.module.css";

export default function Offering() {
  return (
    <section id="offering" className={styles.offering}>
      <div className={styles.container}>
        <h2>
          Our Vending <span>Solutions</span>
        </h2>
        <ImageCarousel />
      </div>
    </section>
  );
}
