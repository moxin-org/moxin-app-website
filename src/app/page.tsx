import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import AppShowcase from "@/components/AppShowcase";
import Technology from "@/components/Technology";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Philosophy />
      <AppShowcase />
      <Technology />
      <CallToAction />
      <Footer />
    </main>
  );
}
