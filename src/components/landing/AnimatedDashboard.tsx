import { motion } from "framer-motion";
import { Users, Calendar, DollarSign, Clock, TrendingUp, CheckCircle, ArrowUpRight } from "lucide-react";

const barHeights = [60, 85, 45, 70, 90, 55, 75];
const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

const statCards = [
  { icon: Users, label: "Total Employees", value: "391", change: "+12%", color: "hsl(var(--accent))" },
  { icon: Calendar, label: "Leave Requests", value: "34", change: "5 pending", color: "hsl(var(--pale-blue))" },
  { icon: DollarSign, label: "Payroll (KSh)", value: "8.4M", change: "Processed", color: "hsl(var(--light-green))" },
  { icon: Clock, label: "On Time Today", value: "96%", change: "+3%", color: "hsl(var(--accent))" },
];

const recentActivity = [
  { name: "Ebenezer Shalom", action: "Leave approved", time: "2m ago" },
  { name: "Bright Fortune", action: "Clock-in", time: "5m ago" },
  { name: "James Sammy", action: "Payslip viewed", time: "8m ago" },
];

const AnimatedDashboard = () => {
  return (
    <div className="w-full rounded-xl bg-white shadow-inner overflow-hidden" style={{ minHeight: 320 }}>
      
      {/* Top stats row */}
      <div className="grid grid-cols-4 gap-2 p-3">
        {statCards.map((card, i) => (
          <motion.div
            key={card.label}
            className="rounded-lg p-2.5 border border-border/50 bg-background"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <div
                className="w-5 h-5 rounded flex items-center justify-center"
                style={{ backgroundColor: card.color + "20" }}
              >
                <card.icon size={11} style={{ color: card.color }} />
              </div>
              <span className="text-[8px] text-muted-foreground truncate">{card.label}</span>
            </div>

            <p className="text-sm font-heading font-bold text-foreground">{card.value}</p>

            <motion.p
              className="text-[7px] text-light-green flex items-center gap-0.5"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowUpRight size={7} /> {card.change}
            </motion.p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-2 px-3 pb-3">
        
        {/* Chart area */}
        <div className="col-span-3 rounded-lg border border-border/50 bg-background p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-heading font-semibold text-foreground">
              Payroll Trend
            </span>
            <span className="text-[7px] text-muted-foreground">Last 7 months</span>
          </div>

          <div className="flex items-end gap-1.5 h-20">
            {barHeights.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <motion.div
                  className="w-full rounded-t"
                  style={{
                    backgroundColor:
                      i === barHeights.length - 1
                        ? "hsl(var(--accent))"
                        : "hsl(var(--pale-blue) / 0.5)"
                  }}
                  animate={{
                    height: [`${h * 0.7}%`, `${h}%`, `${h * 0.85}%`, `${h}%`]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <span className="text-[6px] text-muted-foreground">
                  {months[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="col-span-2 rounded-lg border border-border/50 bg-background p-3 overflow-hidden">
          <span className="text-[9px] font-heading font-semibold text-foreground">
            Recent Activity
          </span>

          <motion.div
            className="mt-2 space-y-2"
            animate={{ y: [0, -40, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {recentActivity.map((item, i) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle size={9} className="text-accent" />
                </div>

                <div>
                  <p className="text-[8px] font-semibold text-foreground">
                    {item.name}
                  </p>

                  <p className="text-[6px] text-muted-foreground">
                    {item.action} · {item.time}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Performance row */}
      <div className="mx-3 mb-3 rounded-lg border border-border/50 bg-background p-3">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-heading font-semibold text-foreground flex items-center gap-1">
            <TrendingUp size={10} className="text-accent" /> Performance Overview
          </span>
          <span className="text-[7px] text-muted-foreground">Q1 2026</span>
        </div>

        <div className="mt-2 flex gap-3">
          {[
            { label: "Goals Met", pct: 78, color: "hsl(var(--light-green))" },
            { label: "Attendance", pct: 96, color: "hsl(var(--pale-blue))" },
            { label: "Payroll Accuracy", pct: 99, color: "hsl(var(--accent))" }
          ].map((m, i) => (
            <div key={m.label} className="flex-1">
              <div className="flex justify-between mb-0.5">
                <span className="text-[7px] text-muted-foreground">
                  {m.label}
                </span>
                <span className="text-[7px] font-semibold text-foreground">
                  {m.pct}%
                </span>
              </div>

              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: m.color }}
                  animate={{
                    width: [`${m.pct - 5}%`, `${m.pct}%`, `${m.pct - 3}%`, `${m.pct}%`]
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AnimatedDashboard;