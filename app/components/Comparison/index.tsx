import styles from "./Comparison.module.css";
import VendingCard from "../VendingCard";

export type card = {
  title: string;
  image: string;
  features: string[];
  type: string;
};

const cards = [
  {
    title: "Traditional Vending",
    image: "/classic.png",
    features: [
      "Assortment limitations",
      "Products get stuck",
      "Limited telemetry",
      "Static prices",
      "Old-fashioned payment",
      "Not customer friendly",
    ],
    type: "traditional",
  },
  {
    title: "Smart Machine",
    image: "/fridge.png",
    features: [
      "Wide assortment",
      "Self serving",
      "Data to sell more",
      "Dynamic prices",
      "Contactless payment",
      "Enhanced customer experience",
    ],
    type: "modern",
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className={styles.comparison}>
      <h2 className={styles.title}>
        {"Traditional Vending\nvs\n"}
        <span className={styles.badgeWrapper}>
          Smart Machines
          <img src="/bulb.svg" alt="" className={styles.lightbulb} />
        </span>
      </h2>

      <div className={styles.grid}>
        {cards.map((card, i) => (
          <VendingCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
}
