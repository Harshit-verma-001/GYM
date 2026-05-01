import { motion } from "motion/react";
import { Play, Info, Dumbbell, Zap, Activity, Filter, Search, ChevronRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function Exercise() {
  const exercises = [
    { title: "Barbell Back Squat", level: "Advanced", muscle: "Quads/Glutes", type: "Strength", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9P_RlpXWkz8WJ-c5UHNHsHLSrFF9lv_zgaQ2IPSb5SH2JOjUHtKYRVS5M-7mu0HBAI8pFXkuPd5a0m7O9pqMBtKtRJjlQh_mbuFYFS2tmlrK4JChzcZErDJiPzI6XJ2myvgtq3jKOT9sksZn_htWcFzZ3wBIqREyjTyGRpFr9eC5NWzHqtqQtP03QhHAXCe-dQelnqY8c8yga6uWuPY9VRSmQwrIH_-75JWRzG4fbhB5cClim9tO6D7SRK67285NglXH2zSMeGfdl" },
    { title: "Kettlebell Swing", level: "Intermediate", muscle: "Posterior Chain", type: "Functional", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNeNMdRuPDYBkkj4S-2NZQHKhjfKV2li5LKHu277q5OiMhGUM2OY8u4FvsgXDzHh82_NM3eEPO96ynzKdFt3zuPc-fDRGhRPMxSojiZtv3Doa7tW78YuAYfxXWA8HCgSwaTb5dHPCSesJdnSCYKsi9kApJULBKv-BAgP8Pjqr_-4qgclB8tgD6T9Zc4B5uJf3Zoibsh9yvEG7EQZo-vlAeUlsO1xRbBbwZzMYtWAEaJDIwNM06wI3dA4sCIjDcEU1oFW3o2hioACh4" },
    { title: "Dynamic Sprint", level: "Pro", muscle: "Full Body", type: "Cardio", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtqUgs3Xgxa4wJCY1seSjaGdulWOn8M2RX-Dl2tOpKZowxRVB0-XaVX1avJck8OMQ-UnsPZIqR8LCbj3kLwUcVH6QnT6EtvM9tP6l36XVackI2uLr38JlYX9Sgjk9aTuwrAyPPbRzqKobH0IB3cIU270kjlbpmLjdhfFQ7LVtSc0iwYby4fYbf5qLsuvBsSo-GPV6yB2jVr_ghqDy4n34VgfScdAREsvG9l_O4c2f9wWkPQLFTfm6ipV6AEU9pBIQRwWAIxIoCU9dc" },
    { title: "TRX Row", level: "Beginner", muscle: "Upper Back", type: "Bodyweight", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1c6Oph4L72gIZBYmOhpstyuk9Meqm9PCFjJ7KXIQ7nZG0ms4yARYN5GJcHFjIg57T8J81SMW7viShLzXFt2jp9vDI-9w6fbGmL-f2PG-nv-qkygIlzhdDH_e_-Z4Xilyq6iLoNg51S73GADPVgz7Sj_eAU2Z0HfQNCezEPVnkOy4w6H5hjEUAVirHERKTMMhE_c28AJsqlYMSgg0tOACRwWn1kvLVhQDbf5bX_oW0QdBy5HpadZlPDzhGeLyJxq5TdYAZl1-HNY45" },
    { title: "Deadlift Max", level: "Elite", muscle: "Total Body", type: "Strength", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQn4f0IGrKoGRIUemV217IwdmDqPC0q3nexoG57ULuy8suANoSHRjgGiXhNF4eekej1cuL_KlR9kEwQa5ifBrPISBQgW3M86Kz6qjiDaNXVzVxqm3rc5B7NhPtk8mzUMXo2Y_PhoApG4lI6eZwQNbhUD9hhCPT2IxLMffJV-RcAOAuXFguRkOBlohglzCip_eLjy78DfrcXTxEcuuOUNsRGS9nWIbiNN1SqqAbnLLjGD7YTscWZ83AYpFbcUAM6Edf7hqmFO9FUqgZ" },
    { title: "Mobility Flow", level: "Any", muscle: "Joints", type: "Recovery", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWR8bC-8zvDk85bxsZVDLKRcB3HWinOxcTJV1KzcUd4IvcNCnF74CVqWDuq4Xpt2u8kYUoKAIoGalnBdIkfV-atGka0tOK_IUb9NdbGDMf1T_OM876R5H0um2vL4gnpjc8H9XYXv9wJxvlnmw-y-8_YkcxMJ2kP_oOHLQeMOAxKCBM0lSfabMCIHt7NjtENYW5ez9xybH1XbAqBgdsHMFMml56d-wNeslERnJlEzakye8tr5YiHZFbyOKJollRP3q5swTNz76nfvuy" }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtqUgs3Xgxa4wJCY1seSjaGdulWOn8M2RX-Dl2tOpKZowxRVB0-XaVX1avJck8OMQ-UnsPZIqR8LCbj3kLwUcVH6QnT6EtvM9tP6l36XVackI2uLr38JlYX9Sgjk9aTuwrAyPPbRzqKobH0IB3cIU270kjlbpmLjdhfFQ7LVtSc0iwYby4fYbf5qLsuvBsSo-GPV6yB2jVr_ghqDy4n34VgfScdAREsvG9l_O4c2f9wWkPQLFTfm6ipV6AEU9pBIQRwWAIxIoCU9dc"
            alt="Exercises"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary-container font-display font-bold uppercase tracking-[0.4em] mb-4 block text-[10px]">MOVEMENT REPOSITORY</span>
            <h1 className="text-6xl md:text-8xl font-display font-black mb-8 leading-none uppercase tracking-tighter">
              EXERCISE <br/><span className="italic text-primary-container font-black">DATABASE</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-12 bg-surface-container-low border-b border-white/5">
        <ScrollReveal y={20} className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {["All", "Strength", "Handwork", "Core", "Recovery", "Mobility"].map((cat) => (
                <button key={cat} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${cat === 'All' ? 'bg-primary-container text-black' : 'border border-white/10 hover:border-primary-container'}`}>
                   {cat}
                </button>
              ))}
           </div>
           <div className="relative w-full md:w-96">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
              <input 
                type="text" 
                placeholder="SEARCH MOVEMENTS..." 
                className="w-full bg-white/5 border border-white/10 rounded-full px-14 py-3 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-primary-container"
              />
           </div>
        </ScrollReveal>
      </section>

      {/* Exercise Grid */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercises.map((ex, i) => (
              <ScrollReveal y={30} delay={i * 0.1} key={i} className="group relative rounded-2xl overflow-hidden bg-surface-container border border-white/5 hover:border-primary-container/30 transition-all flex flex-col h-full">
                <div className="aspect-video relative overflow-hidden">
                   <img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src={ex.img} alt={ex.title} />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[8px] font-black uppercase tracking-tighter text-primary-container">
                      {ex.level}
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-black">
                         <Play className="w-6 h-6 fill-current" />
                      </div>
                   </div>
                </div>
                <div className="p-8 flex flex-col grow">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-display font-black uppercase tracking-tight leading-none">{ex.title}</h3>
                      <button className="text-on-surface-variant hover:text-primary-container transition-colors">
                         <Info className="w-4 h-4" />
                      </button>
                   </div>
                   <div className="mt-auto pt-6 flex flex-wrap gap-3">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-on-surface-variant">
                         <Dumbbell className="w-3 h-3" /> {ex.muscle}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-on-surface-variant">
                         <Activity className="w-3 h-3" /> {ex.type}
                      </span>
                   </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-24 text-center">
             <button className="border-b-2 border-primary-container pb-2 font-display font-black text-xs uppercase tracking-widest hover:text-primary-container transition-colors">
                LOAD MORE MOVEMENTS
             </button>
          </div>
        </div>
      </section>

      {/* Feature Section: Tech Analysis */}
      <section className="py-24 md:py-32 bg-surface-container">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal x={-40} className="order-2 lg:order-1 relative">
             <div className="absolute -inset-2 border-2 border-primary-container/20 rounded-2xl rotate-1"></div>
             <div className="relative z-10 bg-black rounded-xl overflow-hidden aspect-video border border-white/10 group">
                <img 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQn4f0IGrKoGRIUemV217IwdmDqPC0q3nexoG57ULuy8suANoSHRjgGiXhNF4eekej1cuL_KlR9kEwQa5ifBrPISBQgW3M86Kz6qjiDaNXVzVxqm3rc5B7NhPtk8mzUMXo2Y_PhoApG4lI6eZwQNbhUD9hhCPT2IxLMffJV-RcAOAuXFguRkOBlohglzCip_eLjy78DfrcXTxEcuuOUNsRGS9nWIbiNN1SqqAbnLLjGD7YTscWZ83AYpFbcUAM6Edf7hqmFO9FUqgZ" 
                  alt="Tech Analysis" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="hud-stats px-6 py-3 rounded-lg border border-primary-container/30">
                      <span className="text-primary-container text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                         <Zap className="w-4 h-4 fill-current" /> AI JOINT SCAN ACTIVE
                      </span>
                   </div>
                </div>
             </div>
          </ScrollReveal>
          <ScrollReveal x={40} className="order-1 lg:order-2">
             <span className="text-primary-container text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">BIOMECHANICAL ACCURACY</span>
             <h2 className="text-5xl font-display font-black mb-8 leading-tight">MASTER EVERY <span className="italic text-primary-container">ANGLE</span></h2>
             <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
                Connect your camera for real-time form correction. Our vision AI tracks 32 biomechanical markers to ensure triple extension, spinal neutrality, and optimal force distribution.
             </p>
             <ul className="space-y-6">
                {[
                  "Real-time Joint Angle Analysis",
                  "Fatigue-Induced Form Deviation Tracking",
                  "Explosive Power Variance Metrics"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                     <div className="w-2 h-2 bg-primary-container rounded-full"></div>
                     {item}
                  </li>
                ))}
             </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Leaderboard CTA */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-background">
         <ScrollReveal y={50} className="container mx-auto px-8 relative z-10 text-center">
             <h2 className="text-6xl md:text-[140px] font-display font-black leading-none uppercase tracking-tighter mb-12 opacity-80">FORGE <span className="text-primary-container">LIMITS.</span></h2>
             <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
                <button className="bg-primary-container text-black font-black py-6 px-12 rounded-full text-xs uppercase tracking-widest hover:scale-95 transition-all">
                   JOIN THE ACADEMY
                </button>
                <div className="flex group cursor-pointer items-center gap-4">
                   <span className="text-xs font-black uppercase tracking-widest text-on-surface-variant group-hover:text-primary-container transition-colors">WATCH SYSTEM OVERVIEW</span>
                   <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary-container transition-all">
                      <ChevronRight className="w-5 h-5" />
                   </div>
                </div>
             </div>
         </ScrollReveal>
         <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <span className="text-[40vw] font-black text-outline">ELITE</span>
         </div>
      </section>
    </div>
  );
}
