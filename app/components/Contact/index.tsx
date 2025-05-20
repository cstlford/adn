import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2>Get in Touch</h2>
        <p>Ready to transform your vending experience? Contact us today.</p>

        <div className={styles["contact-container"]}>
          <div className={styles["contact-form"]}>
            <form id="form">
              <div className={styles["form-group"]}>
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles["form-control"]}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="email">Email* </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles["form-control"]}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="company">Company Name*</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className={styles["form-control"]}
                  placeholder="Example Co."
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="phone">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles["form-control"]}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles["form-control"]}
                  rows={5}
                  placeholder="Tell us about your space or any questions you have..."
                  required
                ></textarea>
              </div>
              <div className={styles["btn-container"]}>
                <button type="submit" className="cta-button accent-button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
