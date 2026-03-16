import { useState, useMemo } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import DemoForm from "@/components/landing/DemoForm";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle2, Calculator, Send } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const modules = [
  { id: "corehr", name: "CoreHR", price: 1 },
  { id: "leave", name: "Leave", price: 1.5 },
  { id: "payroll", name: "Payroll", price: 2.5 },
  { id: "ta", name: "Time & Attendance", price: 2 },
  { id: "performance", name: "Performance", price: 2.5 },
];

const plans = [
  { name: "Monthly", duration: 1, discount: 0, label: "Standard Price" },
  { name: "Semi-Annual", duration: 6, discount: 5, label: "5% Discount" },
  { name: "Annual", duration: 12, discount: 10, label: "10% Discount" },
  { name: "Enterprise", duration: 24, discount: 15, label: "Custom Discount" },
];

const Pricing = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedModules, setSelectedModules] = useState<string[]>(["corehr", "leave", "payroll"]);
  const [users, setUsers] = useState(100);
  const [planIndex, setPlanIndex] = useState(2); // Annual default
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const selectedPlan = plans[planIndex];

  const pricing = useMemo(() => {
    const perUser = modules
      .filter((m) => selectedModules.includes(m.id))
      .reduce((sum, m) => sum + m.price, 0);
    const monthly = perUser * users;
    const discountAmount = monthly * selectedPlan.duration * (selectedPlan.discount / 100);
    const total = monthly * selectedPlan.duration - discountAmount;
    return { perUser, monthly, discountAmount, total };
  }, [selectedModules, users, selectedPlan]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookDemo={() => setDemoOpen(true)} />

      {/* Hero */}
      <section className="gradient-hero pt-16">
        <div className="section-container section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Pricing</p>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-4">
              Flexible Pricing for Growing Teams
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">
              Choose the modules you need. Pay based on users and subscription period. Scale as you grow.
            </p>
          </motion.div>
        </div>
        <div className="h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Module Pricing Table */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Modular Pricing</h2>
            <p className="text-muted-foreground">Pay only for what you use</p>
          </motion.div>

          <motion.div {...fadeUp} className="glass-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-heading font-bold text-foreground text-sm">Module</th>
                  <th className="text-right p-4 font-heading font-bold text-foreground text-sm">Base Price</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((mod) => (
                  <tr key={mod.id} className="border-b border-border/50 last:border-0">
                    <td className="p-4 text-foreground font-medium">{mod.name}</td>
                    <td className="p-4 text-right text-muted-foreground">${mod.price} / User / Month</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="section-padding bg-muted/30">
        <div className="section-container max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Subscription Plans</h2>
            <p className="text-muted-foreground">Choose a period that fits your organization</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {plans.map((plan, i) => (
              <motion.button
                key={plan.name}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                onClick={() => setPlanIndex(i)}
                className={`p-5 rounded-xl text-center transition-all ${
                  planIndex === i
                    ? "bg-accent text-accent-foreground shadow-lg scale-105"
                    : "glass-card hover:shadow-md"
                }`}
              >
                <p className={`font-heading font-bold text-sm mb-1 ${planIndex === i ? "" : "text-foreground"}`}>
                  {plan.name}
                </p>
                <p className={`text-xs ${planIndex === i ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                  {plan.duration} {plan.duration === 1 ? "Month" : "Months"}
                </p>
                <p className={`text-xs mt-1 font-semibold ${planIndex === i ? "" : "text-accent"}`}>
                  {plan.label}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Calculator size={28} className="text-accent" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Pricing Calculator</h2>
            <p className="text-muted-foreground">Estimate your SyncScore subscription instantly</p>
          </motion.div>

          <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="glass-card p-6 space-y-6">
              <div>
                <Label className="text-foreground font-heading font-bold">Number of Users</Label>
                <Input
                  type="number"
                  min={1}
                  value={users}
                  onChange={(e) => setUsers(Math.max(1, parseInt(e.target.value) || 1))}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-foreground font-heading font-bold">Select Modules</Label>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  {modules.map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`flex items-center justify-between p-3 rounded-lg text-left text-sm transition-all ${
                        selectedModules.includes(mod.id)
                          ? "bg-accent/10 border border-accent/30"
                          : "bg-muted border border-transparent"
                      }`}
                    >
                      <span className={`font-medium ${selectedModules.includes(mod.id) ? "text-foreground" : "text-muted-foreground"}`}>
                        {mod.name}
                      </span>
                      <span className={`text-xs ${selectedModules.includes(mod.id) ? "text-accent font-semibold" : "text-muted-foreground"}`}>
                        ${mod.price}/user/mo
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-foreground font-heading font-bold">Subscription Period</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {plans.map((plan, i) => (
                    <button
                      key={plan.name}
                      onClick={() => setPlanIndex(i)}
                      className={`p-2 rounded-lg text-xs font-medium transition-all ${
                        planIndex === i
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {plan.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="glass-card p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Your Estimate</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground text-sm">Per user / month</span>
                    <span className="font-heading font-bold text-foreground">${pricing.perUser.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground text-sm">Monthly cost ({users} users)</span>
                    <span className="font-heading font-bold text-foreground">${pricing.monthly.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground text-sm">Discount ({selectedPlan.discount}%)</span>
                    <span className="font-heading font-bold text-accent">-${pricing.discountAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-foreground font-heading font-bold">Total ({selectedPlan.duration} mo.)</span>
                    <span className="text-2xl font-heading font-extrabold text-foreground">${pricing.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => setDemoOpen(true)}
                className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                Proceed With Selected Plan <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outsourcing Services */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Payroll & HR Outsourcing Services</h2>
            <p className="text-muted-foreground">Organizations may also choose fully managed services</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {[
              {
                title: "HR Outsourcing",
                items: ["HR administration", "Policy development", "Workforce planning", "Compliance advisory"],
              },
              {
                title: "Payroll Outsourcing",
                items: ["Payroll processing", "Statutory compliance", "Payslip generation", "Payroll reporting"],
              },
            ].map((svc) => (
              <motion.div key={svc.title} className="glass-card p-6" {...fadeUp}>
                <h3 className="font-heading font-bold text-foreground mb-3">{svc.title}</h3>
                <ul className="space-y-2">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center text-sm text-muted-foreground mb-8">
            Pricing varies by scope of work, employee count, complexity, and service duration.
          </motion.div>
        </div>
      </section>

      {/* Outsourcing Quote Form */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-2xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Request Outsourcing Quote</h2>
            {quoteSubmitted ? (
              <div className="glass-card p-12 text-center">
                <CheckCircle2 size={32} className="text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">Request Submitted!</h3>
                <p className="text-sm text-muted-foreground">Our team will respond with a tailored proposal.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setQuoteSubmitted(true); }} className="glass-card p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label>Organization Name</Label><Input placeholder="Company" required /></div>
                  <div><Label>Contact Email</Label><Input type="email" placeholder="email@company.com" required /></div>
                  <div><Label>Phone</Label><Input type="tel" placeholder="+254..." required /></div>
                  <div>
                    <Label>Type of Service</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hr">HR Outsourcing</SelectItem>
                        <SelectItem value="payroll">Payroll Outsourcing</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div><Label>Employee Headcount</Label><Input type="number" placeholder="100" /></div>
                  <div>
                    <Label>Service Duration</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Duration" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">6 Months</SelectItem>
                        <SelectItem value="12">12 Months</SelectItem>
                        <SelectItem value="24">24+ Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div><Label>Description of Requirements</Label><Textarea placeholder="Describe your needs..." rows={4} /></div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  <Send className="mr-2 w-4 h-4" /> Submit Request
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding gradient-hero">
        <div className="section-container text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Build Your HR Platform Today
            </h2>
            <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto mb-8">
              Choose your modules. Scale as your organization grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
                Start Pricing Calculator <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setDemoOpen(true)}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <DemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default Pricing;
