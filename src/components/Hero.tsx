
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  developerName: string;
  onExploreProjects: () => void;
}

export function Hero({
  developerName,
  onExploreProjects
}: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative py-24 bg-gradient-to-b from-slate-100/50 via-slate-50 to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 overflow-hidden border-b border-slate-200/60 dark:border-slate-800/80 transition-colors duration-300"
    >
      {/* Absolute decorative subtle radial lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-20 transition-opacity">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99,102,241,0.06)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Main Visual Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            
            {/* Status pill */}
            <div className="inline-flex self-start items-center space-x-2 bg-indigo-50/80 dark:bg-indigo-950/40 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30 transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
              <span>EXPERIENCED FRONTEND DEVELOPER</span>
            </div>

            {/* Display Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-slate-950 dark:text-white leading-none transition-colors">
              Building websites <br />
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-800 dark:from-indigo-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                with absolute precision.
              </span>
            </h1>

            {/* subtext */}
           <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-sans max-w-xl leading-relaxed transition-colors">
              Hi, I'm  the owner of <strong className="text-slate-900 dark:text-white font-bold">{developerName}</strong>, I am a professional <strong className="text-slate-950 dark:text-slate-200 font-bold">Web Developer</strong>. I build high-performance,  polished websites using modern technologies to deliver exceptional, responsive user experiences.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-indigo-700 transition-all shadow-md shadow-indigo-500/10 dark:shadow-none cursor-pointer active:scale-[0.98]"
              >
                <span>Browse Portfolio Projects</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </button>
              
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm cursor-pointer active:scale-[0.98]"
              >
                Get in Touch
              </button>
            </div>

            {/* Core Tech badging info */}
            <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 block uppercase mb-3">
                CURRENT CORE PORTFOLIO STACK
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-700 dark:bg-orange-950/20 dark:text-orange-400 text-xs font-mono border border-orange-100 dark:border-orange-900/30 font-semibold transition-colors">HTML5</span>
                <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950/20 dark:text-blue-400 text-xs font-mono border border-blue-100 dark:border-blue-900/30 font-semibold transition-colors">CSS3 & Tailwind</span>
                <span className="px-3 py-1.5 rounded-lg bg-yellow-50 text-amber-800 dark:bg-amber-950/20 dark:text-amber-400 text-xs font-mono border border-yellow-100 dark:border-amber-900/30 font-semibold transition-colors">JavaScript</span>
                <span className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 dark:bg-sky-950/20 dark:text-sky-400 text-xs font-mono border border-sky-100 dark:border-sky-900/30 font-semibold transition-colors">React</span>
                <span className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-800 dark:bg-indigo-950/20 dark:text-indigo-400 text-xs font-mono border border-indigo-100 dark:border-indigo-900/30 font-semibold transition-colors">TypeScript</span>
              </div>
            </div>

          </div>

          {/* The Visual Profile Static Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-900 dark:bg-slate-950/40 rounded-2xl shadow-xl p-6 border border-slate-800 dark:border-slate-800/80 relative overflow-hidden font-mono text-xs max-w-lg mx-auto transition-all">
              
              
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-slate-700/60 block"></span>
                  <span className="w-3 h-3 rounded-full bg-slate-700/60 block"></span>
                  <span className="w-3 h-3 rounded-full bg-slate-700/60 block"></span>
                </div>
                <div className="text-[10px] text-indigo-400 uppercase tracking-widest font-mono font-bold">
                  Gideons Dev Card
                </div>
              </div>

             
              <div className="space-y-4 text-slate-300">
                <div>
                  <span className="text-slate-500 font-sans tracking-wide text-[11px]">Developer Spec</span>
                </div>
                
                <div className="space-y-2 border-l border-slate-800 pl-4 py-1">
                  <div>
                    <span className="text-indigo-400">const</span> developer = <span className="text-yellow-300">"{developerName}"</span>;
                  </div>
                  <div>
                    <span className="text-indigo-400">const</span> title = <span className="text-green-300">"Web Developer"</span>;
                  </div>
                  <div>
                    <span className="text-indigo-400">const</span> stack = [<span className="text-indigo-300">"HTML"</span>, <span className="text-indigo-300">"CSS3 & Tailwind"</span>,<span className="text-indigo-300">"JavaScript"</span>, <span className="text-indigo-300">"React"</span>, <span className="text-indigo-300">"TypeScript"</span>];
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-slate-500 font-sans tracking-wide text-[11px]">Ready for Hire</span>
                </div>
                <div className="bg-slate-950/60 dark:bg-slate-900/30 p-4 rounded-xl border border-slate-800 space-y-2 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 block animate-pulse"></span>
                    <span className="font-sans font-bold text-slate-200">Open to collaboration</span>
                  </div>
                  <p className="font-sans text-[11px] text-slate-400 leading-normal">
                    Equipped with deep expertise in styling layout engines, fast component logic, and high performance application design.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}