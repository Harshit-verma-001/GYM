import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dumbbell, RotateCcw, Copy, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Goal = "strength" | "muscle" | "conditioning";
type Level = "beginner" | "intermediate";
type Equipment = "gym" | "bodyweight";

const plans: Record<Equipment, Record<Goal, string[]>> = {
  gym: {
    strength: ["Barbell squat", "Bench press", "Romanian deadlift", "Seated row", "Farmer carry", "Plank"],
    muscle: ["Goblet squat", "Incline dumbbell press", "Lat pulldown", "Dumbbell shoulder press", "Cable curl", "Leg curl"],
    conditioning: ["Rowing machine", "Kettlebell swing", "Step-ups", "Bike intervals", "Battle ropes", "Cooldown walk"],
  },
  bodyweight: {
    strength: ["Tempo squats", "Push-ups", "Reverse lunges", "Pike push-ups", "Glute bridge", "Side plank"],
    muscle: ["Split squats", "Slow push-ups", "Single-leg glute bridge", "Wall sit", "Calf raises", "Hollow hold"],
    conditioning: ["Jumping jacks", "Mountain climbers", "Alternating lunges", "High knees", "Squat to reach", "March in place"],
  },
};

export default function WorkoutBuilder() {
  const [goal, setGoal] = useState<Goal>("strength");
  const [level, setLevel] = useState<Level>("beginner");
  const [equipment, setEquipment] = useState<Equipment>("gym");
  const [days, setDays] = useState(3);
  const [completed, setCompleted] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);
  const exercises = useMemo(() => plans[equipment][goal], [equipment, goal]);
  const sets = level === "beginner" ? 2 : 3;
  const reps = goal === "strength" ? "6–10 reps" : goal === "muscle" ? "8–12 reps" : "30–45 sec";
  const reset = () => { setCompleted([]); setCopied(false); };
  const planText = `FiTusion sample ${goal} plan — ${days} days/week, ${level}, ${equipment}\n${exercises.map((e,i)=>`${i+1}. ${e}: ${sets} sets × ${reps}`).join("\n")}\nDemo plan only; adjust to your ability.`;
  return (
    <div className="min-h-screen bg-background text-on-background">
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
          <span className="text-primary-container uppercase tracking-[.35em] text-xs font-black">Interactive experience / 01</span>
          <h1 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter mt-5 mb-6">Build your <span className="text-primary-container">workout.</span></h1>
          <p className="text-on-surface-variant max-w-2xl text-lg">Choose your goal, experience and equipment. Watch your sample plan update instantly, tick off exercises and copy it for later.</p>
        </motion.div>
        <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-8 mt-14 items-start">
          <div className="bg-surface-container rounded-3xl border border-white/10 p-6 md:p-8 space-y-8">
            <div><h2 className="text-xs font-black uppercase tracking-widest mb-4">01 / Your goal</h2><div className="grid grid-cols-3 gap-2">{(["strength","muscle","conditioning"] as Goal[]).map(g=><button key={g} aria-pressed={goal===g} onClick={()=>{setGoal(g);reset();}} className={`rounded-xl px-2 py-4 text-xs capitalize font-bold border transition ${goal===g?"bg-primary-container text-black border-primary-container":"border-white/20 hover:border-primary-container"}`}>{g}</button>)}</div></div>
            <div><h2 className="text-xs font-black uppercase tracking-widest mb-4">02 / Experience</h2><div className="grid grid-cols-2 gap-2">{(["beginner","intermediate"] as Level[]).map(v=><button key={v} aria-pressed={level===v} onClick={()=>{setLevel(v);reset();}} className={`rounded-xl p-4 capitalize text-sm font-bold border transition ${level===v?"bg-primary-container text-black border-primary-container":"border-white/20 hover:border-primary-container"}`}>{v}</button>)}</div></div>
            <div><h2 className="text-xs font-black uppercase tracking-widest mb-4">03 / Equipment</h2><div className="grid grid-cols-2 gap-2">{(["gym","bodyweight"] as Equipment[]).map(v=><button key={v} aria-pressed={equipment===v} onClick={()=>{setEquipment(v);reset();}} className={`rounded-xl p-4 capitalize text-sm font-bold border transition ${equipment===v?"bg-primary-container text-black border-primary-container":"border-white/20 hover:border-primary-container"}`}>{v}</button>)}</div></div>
            <div><div className="flex justify-between mb-4"><label htmlFor="training-days" className="text-xs font-black uppercase tracking-widest">04 / Days per week</label><strong className="text-primary-container">{days}</strong></div><input id="training-days" type="range" min="2" max="5" value={days} onChange={e=>{setDays(Number(e.target.value));reset();}} className="w-full accent-lime-400" /></div>
            <button onClick={()=>{setGoal("strength");setLevel("beginner");setEquipment("gym");setDays(3);reset();}} className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-white"><RotateCcw size={16}/> Reset choices</button>
          </div>
          <div className="bg-surface-container-low rounded-3xl border border-primary-container/30 p-6 md:p-8">
            <div className="flex justify-between items-start gap-4 mb-7"><div><span className="text-primary-container text-xs font-black uppercase tracking-widest">Your live preview</span><h2 className="font-display text-3xl md:text-4xl font-black uppercase mt-2">{goal} / {level}</h2><p className="text-on-surface-variant text-sm mt-2">{days} days per week · {equipment} · {sets} sets per exercise</p></div><Dumbbell className="text-primary-container shrink-0" size={30}/></div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-3"><motion.div animate={{width:`${completed.length/exercises.length*100}%`}} className="bg-primary-container h-full rounded-full" /></div>
            <p className="text-xs text-on-surface-variant mb-6">{completed.length} of {exercises.length} exercises marked complete</p>
            <AnimatePresence mode="wait"><motion.div key={goal+level+equipment} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} className="space-y-3">{exercises.map((ex,i)=><button key={ex} onClick={()=>setCompleted(prev=>prev.includes(i)?prev.filter(x=>x!==i):[...prev,i])} aria-pressed={completed.includes(i)} className={`w-full text-left flex items-center gap-4 rounded-xl p-4 border transition ${completed.includes(i)?"border-primary-container/40 bg-primary-container/10":"border-white/10 bg-white/[.03] hover:border-white/30"}`}><span className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center font-black text-xs ${completed.includes(i)?"bg-primary-container text-black":"bg-white/10"}`}>{completed.includes(i)?<Check size={18}/>:String(i+1).padStart(2,"0")}</span><span className="flex-1"><strong className={completed.includes(i)?"line-through opacity-60":""}>{ex}</strong><span className="block text-xs text-on-surface-variant mt-1">{sets} sets · {reps}</span></span></button>)}</motion.div></AnimatePresence>
            <div className="flex flex-wrap gap-3 mt-8"><button onClick={()=>{navigator.clipboard?.writeText(planText).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2000);}).catch(()=>setCopied(false));}} className="bg-primary-container text-black font-black rounded-full px-6 py-3 text-sm flex items-center gap-2">{copied?<Check size={16}/>:<Copy size={16}/>} {copied?"Copied!":"Copy sample plan"}</button><Link to="/contact" className="border border-white/20 rounded-full px-6 py-3 text-sm font-bold flex items-center gap-2 hover:border-primary-container">Explore contact demo <ArrowRight size={16}/></Link></div>
            <p className="text-xs text-on-surface-variant mt-6">Illustrative workout builder, not personalized medical or fitness advice. No account, tracking or backend required.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
