import { motion } from "motion/react";
import { ChevronsRight, Microscope, BarChart3, Database, ShieldAlert, Cpu } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR9AuRXLiIasfo9KmuyGUSD3T9igUMHpsjS8e6HkfkGi033VdO3N1yrXKVSfBV0z3YWbHHsqDOyZ0N62jwBhtsySLNpF-Bo89KbyaV6Yisytka1agTZIutMJNyIDM_IdZkx4za1cKmwQC6YShiDUUdT9Z2mqTqmJ67xCR4xr4oMvv_dOOx4EAWlnh4f8ka1W_59o4UuObX_9Jt_VS8HnFV4x-5ERpaKvTYh7MxJuTO-LPOqAlG7SMIL-gwxdvaQAD-MlFGmeqgoiIj"
            alt="Garage Gym"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary-container font-display font-bold uppercase tracking-[0.3em] mb-4 block text-sm">EST. 2018</span>
            <h1 className="text-6xl md:text-8xl font-display font-black mb-8 leading-none">BORN IN THE <br/><span className="italic text-primary-container">GARAGE.</span></h1>
            <p className="text-lg text-on-surface-variant mb-12 max-w-xl leading-relaxed">
              FiTusion didn't start in a luxury commercial gym. It started in a 200sq ft private garage in London with one athlete, a metabolic cart, and a relentless obsession with human optimization. We stripped away the fluff to build a sanctuary for those who demand precision.
            </p>
            <motion.button
              whileHover={{ scale: 0.95 }}
              onClick={() => navigate('/our-dna')}
              className="bg-primary-container text-on-primary-fixed font-bold py-4 px-10 rounded-full text-lg flex items-center gap-2 group italic"
            >
              OUR DNA
              <ChevronsRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Performance Lab Section */}
      <section className="py-24 md:py-32 bg-surface-container">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal x={-40} className="relative group overflow-hidden rounded-2xl border border-white/10 aspect-video">
            <img
              className="w-full h-full object-cover filter grayscale contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQn4f0IGrKoGRIUemV217IwdmDqPC0q3nexoG57ULuy8suANoSHRjgGiXhNF4eekej1cuL_KlR9kEwQa5ifBrPISBQgW3M86Kz6qjiDaNXVzVxqm3rc5B7NhPtk8mzUMXo2Y_PhoApG4lI6eZwQNbhUD9hhCPT2IxLMffJV-RcAOAuXFguRkOBlohglzCip_eLjy78DfrcXTxEcuuOUNsRGS9nWIbiNN1SqqAbnLLjGD7YTscWZ83AYpFbcUAM6Edf7hqmFO9FUqgZ"
              alt="Performance Lab"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
               <div className="bg-black/80 backdrop-blur-md p-4 border border-primary-container/30 rounded-lg text-right">
                  <span className="text-primary-container text-[10px] font-bold block">ACCURACY: 99.8%</span>
                  <span className="text-white text-[8px] block opacity-50 uppercase tracking-tighter">CLINICAL GRADE DATA</span>
               </div>
            </div>
          </ScrollReveal>
          <ScrollReveal x={40}>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">THE PERFORMANCE <span className="text-primary-container">LAB</span></h2>
            <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
              We don't guess. We measure. Our lab utilizes gold-standard metabolic testing and 3D biomechanical analysis to map your unique physiological blueprint. This isn't just training; it's engineering.
            </p>
            <div className="space-y-6">
              {[
                { icon: Microscope, title: "METABOLIC MAPPING", desc: "VO2 Max and RMR testing to optimize energy systems and nutrition with surgical precision." },
                { icon: BarChart3, title: "FORCE PLATE ANALYSIS", desc: "High-frequency plates to measure power distribution, symmetry, and injury predisposition." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl flex gap-6 items-center group hover:border-primary-container transition-colors">
                  <div className="w-12 h-12 rounded bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm tracking-tight mb-1">{item.title}</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Science vs Sweat */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-8 text-center">
          <ScrollReveal y={30}>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4 uppercase tracking-tighter">SCIENCE VS <span className="italic text-primary-container">SWEAT</span></h2>
            <p className="text-on-surface-variant mb-16 uppercase tracking-widest text-sm">Bridging the gap between elite data and raw effort.</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1} className="bg-surface-container-low p-8 rounded-2xl border border-white/5 flex flex-col justify-between text-left h-full">
              <div>
                <Database className="w-8 h-8 text-primary-container mb-12" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">THE DATA</h4>
                <p className="text-on-surface mb-8 leading-relaxed">Every rep is tracked. Every heart beat is monitored. We provide the intelligence needed to push past plateaus without burnout.</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                 <button onClick={() => navigate('/service')} className="text-[10px] font-black uppercase tracking-widest text-primary-container border-b border-primary-container pb-1">PRECISION PROTOCOL</button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="relative rounded-2xl overflow-hidden aspect-square flex items-center justify-center bg-black group">
               <img 
                 className="absolute inset-0 w-full h-full object-cover filter grayscale" 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtDFm6uPlfQoajXGZBBqyX0ZYXnEQbJXLuWdo6q1Z0d3KeBdLpqk-OU61EcFCE6ZtzU0diQzC0S73--uKVSsl3ahPkg0ZbAtS7A-I5gdqWNRWbvtwuNtBMGa1F4po_neqoF72kRMEfn3DRJCoveCY_embjS-bInYJXdvGknghPlf3GVArTvntzLaZwRCAzsnVin5d6mv6COTZUoz8ujmRbTH2sOQNgQwzU-dRVr0FWtChAMEjHqiDeouvSrhxK8S_xIhDMR2r0NKR7" 
                 alt="Athlete"
               />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
               <h3 className="relative z-10 text-4xl font-black italic text-white uppercase tracking-tighter text-center">EFFORT <span className="text-primary-container">SCALED.</span></h3>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="bg-surface-container-low p-8 rounded-2xl border border-white/5 flex flex-col justify-between text-left h-full">
              <div>
                <ShieldAlert className="w-8 h-8 text-primary-container mb-12" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">THE GRIT</h4>
                <p className="text-on-surface mb-8 leading-relaxed">Data tells us where to go, but work gets us there. Our facility culture is built on the foundation of hard, uncompromising intensity.</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                 <button onClick={() => navigate('/exercise')} className="text-[10px] font-black uppercase tracking-widest text-primary-container border-b border-primary-container pb-1">UNRELENTING INTENSITY</button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* London HQ */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="container mx-auto px-12 lg:px-24">
          <ScrollReveal y={30} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-left">
              <span className="text-primary-container font-bold uppercase tracking-[0.4em] mb-4 block text-[10px]">THE PLAYGROUND</span>
              <h2 className="text-5xl font-display font-black uppercase leading-none">LONDON <span className="text-primary-container italic">HQ</span></h2>
              <p className="text-on-surface-variant mt-4 max-w-sm text-sm">A 15,000 sq ft cathedral of performance equipment, recovered recovery suites, and clinical testing bays.</p>
            </div>
            <button onClick={() => navigate('/contact')} className="border border-white/20 hover:border-primary-container font-bold py-3 px-8 rounded-lg text-xs uppercase tracking-widest transition-all">VIRTUAL TOUR</button>
          </ScrollReveal>

          <ScrollReveal y={40}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
            <div className="md:col-span-2 relative rounded-xl overflow-hidden group">
               <img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtqUgs3Xgxa4wJCY1seSjaGdulWOn8M2RX-Dl2tOpKZowxRVB0-XaVX1avJck8OMQ-UnsPZIqR8LCbj3kLwUcVH6QnT6EtvM9tP6l36XVackI2uLr38JlYX9Sgjk9aTuwrAyPPbRzqKobH0IB3cIU270kjlbpmLjdhfFQ7LVtSc0iwYby4fYbf5qLsuvBsSo-GPV6yB2jVr_ghqDy4n34VgfScdAREsvG9l_O4c2f9wWkPQLFTfm6ipV6AEU9pBIQRwWAIxIoCU9dc" alt="Gym" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="relative rounded-xl overflow-hidden group">
                <img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9P_RlpXWkz8WJ-c5UHNHsHLSrFF9lv_zgaQ2IPSb5SH2JOjUHtKYRVS5M-7mu0HBAI8pFXkuPd5a0m7O9pqMBtKtRJjlQh_mbuFYFS2tmlrK4JChzcZErDJiPzI6XJ2myvgtq3jKOT9sksZn_htWcFzZ3wBIqREyjTyGRpFr9eC5NWzHqtqQtP03QhHAXCe-dQelnqY8c8yga6uWuPY9VRSmQwrIH_-75JWRzG4fbhB5cClim9tO6D7SRK67285NglXH2zSMeGfdl" alt="Gym Detail 1" />
              </div>
              <div className="relative rounded-xl overflow-hidden group">
                <img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1c6Oph4L72gIZBYmOhpstyuk9Meqm9PCFjJ7KXIQ7nZG0ms4yARYN5GJcHFjIg57T8J81SMW7viShLzXFt2jp9vDI-9w6fbGmL-f2PG-nv-qkygIlzhdDH_e_-Z4Xilyq6iLoNg51S73GADPVgz7Sj_eAU2Z0HfQNCezEPVnkOy4w6H5hjEUAVirHERKTMMhE_c28AJsqlYMSgg0tOACRwWn1kvLVhQDbf5bX_oW0QdBy5HpadZlPDzhGeLyJxq5TdYAZl1-HNY45" alt="Gym Detail 2" />
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final Stop Guessing */}
      <section className="py-32 relative bg-background overflow-hidden border-t border-white/5">
        <ScrollReveal y={50} className="container mx-auto px-8 text-center relative z-10">
          <h2 className="text-6xl md:text-[120px] font-display font-black mb-8 leading-[0.9] uppercase tracking-tighter">STOP <span className="text-primary-container">GUESSING.</span></h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-16 uppercase tracking-widest text-sm leading-relaxed">
            Whether you're an elite athlete or a professional chasing high-performance health, our lab-tested approach is the missing variable in your equation.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.button
              whileHover={{ scale: 0.95 }}
              onClick={() => navigate('/get-started')}
              className="bg-primary-container text-on-primary-fixed font-black py-6 px-12 rounded-full text-sm uppercase tracking-widest"
            >
              BOOK ASSESSMENT
            </motion.button>
            <button onClick={() => navigate('/features')} className="border border-white/20 hover:border-primary-container text-white font-black py-6 px-12 rounded-full text-sm uppercase tracking-widest transition-all">
              THE SCIENCE
            </button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
