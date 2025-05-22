import styles from "./Comparison.module.css";
export default function Comparison() {
  return (
    <section id="comparison" className={styles.comparison}>
      <h2 className={styles.title}>Smart Machines vs Regular Vending</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id
        aspernatur vitae ab quae, recusandae odio earum cupiditate facere non
        quidem quod necessitatibus molestias hic laboriosam aliquam nihil,
        deserunt ad.
      </p>
      <div className={styles.machines}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </section>
  );
}
