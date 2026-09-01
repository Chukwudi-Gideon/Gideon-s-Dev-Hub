import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  developerName: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navbar({
  activeSection,
  setActiveSection,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { id: 'hero', label: 'About' },
    { id: 'projects', label: 'Projects' },
    {id: 'experience', label: 'Experience & Education'},
    { id: 'skills', label: 'Skills & Tools' },
    {id: 'blog', label: 'Blog'},
    { id: 'contact', label: 'Get In Touch' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 min-w-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              aria-label="Toggle Navigation Menu"
              className="flex md:hidden w-8 h-8 items-center justify-center rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-indigo-600 transition-all cursor-pointer shadow-sm shrink-0"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4 transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="w-4 h-4 transition-transform duration-200" />
              )}
            </button>
            <div className="hidden md:flex w-10 h-10 items-center justify-center rounded-full   ring-1 ring-black/10 shadow-sm overflow-hidden shrink-0">
              <img
                src="https://i.ibb.co/RpvQHjhK/animated-me.jpg"
                alt="Image of Chukwudi Gideon"
                className="w-full h-full object-contain rounded-md"

              />
            </div>
            <div>
              <span className="font-sans font-bold text-slate-950 tracking-tight block text-sm">
               Chukwudi Gideon  
              </span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeSection === item.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/10'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setActiveSection('contact');
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide border border-emerald-200 transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-emerald-100/80 cursor-pointer shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 inline-block animate-pulse"></span>
              HIRE ME
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-md transition-all duration-300 ease-out">
          <nav className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full text-center px-4 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-600 active:bg-slate-100/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

