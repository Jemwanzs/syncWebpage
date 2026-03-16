import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface DemoFormProps {
  open: boolean;
  onClose: () => void;
}

const DemoForm = ({ open, onClose }: DemoFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card z-50 shadow-2xl overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-bold text-foreground">Book a Demo</h2>
                <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">Thank you!</h3>
                  <p className="text-sm text-muted-foreground">We'll be in touch within 24 hours to schedule your demo.</p>
                  <Button className="mt-6" variant="outline" onClick={onClose}>Close</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Jane Mwangi" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="jane@company.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+254 700 000 000" required />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Acme Corp" required />
                  </div>
                  <div>
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1–50 employees</SelectItem>
                        <SelectItem value="51-200">51–200 employees</SelectItem>
                        <SelectItem value="201-500">201–500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="challenge">Key HR Challenge</Label>
                    <Textarea id="challenge" placeholder="What HR challenge are you looking to solve?" rows={3} />
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Implementation timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediately</SelectItem>
                        <SelectItem value="1-3months">1–3 months</SelectItem>
                        <SelectItem value="3-6months">3–6 months</SelectItem>
                        <SelectItem value="exploring">Just exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Monthly budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<50k">Under KES 50K</SelectItem>
                        <SelectItem value="50-100k">KES 50K–100K</SelectItem>
                        <SelectItem value="100-500k">KES 100K–500K</SelectItem>
                        <SelectItem value="500k+">KES 500K+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    Submit & Book Demo
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    We'll connect you with a specialist within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DemoForm;
