import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Products from "@/components/Products";
import ClientsCarousel from "@/components/ClientsCarousel";
import CTA from "@/components/CTA";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden min-w-0">
      <Hero />
      <Features />
      <About />
      <WhyChoose />
      <Products />
      <ClientsCarousel />
      <CTA />
      <Contact />
    </main>
  );
}