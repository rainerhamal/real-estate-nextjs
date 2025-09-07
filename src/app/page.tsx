import Image from "next/image";
import Hero from "./components/Hero";
import NavBarHero from "./components/NavBarHero";

export default function Home() {
  return (
    <div>
        <NavBarHero />
        <Hero />
    </div>
  );
}
