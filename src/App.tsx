import { useState, useEffect } from 'react';
import { PortfolioProjects} from './components/Portfolio-Projects';
import { ContactForm } from './components/ContactForm';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/Skills-Section';
import type {ContactMessage } from './types';
import { INITIAL_SKILLS, PROJECTS } from './data';
import { Code, ShieldCheck, Banknote, Camera, ChevronDown } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react"
export default function App() {
  // --- My Information constants ---
  const developerName = `Gideon's Dev Hub`;

  const developerEmail = 'lancelotchukwudi@gmail.com';
  // Track the form submission network lifecycle
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

// Send messages inbox to Email via Formspree API
const handleSendMessage = async (newMsg: ContactMessage) => {

    setFormStatus('loading');
  try {
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrevpejv";

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newMsg)
    });

    if (response.ok) {
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
    } else {
      throw new Error("Failed to send message to Formspree endpoint");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    setFormStatus('error');
    setTimeout(() => setFormStatus('idle'), 6000);
  }
};
  
   

    // UI Navigation states
  const [activeSection, setActiveSection] = useState('hero');


    // Handle active scroll intersection tracking via modern high performance IntersectionObserver API with optimized trigger zones for better UX and performance
  useEffect(() => {
    const sections = ['hero', 'skills', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // optimized trigger zone
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  const [isDark, setIsDark] = useState(() => {
  //  Checks  if the user previously saved a preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  // Fall back to their system/OS setting if no saved preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
});

// Syncing state to the actual DOM and localStorage for persistence across sessions
useEffect(() => {
  const root = window.document.documentElement;
  
  if (isDark) {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Save choice for next visit
  } else {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light'); // Save choice for next visit
  }
}, [isDark]);

const toggleTheme = () => {
  setIsDark(prev => !prev);
};

  return (
<div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        {/* Navbar segment */}
      <Navbar
        developerName={developerName}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      
      {/**Main Layout section */}

      <main>

     {/* HERO Banner */}
       <div className="animate-fade-in-up [animation-duration:600ms] [animation-timing-function:ease-out]">
  <Hero
    developerName={developerName}
    onExploreProjects={() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }}
  />

  {/* SKILLS Matrix & Code Sandbox segment */}
<div className="animate-fade-in [animation-duration:500ms] [animation-delay:100ms]">
  <SkillsSection skills={INITIAL_SKILLS} />
</div>
</div>

{/* PROJECT Grid */}
<div className="animate-fade-in [animation-duration:500ms] [animation-delay:100ms]">
  <PortfolioProjects
    projects={PROJECTS}
    isTypeScriptUnlocked={true}
  />
</div>

  {/* Contact form segment */}
<div className="animate-fade-in [animation-duration:500ms] [animation-delay:100ms]" id="contact">
   <ContactForm
            developerEmail={developerEmail}
            onSendMessage={handleSendMessage}
            formStatus={formStatus}
          />
  
</div>
      </main>
     
     {/* Polished professional Footer */}
<footer className="bg-slate-950 border-t border-slate-900">
      
      {/* --- PRE-FOOTER: TRUST & FAQ SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Trust, Pricing & Gallery */}
          <div className="space-y-10">
            {/* Why Work With Me */}
            <div>
              <h3 className="text-xl font-bold text-slate-50 font-sans flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                Why Work With Me?
              </h3>
              <div className="space-y-4 text-sm text-slate-400 font-sans leading-relaxed">
                <p>
                  <span className="font-semibold text-slate-200">Fair question.</span> You’re trusting someone with your business, time, and money.
                </p>
                <p>
                  That’s why I focus on clear communication, regular updates, and delivering exactly what we agree on.
                </p>
                <ul className="space-y-2 mt-4 text-slate-300 font-medium">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> No disappearing.</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> No confusing technical jargon.</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> No surprises.</li>
                </ul>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="text-xl font-bold text-slate-50 font-sans flex items-center gap-2 mb-4">
                <Banknote className="w-5 h-5 text-green-400" />
                What About Pricing?
              </h3>
              <p className="text-sm text-slate-400 font-sans leading-relaxed">
                Every project is different. Small landing pages, business websites, and custom web applications require different levels of work. After a quick discussion about your requirements, I’ll provide a clear quote with <strong className="text-slate-200 font-semibold">no hidden costs</strong>.
              </p>
            </div>

            {/* Gallery CTA */}
         
<div>
  <p className="text-sm text-slate-400 font-sans mb-3 font-medium">
    Want to see the face behind the brand?
  </p>
  <a 
    href="https://chukwudi-gideon.github.io/My-Gallery/" 
    target="_blank"
    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 text-slate-200 text-sm font-semibold rounded-xl transition-all duration-300 group cursor-pointer"
  >
    <Camera className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
    View Gallery
  </a>
</div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div>
            <h3 className="text-xl font-bold text-slate-50 font-sans mb-6">
              Frequently Asked Questions
            </h3>
            
            {/* Accordion List */}
            <div className="space-y-3">
              
              {/* FAQ 1 */}
              <details className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-sans text-sm font-semibold text-slate-200 hover:text-indigo-300 transition-colors">
                  How long does a project take?
                  <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-400 font-sans leading-relaxed">
                  Timelines depend on the scope. A standard landing page typically takes 1-2 weeks, while full custom web applications can take 4-8 weeks. I will provide a strict timeline in our initial quote.
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-sans text-sm font-semibold text-slate-200 hover:text-indigo-300 transition-colors">
                  Do you redesign existing websites?
                  <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-400 font-sans leading-relaxed">
                  Yes. Whether you need a visual facelift, better mobile responsiveness, or an underlying code rewrite to improve loading speeds, we can audit and upgrade your existing site.
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-sans text-sm font-semibold text-slate-200 hover:text-indigo-300 transition-colors">
                  Will my site work on mobile?
                  <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-400 font-sans leading-relaxed">
                  Absolutely. Every project is built "mobile-first", ensuring it looks and functions perfectly on smartphones, tablets, and large desktop monitors alike.
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-sans text-sm font-semibold text-slate-200 hover:text-indigo-300 transition-colors">
                  Can you maintain the website after launch?
                  <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-400 font-sans leading-relaxed">
                  Yes! I offer optional monthly retainers to handle security updates, content changes, hosting maintenance, and continued technical support so you can focus on your business.
                </div>
              </details>

            </div>
          </div>

        </div>
      </div>

     {/* --- BASE FOOTER: ORIGINAL DESIGN --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed from grid to a perfectly centered flex column */}
        <div className="flex flex-col items-center justify-center border-t border-slate-900 py-10 mb-2">
          
          <div className="w-full text-center">
            {/* Added justify-center to center the icon and text */}
            <p className="font-sans text-sm tracking-wide uppercase text-slate-200 font-extrabold flex items-center justify-center gap-2 mb-4">
              <Code className="w-4 h-4 text-indigo-500" />
              {developerName} &middot; Web Developer
            </p>
            
            {/* Added mx-auto and removed md:left-alignment classes to keep it centered on all screens */}
            <div className="max-w-md mx-auto flex flex-col items-center text-center space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Building modern, responsive websites and web applications with a focus on performance, usability, and clean design.
              </p>
              
             {/* Highlighted Status Badge */}
<a 
  href="#contact"
  className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-indigo-950/30 border border-indigo-500/30 text-indigo-300 text-[11px] uppercase tracking-wider font-bold rounded-lg shadow-sm hover:bg-indigo-900/50 transition-colors"
>
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
  </span>
  Available for freelance projects, collaborations, remote roles, and new opportunities.
</a>
            </div>
          </div>
          
        </div>
        
        {/* Copyright & Legal - Centered layout */}
        <div className="flex justify-center items-center text-xs text-slate-600 font-sans pb-10 text-center">
          <p className="font-medium">&copy; {new Date().getFullYear()} {developerName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
      </div>
 
  )
}