"use client";
import Header from "./components/Header";
import Offering from "./components/Offering";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./page.css";
import { Payload } from "./components/Contact";
import Comparison from "./components/Comparison";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (form: Payload) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offering />
        <Comparison />
        <Locations />
        <Features />
        <Contact
          onSubmit={handleSubmit}
          isLoading={loading}
          success={success}
          error={error}
        />
      </main>
      <Footer />
    </>
  );
}
