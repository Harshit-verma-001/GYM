import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 font-display text-sm uppercase tracking-widest w-full border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-24 max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-3xl font-black italic text-primary-container mb-6 italic">FiTusion</div>
          <p className="text-zinc-500 normal-case tracking-normal mb-8 leading-relaxed font-sans text-xs">
            Precision-engineered performance systems for those who demand ultimate biological and athletic output.
          </p>
          <div className="flex gap-4">
            {["INSTAGRAM", "TWITTER", "YOUTUBE"].map((social) => (
              <span key={social} className="text-[10px] font-black hover:text-primary-container cursor-pointer transition-colors opacity-40 hover:opacity-100">
                {social}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h6 className="text-white font-black mb-8 text-xs tracking-tighter">PROTOCOLS</h6>
          <ul className="space-y-4">
            <li><Link className="text-zinc-500 hover:text-primary-container transition-colors text-[10px]" to="/">HOME</Link></li>
            <li><Link className="text-zinc-500 hover:text-primary-container transition-colors text-[10px]" to="/about">ABOUT</Link></li>
            <li><Link className="text-zinc-500 hover:text-primary-container transition-colors text-[10px]" to="/features">FEATURES</Link></li>
            <li><Link className="text-zinc-500 hover:text-primary-container transition-colors text-[10px]" to="/service">SERVICES</Link></li>
            <li><Link className="text-zinc-500 hover:text-primary-container transition-colors text-[10px]" to="/exercise">EXERCISES</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="text-white font-black mb-8 text-xs tracking-tighter">RESOURCES</h6>
          <ul className="space-y-4">
            <li><Link className="text-zinc-500 hover:text-primary-container transition-colors text-[10px]" to="/contact">CONTACT LAB</Link></li>
            <li><Link className="text-zinc-500 hover:text-primary-container transition-colors text-[10px]" to="/get-started">ENROLLMENT</Link></li>
            <li><span className="text-zinc-700 cursor-not-allowed text-[10px]">SUCCESS STORIES</span></li>
            <li><span className="text-zinc-700 cursor-not-allowed text-[10px]">WHITE PAPERS</span></li>
          </ul>
        </div>
        <div>
          <h6 className="text-white font-black mb-8 text-xs tracking-tighter">HQ LOCATIONS</h6>
          <p className="text-zinc-500 normal-case tracking-normal mb-4 font-sans text-[10px]">LONDON SE1 9SG, UK</p>
          <p className="text-zinc-500 normal-case tracking-normal mb-4 font-sans text-[10px]">NEW YORK, NY 10012</p>
          <p className="text-primary-container text-xs font-black font-sans">+44 (0) 20 7946 0123</p>
        </div>
      </div>
      <div className="border-t border-white/5 py-8 text-center bg-black">
        <p className="text-zinc-600 font-sans normal-case tracking-tight text-[10px] opacity-40">© {new Date().getFullYear()} FiTusion PERFORMANCE TECHNOLOGY. ENGINEERED FOR PRECISION.</p>
      </div>
    </footer>
  );
}
