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

export default function Home() {
  const handleSubmit = async (form: Payload) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data.success) {
      alert("Message sent!");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offering />
        <Locations />
        <Features />
        <Contact onSubmit={handleSubmit} />
      </main>
      <Footer />
    </>
  );
}
