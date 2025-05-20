import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <h1>Charlotte’s Premier Smart Vending Partner</h1>
        <p>
          Bring modern micro-markets and smart vending to your Charlotte
          workplace or apartment community—customized setups, seamless tech, and
          unbeatable service.
        </p>
        <div className={styles.btnContainer}>
          <a href="#contact" className="cta-button accent-button">
            Get Started
          </a>
          <a href="#offering" className="cta-button">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
