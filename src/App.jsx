import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "@/hooks/useLenis";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhyCodeWorks from "@/components/WhyCodeWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main className="relative">
        <Hero />
        <SelectedWork />
        <Services />
        <Industries />
        <WhyCodeWorks />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
