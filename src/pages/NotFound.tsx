import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronsRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-73px)] flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[40vw] font-black leading-none text-outline">404</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 px-8"
      >
        <h1 className="text-8xl md:text-[160px] font-display font-black text-primary-container leading-none mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tighter mb-4">
          ROUTE NOT FOUND
        </h2>
        <p className="text-on-surface-variant text-sm uppercase tracking-widest mb-12 max-w-md mx-auto">
          The protocol you're looking for doesn't exist in our system. Let's get you back on track.
        </p>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 0.95 }}
            className="bg-primary-container text-on-primary-fixed font-black py-4 px-10 rounded-full text-xs uppercase tracking-widest inline-flex items-center gap-2"
          >
            RETURN TO BASE
            <ChevronsRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
