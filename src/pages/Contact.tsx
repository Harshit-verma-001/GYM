import { motion } from "motion/react";
import { MapPin, Phone, Mail, ChevronDown, ChevronsRight, Globe2 } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", interest: "ELITE PERFORMANCE TRAINING", briefing: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.briefing) return;
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", interest: "ELITE PERFORMANCE TRAINING", briefing: "" });
    }, 1200);
  };

  return (
    <div className="overflow-x-hidden min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtqUgs3Xgxa4wJCY1seSjaGdulWOn8M2RX-Dl2tOpKZowxRVB0-XaVX1avJck8OMQ-UnsPZIqR8LCbj3kLwUcVH6QnT6EtvM9tP6l36XVackI2uLr38JlYX9Sgjk9aTuwrAyPPbRzqKobH0IB3cIU270kjlbpmLjdhfFQ7LVtSc0iwYby4fYbf5qLsuvBsSo-GPV6yB2jVr_ghqDy4n34VgfScdAREsvG9l_O4c2f9wWkPQLFTfm6ipV6AEU9pBIQRwWAIxIoCU9dc"
            alt="Gym Interior"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-8 relative z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-display font-black mb-8 uppercase tracking-tighter leading-none">
            CONTACT THE <br/><span className="text-primary-container">PERFORMANCE LAB</span>
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Reach out to our specialist team for high-performance equipment <br className="hidden md:block" />
            procurement and elite training program inquiries.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left Column: Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-16 leading-none">
                GLOBAL <br/><span className="text-primary-container italic">HEADQUARTERS</span>
              </h2>

              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-primary-container group-hover:border-primary-container transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary-container mb-2">LONDON FACILITY</h4>
                    <p className="text-sm font-bold text-on-surface leading-tight">
                      Unit 14, The Shard Quarter<br/>
                      London SE1 9SG, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-primary-container group-hover:border-primary-container transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary-container mb-2">DIRECT LINE</h4>
                    <p className="text-sm font-bold text-on-surface leading-tight">+44 (0) 20 7946 0123</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-primary-container group-hover:border-primary-container transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary-container mb-2">CONCIERGE EMAIL</h4>
                    <p className="text-sm font-bold text-on-surface leading-tight">concierge@fitusion.elite</p>
                  </div>
                </div>
              </div>

              {/* Operational Hours Card */}
              <div className="mt-24 p-8 bg-zinc-900 border border-white/5 rounded-xl">
                 <h5 className="text-[10px] font-black uppercase tracking-widest text-primary-container mb-6 italic">OPERATIONAL HOURS</h5>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-bold">
                       <span className="opacity-40">Monday - Friday</span>
                       <span>05:00 - 22:00</span>
                    </div>
                    <div className="w-full h-px bg-white/5"></div>
                    <div className="flex justify-between items-center text-xs font-bold">
                       <span className="opacity-40">Saturday</span>
                       <span>06:00 - 20:00</span>
                    </div>
                    <div className="w-full h-px bg-white/5"></div>
                    <div className="flex justify-between items-center text-xs font-bold">
                       <span className="opacity-40">Sunday</span>
                       <span>08:00 - 18:00</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="p-10 bg-zinc-900 border border-white/10 rounded-2xl relative">
              <div className="absolute top-8 right-10 w-24 h-1 bg-primary-container"></div>
              <h3 className="text-3xl font-display font-black uppercase tracking-tight mb-12">INITIATE INQUIRY</h3>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-black mb-8">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-display font-black uppercase tracking-tight mb-4">INQUIRY RECEIVED</h4>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-8">
                    Our performance strategist will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary-container text-[10px] font-black uppercase tracking-widest border-b border-primary-container pb-1"
                  >
                    SUBMIT ANOTHER
                  </button>
                </motion.div>
              ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-1">NAME</label>
                       <input
                         type="text"
                         placeholder="FULL NAME"
                         required
                         value={formState.name}
                         onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                         className="w-full bg-black/40 border border-white/10 rounded-lg px-6 py-4 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-primary-container transition-all"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-1">EMAIL</label>
                       <input
                         type="email"
                         placeholder="EMAIL ADDRESS"
                         required
                         value={formState.email}
                         onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                         className="w-full bg-black/40 border border-white/10 rounded-lg px-6 py-4 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-primary-container transition-all"
                       />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-1">INTEREST</label>
                    <div className="relative">
                       <select
                         value={formState.interest}
                         onChange={(e) => setFormState(s => ({ ...s, interest: e.target.value }))}
                         className="w-full bg-black/40 border border-white/10 rounded-lg px-6 py-4 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-primary-container appearance-none transition-all"
                       >
                          <option>ELITE PERFORMANCE TRAINING</option>
                          <option>EQUIPMENT PROCUREMENT</option>
                          <option>CLINICAL DIAGNOSIS</option>
                          <option>FACILITY PARTNERSHIP</option>
                       </select>
                       <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 pointer-events-none" />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-1">BRIEFING</label>
                    <textarea 
                      placeholder="PLEASE DESCRIBE YOUR PERFORMANCE GOALS OR REQUIREMENTS" 
                      rows={5}
                      required
                      value={formState.briefing}
                      onChange={(e) => setFormState(s => ({ ...s, briefing: e.target.value }))}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-6 py-6 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-primary-container transition-all resize-none"
                    ></textarea>
                 </div>

                 <motion.button 
                   whileHover={{ scale: 0.98 }}
                   type="submit"
                   disabled={submitting}
                   className="w-full py-5 bg-primary-container text-black font-black text-[10px] uppercase tracking-widest rounded-full flex justify-center items-center gap-2 disabled:opacity-60"
                 >
                    {submitting ? "TRANSMITTING..." : "SUBMIT INQUIRY"} {!submitting && <ChevronsRight className="w-4 h-4" />}
                 </motion.button>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 md:py-32 bg-surface-container-low text-center overflow-hidden">
        <div className="container mx-auto px-8">
           <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-4">GLOBAL REACH</h2>
           <p className="text-on-surface-variant max-w-2xl mx-auto text-sm leading-relaxed mb-16 px-4">Providing elite athletic engineering to peak performers in major tech and business hubs worldwide.</p>
           
           <div className="relative max-w-4xl mx-auto">
              <div className="relative aspect-video bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden grayscale">
                 <img 
                   className="w-full h-full object-cover opacity-20" 
                   src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=2070&auto=format&fit=crop" 
                   alt="World Map" 
                 />
                 
                 {/* Map Pins */}
                 <div className="absolute top-[35%] left-[48%] group cursor-pointer">
                    <div className="w-3 h-3 bg-primary-container rounded-full animate-pulse"></div>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                       <span className="text-[8px] font-black uppercase whitespace-nowrap bg-black px-2 py-1 border border-primary-container/30 rounded">LONDON HQ</span>
                    </div>
                 </div>

                 <div className="absolute top-[38%] left-[25%] group cursor-pointer">
                    <div className="w-2 h-2 bg-primary-container rounded-full opacity-60"></div>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                       <span className="text-[8px] font-black uppercase whitespace-nowrap bg-black px-2 py-1 border border-primary-container/30 rounded">NEW YORK</span>
                    </div>
                 </div>

                 <div className="absolute top-[42%] left-[80%] group cursor-pointer">
                    <div className="w-2 h-2 bg-primary-container rounded-full opacity-60"></div>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                       <span className="text-[8px] font-black uppercase whitespace-nowrap bg-black px-2 py-1 border border-primary-container/30 rounded">TOKYO</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
