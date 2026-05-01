import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Service", path: "/service" },
    { name: "Exercise", path: "/exercise" },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="bg-black/90 backdrop-blur-md font-display tracking-tight sticky top-0 z-50 border-b border-white/10 w-full">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-8 py-4">
        <Link to="/" className="text-2xl font-black italic text-primary-container">FiTusion</Link>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors text-sm uppercase font-bold ${
                location.pathname === link.path
                  ? "text-primary-container border-b-2 border-primary-container pb-1"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/contact")}
            className={`hidden md:block transition-colors text-sm uppercase font-bold ${
              location.pathname === "/contact" ? "text-primary-container" : "text-white/70 hover:text-white"
            }`}
          >
            Contact Us
          </button>
          <motion.button
            whileHover={{ scale: 0.95 }}
            onClick={() => navigate("/get-started")}
            className="hidden md:block bg-primary-container text-on-primary-fixed font-black py-2 px-6 rounded-full text-xs uppercase"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-1"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
          >
            <nav className="flex flex-col px-8 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMobile}
                  className={`transition-colors text-sm uppercase font-bold py-2 ${
                    location.pathname === link.path
                      ? "text-primary-container"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-4">
                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className={`text-sm uppercase font-bold py-2 ${
                    location.pathname === "/contact" ? "text-primary-container" : "text-white/70"
                  }`}
                >
                  Contact Us
                </Link>
                <Link
                  to="/get-started"
                  onClick={closeMobile}
                  className="bg-primary-container text-on-primary-fixed font-black py-3 px-6 rounded-full text-xs uppercase text-center"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
