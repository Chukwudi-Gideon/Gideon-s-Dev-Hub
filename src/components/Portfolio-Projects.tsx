import type { Project } from '../types';
import { ExternalLink, Folder, Code2 } from 'lucide-react';

interface PortfolioProjectsProps {
  projects: Project[];
  isTypeScriptUnlocked: boolean;
}

export function PortfolioProjects({
  projects,
}: PortfolioProjectsProps) {
  return (
    <section 
      id="projects" 
      className="py-20 bg-slate-50/50 border-b border-slate-200 transition-colors duration-300 dark:bg-slate-950/40 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-sans font-bold tracking-tight text-slate-950 dark:text-slate-50">
             Featured Projects
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              Explore a curated selection of development projects. Demonstrating high standards of implementation using modern libraries.
            </p>
          </div>
        </div>

        {/* Grid display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((p) => {
            return (
              <div 
                key={p.id}
                className="bg-white rounded-2xl border border-slate-200/80 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg flex flex-col justify-between overflow-hidden dark:bg-slate-900 dark:border-slate-800/80 dark:hover:border-indigo-500/50 dark:hover:shadow-indigo-950/10"
              >
                <div>
                  {/* Splash card photo */}
                  <div className="h-48 relative overflow-hidden bg-slate-50 border-b border-slate-100 dark:bg-slate-950 dark:border-slate-800">
                    <img 
                      referrerPolicy="no-referrer"
                      src={p.image} 
                      alt={p.title}
                      className="w-full h-full object-cover transition duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Meta description */}
                  <div className="p-6">
                    <h3 className="font-sans font-bold text-slate-950 dark:text-slate-100 text-base leading-snug uppercase tracking-wide mb-2 flex items-center gap-2">
                      <Folder className="w-4 h-4 text-indigo-500 shrink-0" />
                      {p.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>

                {/* Bottom tech badges & action links block */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-50 dark:border-slate-800/60">
                  <div className="flex flex-wrap gap-1 mb-6">
                    {p.tech.map((badge) => (
                      <span 
                        key={badge} 
                        className="text-[9px] bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded font-mono font-semibold dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Button Row */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <a 
                      href={(p as any).liveUrl || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 transition duration-200 cursor-pointer text-center"
                    >
                      View Live <ExternalLink className="w-3 h-3" />
                    </a>
                    
                    <a 
                      href={(p as any).githubUrl || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-950 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800/60 dark:hover:text-slate-50 transition duration-200 cursor-pointer text-center"
                    >
                     View Codebase <Code2 className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}