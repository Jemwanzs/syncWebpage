import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import DemoForm from "@/components/landing/DemoForm";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Smartphone, FileText, CalendarDays, BarChart3, ArrowRight,
  CheckCircle2, Bell, Banknote, FolderOpen, Clock
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ESS = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  const features = [
    {
      icon: FileText,
      title: "Payslips & Tax Forms",
      desc: "Access payroll documents anytime.",
      items: ["View and download payslips", "Access Annual P9 forms for ITR filing", "View historical payroll records"],
    },
    {
      icon: CalendarDays,
      title: "Leave Requests & Tracking",
      desc: "Apply for leave in seconds.",
      items: ["Submit leave requests", "Track approvals in real time", "View leave history"],
    },
    {
      icon: Clock,
      title: "Leave Balances",
      desc: "Know your available leave.",
      items: ["View balances by leave type", "Annual, sick, study leave, etc.", "Plan time off easily"],
    },
    {
      icon: Banknote,
      title: "Salary Advance Requests",
      desc: "Request advances where enabled.",
      items: ["Apply for salary advances", "View limits and eligibility", "Track approval status"],
    },
    {
      icon: FolderOpen,
      title: "Documents & Personal Records",
      desc: "Secure access to employee files.",
      items: ["Download HR documents", "Access contracts and letters", "View personal records and contacts"],
    },
    {
      icon: Bell,
      title: "Notifications & Updates",
      desc: "Stay informed instantly.",
      items: ["Leave approval alerts", "Advance request updates", "Document notifications"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookDemo={() => setDemoOpen(true)} />

      {/* Hero */}
      <section className="gradient-hero pt-16">
        <div className="section-container section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Employee Self-Service</p>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-4">
              Work Access. Anytime.
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-8">
              SyncScore ESS gives employees secure access to payroll, leave, and personal records — directly from their mobile devices.
            </p>
            <Button size="lg" onClick={() => setDemoOpen(true)} className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
              Explore ESS <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
        <div className="h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Mobile Dashboard Preview */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-sm mx-auto glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone size={20} className="text-accent" />
              <p className="font-heading font-bold text-foreground text-sm">ESS Mobile</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: "Annual Leave", value: "13 days" },
                { label: "Sick Leave", value: "8 days" },
                { label: "Pending Requests", value: "1" },
                { label: "Latest Payslip", value: "Mar 2026" },
              ].map((s) => (
                <div key={s.label} className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-heading font-bold text-foreground">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="p-3 rounded-lg bg-brand-green-pale text-brand-green text-xs font-medium">
                ✓ Leave approved — Annual Leave Mar 15-19
              </div>
              <div className="p-3 rounded-lg bg-accent/10 text-accent text-xs font-medium">
                ⏳ Advance request pending approval
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="glass-card p-6 hover:shadow-md transition-shadow"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <feat.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{feat.desc}</p>
                <ul className="space-y-2">
                  {feat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Employees Love ESS */}
      <section className="section-padding bg-background">
        <div className="section-container text-center">
          <motion.div {...fadeUp}>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
              Why Employees Love ESS
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                "Instant payroll access",
                "Easy leave management",
                "Secure document access",
                "Mobile convenience",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 p-4 rounded-lg bg-muted/50">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <DemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default ESS;