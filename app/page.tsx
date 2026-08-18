import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Studio from '@/components/Studio';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Work from '@/components/Work';
import Planner from '@/components/Planner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Studio />
        <Services />
        <Approach />
        <Work />
        <Planner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
