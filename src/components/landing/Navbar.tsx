import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-syncscore.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "SaaS Platform", href: "/platform" },
  { label: "ESS", href: "/ess" },
  { label: "Outsourcing", href: "/outsourcing" },
  { label: "Referral Program", href: "/referral" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blogs", href: "#" },
];

interface NavbarProps {
  onBookDemo: () => void;
}

const Navbar = ({ onBookDemo }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.split("#")[0]) && href !== "#";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="section-container flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="SyncScore" className="h-9 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href) ? "text-accent font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm" onClick={onBookDemo} className="bg-accent text-accent-foreground hover:bg-accent/90">
            Book a Demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm" onClick={() => { onBookDemo(); setMobileOpen(false); }} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;