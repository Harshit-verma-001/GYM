import { motion } from "motion/react";
import { ChevronsRight, Utensils, User, Activity, Zap, Dumbbell, Flame, ArrowRight, Heart, Footprints, CheckCircle2 } from "lucide-react";
import { useState, FormEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "../components/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const navigate = useNavigate();
  const [ctaEmail, setCtaEmail] = useState("");
  const [ctaSubmitted, setCtaSubmitted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const handleCtaSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!ctaEmail) return;
    setCtaSubmitted(true);
    setCtaEmail("");
  };

  // Hero parallax effect
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;
    const bg = section.querySelector(".hero-bg") as HTMLElement;
    if (!bg) return;
    const tween = gsap.to(bg, {
      y: "25%",
      scale: 1.1,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    return () => { tween.kill(); };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[calc(100vh-73px)] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            className="hero-bg w-full h-full object-cover filter grayscale contrast-125 will-change-transform"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR9AuRXLiIasfo9KmuyGUSD3T9igUMHpsjS8e6HkfkGi033VdO3N1yrXKVSfBV0z3YWbHHsqDOyZ0N62jwBhtsySLNpF-Bo89KbyaV6Yisytka1agTZIutMJNyIDM_IdZkx4za1cKmwQC6YShiDUUdT9Z2mqTqmJ67xCR4xr4oMvv_dOOx4EAWlnh4f8ka1W_59o4UuObX_9Jt_VS8HnFV4x-5ERpaKvTYh7MxJuTO-LPOqAlG7SMIL-gwxdvaQAD-MlFGmeqgoiIj"
            alt="Muscular bodybuilder"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary-container font-display font-bold uppercase tracking-[0.3em] mb-4 block text-sm">Redefine Performance</span>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-[1.1]">Sculpt Your Body, <br/>Elevate Your Spirit</h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              Experience the ultimate fusion of technology and raw physical training. Tailored programs for elite performance and unmatched results.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <motion.button
                whileHover={{ scale: 0.95 }}
                onClick={() => navigate('/service')}
                className="bg-primary-container text-on-primary-fixed font-bold py-4 px-10 rounded-full text-lg flex items-center gap-2 group"
              >
                Let's Start
                <ChevronsRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <button onClick={() => navigate('/exercise')} className="border border-white/20 hover:border-primary-container text-white font-bold py-4 px-10 rounded-full text-lg transition-colors">
                View Classes
              </button>
            </div>
          </motion.div>

          {/* HUD Floating Stats */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="hud-stats p-6 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-primary-container"><CountUp end={120} suffix="+" duration={2.5} enableScrollSpy scrollSpyOnce /></span>
              <span className="text-sm uppercase tracking-widest text-zinc-500">Hours Training</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="hud-stats p-6 rounded-2xl flex flex-col items-center justify-center translate-y-12">
              <span className="text-4xl font-black text-white"><CountUp end={45} duration={2} enableScrollSpy scrollSpyOnce /></span>
              <span className="text-sm uppercase tracking-widest text-zinc-500">Poses Mastery</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="hud-stats p-6 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-white"><CountUp end={3.2} decimals={1} suffix="k" duration={2} enableScrollSpy scrollSpyOnce /></span>
              <span className="text-sm uppercase tracking-widest text-zinc-500">Kcal Burned</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="hud-stats p-6 rounded-2xl flex flex-col items-center justify-center translate-y-12">
              <span className="text-4xl font-black text-primary-container"><CountUp end={800} duration={2.5} enableScrollSpy scrollSpyOnce /></span>
              <span className="text-sm uppercase tracking-widest text-zinc-500">Total Sets</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-surface-container-lowest border-y border-white/5 overflow-hidden">
        <div className="relative">
          <div className="flex items-center gap-16 opacity-30 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, j) => (
              <div key={j} className="flex items-center gap-16 shrink-0">
                <span className="text-2xl font-black tracking-tighter">UNDER ARMOUR</span>
                <span className="text-2xl font-black italic">Reebok</span>
                <span className="text-2xl font-black">ADIDAS</span>
                <span className="text-2xl font-black tracking-widest">PUMA</span>
                <span className="text-2xl font-black">NIKE</span>
                <span className="text-2xl font-black">GYMSHARK</span>
                <span className="text-2xl font-black tracking-tighter">UNDER ARMOUR</span>
                <span className="text-2xl font-black italic">Reebok</span>
                <span className="text-2xl font-black">ADIDAS</span>
                <span className="text-2xl font-black tracking-widest">PUMA</span>
                <span className="text-2xl font-black">NIKE</span>
                <span className="text-2xl font-black">GYMSHARK</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <ScrollReveal className="order-2 lg:order-1 relative group" x={-30} y={0}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -inset-4 border border-primary-container/20 rounded-2xl z-0"
            />
            <img
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-2xl filter grayscale shadow-2xl group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWR8bC-8zvDk85bxsZVDLKRcB3HWinOxcTJV1KzcUd4IvcNCnF74CVqWDuq4Xpt2u8kYUoKAIoGalnBdIkfV-atGka0tOK_IUb9NdbGDMf1T_OM876R5H0um2vL4gnpjc8H9XYXv9wJxvlnmw-y-8_YkcxMJ2kP_oOHLQeMOAxKCBM0lSfabMCIHt7NjtENYW5ez9xybH1XbAqBgdsHMFMml56d-wNeslERnJlEzakye8tr5YiHZFbyOKJollRP3q5swTNz76nfvuy"
              alt="Athlete muscles"
            />
          </ScrollReveal>
          <ScrollReveal className="order-1 lg:order-2" x={30} y={0}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Inspired to Inspire <br/><span className="text-primary-container italic">Your Best Self</span></h2>
            <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
              We believe fitness is more than just lifting weights; it's about the mental fortitude to push past your perceived limits every single day.
            </p>
            <ul className="space-y-8">
              {[
                { icon: Utensils, title: "Nutrition Guidance", desc: "Personalized meal plans built for your specific metabolism and goals." },
                { icon: User, title: "Expert Trainers", desc: "Work with certified professionals who live and breathe performance." },
                { icon: Activity, title: "Progress Tracking", desc: "Real-time data visualization of your strength and endurance gains." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-1">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface-container">
        <div className="container mx-auto px-8">
          <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-primary-container font-bold uppercase tracking-widest mb-4 block text-xs">Our Expertise</span>
              <h2 className="text-4xl font-display font-bold">Discover What Sets Us Apart</h2>
            </div>
            <button onClick={() => navigate('/service')} className="text-white border-b border-primary-container pb-2 font-bold hover:text-primary-container transition-colors">See All Services</button>
          </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Cardio Training", desc: "Boost your cardiovascular health with high-intensity endurance sessions." },
              { icon: Dumbbell, title: "Strength Build", desc: "Focused hypertrophy and powerlifting programs for maximum muscle growth." },
              { icon: Flame, title: "Fat Loss", desc: "Optimized caloric burn strategies combined with metabolic conditioning." },
              { icon: Zap, title: "HIIT Workouts", desc: "Short, intense bursts of exercise followed by brief recovery periods." }
            ].map((service, i) => (
              <div key={i} className="bg-surface-container-low p-8 rounded-2xl border border-white/5 hover:border-primary-container transition-all group">
                <service.icon className="w-10 h-10 text-primary-container mb-6" />
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-on-surface-variant mb-6 text-sm">{service.desc}</p>
                <button onClick={() => navigate('/features')} className="text-primary-container font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 overflow-hidden">
        <ScrollReveal className="container mx-auto px-8 mb-16 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Train Smarter Unleash Your Potential</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Elite specialized training modules designed to target specific athletic disciplines.</p>
        </ScrollReveal>
        <div className="flex gap-6 px-8 overflow-x-auto no-scrollbar pb-8">
          {[
            { title: "Barbell Basics", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9P_RlpXWkz8WJ-c5UHNHsHLSrFF9lv_zgaQ2IPSb5SH2JOjUHtKYRVS5M-7mu0HBAI8pFXkuPd5a0m7O9pqMBtKtRJjlQh_mbuFYFS2tmlrK4JChzcZErDJiPzI6XJ2myvgtq3jKOT9sksZn_htWcFzZ3wBIqREyjTyGRpFr9eC5NWzHqtqQtP03QhHAXCe-dQelnqY8c8yga6uWuPY9VRSmQwrIH_-75JWRzG4fbhB5cClim9tO6D7SRK67285NglXH2zSMeGfdl" },
            { title: "Kettlebell Masterclass", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNeNMdRuPDYBkkj4S-2NZQHKhjfKV2li5LKHu277q5OiMhGUM2OY8u4FvsgXDzHh82_NM3eEPO96ynzKdFt3zuPc-fDRGhRPMxSojiZtv3Doa7tW78YuAYfxXWA8HCgSwaTb5dHPCSesJdnSCYKsi9kApJULBKv-BAgP8Pjqr_-4qgclB8tgD6T9Zc4B5uJf3Zoibsh9yvEG7EQZo-vlAeUlsO1xRbBbwZzMYtWAEaJDIwNM06wI3dA4sCIjDcEU1oFW3o2hioACh4" },
            { title: "Cardio Power Boost", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtqUgs3Xgxa4wJCY1seSjaGdulWOn8M2RX-Dl2tOpKZowxRVB0-XaVX1avJck8OMQ-UnsPZIqR8LCbj3kLwUcVH6QnT6EtvM9tP6l36XVackI2uLr38JlYX9Sgjk9aTuwrAyPPbRzqKobH0IB3cIU270kjlbpmLjdhfFQ7LVtSc0iwYby4fYbf5qLsuvBsSo-GPV6yB2jVr_ghqDy4n34VgfScdAREsvG9l_O4c2f9wWkPQLFTfm6ipV6AEU9pBIQRwWAIxIoCU9dc" },
            { title: "TRX Suspension", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1c6Oph4L72gIZBYmOhpstyuk9Meqm9PCFjJ7KXIQ7nZG0ms4yARYN5GJcHFjIg57T8J81SMW7viShLzXFt2jp9vDI-9w6fbGmL-f2PG-nv-qkygIlzhdDH_e_-Z4Xilyq6iLoNg51S73GADPVgz7Sj_eAU2Z0HfQNCezEPVnkOy4w6H5hjEUAVirHERKTMMhE_c28AJsqlYMSgg0tOACRwWn1kvLVhQDbf5bX_oW0QdBy5HpadZlPDzhGeLyJxq5TdYAZl1-HNY45" }
          ].map((program, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[400px] relative rounded-2xl overflow-hidden group">
              <img className="w-full h-[500px] object-cover grayscale transition-transform duration-500 group-hover:scale-110" src={program.img} alt={program.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h4 className="text-2xl font-black mb-4">{program.title}</h4>
                <button onClick={() => navigate('/exercise')} className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary-container hover:text-black font-bold rounded-full transition-all">See Plan</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-zinc-900/50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal x={-40} y={0}>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">Experience Fitness Like Never Before</h2>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center text-black">
                    <Heart className="w-8 h-8 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black mb-3">Endurance Evolution</h4>
                    <p className="text-on-surface-variant max-w-md">Our specialized cardio trackers monitor your heart rate zones to ensure you're always working at peak efficiency.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-primary-container">
                    <Footprints className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black mb-3">Speed Surge</h4>
                    <p className="text-on-surface-variant max-w-md">Master the mechanics of explosive movement with step-by-step biomechanical analysis from our elite coaches.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative" x={40} y={0}>
              <div className="absolute -inset-4 border-2 border-primary-container/20 rounded-2xl"></div>
              <img className="relative z-10 rounded-xl filter grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQn4f0IGrKoGRIUemV217IwdmDqPC0q3nexoG57ULuy8suANoSHRjgGiXhNF4eekej1cuL_KlR9kEwQa5ifBrPISBQgW3M86Kz6qjiDaNXVzVxqm3rc5B7NhPtk8mzUMXo2Y_PhoApG4lI6eZwQNbhUD9hhCPT2IxLMffJV-RcAOAuXFguRkOBlohglzCip_eLjy78DfrcXTxEcuuOUNsRGS9nWIbiNN1SqqAbnLLjGD7YTscWZ83AYpFbcUAM6Edf7hqmFO9FUqgZ" alt="Athlete rope climb" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <ScrollReveal className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Your Fitness Goals, Their Expertise</h2>
            <p className="text-on-surface-variant">Our trainers aren't just instructors; they're world-class athletes.</p>
          </ScrollReveal>
          <ScrollReveal stagger={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Blake Hunter", role: "Powerlifting Specialist", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMa_fvvtdxXevxa3ftMGhooaGlI236VjmQ6FGokbQgCsvvvOVooZQqVKcEKuC-H6rWx4d4KWd38aN3iJXfXCD48k1PJuQ0rGNIvqROYZG-X6r67qt_vTmw3hfjs3GEcw6bddfAXN4OuJM8rsMDU3EMyO5rQ-a0ZH69bjhZ_RKF48XNhB5m5ih3jqoIkhqnZ2PjCd3iEaOIP8w5djMKIO9hs7-ThF3TkQF7ER_LSr6ASFD7O2O0JaaOIenGzOTjR575jGIEjipDyc3_" },
              { name: "Liam Crossfit", role: "Conditioning Coach", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlhfJFlyDMv8JosVW-o4yysueko5zQRKLaGKEQgqNxVqk68Ihqq90SFY66n9IoJGWsu_NKxTGvE40vJIUYEsYrDsiFEHxxCiB9EJJsXhe8i181f9Al7fD7LXOF8-85qoaZsr5oeYsjElpGXzkpribeFTj3DfdFypqe6WY5FhXiiDJhpAO16a5TZ7oC_yo5A8QTzY5Z_gtOmEAoM8qQMuWdkWJlPwotfGfSd9dbcZBXTx7NaWeLrwUHcKqbRtqhvZXUpb_3gZR7GSSg" },
              { name: "Logan Torque", role: "Mobility Master", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtDFm6uPlfQoajXGZBBqyX0ZYXnEQbJXLuWdo6q1Z0d3KeBdLpqk-OU61EcFCE6ZtzU0diQzC0S73--uKVSsl3ahPkg0ZbAtS7A-I5gdqWNRWbvtwuNtBMGa1F4po_neqoF72kRMEfn3DRJCoveCY_embjS-bInYJXdvGknghPlf3GVArTvntzLaZwRCAzsnVin5d6mv6COTZUoz8ujmRbTH2sOQNgQwzU-dRVr0FWtChAMEjHqiDeouvSrhxK8S_xIhDMR2r0NKR7" }
            ].map((trainer, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl">
                <img className="w-full aspect-[3/4] object-cover grayscale transition-transform duration-700 group-hover:scale-110" src={trainer.img} alt={trainer.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="text-2xl font-black mb-1">{trainer.name}</h4>
                  <p className="text-primary-container font-bold uppercase tracking-widest text-[10px] mb-4">{trainer.role}</p>
                </div>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <ScrollReveal className="container mx-auto px-8 relative">
          <span className="text-[200px] font-black text-white/5 absolute -top-32 -left-12 select-none">"</span>
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-4xl font-display font-bold mb-16">Your Success Stories, Our Inspiration</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center text-left">
              <img className="w-48 h-48 rounded-full object-cover grayscale border-4 border-primary-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANqKMmL3E24gww6qmH4zflKqjL6QeoMTnmljUXHuo6UsSwVxh4uPrsq8QzK0MqGM0OCim7MSi7J2_Hx-xA7XEeJjvnwVeKqFjpoaBxM1_TXJH7e3P3tX4Dtx8UdRfyyI38Hrs8EK69Yc5-WRoN714-w5i8jxYE3CeDYVpi076Tv37J0kHPxPbPJX2Vqa5gVJysY-i8vAKBEk8ff4SPMG1PVOReYXZzfJgb6osf3McrsUkcyzaNX8K9yMyPZcGmDJOoxtFPgfz2uVo_" alt="Client" />
              <div>
                <p className="text-2xl italic mb-8 font-display">"Joining FiTusion was the best decision of my life. The scientific approach to training and the relentless support from the coaches helped me lose 30lbs and gain massive confidence."</p>
                <h5 className="text-xl font-bold">Sarah Jenkins</h5>
                <p className="text-primary-container font-bold text-sm">MEMBER FOR 2 YEARS</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-8 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-display font-black mb-8 leading-tight">Connect Engage <br/><span className="text-primary-container">Transform</span></h2>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto mb-12">
            Join our community of performance seekers. Get the latest training protocols and nutrition hacks delivered to your inbox.
          </p>
          {ctaSubmitted ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-3 text-primary-container">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-display font-bold text-lg">Welcome to the FiTusion community!</span>
            </motion.div>
          ) : (
          <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-4" onSubmit={handleCtaSubmit}>
            <input className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:outline-none focus:border-primary-container" placeholder="Your Email Address" type="email" required value={ctaEmail} onChange={(e) => setCtaEmail(e.target.value)} />
            <button type="submit" className="bg-primary-container text-on-primary-fixed font-bold py-4 px-10 rounded-full hover:scale-95 transition-transform whitespace-nowrap">Join Now</button>
          </form>
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[30vw] font-black leading-none text-outline select-none">FUSION</span>
        </div>
      </section>
    </div>
  );
}
