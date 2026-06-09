import  { useState } from 'react';
import { Menu, X,Sun, Moon } from 'lucide-react';

interface NavbarProps {
  developerName: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ 
  activeSection,
  setActiveSection, 
  isDark,
  toggleTheme
}: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { id: 'hero', label: 'About' },
    { id: 'skills', label: 'Skills & Tools' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Get In Touch' }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-indigo-500/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand/Logo Logo */}          
          <div className="flex items-center space-x-3 min-w-0">

    {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              aria-label="Toggle Navigation Menu"
              className="flex md:hidden w-8 h-8 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer shadow-sm shrink-0"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4 transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="w-4 h-4 transition-transform duration-200" />
              )}
            </button>
           <div className=" hidden md:flex w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-sans text-xs font-bold tracking-tight shadow-sm uppercase shrink-0">
              GD
            </div>
            <div>
             <span className="font-sans font-bold text-slate-950 dark:text-white tracking-tight block text-sm transition-colors duration-300">
                Gideon's Dev Hub
              </span>
             
            </div>
          </div>

          {/* Desktop Nav Items */}
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
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/10 dark:shadow-none'
                    : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call to Actions */}
          <div className="flex items-center space-x-3">
            {/* Live indicator of hiring availability */}
           <button
  onClick={() => {
    setActiveSection('contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="flex items-center bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide border border-emerald-200 dark:border-emerald-900/40 transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-emerald-100/80 dark:hover:bg-emerald-900/30 cursor-pointer shadow-sm"
>
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 inline-block animate-pulse"></span>
              HIRE ME
           </button>
                {/* Theme Toggle */}
                <button
  onClick={toggleTheme}
  type="button"
  aria-label="Toggle Theme Mode"
  className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer shadow-sm group"
>
  {isDark ? (
   <Moon className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12" />
  ) : (
   <Sun className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
  )}
</button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Items */}
      {isMenuOpen && (
  <div className="md:hidden border-t border-slate-200/60 dark:border-slate-800/60 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md transition-all duration-300 ease-out">
    <nav className="flex flex-col p-4 space-y-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setActiveSection(item.id);
            setIsMenuOpen(false); // Automatically closes menu drawer after clicking an option
            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`w-full text-center px-4 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-150 active:scale-[0.98] cursor-pointer ${
            activeSection === item.id
              ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
              : 'text-slate-600 dark:text-slate-400 active:bg-slate-100/70 dark:active:bg-slate-900/60'
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
