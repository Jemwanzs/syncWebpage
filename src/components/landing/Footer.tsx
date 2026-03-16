import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-sm">S</span>
              </div>
              <span className="font-heading font-bold text-xl">SyncScore</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              The all-in-one HR platform for modern African businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wide text-primary-foreground/40">Product</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["CoreHR", "Leave", "Payroll", "Time & Attendance", "Performance"].map((l) => (
                <li key={l}><a href="#modules" className="hover:text-primary-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wide text-primary-foreground/40">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["About", "Blogs", "Privacy", "Terms"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wide text-primary-foreground/40">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><MapPin size={14} /> Nairobi, Kenya</li>
              <li className="flex items-center gap-2"><Mail size={14} /> james@syncscore.io</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +254 758 462 513</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +254 798 993 404</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} SyncScore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
