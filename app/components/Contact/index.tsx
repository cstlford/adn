"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";
import { div, p } from "framer-motion/client";

export type Payload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

interface Props {
  onSubmit: (form: Payload) => void;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export default function Contact({
  onSubmit,
  isLoading,
  error,
  success,
}: Props) {
  const [isInView, setIsInView] = useState(false);
  const headingRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", email: "", company: "", phone: "", message: "" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.6,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <h2 ref={headingRef}>
        Get in{" "}
        <span
          className={`${styles.animatedSpan} ${
            isInView ? styles.underlineVisible : ""
          }`}
        >
          Touch
        </span>
      </h2>
      <p>Ready to transform your vending experience? Contact us today.</p>

      <div className={styles["contact-container"]}>
        <div className={styles["contact-form"]}>
          <form onSubmit={handleSubmit}>
            <div className={styles["form-group"]}>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
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
                value={form.email}
                onChange={handleChange}
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
                value={form.company}
                onChange={handleChange}
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
                value={form.phone}
                onChange={handleChange}
                className={styles["form-control"]}
                placeholder="(555) 123-4567"
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className={styles["form-control"]}
                rows={5}
                maxLength={2000}
                placeholder="Tell us about your space or any questions you have..."
                required
              ></textarea>
            </div>
            <div className={styles["btn-container"]}>
              <button type="submit" className="cta-button accent-button">
                {isLoading ? (
                  <div className={styles.spinner} />
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>Message sent!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
