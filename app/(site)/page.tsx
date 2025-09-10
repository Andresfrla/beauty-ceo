import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";
import ServicesHero from "@/components/sections/services-hero";
import Testimonials from "@/components/sections/testimonials";


export default function Home() {
  return (
    <>
      <Hero/>
      <Products />
      <ServicesHero />
      <Testimonials/>
    </>
  );
}
