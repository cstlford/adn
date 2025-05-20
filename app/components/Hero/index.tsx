import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <h1>Modern Vending Solutions for Your Business</h1>
        <p>
          Custom vending machine setups tailored to your needs with cutting-edge
          technology and exceptional service.
        </p>
        <a href="#contact" className="cta-button accent-button">
          Get Started
        </a>
        <a href="#offering" className="cta-button">
          Learn More
        </a>
      </div>
    </section>
  );
}
