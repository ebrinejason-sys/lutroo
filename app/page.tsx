import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Portfolio from '@/components/Portfolio';
import SpacePlanner from '@/components/SpacePlanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-obsidian relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Approach />
      <Portfolio />
      <SpacePlanner />
      <Contact />
      <Footer />
    </main>
  );
}
