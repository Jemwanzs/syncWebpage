import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import DemoForm from "@/components/landing/DemoForm";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Banknote, ShieldCheck, ArrowRight, CheckCircle2, FileText,
  Users, BarChart3, Search, UserCheck, Scale, BookOpen, LogOut,
  Calculator, ClipboardCheck, HeadphonesIcon, Target
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const tabs = [
  { id: "payroll", label: "Payroll Outsourcing" },
  { id: "hr", label: "HR Outsourcing" },
];

const Outsourcing = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("payroll");

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookDemo={() => setDemoOpen(true)} />

      {/* Hero */}
      <section className="gradient-hero pt-16">
        <div className="section-container section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Outsourcing Services</p>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-4">
              Expert HR & Payroll Services
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">
              Let our specialists handle your payroll and HR functions while you focus on growing your business.
            </p>
          </motion.div>

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

      {activeTab === "payroll" && <PayrollOutsourcingContent onBookDemo={() => setDemoOpen(true)} />}
      {activeTab === "hr" && <HROutsourcingContent onBookDemo={() => setDemoOpen(true)} />}

      <Footer />
      <DemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

/* ─── Payroll Outsourcing ─── */
const PayrollOutsourcingContent = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const sections = [
    {
      icon: Calculator,
      title: "End-to-End Payroll Processing",
      desc: "Reliable payroll every cycle.",
      items: [
        "Employee payroll records management",
        "Payroll processing and salary calculations",
        "Earnings, allowances, benefits, and overtime management",
        "Payroll adjustments and reconciliations",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Statutory Compliance & Tax Management",
      desc: "Stay compliant with changing regulations.",
      items: [
        "PAYE tax calculations and filing",
        "NSSF, SHIF, and Housing Levy compliance",
        "HELB and any other statutory deductions",
        "Monthly statutory returns and remittances",
      ],
    },
    {
      icon: FileText,
      title: "Payslips & Employee Payroll Records",
      desc: "Clear payroll information for every employee.",
      items: [
        "Digital or printable payslip generation",
        "Secure employee payroll records",
        "Payroll summaries for management",
        "Historical payroll data tracking",
      ],
    },
    {
      icon: BarChart3,
      title: "Payroll Reporting & Insights",
      desc: "Make informed decisions with reliable payroll data.",
      items: [
        "Monthly payroll summaries",
        "Statutory contribution reports",
        "Department or project payroll cost reports",
        "Payroll variance and reconciliation reports",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Payroll Audits & Reconciliations",
      desc: "Maintain accuracy and accountability.",
      items: [
        "Payroll data audits",
        "Statutory reconciliation checks",
        "Error correction and adjustments",
        "Compliance documentation support",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Payroll Advisory & Support",
      desc: "Expert guidance when you need it.",
      items: [
        "Payroll policy guidance",
        "Tax and statutory compliance support",
        "Payroll structure optimization",
        "HR and payroll coordination support",
      ],
    },
  ];

  return (
    <div>
      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="section-container text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Accurate. Compliant. Fully Managed.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let our payroll specialists manage your payroll from start to finish. We handle calculations, compliance, filings, and reporting so your team can focus on running the business.
            </p>
            <Button onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Talk to a Payroll Expert <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((s, i) => (
              <motion.div key={s.title} className="glass-card p-6 hover:shadow-md transition-shadow" {...fadeUp} transition={{ delay: i * 0.08 }}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <s.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
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

      {/* Why Outsource */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Why Organizations Outsource Payroll</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Reduce administrative workload",
              "Ensure full statutory compliance",
              "Improve payroll accuracy and transparency",
              "Access professional payroll expertise",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 p-4 rounded-lg bg-muted/50">
                <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="section-container text-center">
          <motion.div {...fadeUp}>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Let Payroll Experts Handle the Complexity
            </h3>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-8">
              Focus on growing your organization while we manage your payroll with precision and care.
            </p>
            <Button size="lg" onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
              Talk to a Payroll Expert <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

/* ─── HR Outsourcing ─── */
const HROutsourcingContent = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const services = [
    {
      icon: Search,
      title: "Recruitment & Talent Acquisition",
      desc: "Find the right people faster.",
      items: ["Job advertising and talent sourcing", "Candidate screening and interviews", "Offer management and onboarding"],
    },
    {
      icon: Users,
      title: "Employee Records & HR Administration",
      desc: "Organized and compliant employee management.",
      items: ["Employment contracts and documentation", "Employee records and HR files", "Workforce administration support"],
    },
    {
      icon: Target,
      title: "Performance Management",
      desc: "Support employee growth and productivity.",
      items: ["Goal setting and performance reviews", "Employee development planning", "Performance tracking and feedback"],
    },
    {
      icon: UserCheck,
      title: "Employee Relations",
      desc: "Build a healthy workplace culture.",
      items: ["Employee grievance handling", "Conflict resolution support", "Employee engagement guidance"],
    },
    {
      icon: Scale,
      title: "Disciplinary Management",
      desc: "Structured and compliant processes.",
      items: ["Misconduct investigations", "Warning letters and disciplinary actions", "Disciplinary hearings and documentation"],
    },
    {
      icon: BookOpen,
      title: "HR Policies & Compliance",
      desc: "Stay aligned with labor laws.",
      items: ["HR policies and employee handbook", "Workplace compliance procedures", "Labor regulation advisory"],
    },
    {
      icon: LogOut,
      title: "Employee Exit Management",
      desc: "Professional offboarding processes.",
      items: ["Resignations and terminations", "Exit interviews and clearance", "Final documentation and records"],
    },
  ];

  return (
    <div>
      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="section-container text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Your HR Function. Fully Managed.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We manage your entire HR function — from hiring to employee management — while ensuring compliance with labor regulations.
            </p>
            <Button onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Speak to a Consultant <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.title} className="glass-card p-6 hover:shadow-md transition-shadow" {...fadeUp} transition={{ delay: i * 0.08 }}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <s.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
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

      {/* Why Outsource */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Why Organizations Outsource HR</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Reduce HR administrative workload",
              "Ensure compliance with labor laws",
              "Access professional HR expertise",
              "Improve employee management processes",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 p-4 rounded-lg bg-muted/50">
                <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="section-container text-center">
          <motion.div {...fadeUp}>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Focus on Your Business. We'll Handle HR.
            </h3>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-8">
              Professional HR services that keep your people processes compliant, organized, and efficient.
            </p>
            <Button size="lg" onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
              Speak to a Consultant <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Outsourcing;