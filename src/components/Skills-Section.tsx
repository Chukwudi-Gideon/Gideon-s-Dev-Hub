import { useState } from 'react';
import type { Skill } from '../types';


interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<
    'all' |'styling' | 'language' | 'tools' | 'frameworks'>('all');

  const filteredSkills = skills.filter((s) => {
    if (selectedCategoryFilter === 'all') return true;
    return s.category === selectedCategoryFilter;
  });

  const getCategoryColor = (cat: string, isLocked: boolean) => {
    if (isLocked === false) {
      return 'bg-slate-100 text-slate-400 border-slate-200';
    }

    switch (cat) {
      case 'language':
        return 'bg-amber-50 text-amber-800 border-amber-200';
        case 'frameworks': 
        return 'bg-amber-100 text-slate-700 border-amber-300'
      case 'styling':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'tools':
        return 'bg-slate-100 text-slate-800 border-slate-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };


  return (
    <section id="skills" className="py-10 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-sans font-bold tracking-tight text-slate-950">
              Tech Stack & Verified Skills
            </h2>
            <p className="mt-2 text-sm text-slate-500 font-sans leading-relaxed">
              A comprehensive showcase of the technologies, tools, and libraries I utilize to build responsive, high-precision websites.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex border-b border-slate-200/80 pb-3 overflow-x-auto space-x-1 whitespace-nowrap">
            {[
              { id: 'all', label: 'All Stacks' },
             
            ].map((pill) => (
              <button
                key={pill.id}
                onClick={() => setSelectedCategoryFilter(pill.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border ${
                  selectedCategoryFilter === pill.id
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-200/60'
                    : 'text-slate-500 hover:text-slate-950 border-transparent hover:bg-slate-100/60'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredSkills.map((sk) => (
              <div key={sk.name} className="bg-white border rounded-xl p-5 border-slate-200/80 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 tracking-tight text-sm flex items-center">
                        {sk.name}
                      </h4>
                      
                    </div>

                    <p className="text-xs text-slate-500 font-sans mt-2.5 leading-normal max-w-[240px]">
                      {sk.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
