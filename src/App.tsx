import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Lenis from 'lenis';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import Home from '@/pages/Home';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import Contact from '@/pages/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from 'sonner';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="relative min-h-screen" style={{ backgroundColor: '#F9F9FB' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </>
  );
}
