import { motion } from "motion/react";
import { ChevronsRight, Star, Flame, Dumbbell, Zap, Heart, Check, PartyPopper } from "lucide-react";
import { useState, FormEvent } from "react";

export default function GetStarted() {
  const [selectedTier, setSelectedTier] = useState<string>("pro");
  const [objectives, setObjectives] = useState<string[]>(["strength"]);
  const [biometrics, setBiometrics] = useState({ height: "", weight: "", bodyfat: "", heartrate: "" });
  const [enrolled, setEnrolled] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleObjective = (id: string) => {
    setObjectives(prev => 
      prev.includes(id) ? prev.filter(o => o !== id) : [...prev, id]
    );
  };

  const handleEnroll = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedTier || objectives.length === 0) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setEnrolled(true);
    }, 1500);
  };

  if (enrolled) {
    return (
      <div className="bg-background text-on-background min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center px-8 max-w-xl"
        >
          <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-black mb-8 mx-auto">
            <PartyPopper className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-4">
            ENROLLMENT <span className="text-primary-container">CONFIRMED</span>
          </h1>
          <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-4 leading-relaxed">
            Protocol: <span className="text-primary-container font-black">{selectedTier.toUpperCase()}</span>
          </p>
          <p className="text-on-surface-variant text-sm mb-12">
            Your performance director will reach out within 24 hours to schedule your initial biometric assessment.
          </p>
          <button
            onClick={() => { setEnrolled(false); setSubmitting(false); }}
            className="text-primary-container text-[10px] font-black uppercase tracking-widest border-b border-primary-container pb-1"
          >
            MODIFY ENROLLMENT
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* Hero Header */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20">
           <img 
             className="w-full h-full object-cover grayscale" 
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtqUgs3Xgxa4wJCY1seSjaGdulWOn8M2RX-Dl2tOpKZowxRVB0-XaVX1avJck8OMQ-UnsPZIqR8LCbj3kLwUcVH6QnT6EtvM9tP6l36XVackI2uLr38JlYX9Sgjk9aTuwrAyPPbRzqKobH0IB3cIU270kjlbpmLjdhfFQ7LVtSc0iwYby4fYbf5qLsuvBsSo-GPV6yB2jVr_ghqDy4n34VgfScdAREsvG9l_O4c2f9wWkPQLFTfm6ipV6AEU9pBIQRwWAIxIoCU9dc" 
             alt="Enrollment background"
           />
        </div>
        <div className="container mx-auto px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-4"
            >
              INITIATE YOUR <span className="text-primary-container">EVOLUTION</span>
            </motion.h1>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] opacity-60">PHASE ONE: ENROLLMENT AND BIO-OPTIMIZATION.</p>
        </div>
      </section>

      <form onSubmit={handleEnroll} className="container mx-auto px-8 py-24 max-w-5xl">
        {/* Section 01: Protocol */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
             <span className="text-4xl font-display font-black opacity-10">01</span>
             <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight">SELECT YOUR PROTOCOL</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Foundations */}
            <div 
              onClick={() => setSelectedTier("foundations")}
              className={`p-10 rounded-2xl border transition-all cursor-pointer group ${selectedTier === 'foundations' ? 'bg-white/5 border-primary-container' : 'border-white/10 hover:border-white/20'}`}
            >
              <div className="flex justify-between items-start mb-12">
                 <h3 className="text-2xl font-display font-black uppercase tracking-tight">FOUNDATIONS</h3>
                 <Dumbbell className={`w-5 h-5 transition-colors ${selectedTier === 'foundations' ? 'text-primary-container' : 'opacity-20'}`} />
              </div>
              <p className="text-xs uppercase tracking-widest leading-relaxed opacity-40 mb-12 h-12">ESSENTIAL PERFORMANCE METRICS AND STANDARD TRAINING ACCESS.</p>
              <div className="text-3xl font-display font-black mb-12">$149 <span className="text-xs opacity-40 font-sans tracking-normal">/ MO</span></div>
              <button type="button" className={`w-full py-3 rounded text-[10px] font-black uppercase tracking-widest border border-white/20 transition-all ${selectedTier === 'foundations' ? 'bg-primary-container text-black border-primary-container' : 'hover:border-white'}`}>
                SELECT TIER
              </button>
            </div>

            {/* Pro-Elite */}
            <div 
              onClick={() => setSelectedTier("pro")}
              className={`p-10 rounded-2xl border transition-all cursor-pointer relative ${selectedTier === 'pro' ? 'bg-primary-container text-black border-primary-container' : 'border-white/10 hover:border-white/20'}`}
            >
              <div className="absolute top-4 left-6 bg-black text-white text-[8px] font-black px-2 py-0.5 rounded">RECOMMENDED</div>
              <Star className="absolute top-4 right-6 w-5 h-5" />
              <div className="flex justify-between items-start mb-8 mt-4">
                 <h3 className="text-3xl font-display font-black uppercase tracking-tight leading-none">PRO-ELITE</h3>
              </div>
              <p className={`text-xs uppercase tracking-widest leading-relaxed mb-12 h-12 ${selectedTier === 'pro' ? 'text-black/60' : 'opacity-40'}`}>FULL BIOMETRIC TRACKING, RECOVERY PROTOCOLS, AND PRIORITY COACHING.</p>
              <div className="text-4xl font-display font-black mb-12">$299 <span className="text-xs opacity-60 font-sans tracking-normal">/ MO</span></div>
              <button type="button" className={`w-full py-4 text-[10px] font-black uppercase tracking-widest transition-all italic flex justify-center items-center gap-2 ${selectedTier === 'pro' ? 'bg-black text-white' : 'border border-white/20'}`}>
                SELECT PROTOCOL <ChevronsRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </section>

        {/* Section 02: Biometric Baseline */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
             <span className="text-4xl font-display font-black opacity-10">02</span>
             <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight">BIOMETRIC BASELINE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-2">
               <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">HEIGHT (CM)</label>
               <input type="text" placeholder="180" value={biometrics.height} onChange={(e) => setBiometrics(s => ({ ...s, height: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 focus:outline-none focus:border-primary-container placeholder:opacity-20" />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">WEIGHT (KG)</label>
               <input type="text" placeholder="85.0" value={biometrics.weight} onChange={(e) => setBiometrics(s => ({ ...s, weight: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 focus:outline-none focus:border-primary-container placeholder:opacity-20" />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">BODY FAT %</label>
               <input type="text" placeholder="12.5" value={biometrics.bodyfat} onChange={(e) => setBiometrics(s => ({ ...s, bodyfat: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 focus:outline-none focus:border-primary-container placeholder:opacity-20" />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">RESTING HEART RATE (BPM)</label>
               <input type="text" placeholder="58" value={biometrics.heartrate} onChange={(e) => setBiometrics(s => ({ ...s, heartrate: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 focus:outline-none focus:border-primary-container placeholder:opacity-20" />
            </div>
          </div>
        </section>

        {/* Section 03: Performance Objectives */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
             <span className="text-4xl font-display font-black opacity-10">03</span>
             <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight">PERFORMANCE OBJECTIVES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 'fatloss', label: 'FAT LOSS', icon: Flame },
              { id: 'strength', label: 'STRENGTH', icon: Dumbbell },
              { id: 'explosivity', label: 'EXPLOSIVITY', icon: Zap },
              { id: 'longevity', label: 'LONGEVITY', icon: Heart }
            ].map((obj) => (
              <div 
                key={obj.id}
                onClick={() => toggleObjective(obj.id)}
                className={`p-6 rounded border transition-all flex items-center justify-between cursor-pointer group ${objectives.includes(obj.id) ? 'bg-white/5 border-primary-container' : 'border-white/5 hover:border-white/10'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded shrink-0 flex items-center justify-center transition-colors ${objectives.includes(obj.id) ? 'text-primary-container' : 'opacity-40'}`}>
                    <obj.icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${objectives.includes(obj.id) ? 'text-white' : 'opacity-40'}`}>{obj.label}</span>
                </div>
                <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${objectives.includes(obj.id) ? 'bg-primary-container border-primary-container' : 'border-white/20'}`}>
                   {objectives.includes(obj.id) && <Check className="w-3 h-3 text-black font-black" />}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-white/5 mb-12"></div>

        <div className="text-center">
           <motion.button 
             whileHover={{ scale: 0.98 }}
             type="submit"
             disabled={submitting}
             className="bg-primary-container text-black font-black py-5 px-16 rounded text-[10px] uppercase tracking-widest italic flex items-center gap-2 mx-auto disabled:opacity-60"
           >
              {submitting ? "PROCESSING..." : "FINALIZE ENROLLMENT"} {!submitting && <ChevronsRight className="w-4 h-4" />}
           </motion.button>
           <p className="mt-6 text-[8px] font-bold uppercase tracking-widest opacity-40">BY ENROLLING, YOU AGREE TO THE ELITE TERMS OF SERVICE.</p>
        </div>
      </form>
    </div>
  );
}
