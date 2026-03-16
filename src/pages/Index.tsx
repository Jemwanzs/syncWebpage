import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustedBy from "@/components/landing/TrustedBy";
import ModulesSection from "@/components/landing/ModulesSection";
import WhySyncScore from "@/components/landing/WhySyncScore";
import PayrollOutsourcing from "@/components/landing/PayrollOutsourcing";
import HROutsourcing from "@/components/landing/HROutsourcing";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import DemoForm from "@/components/landing/DemoForm";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookDemo={openDemo} />
      <HeroSection onBookDemo={openDemo} />
      <TrustedBy />
      <ModulesSection />
      <WhySyncScore />
      <PayrollOutsourcing onBookDemo={openDemo} />
      <HROutsourcing onBookDemo={openDemo} />
      <Testimonials />
      <FinalCTA onBookDemo={openDemo} />
      <Footer />
      <DemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default Index;
