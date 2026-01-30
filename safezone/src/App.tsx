import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollNarrative from './components/ScrollNarrative';
import Features from './components/Features';
import SafetyDemo from './components/SafetyDemo';
import ShareableQuote from './components/ShareableQuote';
import FAQ from './components/FAQ';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <ScrollNarrative />
          <Features />
          <SafetyDemo />
          <ShareableQuote />
          <FAQ />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
}
