import ParticlesComponent from "../particlesBackground";
import { Navbar } from "./Navbar/Navbar";

export function Header() {
  return (
    <header className="relative min-h-screen bg-[url('src/assets/bg-header-mobile.png')] md:bg-[url('src/assets/bg-header-tablet.png')] xl:bg-[url('src/assets/bg-header.png')] bg-top bg-no-repeat">
      <ParticlesComponent className="absolute inset-0 -z-10" />
      <Navbar />
    </header>
  );
}
