import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CalendarDays, Bell, CheckCircle2, Users, Settings2, ArrowRight,
  Smartphone, BarChart3, ShieldCheck, Clock
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

interface LeaveSectionProps {
  onBookDemo: () => void;
}

const LeaveSection = ({ onBookDemo }: LeaveSectionProps) => {
  return (
    <div>
      {/* Leave Hero */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Leave Management</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Manage Time Off Without Emails or Spreadsheets
              </h2>
              <p className="text-muted-foreground mb-6">
                SyncScore simplifies leave for modern teams. Employees request leave anywhere, managers approve in seconds, and HR gains full visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-heading font-bold text-foreground text-sm">Leave Dashboard</p>
                <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium">Live</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Annual", used: 8, total: 21 },
                  { label: "Sick", used: 2, total: 10 },
                  { label: "Comp.", used: 1, total: 5 },
                ].map((b) => (
                  <div key={b.label} className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">{b.label}</p>
                    <p className="text-lg font-heading font-bold text-foreground">{b.total - b.used}</p>
                    <p className="text-xs text-muted-foreground">remaining</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {[
                  { name: "Annual Leave", dates: "Mar 15-19", status: "Approved", color: "bg-emerald-100 text-emerald-700" },
                  { name: "Sick Leave", dates: "Mar 22", status: "Pending", color: "bg-amber-100 text-amber-700" },
                ].map((req) => (
                  <div key={req.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="text-sm font-medium text-foreground">{req.name}</p>
                      <p className="text-xs text-muted-foreground">{req.dates}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${req.color}`}>{req.status}</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Self-Service Leave Requests",
                desc: "Submit from mobile or desktop. See real-time balances before applying. Instant confirmations.",
              },
              {
                icon: Bell,
                title: "Smart Approvals & Notifications",
                desc: "Requests auto-route to the right managers. Approve or decline with one click. Instant notifications.",
              },
              {
                icon: ShieldCheck,
                title: "Accurate Tracking & Compliance",
                desc: "Real-time balance updates. System flags conflicts or insufficient balances. Prevent overlapping requests.",
              },
              {
                icon: CalendarDays,
                title: "Team Calendars & Visibility",
                desc: "Visual team calendars. Sync with public holidays and custom workdays. Align leave with shifts.",
              },
              {
                icon: Settings2,
                title: "Flexible Approval Workflows",
                desc: "Single or multi-level approval flows. Align approvals with managers, team leads, or HR.",
              },
              {
                icon: BarChart3,
                title: "Leave Reports & Analytics",
                desc: "Department-level oversight. Compliance checks. Leave reports with actionable insights.",
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
                <p className="text-sm text-muted-foreground">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Modern Teams */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Built for Modern Teams
              </h3>
              <div className="space-y-3">
                {[
                  "Companies leaving spreadsheets behind",
                  "HR teams managing multiple departments",
                  "Leaders seeking transparency and fairness",
                  "Organizations improving workforce planning",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Features Grid */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">Key Features at a Glance</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Smartphone, label: "Self-service" },
                  { icon: Settings2, label: "Automated workflows" },
                  { icon: Clock, label: "Real-time balances" },
                  { icon: CalendarDays, label: "Holiday awareness" },
                  { icon: ShieldCheck, label: "Compliance checks" },
                  { icon: Users, label: "Team calendars" },
                  { icon: BarChart3, label: "Dept. oversight" },
                  { icon: BarChart3, label: "Leave analytics" },
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

      {/* Leave CTA */}
      <section className="section-padding gradient-hero">
        <div className="section-container text-center">
          <motion.div {...fadeUp}>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Manage Leave Smarter
            </h3>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-8">
              With SyncScore, leave management is faster, clearer, and effortless — so HR can focus on people, not paperwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
                Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LeaveSection;
