import Hero from "@/components/Hero";
import Game from "@/components/Game";
import Card from "@/components/Card";
import GamesGrid from "@/components/GameGrid";
import Testimonials from "@/components/Testimonial";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Banner";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Game />
      <Card />
      <GamesGrid />
      <Testimonials />
      <Footer />
    </div>
  );
}
