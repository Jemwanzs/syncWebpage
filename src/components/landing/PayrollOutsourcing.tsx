import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const services = [
  "Payroll processing & salary calculations",
  "Statutory compliance and deductions",
  "Payslip generation and employee payroll records",
  "Monthly payroll reports and summaries",
  "Tax filing and statutory remittances (PAYE, NSSF, SHIF, Housing Levy, etc.)",
  "Payroll audits and reconciliations",
  "Leave, overtime, and deductions management",
  "Payroll advisory and compliance support",
];

interface PayrollOutsourcingProps {
  onBookDemo: () => void;
}

const PayrollOutsourcing = ({ onBookDemo }: PayrollOutsourcingProps) => {
  return (
    <section id="outsourcing" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Payroll Outsourcing</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              End-to-end payroll management
            </h2>
            <p className="text-muted-foreground mb-8">
              Let our experts handle your payroll so you can focus on what matters most — your people and your business.
            </p>

            <ul className="space-y-3 mb-8">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{s}</span>
                </li>
              ))}
            </ul>

            <Button onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Talk to a Payroll Expert
            </Button>
          </motion.div>

          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {["Input Data", "Calculate Salaries", "Apply Deductions", "Generate Payslips", "File Returns"].map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-heading font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1 h-12 rounded-lg bg-muted flex items-center px-4">
                    <span className="text-sm font-medium text-foreground">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PayrollOutsourcing;
