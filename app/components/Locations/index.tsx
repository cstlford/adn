import { useState } from "react";
import styles from "./Locations.module.css";

const locations = [
  { h3: "Apartment Building" },
  { h3: "Hospital or Clinic" },
  { h3: "Warehouse or Distribution Center" },
  { h3: "Office or Commercial Property" },
  { h3: "Auto Shop or Dealership" },
  { h3: "School or Gym" },
];

export default function Locations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="locations" className={styles.locations}>
      <h2 className={styles.title}>Place a Vending Machine at Your...</h2>
      <div className={styles["location-cards"]}>
        {locations.map((loc, i) => (
          <div
            key={i}
            className={`${styles["location-card"]} ${
              hoveredIndex === i ? styles.active : ""
            }`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3>{loc.h3}</h3>
            <div className={styles.checkmark}>✔</div>
          </div>
        ))}
      </div>
    </section>
  );
}
