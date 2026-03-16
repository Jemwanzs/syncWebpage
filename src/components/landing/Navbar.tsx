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
  const [hoverSignIn, setHoverSignIn] = useState(false);
  const [showBlogsMessage, setShowBlogsMessage] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.split("#")[0]) && href !== "#";
  };

  // Handle Blogs click
  const handleBlogsClick = (href: string) => {
    if (href === "#") {
      setShowBlogsMessage(true);
      setTimeout(() => setShowBlogsMessage(false), 2000); // auto hide after 2s
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="section-container flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="SyncScore" className="h-9 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 relative">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              <Link
                to={link.href !== "#" ? link.href : "#"}
                onClick={() => handleBlogsClick(link.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  isActive(link.href)
                    ? "text-accent font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>

              {/* Tooltip for Blogs */}
              {link.label === "Blogs" && showBlogsMessage && (
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
                                px-3 py-1 bg-white border border-orange-500 
                                rounded-md text-[#000080] text-xs font-normal 
                                whitespace-nowrap shadow-md z-50">
                  Coming soon...
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3 relative">
          {/* Sign In button with hover tooltip */}
          <Button
            variant="ghost"
            size="sm"
            onMouseEnter={() => setHoverSignIn(true)}
            onMouseLeave={() => setHoverSignIn(false)}
          >
            Sign In
          </Button>

          {hoverSignIn && (
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
                            px-3 py-1 bg-white border border-orange-500 
                            rounded-md text-[#000080] text-xs font-normal 
                            whitespace-nowrap shadow-md z-50">
              Platform linking soon...
            </div>
          )}

          <Button
            size="sm"
            onClick={onBookDemo}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
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
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button
              size="sm"
              onClick={() => {
                onBookDemo();
                setMobileOpen(false);
              }}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;