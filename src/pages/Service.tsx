import { motion } from "motion/react";
import { ChevronsRight, CheckCircle2, ChevronRight, Wind, Activity, Thermometer, Zap, Snowflake, Flame, Waves } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function Service() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtqUgs3Xgxa4wJCY1seSjaGdulWOn8M2RX-Dl2tOpKZowxRVB0-XaVX1avJck8OMQ-UnsPZIqR8LCbj3kLwUcVH6QnT6EtvM9tP6l36XVackI2uLr38JlYX9Sgjk9aTuwrAyPPbRzqKobH0IB3cIU270kjlbpmLjdhfFQ7LVtSc0iwYby4fYbf5qLsuvBsSo-GPV6yB2jVr_ghqDy4n34VgfScdAREsvG9l_O4c2f9wWkPQLFTfm6ipV6AEU9pBIQRwWAIxIoCU9dc"
            alt="Elite Lab"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-8 relative z-10 max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-display font-black mb-8 uppercase tracking-tighter leading-none">
            ELITE PROTOCOLS
          </h1>
          <p className="text-sm md:text-base uppercase tracking-[0.3em] font-bold text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
            PRECISION-ENGINEERED PERFORMANCE SYSTEMS DESIGNED FOR THE 1%. <br className="hidden md:block" />
            WHERE BIOLOGICAL DATA MEETS UNYIELDING ATHLETIC EXECUTION.
          </p>
          <motion.button
            whileHover={{ scale: 0.95 }}
            className="bg-primary-container text-on-primary-fixed font-black py-4 px-10 rounded-full text-xs uppercase tracking-widest flex items-center gap-2 mx-auto"
          >
            EXPLORE TIERS
            <ChevronsRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </section>

      {/* Membership Architecture */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-8">
          <ScrollReveal y={30} className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-4">MEMBERSHIP ARCHITECTURE</h2>
            <div className="w-24 h-1 bg-primary-container mx-auto"></div>
          </ScrollReveal>

          <ScrollReveal y={40} stagger={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1: Foundations */}
            <div className="bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col items-center text-center">
              <span className="text-primary-container text-[10px] font-bold uppercase tracking-widest mb-4">SYSTEM 01</span>
              <h3 className="text-3xl font-display font-black mb-10 uppercase tracking-tighter">FOUNDATIONS</h3>
              <ul className="space-y-6 w-full mb-12">
                {[
                  "Bi-Annual Metabolic Mapping",
                  "Biometric Baseline Assessment",
                  "Structured Hybrid Programming",
                  "Guided Recovery Access"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-left text-xs font-medium text-on-surface-variant">
                    <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white/20 hover:border-primary-container rounded-full text-[10px] font-black uppercase tracking-widest transition-all mt-auto">
                SELECT SYSTEM
              </button>
            </div>

            {/* Tier 2: Olympian (Highlighted) */}
            <div className="bg-surface-container-low p-10 rounded-2xl border-2 border-primary-container flex flex-col items-center text-center relative md:-translate-y-4 shadow-[0_0_40px_rgba(202,243,0,0.1)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-container text-black text-[8px] font-black px-4 py-1 rounded-full uppercase tracking-tighter">MOST ACTIVATED</div>
              <span className="text-primary-container text-[10px] font-bold uppercase tracking-widest mb-4 mt-2">SYSTEM 02</span>
              <h3 className="text-4xl font-display font-black mb-10 uppercase tracking-tighter">OLYMPIAN</h3>
              <ul className="space-y-6 w-full mb-12">
                {[
                  "Quarterly Comprehensive Blood Work",
                  "Real-Time CGM Integration",
                  "Personal Performance Director",
                  "Unlimited Recovery Lounge Use",
                  "Elite Nutritional Supplementation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-left text-sm font-bold text-on-surface">
                    <CheckCircle2 className="w-5 h-5 text-primary-container shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 bg-primary-container text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-95 transition-all mt-auto">
                GET STARTED
              </button>
            </div>

            {/* Tier 3: Pro-Elite */}
            <div className="bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col items-center text-center">
              <span className="text-primary-container text-[10px] font-bold uppercase tracking-widest mb-4">SYSTEM 03</span>
              <h3 className="text-3xl font-display font-black mb-10 uppercase tracking-tighter">PRO-ELITE</h3>
              <ul className="space-y-6 w-full mb-12">
                {[
                  "Monthly Advanced Biomarker Labs",
                  "24/7 Concierge Health Coaching",
                  "Customized DNA-Driven Training",
                  "Private Mobile Phlebotomy"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-left text-xs font-medium text-on-surface-variant">
                    <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white/20 hover:border-primary-container rounded-full text-[10px] font-black uppercase tracking-widest transition-all mt-auto">
                REQUEST INVITE
              </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Precision Diagnostics */}
      <section className="py-24 md:py-32 bg-surface-container-lowest">
        <div className="container mx-auto px-8">
          <ScrollReveal y={20} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
            <div>
              <h2 className="text-5xl font-display font-black uppercase tracking-tighter mb-4">PRECISION DIAGNOSTICS</h2>
              <p className="text-on-surface-variant max-w-lg text-sm">Stop guessing. Every program begins with a clinical analysis of your physiological output.</p>
            </div>
            <div className="text-primary-container italic font-display font-black opacity-30 text-2xl">FITUSION LABS</div>
          </ScrollReveal>

          <ScrollReveal stagger={0.15} y={40}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "VO2 MAX ANALYSIS", desc: "Gold-standard measurement of cardiovascular efficiency and aerobic capacity.", icon: Activity, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQn4f0IGrKoGRIUemV217IwdmDqPC0q3nexoG57ULuy8suANoSHRjgGiXhNF4eekej1cuL_KlR9kEwQa5ifBrPISBQgW3M86Kz6qjiDaNXVzVxqm3rc5B7NhPtk8mzUMXo2Y_PhoApG4lI6eZwQNbhUD9hhCPT2IxLMffJV-RcAOAuXFguRkOBlohglzCip_eLjy78DfrcXTxEcuuOUNsRGS9nWIbiNN1SqqAbnLLjGD7YTscWZ83AYpFbcUAM6Edf7hqmFO9FUqgZ" },
              { title: "DEXA BODY SCAN", desc: "Comprehensive analysis of body composition, bone density, and visceral fat.", icon: Wind, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQn4f0IGrKoGRIUemV217IwdmDqPC0q3nexoG57ULuy8suANoSHRjgGiXhNF4eekej1cuL_KlR9kEwQa5ifBrPISBQgW3M86Kz6qjiDaNXVzVxqm3rc5B7NhPtk8mzUMXo2Y_PhoApG4lI6eZwQNbhUD9hhCPT2IxLMffJV-RcAOAuXFguRkOBlohglzCip_eLjy78DfrcXTxEcuuOUNsRGS9nWIbiNN1SqqAbnLLjGD7YTscWZ83AYpFbcUAM6Edf7hqmFO9FUqgZ" },
              { title: "RMR METABOLICS", desc: "Pinpoint your caloric baseline and fuel utilization efficiency at rest.", icon: Zap, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQn4f0IGrKoGRIUemV217IwdmDqPC0q3nexoG57ULuy8suANoSHRjgGiXhNF4eekej1cuL_KlR9kEwQa5ifBrPISBQgW3M86Kz6qjiDaNXVzVxqm3rc5B7NhPtk8mzUMXo2Y_PhoApG4lI6eZwQNbhUD9hhCPT2IxLMffJV-RcAOAuXFguRkOBlohglzCip_eLjy78DfrcXTxEcuuOUNsRGS9nWIbiNN1SqqAbnLLjGD7YTscWZ83AYpFbcUAM6Edf7hqmFO9FUqgZ" }
            ].map((diag, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 aspect-[4/5]">
                <img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" src={diag.img} alt={diag.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-black mb-6">
                    <diag.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black mb-2 uppercase tracking-tighter">{diag.title}</h4>
                  <p className="text-[10px] text-on-surface-variant leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    {diag.desc}
                  </p>
                  <button className="text-[10px] font-black uppercase tracking-widest text-primary-container flex items-center gap-1 group/btn hover:gap-2 transition-all">
                    VIEW PROTOCOL <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Recovery Lounge */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal x={-40} className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square">
            <img 
              className="w-full h-full object-cover filter grayscale contrast-125" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtqUgs3Xgxa4wJCY1seSjaGdulWOn8M2RX-Dl2tOpKZowxRVB0-XaVX1avJck8OMQ-UnsPZIqR8LCbj3kLwUcVH6QnT6EtvM9tP6l36XVackI2uLr38JlYX9Sgjk9aTuwrAyPPbRzqKobH0IB3cIU270kjlbpmLjdhfFQ7LVtSc0iwYby4fYbf5qLsuvBsSo-GPV6yB2jVr_ghqDy4n34VgfScdAREsvG9l_O4c2f9wWkPQLFTfm6ipV6AEU9pBIQRwWAIxIoCU9dc" 
              alt="Recovery Lounge" 
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </ScrollReveal>
          <ScrollReveal x={40}>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight text-left">THE RECOVERY LOUNGE</h2>
            <p className="text-sm text-on-surface-variant mb-12 text-left leading-relaxed">
              Performance is only as good as your ability to recover. Our lounge integrates medical-grade technology to accelerate cellular repair and neural down-regulation.
            </p>
            <div className="space-y-10">
              {[
                { icon: Snowflake, title: "CRYO-CHAMBER PROTOCOL", desc: "Systemic inflammation reduction via -180°F exposure." },
                { icon: Waves, title: "INFRARED THERMAL REPAIR", desc: "Deep tissue detoxification and cardiovascular conditioning." },
                { icon: Wind, title: "HYPERBARIC OXYGEN (MHBT)", desc: "Enhanced mitochondrial function and cognitive recovery." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group items-start text-left">
                  <div className="text-primary-container shrink-0 mt-1">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="text-[10px] text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ready CTA */}
      <section className="py-32 bg-background border-t border-white/5 text-center">
        <ScrollReveal y={40} className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-12 uppercase tracking-tighter leading-none">
            READY TO UPGRADE <br/>YOUR HUMAN POTENTIAL?
          </h2>
          <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-16 leading-relaxed opacity-60">
            CONSULTATIONS INCLUDE A PRELIMINARY BIOMETRIC REVIEW AND SYSTEM RECOMMENDATION.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.button
              whileHover={{ scale: 0.95 }}
              className="bg-primary-container text-on-primary-fixed font-black py-5 px-12 rounded-full text-[10px] uppercase tracking-widest"
            >
              SCHEDULE CONSULTATION
            </motion.button>
            <button className="border border-white/20 hover:border-primary-container text-white font-black py-5 px-12 rounded-full text-[10px] uppercase tracking-widest transition-all">
              SPEAK WITH A STRATEGIST
            </button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
