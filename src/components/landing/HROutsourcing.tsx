import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, UserPlus, Target, Heart, ShieldAlert, FileText, LogOut } from "lucide-react";

const scopes = [
  { icon: UserPlus, title: "Recruitment & Talent Acquisition", desc: "Job advertising, candidate screening, interviews, and onboarding." },
  { icon: Briefcase, title: "Employee Management", desc: "Contracts, employee records, HR documentation, and workforce administration." },
  { icon: Target, title: "Performance Management", desc: "Goal setting, performance reviews, and employee development." },
  { icon: Heart, title: "Employee Relations", desc: "Handling employee concerns, engagement, and workplace culture." },
  { icon: ShieldAlert, title: "Disciplinary Management", desc: "Managing misconduct cases, warnings, hearings, and compliance procedures." },
  { icon: FileText, title: "HR Policies & Compliance", desc: "Development of HR policies and ensuring adherence to labor laws." },
  { icon: LogOut, title: "Employee Exit Management", desc: "Resignations, terminations, exit processes, and final documentation." },
];

interface HROutsourcingProps {
  onBookDemo: () => void;
}

const HROutsourcing = ({ onBookDemo }: HROutsourcingProps) => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">HR Outsourcing & Workforce Management</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            We manage your entire HR function
          </h2>
          <p className="text-muted-foreground">
            Focus on growing your business while we handle your people processes professionally and in compliance with labor regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-4">
          {scopes.map((scope, i) => (
            <motion.div
              key={scope.title}
              className="glass-card p-5 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <scope.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-heading font-bold text-sm text-foreground mb-1">{scope.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{scope.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90">
            Speak to a Consultant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HROutsourcing;
