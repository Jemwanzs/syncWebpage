import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Target, BarChart3, ArrowRight, CheckCircle2,
  ClipboardCheck, TrendingUp, FileText, Star, Users
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

interface PerformanceSectionProps {
  onBookDemo: () => void;
}

const PerformanceSection = ({ onBookDemo }: PerformanceSectionProps) => {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Performance Management</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Align Goals. Track Progress. Drive Results.
              </h2>
              <p className="text-muted-foreground mb-6">
                Build a culture of accountability and continuous improvement. SyncScore helps organizations set clear objectives, track performance, and manage structured employee reviews.
              </p>
              <Button onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-heading font-bold text-foreground text-sm">Performance Overview</p>
                <span className="text-xs px-2 py-1 rounded-full bg-brand-blue-pale text-brand-blue font-medium">Q1 2026</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Goals Set", value: "48" },
                  { label: "Avg. Score", value: "82%" },
                  { label: "Reviews Done", value: "35" },
                ].map((s) => (
                  <div key={s.label} className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-lg font-heading font-bold text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {[
                  { label: "Exceeds Expectations", pct: 25, color: "bg-brand-green" },
                  { label: "Meets Expectations", pct: 55, color: "bg-brand-blue" },
                  { label: "Needs Improvement", pct: 20, color: "bg-accent" },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-foreground font-medium">{bar.label}</span>
                      <span className="text-muted-foreground">{bar.pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className={`h-full rounded-full ${bar.color}`} style={{ width: `${bar.pct}%` }} />
                    </div>
                  </div>
                ))}
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
                icon: Target,
                title: "Clear Goals & Objective Alignment",
                items: [
                  "Set company and individual objectives with clear targets",
                  "Align employee goals with departmental priorities",
                  "Structured KPIs with defined timelines and success criteria",
                ],
              },
              {
                icon: ClipboardCheck,
                title: "Structured Performance Reviews",
                items: [
                  "Employee self-assessments with evidence uploads",
                  "Manager reviews with feedback and scoring",
                  "Clear workflows for review submissions and approvals",
                ],
              },
              {
                icon: TrendingUp,
                title: "Smart Scoring & Insights",
                items: [
                  "Automated scoring based on objective weight and ratings",
                  "Identify high performers and improvement areas",
                  "Consistent performance tracking across teams",
                ],
              },
              {
                icon: BarChart3,
                title: "Performance Reports & Analytics",
                items: [
                  "Downloadable performance reports for analysis",
                  "Track completion rates, score trends, and team performance",
                  "Export-ready reports for management decisions",
                ],
              },
            ].map((feat, i) => (
              <motion.div
                key={feat.title}
                className="glass-card p-6 hover:shadow-md transition-shadow"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
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

      {/* Why Teams Choose */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Why Teams Choose SyncScore
              </h3>
              <div className="space-y-3">
                {[
                  "Clear goal alignment across the organization",
                  "Structured and transparent review processes",
                  "Reliable insights for talent and leadership decisions",
                  "Data-driven performance culture",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Target, label: "Goal setting" },
                  { icon: ClipboardCheck, label: "Self-assessments" },
                  { icon: Star, label: "Review scoring" },
                  { icon: TrendingUp, label: "Progress tracking" },
                  { icon: Users, label: "Team insights" },
                  { icon: BarChart3, label: "Analytics" },
                  { icon: FileText, label: "Export reports" },
                  { icon: Target, label: "KPI management" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                    <f.icon size={16} className="text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{f.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="section-container text-center">
          <motion.div {...fadeUp}>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Build a High-Performance Organization
            </h3>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-8">
              Track goals, run fair evaluations, and empower teams to perform at their best.
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

export default PerformanceSection;