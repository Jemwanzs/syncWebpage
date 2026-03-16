import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SyncScore cut HR and payroll time from days to hours. It's been transformational for our operations.",
    author: "Jane Mwangi",
    role: "HR Manager",
    company: "Manufacturing Co.",
  },
  {
    quote: "The employee self-service portal has drastically reduced the volume of HR queries we handle daily.",
    author: "David Otieno",
    role: "People Operations Lead",
    company: "Tech Startup",
  },
  {
    quote: "From onboarding to payroll, SyncScore provides a seamless experience for our multi-branch team.",
    author: "Amina Hassan",
    role: "Head of HR",
    company: "Retail Group",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl text-center">
        <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">What our clients say</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
          Trusted by HR leaders
        </h2>

        <div className="relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute"
            >
              <Quote size={32} className="text-accent/30 mx-auto mb-4" />
              <blockquote className="text-xl md:text-2xl font-heading font-medium text-foreground leading-relaxed mb-6">
                "{testimonials[current].quote}"
              </blockquote>
              <div>
                <p className="font-heading font-bold text-foreground">{testimonials[current].author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
