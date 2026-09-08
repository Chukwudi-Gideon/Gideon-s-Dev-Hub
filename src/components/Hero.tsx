import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import type { sliderProject } from '@/types';
import { useEffect, useState } from 'react';
import  Image  from 'next/image';
import posthog from 'posthog-js';

interface HeroProps {
  developerName: string;
  onExploreProjects: () => void;
}

export function Hero({
  developerName,
  onExploreProjects,
}: HeroProps) {


const [activeProject, setActiveProject] = useState(0);

const projects:sliderProject[] = [
  {
    id: 1,
    image: "/Project-images/design-imgs1.jpeg",
    title: "E-commerce-website"
  },
  {
    id: 2,
    image: "/Project-images/design-imgs2.jpeg",
  }, 
  {
    id: 3,
    image: "/Project-images/design-imgs3.jpeg",
  },
  {
    id: 4,
    image: "/Project-images/design-imgs4.jpeg",
  },
  {
    id: 5,
    image: "/Project-images/design-imgs5.jpeg",
  },
  {
    id: 6,
    image: "/Project-images/design-imgs6.jpeg",
  },
]

useEffect(()=> {
  const interval = setInterval(() => {
    setActiveProject(current => (current + 1) % projects.length)
  }, 4000);

  return () => clearInterval(interval)
}, [])

  return (
    <section
      id="hero"
      className="relative py-14 bg-gradient-to-b from-slate-100/50 via-slate-50 to-white overflow-hidden border-b border-slate-200/60"
    >
 

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            
            <h1 className='max-w-4xl font-semibold text-4xl tracking-tighter lg:text-5xl font-sans '>
           Frontend Developer Building, <span className="italic text-slate-700 ">Fast Responsive Websites & Applications</span> 
            </h1>

            <p className="mt-3 max-w-2xl text-base sm:text-lg text-slate-700 font-serif">
            My name is  Chukwudi Gideon, I'm a frontend developer specializing in React, Vue, Angular, Next.js, TypeScript, and other modern web technologies. I fix, design, and build web projects from the ground up. I am very good at turning visual designs and raw ideas into fast, responsive websites. From diagnosing tricky layout bugs to building full web applications, I make sure the finished product looks right and works reliably</p>

            <div className="flex flex-wrap gap-4 items-center pt-2">
              <button
                onClick={() => {
                  posthog.capture('portfolio_cta_clicked', { cta: 'browse_projects' });
                  onExploreProjects();
                }}
                className="inline-flex items-center justify-center px-4 py-4 rounded-xl bg-amber-200 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-md shadow-indigo-500/10 cursor-pointer active:scale-[0.98]"
              >
                <span>Browse Portfolio Projects</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </button>
<div className='bg-orange-400 hover:bg-orange-500 py-2 px-2 rounded-2xl'>
<a
  href="/Chukwudi-Gideon-Njoku-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => posthog.capture('portfolio_cta_clicked', { cta: 'resume' })}
 className='inline-flex items-center gap-2 text-base  font-medium text--500 hover:text-slate-950 transition-colors '
  >

  View/Download CV  <ExternalLink size={18} strokeWidth={2.25} />
</a>
</div>
              <button
                onClick={() => {
                  posthog.capture('portfolio_cta_clicked', { cta: 'contact' });
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl border gap-2 border-slate-200 bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-indigo-700  transition-all shadow-sm cursor-pointer active:scale-[0.98]"
              >
                Get in Touch
                  <Mail size={14} strokeWidth={2.5} />
              </button>
            </div>

            <div className="pt-8 border-t border-slate-200/80">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-400 block uppercase mb-3">
                CURRENT TECH  STACK
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-700 text-xs font-mono border border-orange-100 font-semibold">HTML5</span>
                <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-mono border border-blue-100 font-semibold">CSS3 & Tailwind</span>
                <span className="px-3 py-1.5 rounded-lg bg-yellow-50 text-amber-800 text-xs font-mono border border-yellow-100 font-semibold">JavaScript</span>
                <span className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 text-xs font-mono border border-sky-100 font-semibold">React</span>
                <span className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-800 text-xs font-mono border border-indigo-100 font-semibold">TypeScript</span>
              </div>
            </div>
          </div>

          {/** Space for sliding image logic and code */}
          {/**
   
 */}
{/* Right side */}

<div className="lg:col-span-5 relative min-h-[500px] flex flex-col justify-center gap-4">

  {/* Sliding project screenshot */}
  <div
    key={activeProject}
    className=" relative   h-[320px]   w-full     overflow-hidden     border-slate-200
      bg-white   rounded-2xl  border  shadow-xl py-2
            animation: project-slide 800ms cubic-bezier(0.22, 1, 0.36, 1);
    "
  >
    <Image
      src={projects[activeProject].image}
      alt={projects[activeProject].title || "Design image showcase"}
      fill
      className="object-cover bg-white"
      sizes="(min-width: 1024px) 40vw, 100vw"
    />
  </div>


  {/* Personal / supporting images */}
  <div className="grid grid-cols-3 gap-1 w-full">

    {/* Me */}
    <div className="relative aspect-square overflow-hidden border-4 border-white bg-stone-100 shadow-lg rotate-[1deg]">
      <Image
        src="https://i.ibb.co/RpvQHjhK/animated-me.jpg"
        alt="Illustrated portrait of Chukwudi Gideon"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 13vw, 33vw"
      />
    </div>

    {/* Illustration */}
    <div className="relative aspect-square overflow-hidden border-4 border-white bg-stone-100 shadow-lg rotate-[-1deg]">
      <Image
        src="https://i.ibb.co/MDcQ3dpj/ilustrated-e.jpg"
        alt="Illustrated portrait of Chukwudi Gideon"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 13vw, 33vw"
      />
    </div>

    {/* Tech banner */}
    <div className="relative aspect-square overflow-hidden border-4 border-white bg-stone-100 shadow-lg rotate-[1deg]">
      <Image
        src="https://i.ibb.co/rRytSYq6/my-tech-banner.jpg"
        alt="Chukwudi's technology Image"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 13vw, 33vw"
      />
    </div>

  </div>

</div>

        </div>
      </div>
    </section>
  );
}
