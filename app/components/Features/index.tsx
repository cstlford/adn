import styles from "./Features.module.css";

const features = [
  {
    h3: "Convenience",
    src: "/move.svg",
    h4: "No cost, no maintenance, no hassle",
  },
  {
    h3: "Employee Experience",
    src: "/food.svg",
    h4: "Boost workplace satisfaction with snacks, drinks, and healthy options",
  },
  {
    h3: "Smart Tech",
    src: "/smart.svg",
    h4: "Cashless, 24/7 access, and real-time inventory tracking",
  },
  {
    h3: "Revenue Sharing",
    src: "/profit_share.svg",
    h4: "Turn your unused space into a passive income stream",
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.intro}>
        <h2>
          Why Choose <span>ADN Vending</span>?
        </h2>
        <p>
          {`We're a local, family-owned provider offering professional, hands-free vending
            services with full transparency. You provide the space – we handle
            the rest.`}
        </p>
      </div>
      <div className={styles["feature-grid"]}>
        {features.map((feature, index) => (
          <div key={index} className={styles["feature-item"]}>
            <h3>{feature.h3}</h3>
            <div className={styles["feature-icon"]}>
              <img src={feature.src} alt="" />
            </div>
            <h4>{feature.h4}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
