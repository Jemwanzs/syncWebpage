import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import DemoForm from "@/components/landing/DemoForm";
import CoreHRSection from "@/components/platform/CoreHRSection";
import LeaveSection from "@/components/platform/LeaveSection";
import PayrollSection from "@/components/platform/PayrollSection";
import TimeAttendanceSection from "@/components/platform/TimeAttendanceSection";
import PerformanceSection from "@/components/platform/PerformanceSection";
import { motion } from "framer-motion";

const tabs = [
  { id: "corehr", label: "CoreHR" },
  { id: "leave", label: "Leave Management" },
  { id: "payroll", label: "Payroll" },
  { id: "attendance", label: "Time & Attendance" },
  { id: "performance", label: "Performance" },
];

const SaaSPlatform = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("corehr");

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookDemo={() => setDemoOpen(true)} />

      {/* Page Hero */}
      <section className="gradient-hero pt-16">
        <div className="section-container section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">SaaS Platform</p>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-4">
              The Complete HR Platform
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">
              CoreHR, Leave, Payroll, Time & Attendance, and Performance — all connected in one powerful system.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Tab Content */}
      {activeTab === "corehr" && <CoreHRSection onBookDemo={() => setDemoOpen(true)} />}
      {activeTab === "leave" && <LeaveSection onBookDemo={() => setDemoOpen(true)} />}
      {activeTab === "payroll" && <PayrollSection onBookDemo={() => setDemoOpen(true)} />}
      {activeTab === "attendance" && <TimeAttendanceSection onBookDemo={() => setDemoOpen(true)} />}
      {activeTab === "performance" && <PerformanceSection onBookDemo={() => setDemoOpen(true)} />}

      <Footer />
      <DemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default SaaSPlatform;