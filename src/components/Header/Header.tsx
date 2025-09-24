import ParticlesComponent from "../particlesBackground";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar/Navbar";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header
      className={`${styles.bgHeader} relative min-h-screen bg-top bg-no-repeat`}
    >
      <ParticlesComponent className="absolute inset-0 -z-10" />
      <Navbar />
      <HeroSection />
    </header>
  );
}
