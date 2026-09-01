import { useState } from 'react';
import type { Skill } from '../types';
import { BookOpen } from 'lucide-react';

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<
    'all' | 'frontend' | 'styling' | 'language' | 'tools'
  >('all');

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
      case 'frontend':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'styling':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'tools':
        return 'bg-slate-100 text-slate-800 border-slate-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  // Light mode only: dark theme classes were intentionally removed.
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
              { id: 'all', label: 'All Stack' },
              { id: 'language', label: 'Languages' },
              { id: 'frontend', label: 'Frameworks' },
              { id: 'styling', label: 'Styling & UI' },
              { id: 'tools', label: 'Tooling & Git' },
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
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 tracking-tight text-sm">
                        {sk.name}
                      </h4>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded uppercase font-mono tracking-wide font-bold border ${getCategoryColor(sk.category, sk.unlocked)}`}>
                        {sk.category}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 font-sans mt-2.5 leading-normal max-w-[240px]">
                      {sk.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => window.open(sk.docUrl, '_blank')}
                    title="Open Documentation"
                    aria-label="Open Documentation"
                    className="ml-1 inline-flex items-center text-slate-400 hover:text-indigo-600 transition"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-indigo-50/40 rounded-2xl p-5 border border-indigo-100/50 flex items-start space-x-3 shadow-xs">
            <span className="text-lg bg-indigo-100 rounded-lg p-1">✨</span>
            <p className="text-xs text-indigo-900/90 font-sans leading-relaxed">
              <strong>Looking for a specific website feature?</strong> Every project is custom-designed and custom-built specifically around your personal or business needs. Whether you want a simple and elegant homepage, an online shop, or a custom application, I use these verified tools to deliver exceptionally fast, reliable, and user-friendly results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
