import { motion } from "framer-motion";
import { Users, CalendarDays, Banknote, Clock, Target } from "lucide-react";

const modules = [
  {
    icon: Users,
    title: "CoreHR",
    description: "Employee records & org structure",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: CalendarDays,
    title: "Leave",
    description: "Requests, approvals, balances",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Banknote,
    title: "Payroll",
    description: "Automated, compliant processing",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Clock,
    title: "Time & Attendance",
    description: "Shift & attendance tracking",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: Target,
    title: "Performance",
    description: "Goals, reviews, insights",
    color: "bg-rose-500/10 text-rose-600",
  },
];

const ModulesSection = () => {
  return (
    <section id="modules" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Platform Modules</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Everything you need to manage your people
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              className="glass-card p-6 text-center hover:shadow-md transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-xl ${mod.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <mod.icon size={28} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{mod.title}</h3>
              <p className="text-sm text-muted-foreground">{mod.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#modules" className="text-accent font-semibold hover:underline text-sm">
            Explore Platform →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
