import styles from "./VendingCard.module.css";
import { CheckCircle, XCircle } from "lucide-react";
import { card } from "../Comparison";

export default function VendingCard(card: card) {
  return (
    <div className={styles.card}>
      <img src={card.image} alt={card.title} className={styles.image} />
      <div className={styles.body}>
        <h3 className={styles.title}>{card.title}</h3>
        {card.features.map((text, idx) => (
          <div key={idx} className={styles.feature}>
            {card.type === "modern" ? (
              <CheckCircle color="#16a34a" size={20} />
            ) : (
              <XCircle color="#ef4444" size={20} />
            )}
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
