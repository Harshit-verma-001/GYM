import { motion } from "motion/react";
import { ChevronsRight, Monitor, Cpu, Network, Thermometer, Wind, Zap, Scaling, RotateCw, Target, Trophy, Clock, Flame, Activity } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function Features() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtqUgs3Xgxa4wJCY1seSjaGdulWOn8M2RX-Dl2tOpKZowxRVB0-XaVX1avJck8OMQ-UnsPZIqR8LCbj3kLwUcVH6QnT6EtvM9tP6l36XVackI2uLr38JlYX9Sgjk9aTuwrAyPPbRzqKobH0IB3cIU270kjlbpmLjdhfFQ7LVtSc0iwYby4fYbf5qLsuvBsSo-GPV6yB2jVr_ghqDy4n34VgfScdAREsvG9l_O4c2f9wWkPQLFTfm6ipV6AEU9pBIQRwWAIxIoCU9dc"
            alt="Gym Interior"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-primary-container font-display font-bold uppercase tracking-[0.3em] mb-4 block text-xs px-3 py-1 border border-primary-container/30 w-fit rounded-full bg-primary-container/5">THE ECOSYSTEM</span>
            <h1 className="text-6xl md:text-8xl font-display font-black mb-8 leading-none uppercase tracking-tighter">
              INTEGRATED <br/><span className="italic text-primary-container">PERFORMANCE</span> <br/>ARCHITECTURE
            </h1>
            <p className="text-lg text-on-surface-variant mb-12 max-w-xl leading-relaxed">
              FiTusion isn't just an app; it's a closed-loop intelligence system that merges biometric hardware, AI analysis, and elite coaching into a single high-velocity interface.
            </p>
            <div className="flex flex-wrap gap-6">
              <motion.button
                whileHover={{ scale: 0.95 }}
                className="bg-primary-container text-on-primary-fixed font-black py-4 px-10 rounded-full text-sm uppercase tracking-widest flex items-center gap-2"
              >
                EXPLORE SYSTEM
                <ChevronsRight className="w-4 h-4" />
              </motion.button>
              <button className="border border-white/20 hover:border-primary-container text-white font-black py-4 px-10 rounded-full text-sm uppercase tracking-widest transition-all">
                WATCH CORE TECH
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-24 md:py-32 bg-surface-container-lowest">
        <div className="container mx-auto px-8">
          <ScrollReveal y={30} stagger={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Precision Tracking */}
            <div className="lg:col-span-2 relative group rounded-2xl overflow-hidden border border-white/5 bg-zinc-900">
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
               <img 
                 className="w-full h-[400px] object-cover opacity-60 filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtqUgs3Xgxa4wJCY1seSjaGdulWOn8M2RX-Dl2tOpKZowxRVB0-XaVX1avJck8OMQ-UnsPZIqR8LCbj3kLwUcVH6QnT6EtvM9tP6l36XVackI2uLr38JlYX9Sgjk9aTuwrAyPPbRzqKobH0IB3cIU270kjlbpmLjdhfFQ7LVtSc0iwYby4fYbf5qLsuvBsSo-GPV6yB2jVr_ghqDy4n34VgfScdAREsvG9l_O4c2f9wWkPQLFTfm6ipV6AEU9pBIQRwWAIxIoCU9dc" 
                 alt="Tracking Interface"
               />
               <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                  <span className="text-primary-container text-[10px] font-bold uppercase tracking-widest mb-2 block">LIVE FEEDBACK</span>
                  <h3 className="text-4xl font-display font-black mb-4">Precision Tracking</h3>
                  <p className="text-on-surface-variant max-w-md leading-relaxed mb-8">Real-time telemetry streams from your wearables directly into our HUD, adjusting your intensity goals every millisecond based on CNS fatigue.</p>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase flex items-center gap-2 hover:bg-white/10 transition-colors">
                      <Zap className="w-3 h-3 text-primary-container" /> HRV SYNC
                    </button>
                    <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase flex items-center gap-2 hover:bg-white/10 transition-colors">
                      <Scaling className="w-3 h-3 text-primary-container" /> LACTATE PREDICT
                    </button>
                  </div>
               </div>
            </div>

            {/* Neural Engine */}
            <div className="bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col justify-between group hover:border-primary-container/30 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container mb-12">
                   <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-black mb-4">Neural Engine</h3>
                <p className="text-on-surface-variant leading-relaxed">AI-driven cognitive load monitoring to ensure you stay in the flow state without overtraining.</p>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest text-primary-container border-b border-primary-container/20 pb-1 w-fit group-hover:border-primary-container transition-colors mt-12 flex items-center gap-2">
                TECHNICAL WHITEPAPER <ChevronsRight className="w-3 h-3" />
              </button>
            </div>

            {/* IoT Fabric */}
            <div className="lg:col-span-1 bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col justify-between group hover:border-primary-container/30 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container mb-12">
                   <Network className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-black mb-4">IoT Fabric</h3>
                <p className="text-on-surface-variant leading-relaxed">Seamless connection to WHOOP, Garmin, and Apple Health for a 360-degree biometric profile.</p>
              </div>
              <div className="flex gap-4 mt-12">
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs opacity-50">W</div>
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs opacity-50">G</div>
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs opacity-50">A</div>
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Advanced Recovery */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-8">
          <ScrollReveal y={20} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-display font-black uppercase italic tracking-tighter">ADVANCED RECOVERY</h2>
              <p className="text-on-surface-variant mt-4 max-w-md text-sm">Growth happens in the silence. Our recovery suite integrates with cutting-edge physical therapies to accelerate tissue repair and metabolic clearance.</p>
            </div>
            <button className="border border-primary-container text-primary-container font-black py-3 px-8 rounded-full text-[10px] uppercase tracking-widest hover:bg-primary-container hover:text-black transition-all">VIEW PROTOCOLS</button>
          </ScrollReveal>

          <ScrollReveal stagger={0.15} y={40}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Cryo-Optimization", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR9AuRXLiIasfo9KmuyGUSD3T9igUMHpsjS8e6HkfkGi033VdO3N1yrXKVSfBV0z3YWbHHsqDOyZ0N62jwBhtsySLNpF-Bo89KbyaV6Yisytka1agTZIutMJNyIDM_IdZkx4za1cKmwQC6YShiDUUdT9Z2mqTqmJ67xCR4xr4oMvv_dOOx4EAWlnh4f8ka1W_59o4UuObX_9Jt_VS8HnFV4x-5ERpaKvTYh7MxJuTO-LPOqAlG7SMIL-gwxdvaQAD-MlFGmeqgoiIj" },
              { title: "Pulse Compression", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9P_RlpXWkz8WJ-c5UHNHsHLSrFF9lv_zgaQ2IPSb5SH2JOjUHtKYRVS5M-7mu0HBAI8pFXkuPd5a0m7O9pqMBtKtRJjlQh_mbuFYFS2tmlrK4JChzcZErDJiPzI6XJ2myvgtq3jKOT9sksZn_htWcFzZ3wBIqREyjTyGRpFr9eC5NWzHqtqQtP03QhHAXCe-dQelnqY8c8yga6uWuPY9VRSmQwrIH_-75JWRzG4fbhB5cClim9tO6D7SRK67285NglXH2zSMeGfdl" },
              { title: "Neuro-Stretching", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWR8bC-8zvDk85bxsZVDLKRcB3HWinOxcTJV1KzcUd4IvcNCnF74CVqWDuq4Xpt2u8kYUoKAIoGalnBdIkfV-atGka0tOK_IUb9NdbGDMf1T_OM876R5H0um2vL4gnpjc8H9XYXv9wJxvlnmw-y-8_YkcxMJ2kP_oOHLQeMOAxKCBM0lSfabMCIHt7NjtENYW5ez9xybH1XbAqBgdsHMFMml56d-wNeslERnJlEzakye8tr5YiHZFbyOKJollRP3q5swTNz76nfvuy" }
            ].map((recovery, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group aspect-[4/5]">
                <img className="absolute inset-0 w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-110" src={recovery.img} alt={recovery.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 z-10">
                   <h4 className="text-2xl font-black uppercase tracking-tighter text-white">{recovery.title}</h4>
                </div>
              </div>
            ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Adaptive Programming Section */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal x={-40}>
            <span className="text-primary-container text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">AI CORE</span>
            <h2 className="text-5xl font-display font-black mb-12">Adaptive Programming</h2>
            <div className="space-y-10">
              {[
                { icon: Scaling, title: "Dynamic Load Scaling", desc: "If your sleep data is low, FiTusion automatically scales back intensity to prevent injury while maintaining consistency." },
                { icon: RotateCw, title: "Micro-Cycle Pivots", desc: "Our AI rewrites your 12-week block daily based on performance benchmarks and fatigue metrics." },
                { icon: Target, title: "Form Correction AI", desc: "Computer vision analysis provides instant feedback on posture and explosive power during key lifts." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-zinc-800 border border-white/5 flex items-center justify-center text-primary-container group-hover:border-primary-container/30 transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal x={40} className="bg-zinc-900 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
             <div className="flex justify-between items-center mb-10">
                <h5 className="text-[10px] font-bold uppercase tracking-widest opacity-60">TODAY'S ADJUSTMENT</h5>
                <span className="bg-primary-container text-black text-[8px] font-black px-2 py-0.5 rounded">AI ACTIVE</span>
             </div>
             
             <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                   <span className="text-sm font-bold">Daily Readiness</span>
                   <span className="text-primary-container font-black">88%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-primary-container w-[88%]"></div>
                </div>
             </div>

             <div className="bg-zinc-800 border border-white/5 p-6 rounded-xl italic text-sm mb-10">
                "Deep latency higher than average. Neural recovery 72%. Reducing Deadlift volume by 15% and increasing rest intervals to 120s."
             </div>

             <button className="w-full py-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-[10px] font-black uppercase tracking-widest rounded-lg">
                CONFIRM NEW PROTOCOL
             </button>
          </ScrollReveal>
        </div>
      </section>

      {/* The Global Arena */}
      <section className="py-24 md:py-32 text-center">
        <div className="container mx-auto px-8">
          <ScrollReveal y={30}>
            <h2 className="text-5xl font-display font-black mb-4 uppercase tracking-tighter">THE GLOBAL ARENA</h2>
            <p className="text-on-surface-variant mb-16 uppercase tracking-widest text-sm max-w-2xl mx-auto">Compete with the elite. Join faction-based challenges and climb the global leaderboards in real-time.</p>
          </ScrollReveal>
          
          <ScrollReveal y={40} stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { title: "THE 500 CLUB", status: "LOCKED", type: "Elite", icon: Trophy, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQn4f0IGrKoGRIUemV217IwdmDqPC0q3nexoG57ULuy8suANoSHRjgGiXhNF4eekej1cuL_KlR9kEwQa5ifBrPISBQgW3M86Kz6qjiDaNXVzVxqm3rc5B7NhPtk8mzUMXo2Y_PhoApG4lI6eZwQNbhUD9hhCPT2IxLMffJV-RcAOAuXFguRkOBlohglzCip_eLjy78DfrcXTxEcuuOUNsRGS9nWIbiNN1SqqAbnLLjGD7YTscWZ83AYpFbcUAM6Edf7hqmFO9FUqgZ" },
               { title: "VANTAGE SPRINT", status: "LIVE", type: "Active", icon: Clock, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9P_RlpXWkz8WJ-c5UHNHsHLSrFF9lv_zgaQ2IPSb5SH2JOjUHtKYRVS5M-7mu0HBAI8pFXkuPd5a0m7O9pqMBtKtRJjlQh_mbuFYFS2tmlrK4JChzcZErDJiPzI6XJ2myvgtq3jKOT9sksZn_htWcFzZ3wBIqREyjTyGRpFr9eC5NWzHqtqQtP03QhHAXCe-dQelnqY8c8yga6uWuPY9VRSmQwrIH_-75JWRzG4fbhB5cClim9tO6D7SRK67285NglXH2zSMeGfdl" },
               { title: "IRON WILL", status: "ENTER", type: "Power", icon: Flame, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtDFm6uPlfQoajXGZBBqyX0ZYXnEQbJXLuWdo6q1Z0d3KeBdLpqk-OU61EcFCE6ZtzU0diQzC0S73--uKVSsl3ahPkg0ZbAtS7A-I5gdqWNRWbvtwuNtBMGa1F4po_neqoF72kRMEfn3DRJCoveCY_embjS-bInYJXdvGknghPlf3GVArTvntzLaZwRCAzsnVin5d6mv6COTZUoz8ujmRbTH2sOQNgQwzU-dRVr0FWtChAMEjHqiDeouvSrhxK8S_xIhDMR2r0NKR7" },
               { title: "VO2 MAX ELITE", status: "SOON", type: "Endurance", icon: Activity, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWR8bC-8zvDk85bxsZVDLKRcB3HWinOxcTJV1KzcUd4IvcNCnF74CVqWDuq4Xpt2u8kYUoKAIoGalnBdIkfV-atGka0tOK_IUb9NdbGDMf1T_OM876R5H0um2vL4gnpjc8H9XYXv9wJxvlnmw-y-8_YkcxMJ2kP_oOHLQeMOAxKCBM0lSfabMCIHt7NjtENYW5ez9xybH1XbAqBgdsHMFMml56d-wNeslERnJlEzakye8tr5YiHZFbyOKJollRP3q5swTNz76nfvuy" }
             ].map((item, i) => (
               <div key={i} className={`relative rounded-xl overflow-hidden group aspect-square border ${item.status === 'ENTER' ? 'border-primary-container' : 'border-white/5'}`}>
                  <img className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all" src={item.img} alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 z-10 w-full text-left">
                     <div className="flex justify-between items-center mb-1">
                        <h4 className="text-sm font-black uppercase tracking-tighter">{item.title}</h4>
                        <span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${item.status === 'LIVE' || item.status === 'ENTER' ? 'bg-primary-container text-black' : 'bg-white/10 opacity-50'}`}>{item.status}</span>
                     </div>
                     <p className="text-[10px] opacity-60 uppercase tracking-widest">{item.type} Challenge</p>
                  </div>
               </div>
             ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Footer-ish */}
      <section className="py-24 border-t border-white/5 bg-surface-container-lowest">
        <div className="container mx-auto px-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="max-w-md text-center md:text-left">
                 <div className="text-4xl font-display font-black mb-4">FiTusion</div>
                 <p className="text-on-surface-variant text-sm">The new standard in high-performance lifestyle integration. Powered by data, driven by results.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-16">
                 <div>
                    <h6 className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-40">PLATFORM</h6>
                    <ul className="space-y-3 text-xs font-bold text-on-surface-variant">
                       <li className="hover:text-primary-container cursor-pointer transition-colors">Core Engine</li>
                       <li className="hover:text-primary-container cursor-pointer transition-colors">Biometric Sync</li>
                       <li className="hover:text-primary-container cursor-pointer transition-colors">AI Protocols</li>
                       <li className="hover:text-primary-container cursor-pointer transition-colors">Privacy</li>
                    </ul>
                 </div>
                 <div>
                    <h6 className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-40">NETWORK</h6>
                    <ul className="space-y-3 text-xs font-bold text-on-surface-variant">
                       <li className="hover:text-primary-container cursor-pointer transition-colors">Global Arena</li>
                       <li className="hover:text-primary-container cursor-pointer transition-colors">Ambassadors</li>
                       <li className="hover:text-primary-container cursor-pointer transition-colors">Studios</li>
                       <li className="hover:text-primary-container cursor-pointer transition-colors">Support</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
