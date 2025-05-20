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
  return (
    <section id="locations" className={styles.locations}>
      <div className="container">
        <h2>Place a Vending Machine at Your...</h2>
        <div className={styles["location-cards"]}>
          {locations.map((loc, index) => (
            <div key={index} className={styles["location-card"]}>
              <h3>{loc.h3}</h3>
              <h3>✔</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
