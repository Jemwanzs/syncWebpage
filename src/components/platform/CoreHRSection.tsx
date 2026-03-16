import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, FileText, Clock, ArrowRight, Shield, FolderOpen, UserCheck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

interface CoreHRSectionProps {
  onBookDemo: () => void;
}

const CoreHRSection = ({ onBookDemo }: CoreHRSectionProps) => {
  return (
    <div>
      {/* CoreHR Hero */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">CoreHR</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Smarter People Management
              </h2>
              <p className="text-muted-foreground mb-6">
                Centralize employee data and track the full employee lifecycle from one secure system.
              </p>
              <Button onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90">
                Explore CoreHR <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            {/* Dashboard mockup */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="glass-card p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <UserCheck className="text-accent" size={28} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Jane Mwangi</p>
                    <p className="text-sm text-muted-foreground">Senior HR Officer · Permanent</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Department", value: "Human Resources" },
                    { label: "Branch", value: "Nairobi HQ" },
                    { label: "Status", value: "Active" },
                  ].map((s) => (
                    <div key={s.label} className="bg-muted rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                      <p className="text-sm font-semibold text-foreground">{s.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  {["Documents", "Job History", "Contracts"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Centralized Records */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="text-blue-600" size={22} />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">Employee Profile</p>
                  <p className="text-xs text-muted-foreground">Complete & up-to-date</p>
                </div>
              </div>
              <div className="space-y-2">
                {["Personal Info & Emergency Contacts", "Contracts & HR Documents", "Job History & Promotions", "Next-of-Kin Details", "Classifications: Permanent, Contract, Casual, Expats"].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Centralized Employee Records
              </h3>
              <p className="text-muted-foreground">
                Keep complete profiles for every employee — personal info, contracts, job history, classifications, and more — all in one secure place.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Document Management */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Smart Document Management
              </h3>
              <p className="text-muted-foreground mb-6">
                Store and access documents securely with automated expiry alerts and easy retrieval.
              </p>
              <div className="space-y-3">
                {[
                  { icon: FileText, text: "Employment contracts (with expiry alerts)" },
                  { icon: Shield, text: "Certifications & IDs" },
                  { icon: FolderOpen, text: "HR letters & notices" },
                  { icon: FileText, text: "Policy acknowledgements" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="glass-card p-6">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">Document Library</p>
              <div className="space-y-3">
                {[
                  { name: "Employment Contract.pdf", status: "Active", color: "bg-emerald-100 text-emerald-700" },
                  { name: "ID Copy - National.pdf", status: "Verified", color: "bg-blue-100 text-blue-700" },
                  { name: "NSSF Certificate.pdf", status: "Expiring", color: "bg-amber-100 text-amber-700" },
                  { name: "Company Policy Ack.pdf", status: "Signed", color: "bg-emerald-100 text-emerald-700" },
                ].map((doc) => (
                  <div key={doc.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <FileText size={16} className="text-muted-foreground" />
                      <span className="text-sm text-foreground">{doc.name}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${doc.color}`}>{doc.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lifecycle Tracking */}
      <section className="section-padding bg-muted/30">
        <div className="section-container text-center mb-12">
          <motion.div {...fadeUp}>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Employee Lifecycle Tracking
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Monitor every stage of employment with ease — from onboarding to exit.
            </p>
          </motion.div>
        </div>
        <div className="section-container">
          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-4">
            {[
              { step: "Onboarding", icon: "🚀" },
              { step: "Probation", icon: "⏳" },
              { step: "Promotion", icon: "📈" },
              { step: "Transfer", icon: "🔄" },
              { step: "Salary Adjustment", icon: "💰" },
              { step: "Suspension", icon: "⚠️" },
              { step: "Reactivation", icon: "✅" },
              { step: "Exit", icon: "👋" },
            ].map((stage, i) => (
              <div key={stage.step} className="flex items-center gap-2">
                <div className="glass-card px-5 py-4 text-center hover:shadow-md transition-shadow">
                  <span className="text-2xl mb-2 block">{stage.icon}</span>
                  <p className="text-sm font-heading font-semibold text-foreground">{stage.step}</p>
                </div>
                {i < 7 && <span className="hidden md:block text-muted-foreground">→</span>}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoreHRSection;
