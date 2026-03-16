import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Banknote, ShieldCheck, BarChart3, ArrowRight, CheckCircle2,
  Lock, Settings2, FileText, Quote, Calculator
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

interface PayrollSectionProps {
  onBookDemo: () => void;
}

const PayrollSection = ({ onBookDemo }: PayrollSectionProps) => {
  return (
    <div>
      {/* Payroll Hero */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Payroll Management</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                Simplified. Smart. Accurate.
              </h2>
              <p className="text-muted-foreground mb-6">
                Run payroll with confidence and precision. SyncScore automates earnings, deductions, approvals, and reporting — all in one seamless platform.
              </p>
              <Button onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-heading font-bold text-foreground text-sm">Payroll Summary — March 2026</p>
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">Processed</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { label: "Gross Payroll", value: "KES 4,235,000" },
                  { label: "Net Pay", value: "KES 3,180,000" },
                  { label: "PAYE", value: "KES 628,000" },
                  { label: "NSSF", value: "KES 180,000" },
                  { label: "SHIF", value: "KES 147,000" },
                  { label: "Housing Levy", value: "KES 63,500" },
                  { label: "Pension", value: "KES 215,000" },
                  { label: "HELB", value: "KES 48,000" },
                  { label: "Other Deductions", value: "KES 95,500" },
                ].map((s) => (
                  <div key={s.label} className="bg-muted rounded-lg p-2.5">
                    <p className="text-[10px] text-muted-foreground leading-tight">{s.label}</p>
                    <p className="text-xs font-heading font-bold text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-3/4 bg-accent rounded-full" />
                </div>
                <span className="text-xs text-muted-foreground">75% approved</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Banknote,
                title: "Flexible Earnings & Benefits",
                items: [
                  "Cash & non-cash benefits with clear tax rules",
                  "Allowances, bonuses, overtime, commissions",
                  "Apply benefits to all or specific employees",
                  "Specify impact on Housing Levy, SHIF, NSSF",
                  "Taxable and non-taxable benefit configuration",
                ],
              },
              {
                icon: Calculator,
                title: "Intelligent Deductions",
                items: [
                  "Fixed, recurring, percentage, or tiered deductions",
                  "Statutory (PAYE, NSSF, SHIF, AHL, HELB) & custom",
                  "Schedule one-off or recurring deductions",
                  "Upload & assign deductions in bulk",
                ],
              },
              {
                icon: Settings2,
                title: "Streamlined Payroll Workflow",
                items: [
                  "Guided payroll workflow for each cycle",
                  "Custom approval paths with comments & flags",
                  "Audit trails for every action",
                  "Collaborative reviews for faster approvals",
                ],
              },
              {
                icon: Lock,
                title: "Role-Based Access & Security",
                items: [
                  "Control who can view, edit, process, or approve",
                  "Maintain internal controls across teams",
                  "Protect sensitive payroll information",
                  "Lock payroll after processing",
                ],
              },
            ].map((feat, i) => (
              <motion.div
                key={feat.title}
                className="glass-card p-6 hover:shadow-md transition-shadow"
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <feat.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-3">{feat.title}</h3>
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

      {/* Reporting */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Payroll Reporting & Insights
              </h3>
              <p className="text-muted-foreground mb-6">Turn payroll data into actionable insights.</p>
              <ul className="space-y-3">
                {[
                  "Reports on earnings, deductions & statutory contributions",
                  "Breakdown by branch, department, project",
                  "Audit-ready & management-ready reports",
                  "Track costs, headcount, variance, & trends",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="glass-card p-6">
              <div className="space-y-3">
                {[
                  { label: "Gross Payroll", pct: 100, color: "bg-accent" },
                  { label: "Net Pay", pct: 75, color: "bg-blue-500" },
                  { label: "PAYE", pct: 15, color: "bg-amber-500" },
                  { label: "NSSF + SHIF", pct: 10, color: "bg-rose-400" },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-medium">{bar.label}</span>
                      <span className="text-muted-foreground">{bar.pct}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                      <div className={`h-full rounded-full ${bar.color}`} style={{ width: `${bar.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Teams Choose */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Why Teams Choose SyncScore
              </h3>
              <div className="space-y-3">
                {[
                  "Reduce manual payroll work by days",
                  "Ensure statutory compliance — 100%",
                  "Strengthen internal controls and accountability",
                  "Deliver reliable, actionable reports",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="glass-card p-8">
              <Quote size={28} className="text-accent/30 mb-4" />
              <blockquote className="text-lg font-heading font-medium text-foreground leading-relaxed mb-4">
                "SyncScore has completely streamlined how we manage payroll and HR operations. What used to take days now takes hours — with far greater accuracy."
              </blockquote>
              <p className="text-sm text-muted-foreground">— HR Leader, Regional Retail Organization</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Payroll CTA */}
      <section className="section-padding gradient-hero">
        <div className="section-container text-center">
          <motion.div {...fadeUp}>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Automate Payroll. Focus on What Matters Most.
            </h3>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-8">
              Spend less time fixing payroll issues and more time growing your organization.
            </p>
            <Button size="lg" onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PayrollSection;
