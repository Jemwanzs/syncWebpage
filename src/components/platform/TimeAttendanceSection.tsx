import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Clock, Smartphone, BarChart3, ArrowRight, CheckCircle2,
  Fingerprint, CalendarDays, Users, FileText, MapPin
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

interface TimeAttendanceSectionProps {
  onBookDemo: () => void;
}

const TimeAttendanceSection = ({ onBookDemo }: TimeAttendanceSectionProps) => {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Time & Attendance</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Track Time. Control Workforce. Stay Accurate.
              </h2>
              <p className="text-muted-foreground mb-6">
                Monitor attendance across teams and locations in real time. SyncScore simplifies how organizations capture, review, and act on employee time data.
              </p>
              <Button onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-heading font-bold text-foreground text-sm">Live Attendance</p>
                <span className="text-xs px-2 py-1 rounded-full bg-brand-green-pale text-brand-green font-medium">Live</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Present", value: "142", color: "text-brand-green" },
                  { label: "Late", value: "8", color: "text-accent" },
                  { label: "Absent", value: "5", color: "text-destructive" },
                ].map((s) => (
                  <div key={s.label} className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className={`text-lg font-heading font-bold ${s.color}`}>{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {[
                  { name: "John Kamau", time: "08:02 AM", status: "On Time", color: "bg-brand-green-pale text-brand-green" },
                  { name: "Mary Njeri", time: "08:34 AM", status: "Late", color: "bg-accent/10 text-accent" },
                  { name: "Peter Ochieng", time: "—", status: "Absent", color: "bg-destructive/10 text-destructive" },
                ].map((e) => (
                  <div key={e.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="text-sm font-medium text-foreground">{e.name}</p>
                      <p className="text-xs text-muted-foreground">{e.time}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${e.color}`}>{e.status}</span>
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
                icon: Fingerprint,
                title: "Smart Clock-In & Biometric Integration",
                desc: "Capture accurate attendance from multiple sources.",
                items: [
                  "Mobile clock-in with secure location validation",
                  "Direct integration with biometric devices",
                  "Real-time sync of clock-in and clock-out records",
                  "Central dashboard for workforce visibility",
                ],
              },
              {
                icon: CalendarDays,
                title: "Automated Attendance Tracking",
                desc: "Stay on top of daily workforce activity.",
                items: [
                  "Automatic tracking of working hours and logs",
                  "Identify late arrivals, absenteeism, and shift patterns",
                  "Structured records across branches and teams",
                ],
              },
              {
                icon: Clock,
                title: "Overtime Management & Payroll Sync",
                desc: "Handle overtime quickly and accurately.",
                items: [
                  "Direct overtime approvals by supervisors or HR",
                  "Track approved extra hours clearly",
                  "Push approved overtime directly to payroll",
                ],
              },
              {
                icon: BarChart3,
                title: "Reports Ready for Review",
                desc: "Generate insights instantly.",
                items: [
                  "Downloadable attendance reports for review",
                  "Filter by employee, branch, department, or date",
                  "Export-ready reports for HR and management",
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
                  "Accurate attendance with biometric integration",
                  "Faster approvals and payroll alignment",
                  "Ready-to-use reports for HR and management",
                  "Clear workforce visibility across locations",
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
                  { icon: Fingerprint, label: "Biometric sync" },
                  { icon: Smartphone, label: "Mobile clock-in" },
                  { icon: MapPin, label: "Location validation" },
                  { icon: Clock, label: "Overtime tracking" },
                  { icon: BarChart3, label: "Attendance reports" },
                  { icon: Users, label: "Team visibility" },
                  { icon: CalendarDays, label: "Shift management" },
                  { icon: FileText, label: "Export-ready data" },
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
              Manage Workforce Time With Confidence
            </h3>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-8">
              Capture attendance accurately, approve overtime quickly, and keep payroll aligned.
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

export default TimeAttendanceSection;