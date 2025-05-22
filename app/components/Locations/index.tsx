import styles from "./Locations.module.css";

const locations = [
  { h3: "Apartment Building", icon: "/apartment.svg" },
  { h3: "Hospital or Clinic", icon: "/hospital.svg" },
  { h3: "Warehouse or Distribution Center", icon: "/warehouse.svg" },
  { h3: "Office or Commercial Property", icon: "/office.svg" },
  { h3: "Auto Shop or Dealership", icon: "/car.svg" },
  { h3: "School or Gym", icon: "/school.svg" },
];

export default function Locations() {
  return (
    <section id="locations" className={styles.locations}>
      <h2 className={styles.title}>
        Place a <span className={styles.span}>Vending Machine</span> at Your...
      </h2>
      <div className={styles.grid}>
        {locations.map((location, i) => (
          <div key={i} className={styles.locationItem}>
            <img src={location.icon} alt="" className={styles.icon} />
            <h3 className={styles.locationText}>{location.h3}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
