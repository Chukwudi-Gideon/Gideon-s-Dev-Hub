import React from 'react';
import {useState} from 'react';
import {Mail, Send, Check, User, Building, MessageSquare} from 'lucide-react';
import type {ContactMessage} from '../types'

interface ContactFormProps{
  developerEmail: string,
  onSendMessage: (msg: ContactMessage) => void; 
  formStatus: 'idle' | 'loading' | 'success' | 'error';
}
export function ContactForm({
  developerEmail,
  onSendMessage,
  formStatus
}: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [messageText, setMessageText] = useState('');




  //handle submission logic
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !messageText.trim()) return;

    const newMsg: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      company: company.trim() || undefined,
      role: role.trim() || undefined,
      message: messageText.trim(),
      timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };

    onSendMessage(newMsg);


    // Reset Form Fields
    setName('');
    setEmail('');
    setCompany('');
    setRole('');
    setMessageText('');
   
  };
return (
    <section 
      id="contact" 
      className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
      
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl font-sans font-bold tracking-tight text-slate-950 dark:text-white uppercase">
                Let's build your next website.
              </h2>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                Whether you need a full professional business website, a creative portfolio, have an idea, design file, or a custom landing page, get in touch. We build modern, lightning-fast sites tailored to your vision.
              </p>
            </div>

    
            <div className="space-y-3">
              
              {/* Email Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl transition-colors group">
                <div className="flex items-start sm:items-center space-x-3 min-w-0">
                  <div className="p-2.5 bg-slate-950 dark:bg-slate-800 text-slate-100 dark:text-slate-200 rounded-xl shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Send me a quick direct email</span>
                   <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=lancelotchukwudi@gmail.com"
  target="_blank"
  className="group/link flex flex-wrap items-center gap-x-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition break-all mt-0.5 font-style: italic"
>
  <span>Click to email instantly at:</span>
  <span className="font-bold text-indigo-600 dark:text-indigo-400 underline decoration-1 underline-offset-4 group-hover/link:text-indigo-700 dark:group-hover/link:text-indigo-300 transition-colors">
    {developerEmail}
  </span>
</a>
                  </div>
                </div>
                {/* Small Right-Side Nudge Button */}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=lancelotchukwudi@gmail.com" target="_blank"
                  className="self-end sm:self-auto flex items-center justify-center p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:border-indigo-200 dark:group-hover:border-indigo-900 shadow-sm transition-all animate-bounce [animation-duration:2s] shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl transition-colors group">
                <div className="flex items-start sm:items-center space-x-3 min-w-0">
                  <div className="p-2.5 bg-slate-950 dark:bg-slate-800 text-slate-100 dark:text-slate-200 rounded-xl shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Send a direct message via whatsapp</span>
                    <a href="https://wa.me/message/HH24EFJKQPMGP1" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition 	font-style: italic">
                     Click to Chat Instantly on Whatsapp
                    </a>
                  </div>
                </div>
                {/* Small Right-Side Nudge Button */}
                <a 
                  href="https://wa.link/ix9sny"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="self-end sm:self-auto flex items-center justify-center p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 transition-all animate-bounce [animation-duration:2s] shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Telegram Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl transition-colors group">
                <div className="flex items-start sm:items-center space-x-3 min-w-0">
                  <div className="p-2.5 bg-slate-950 dark:bg-slate-800 text-slate-100 dark:text-slate-200 rounded-xl shrink-0">
                    <Send className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Send a direct message via telegram</span>
                    <a href="https://t.me/GideonsDev" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition 	font-style: italic">
                     Click to  Chat Instantly on Telegram
                    </a>
                  </div>
                </div>
                {/* Small Right-Side Nudge Button */}
                <a 
                  href="https://t.me/GideonsDev"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="self-end sm:self-auto flex items-center justify-center p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 group-hover:text-sky-500 transition-all animate-bounce [animation-duration:2s] shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Friendly Client Process Card */}
            <div className="p-5 !mt-6 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-2xl border border-indigo-100/60 dark:border-indigo-900/30 text-xs text-indigo-950 dark:text-indigo-200 leading-relaxed font-sans space-y-3.5 transition-colors">
              <span className="font-extrabold block text-indigo-950 dark:text-indigo-300 uppercase font-mono tracking-widest text-[9.5px]">🤝 Our Process Together</span>
              
              <div className="space-y-3">
                <div className="flex gap-2">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">1.</span>
                  <p><strong className="dark:text-white">Goal Planning:</strong> We discuss your business goals, content needs, and visual style preferences.</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">2.</span>
                  <p><strong className="dark:text-white">Modern Craftsmanship:</strong> We build clean, high-performance layouts that look stellar on both mobile and desktop screens.</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">3.</span>
                  <p><strong className="dark:text-white">Launch Ready:</strong> Secure, fast loading, and responsive layouts that are immediately ready for real visitors.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Form Side (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm transition-colors">
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">Your Name</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 dark:text-slate-500">
                        <User className="w-3.5 h-3.5" />
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Ada Lovelace"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 transition shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">Your Email</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 dark:text-slate-500">
                        <Mail className="w-3.5 h-3.5" />
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="e.g., ada@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 transition shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">Company (Optional)</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 dark:text-slate-500">
                        <Building className="w-3.5 h-3.5" />
                      </span>
                      <input
                        type="text"
                        placeholder="e.g., Google LLC"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 transition shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">Your Role Title (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g., Project Manager"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 transition shadow-sm"
                    />
                  </div>
                </div>

  

                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">Message Content</label>
                  <div className="relative">
                    <span className="absolute top-3.5 left-3.5 text-slate-400 dark:text-slate-500">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </span>
                    <textarea
                      required
                      placeholder="Tell me about your business, the type of website you need, or any ideas you want to explore..."
                      rows={4}
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 transition shadow-sm resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md duration-300 ${
                      formStatus === 'success' 
                        ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-emerald-100/10' 
                        : formStatus === 'error'
                        ? 'bg-red-600 dark:bg-red-500 text-white'
                        : 'bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 shadow-indigo-100/10 hover:shadow-lg'
                    } ${formStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                   {formStatus === 'loading' ? (
  <span className="flex items-center justify-center gap-1.5 font-sans font-bold uppercase tracking-wider animate-pulse">
    Sending...
  </span>
) : formStatus === 'success' ? (
  <span className="flex items-center justify-center gap-1.5 font-sans font-bold uppercase tracking-wider">
    <Check className="w-4 h-4" /> Message Sent!
  </span>
) : (
  <span className="flex items-center justify-center gap-1.5 font-sans font-bold uppercase tracking-wider">
    <Send className="w-3.5 h-3.5" /> Send Message
  </span>
)}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
