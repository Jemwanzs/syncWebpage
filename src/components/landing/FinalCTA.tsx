import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onBookDemo: () => void;
}

const FinalCTA = ({ onBookDemo }: FinalCTAProps) => {
  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Ready to transform your HR?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Join hundreds of organizations already using SyncScore to simplify their people operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onBookDemo}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8"
            >
              Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
            >
              Talk to Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
