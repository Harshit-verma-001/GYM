import { motion } from "motion/react";
import { Dna, LineChart, Network, ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OurDNA() {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden pt-20 bg-background text-on-surface">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover filter grayscale brightness-50" 
            alt="Cinematic gym environment" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ujBk7k6siXz5_0S8cEzw7nDuqw3e48h04Sw2cyDlCMJx1Nkuw8obKUzg1OK2QVGulvpqRAbailSV0N_5OqnDDFDzjD-e4gMYk4GldJZhxCzvsCzH6XxxiWadWIJWmO8JU2JexE9zRS0FQXg2aUcTgFm_8weMSKltv4AUvmhnnUbX1XshwSnNh71-gijlSfRGNAmdZfPhJZxBs-G8wBOkoBj4OhIublxCMCFBTM0bLqQeLOgJfWR_5xOybakZ4NyPbRhwSwIRYSRtKc"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-primary-container text-black font-bold text-[10px] tracking-[0.3em] uppercase mb-6 rounded-sm">
              Foundational Core
            </div>
            <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase italic leading-[1.1]">
              The DNA of<br/><span className="text-primary-container">Performance</span>
            </h1>
            <div className="mt-12 flex justify-center">
              <div className="w-1 h-24 bg-gradient-to-b from-primary-container to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="font-display font-bold text-5xl text-white uppercase mb-8 leading-[1.2]">
              Engineering<br/>Elite Human<br/>Capability
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              At FiTusion, we don't just train; we decode. Our philosophy is rooted in the intersection of biological potential and technological precision. We believe that every movement is a data point and every session is a step toward total optimization.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Precision */}
            <div className="bg-surface-container border border-white/5 p-8 rounded-2xl group hover:border-primary-container/50 transition-colors duration-500">
              <div className="mb-12">
                <Dna className="text-primary-container w-10 h-10" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white uppercase mb-4">Precision</h3>
              <p className="text-zinc-500 leading-relaxed">
                No wasted motion. Every micro-adjustment in your form is calculated to maximize recruitment and minimize risk. 
              </p>
            </div>
            {/* Science */}
            <div className="bg-surface-container border border-white/5 p-8 rounded-2xl group hover:border-primary-container/50 transition-colors duration-500">
              <div className="mb-12">
                <LineChart className="text-primary-container w-10 h-10" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white uppercase mb-4">Science</h3>
              <p className="text-zinc-500 leading-relaxed">
                Evidence-based programming derived from the latest kinesiology research and physiological data streams.
              </p>
            </div>
            {/* Community */}
            <div className="sm:col-span-2 bg-zinc-900/50 border border-white/5 p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center group hover:border-primary-container/50 transition-colors duration-500">
              <div className="shrink-0">
                <Network className="text-primary-container w-12 h-12" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white uppercase mb-4">Community</h3>
                <p className="text-zinc-500 max-w-xl leading-relaxed">
                  A collective of high-performers pushing the boundaries of what is possible. Iron sharpens iron in an environment designed for mutual elevation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Detail (Visual Break) */}
      <section className="bg-black py-[120px] relative overflow-hidden">
        <div className="absolute -right-20 top-0 opacity-10 select-none pointer-events-none">
          <span className="font-display font-black text-[150px] md:text-[300px] leading-none text-white italic">FITUSION</span>
        </div>
        <div className="px-8 max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-container font-bold text-sm tracking-widest uppercase block mb-4">The Manifesto</span>
            <p className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
              "WE REJECT THE MEDIOCRE. WE DEMAND THE MATHEMATICAL. WE ARE THE NEW EVOLUTION OF STRENGTH."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] px-8 text-center bg-surface-container-lowest">
        <div className="max-w-2xl mx-auto border border-primary-container/20 p-16 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary-container"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary-container"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary-container"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary-container"></div>
          
          <h2 className="font-display font-bold text-4xl text-white uppercase mb-8">Ready to Evolve?</h2>
          <p className="text-lg text-zinc-400 mb-12">
            Join the inner circle of athletes who have transcended traditional limits through our DNA-led methodology.
          </p>
          <button 
            onClick={() => navigate('/get-started')}
            className="bg-primary-container text-black px-12 py-5 font-bold text-sm uppercase tracking-[0.2em] rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto"
          >
            Join the Movement
            <ChevronsRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
