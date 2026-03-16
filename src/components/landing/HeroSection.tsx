import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import teamPhoto from "@/assets/team-photo.jpeg";
import AnimatedDashboard from "./AnimatedDashboard";

interface HeroSectionProps {
  onBookDemo: () => void;
}

const HeroSection = ({ onBookDemo }: HeroSectionProps) => {
  return (
    <section className="gradient-hero relative overflow-hidden pt-16">
      <div className="section-container section-padding flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight">
            HR Platform for{" "}
            <span className="text-gradient">Modern Teams</span>
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl font-heading font-semibold text-primary-foreground/80">
            Manage People, Leave, Payroll, Attendance & Performance in One System
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/60 max-w-xl mx-auto lg:mx-0">
            Simplify HR, automate payroll, track leave, and boost performance — all from a single, powerful platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
              asChild
            >
              <Link to="/platform">
                <Play className="mr-2 w-4 h-4" /> Explore Platform
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Right visual - animated dashboard */}
        <motion.div
          className="flex-1 w-full max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
              <div className="bg-primary-foreground/5 backdrop-blur p-1">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <div className="ml-2 flex-1 h-4 rounded bg-primary-foreground/5 flex items-center px-2">
                    <span className="text-[7px] text-primary-foreground/30">app.syncscore.io/dashboard</span>
                  </div>
                </div>
                <AnimatedDashboard />
              </div>
            </div>

            {/* Team photo overlay card */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-28 h-28 rounded-xl overflow-hidden shadow-xl border-4 border-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <img
                src={teamPhoto}
                alt="SyncScore Team"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating stat badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg px-4 py-3 border border-border"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p className="text-xs text-muted-foreground">Active Users</p>
              <p className="text-lg font-heading font-bold text-foreground">391</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
