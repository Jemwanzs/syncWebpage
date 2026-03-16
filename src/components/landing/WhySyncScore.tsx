import { motion } from "framer-motion";
import { Building2, Calculator, Settings2, Cloud, UserCheck, BarChart3 } from "lucide-react";

const features = [
  { icon: Building2, title: "Multi-branch ready", description: "Manage distributed teams across locations seamlessly." },
  { icon: Calculator, title: "Accurate payroll engine", description: "Precision payroll with statutory compliance built in." },
  { icon: Settings2, title: "Configurable HR workflows", description: "Adapt processes to your unique organizational needs." },
  { icon: Cloud, title: "Cloud access", description: "Access your HR platform anywhere, anytime, on any device." },
  { icon: UserCheck, title: "Employee self-service", description: "Empower employees to manage their own HR tasks." },
  { icon: BarChart3, title: "HR analytics & insights", description: "Data-driven decisions with powerful reporting dashboards." },
];

const WhySyncScore = () => {
  return (
    <section id="why" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Why SyncScore</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Built for the way modern HR teams work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <feat.icon size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{feat.title}</h3>
                <p className="text-sm text-muted-foreground">{feat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySyncScore;
