import Header from "./components/Header";
import Offering from "./components/Offering";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offering />
        <Locations />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
