import styles from "./Features.module.css";

const features = [
  { h3: "Free Machine Installation", src: "/move.svg" },
  { h3: "Fully Stocked & Maintained", src: "/stocked.svg" },
  { h3: "Top Brands & Fast Restocking", src: "/fast.svg" },
  { h3: "No Cost to You – Ever", src: "/free.svg" },
  {
    h3: "Monthly Commission / Profit Share for You!",
    src: "/profit_share.svg",
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className={styles.intro}>
          <h2>
            Why Choose <span>ADN Vending</span>?
          </h2>
          <p>
            {`We're a local provider offering professional, hands-free vending
            services with full transparency. You provide the space – we handle
            the rest.`}
          </p>
        </div>
        <div className={styles["feature-grid"]}>
          {features.map((feature, index) => (
            <div key={index} className={styles["feature-item"]}>
              <div className={styles["feature-icon"]}>
                <img src={feature.src} alt="" />
              </div>
              <h3>{feature.h3}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
