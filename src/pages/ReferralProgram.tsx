import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import DemoForm from "@/components/landing/DemoForm";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle2, Gift, Send } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const steps = [
  { num: 1, title: "Submit a Referral", desc: "Complete the form with your details and the company you're introducing." },
  { num: 2, title: "Product Demo", desc: "We demonstrate SyncScore and discuss their payroll or HR needs." },
  { num: 3, title: "Qualification", desc: "Our team reviews the lead and contacts the company for discovery." },
  { num: 4, title: "Deal Closure", desc: "If the company signs up for SyncScore, the referral is confirmed." },
  { num: 5, title: "Earn Your Reward", desc: "Receive up to KSh 250,000 or 10% of ACV." },
];

const ReferralProgram = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookDemo={() => setDemoOpen(true)} />

      {/* Hero */}
      <section className="gradient-hero pt-16">
        <div className="section-container section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Gift size={32} className="text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-4">
              Earn by Referring Businesses to SyncScore
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-4">
              Know a company struggling with payroll or HR processes? Refer them to SyncScore and earn up to{" "}
              <span className="text-accent font-bold">KSh 250,000</span> or{" "}
              <span className="text-accent font-bold">10% of Annual Contract Value</span> for every successful referral.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 mt-4">
              Submit a Referral <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
        <div className="h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* How it works */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">How the Referral Program Works</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 font-heading font-bold text-lg">
                  {step.num}
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1 text-sm">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Refer */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-foreground">What You Can Refer</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { title: "SyncScore Payroll Software", desc: "Cloud-based payroll platform with automation, approvals, and reporting." },
              { title: "Payroll Outsourcing", desc: "Fully managed payroll processing and statutory compliance." },
            ].map((product) => (
              <motion.div key={product.title} className="glass-card p-6 text-center hover:shadow-md transition-shadow" {...fadeUp}>
                <h3 className="font-heading font-bold text-foreground mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-2xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Referral Rewards</h2>
            <div className="space-y-3">
              {[
                "Up to KSh 250,000 per successful referral",
                "Or 10% of the client's ACV",
                "Payment within 30 days after invoice settlement",
              ].map((r) => (
                <div key={r} className="flex items-center gap-3 justify-center">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span className="text-foreground font-medium">{r}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="section-padding bg-muted/30">
        <div className="section-container max-w-2xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Referral Submission Form</h2>
            {submitted ? (
              <div className="glass-card p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">Referral Submitted!</h3>
                <p className="text-sm text-muted-foreground">Our team will review and update you on the status.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="glass-card p-6 space-y-6">
                <div>
                  <p className="font-heading font-bold text-foreground mb-3">Your Details</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><Label>Full Name</Label><Input placeholder="Your name" required /></div>
                    <div><Label>Email</Label><Input type="email" placeholder="you@email.com" required /></div>
                    <div><Label>Phone</Label><Input type="tel" placeholder="+254..." required /></div>
                    <div><Label>Organization (Optional)</Label><Input placeholder="Your company" /></div>
                  </div>
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground mb-3">Referred Company Details</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><Label>Company Name</Label><Input placeholder="Company" required /></div>
                    <div><Label>Contact Person</Label><Input placeholder="Contact name" required /></div>
                    <div><Label>Contact Email</Label><Input type="email" placeholder="contact@company.com" required /></div>
                    <div><Label>Contact Phone</Label><Input type="tel" placeholder="+254..." required /></div>
                    <div>
                      <Label>Company Size</Label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1–50</SelectItem>
                          <SelectItem value="51-200">51–200</SelectItem>
                          <SelectItem value="201-500">201–500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label>Notes about the opportunity</Label>
                    <Textarea placeholder="Any additional details..." rows={3} />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  <Send className="mr-2 w-4 h-4" /> Submit Referral
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Referral Program FAQs</h2>
          <div className="space-y-6">
            {[
              { q: "Who can submit a referral?", a: "Anyone who knows a company that needs payroll or HR solutions." },
              { q: "How will I know the status of my referral?", a: "Our team will update you once the lead is contacted and after the demo stage." },
              { q: "When do I receive payment?", a: "Rewards are paid 30 days after the client settles their first invoice." },
            ].map((faq) => (
              <div key={faq.q} className="glass-card p-5">
                <h3 className="font-heading font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <DemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default ReferralProgram;
