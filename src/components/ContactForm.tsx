import React from 'react';
import { useState } from 'react';
import { Mail, Send, Check, User, Building, MessageSquare, Copy } from 'lucide-react';
import type { ContactMessage } from '../types';
import posthog from 'posthog-js';

interface ContactFormProps {
  developerEmail: string;
  onSendMessage: (msg: ContactMessage) => void;
  formStatus: 'idle' | 'loading' | 'success' | 'error';
}

export function ContactForm({
  developerEmail,
  onSendMessage,
  formStatus,
}: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [messageText, setMessageText] = useState('');
  const [copied, setCopied] = useState(false);

  const myEmail = developerEmail;
  const emailSubject = encodeURIComponent('Project / Business Inquiry');
  const emailBody = encodeURIComponent('Hi Gideon,\n\nI came from your portfolio and would like to work with you regarding...');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      posthog.capture('contact_email_copied');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
      timestamp: new Date().toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };

    onSendMessage(newMsg);

    setName('');
    setEmail('');
    setCompany('');
    setRole('');
    setMessageText('');
  };

  // Light mode only: dark theme styling was intentionally removed.
  return (
    <section id="contact" className="py-10 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl font-sans font-bold tracking-tight text-slate-950 uppercase">
                Let's build your next website.
              </h2>
              <p className="mt-3 text-sm text-slate-500 font-sans leading-relaxed">
                Whether you need a full professional business website, a creative portfolio, have an idea, design file, or a custom landing page, get in touch. We build modern, lightning-fast sites tailored to your vision.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl group">
                <div className="flex items-start sm:items-center space-x-3 min-w-0">
                  <div className="p-2.5 bg-slate-950 text-slate-100 rounded-xl shrink-0">
                    <svg
                      className="w-4 h-4 stroke-indigo-400 fill-none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      Send me a quick direct email
                    </span>
                    <a
                      href={`mailto:${developerEmail}?subject=${emailSubject}&body=${emailBody}`}
                      title="Open default email app"
                      onClick={() => posthog.capture('contact_channel_selected', { channel: 'email' })}
                      className="group/link flex flex-wrap items-center gap-x-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition break-all mt-0.5 italic"
                    >
                      <span className="font-bold text-indigo-600 no-underline group-hover/link:text-indigo-700 transition-colors">
                        {developerEmail}
                      </span>
                    </a>
                    <button
                      onClick={handleCopy}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all"
                      aria-label="Copy email address"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <span className="flex items-center gap-1 text-xs text-emerald-400 font-sans font-medium px-1">
                          <Check className="w-3.5 h-3.5" />Email address Copied to clipboard!
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                <a
                  href={`mailto:${developerEmail}?subject=${emailSubject}&body=${emailBody}`}
                  onClick={() => posthog.capture('contact_channel_selected', { channel: 'email' })}
                  className="self-end sm:self-auto flex items-center justify-center p-2 rounded-xl bg-white border border-slate-200 text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-200 shadow-sm transition-all animate-bounce [animation-duration:2s] shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl group">
                <div className="flex items-start sm:items-center space-x-3 min-w-0">
                  <div className="p-2.5 bg-slate-950 text-slate-100 rounded-xl shrink-0">
                    <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      Send a direct message via whatsapp
                    </span>
                    <a href="https://wa.link/ix9sny" target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture('contact_channel_selected', { channel: 'whatsapp' })} className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition italic">
                      Click to Chat Instantly on Whatsapp
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.link/ix9sny"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => posthog.capture('contact_channel_selected', { channel: 'whatsapp' })}
                  className="self-end sm:self-auto flex items-center justify-center p-2 rounded-xl bg-white border border-slate-200 text-slate-400 group-hover:text-emerald-500 transition-all animate-bounce [animation-duration:2s] shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl group">
                <div className="flex items-start sm:items-center space-x-3 min-w-0">
                  <div className="p-2.5 bg-slate-950 text-slate-100 rounded-xl shrink-0">
                    <svg className="w-4 h-4 fill-[#0088cc]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.503-1.359 8.627-.168.9-.501 1.201-.82 1.23-.695.064-1.222-.46-1.895-.901-1.054-.691-1.649-1.12-2.673-1.795-1.184-.778-.417-1.206.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212-.071-.062-.175-.042-.25-.025-.106.024-1.801 1.144-5.084 3.361-.481.33-.916.493-1.306.485-.43-.008-1.258-.242-1.874-.442-.755-.246-1.353-.376-1.301-.793.027-.218.328-.442.902-.673 3.535-1.539 5.891-2.557 7.069-3.051 3.364-1.411 4.063-1.656 4.518-1.664.1.002.322.026.465.143.12.099.153.235.161.329-.007.073-.002.23-.005.289z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      Send a direct message via telegram
                    </span>
                    <a href="https://t.me/GideonsDev" target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture('contact_channel_selected', { channel: 'telegram' })} className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition italic">
                      Click to Chat Instantly on Telegram
                    </a>
                  </div>
                </div>
                <a
                  href="https://t.me/GideonsDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => posthog.capture('contact_channel_selected', { channel: 'telegram' })}
                  className="self-end sm:self-auto flex items-center justify-center p-2 rounded-xl bg-white border border-slate-200 text-slate-400 group-hover:text-sky-500 transition-all animate-bounce [animation-duration:2s] shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-5 !mt-6 bg-indigo-50/50 rounded-2xl border border-indigo-100/60 text-xs text-indigo-950 leading-relaxed font-sans space-y-3.5">
              <span className="font-extrabold block text-indigo-950 uppercase font-mono tracking-widest text-[9.5px]">🤝 Our Process Together</span>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <span className="font-bold text-indigo-600">1.</span>
                  <p><strong>Goal Planning:</strong> We discuss your business goals, content needs, and visual style preferences.</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-indigo-600">2.</span>
                  <p><strong>Clean Code Standards:</strong> We build clean, high-performance layouts that look stellar on both mobile and desktop screens.</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-indigo-600">3.</span>
                  <p><strong>Launch Ready:</strong> Secure, fast loading, and responsive layouts that are immediately ready for real visitors.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">Your Name</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <User className="w-3.5 h-3.5" />
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Ada Lovelace"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-indigo-500 text-slate-900 bg-white placeholder-slate-400 transition shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">Your Email</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <Mail className="w-3.5 h-3.5" />
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="e.g., ada@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-indigo-500 text-slate-900 bg-white placeholder-slate-400 transition shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">Company (Optional)</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <Building className="w-3.5 h-3.5" />
                      </span>
                      <input
                        type="text"
                        placeholder="e.g., Google LLC"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-indigo-500 text-slate-900 bg-white placeholder-slate-400 transition shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">Your Role Title (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g., Project Manager"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-indigo-500 text-slate-900 bg-white placeholder-slate-400 transition shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">Message Content</label>
                  <div className="relative">
                    <span className="absolute top-3.5 left-3.5 text-slate-400">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </span>
                    <textarea
                      required
                      placeholder="Tell me about your business, the type of website you need, or any ideas you want to explore..."
                      rows={6}
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-indigo-500 text-slate-900 bg-white placeholder-slate-400 transition shadow-sm resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md duration-300 ${
                      formStatus === 'success'
                        ? 'bg-emerald-600 text-white shadow-emerald-100/10'
                        : formStatus === 'error'
                          ? 'bg-red-600 text-white'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100/10 hover:shadow-lg'
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
