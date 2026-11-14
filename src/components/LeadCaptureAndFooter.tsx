import React, { useEffect, useState } from 'react';
import { Check, CheckCircle2, Copy } from 'lucide-react';

export interface WaitlistEntry {
  email: string;
  position: number;
  focus: string;
  notes?: string;
}

interface LeadCaptureAndFooterProps {
  preselectedContext: string;
  waitlistEntry: WaitlistEntry | null;
  onJoinWaitlist: (email: string, focus: string, notes?: string) => void;
  onResetWaitlist: () => void;
}

export const LeadCaptureAndFooter: React.FC<LeadCaptureAndFooterProps> = ({
  preselectedContext,
  waitlistEntry,
  onJoinWaitlist,
  onResetWaitlist,
}) => {
  const [email, setEmail] = useState('');
  const [discipline, setDiscipline] = useState('Academic papers & monographs');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedContext) {
      setNotes(`Interested in: ${preselectedContext}`);
    }
  }, [preselectedContext]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmed)) {
      setError('Please enter a valid email address to reserve your spot.');
      return;
    }
    setError('');
    onJoinWaitlist(trimmed, discipline, notes.trim());
  };

  const handleCopyInvite = async () => {
    if (!waitlistEntry) return;
    const text = `I just joined the Margen waitlist (Spot #${waitlistEntry.position}) — a spatial research desk for PDFs, patents, and lab notes.`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <section id="request-access" className="mt-[128px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="rounded-[12px] border border-[#e4ded3] bg-[#f7f7f7] px-6 py-12 sm:px-12 sm:py-16">
            <div className="mx-auto max-w-[620px]">
              <h2
                className="font-display text-[30px] font-medium leading-[1.3] tracking-[-0.54px] text-[#2e2e2e] sm:text-[36px]"
                style={{ textWrap: 'balance' }}
              >
                Join the Margen waitlist.
              </h2>
              <p className="mt-3 text-[17px] leading-[1.55] text-[#454545]">
                We let in a small batch every Tuesday so we can personally help
                you bring your current papers, patents, or lab notes onto your
                first desk.
              </p>

              {waitlistEntry ? (
                <div
                  role="status"
                  className="mt-8 rounded-[8px] border border-[#e4ded3] bg-[#fdfcfb] p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#207dff]" />
                    <div className="w-full">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-[16px] font-semibold text-[#2e2e2e]">
                          You&apos;re on the waitlist — Spot #{waitlistEntry.position}
                        </h3>
                        <span className="font-tech text-[12px] tabular-nums text-[#6a6972]">
                          Tuesday batch queue
                        </span>
                      </div>
                      <p className="mt-1.5 text-[14px] leading-[1.55] text-[#454545]">
                        Reserved for <span className="font-medium text-[#2e2e2e]">{waitlistEntry.email}</span>{' '}
                        ({waitlistEntry.focus}). When your batch opens, we&apos;ll send your desktop installer and starter archive pack.
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-black/[0.06] pt-4">
                        <button
                          type="button"
                          onClick={handleCopyInvite}
                          className="inline-flex cursor-pointer items-center gap-1.5 rounded-[6px] border border-black/[0.13] bg-transparent px-3 py-1.5 text-[13px] font-medium text-[#2e2e2e] transition-colors hover:bg-[#f7f7f7]"
                        >
                          {copied ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-[#207dff]" />
                              <span>Copied note</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>Copy share note</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            onResetWaitlist();
                            setEmail('');
                          }}
                          className="cursor-pointer text-[13px] font-medium text-[#207dff] underline-offset-4 hover:underline"
                        >
                          Use a different email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="scholar-email"
                        className="mb-1.5 block text-[13px] font-medium text-[#2e2e2e]"
                      >
                        Email address
                      </label>
                      <input
                        id="scholar-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError('');
                        }}
                        placeholder="you@domain.com"
                        className="w-full rounded-[6px] border border-black/[0.15] bg-[#fdfcfb] px-3.5 py-2.5 text-[15px] text-[#2e2e2e] placeholder:text-[#a8a8a8] focus:border-[#207dff] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="scholar-discipline"
                        className="mb-1.5 block text-[13px] font-medium text-[#2e2e2e]"
                      >
                        What are you reading?
                      </label>
                      <select
                        id="scholar-discipline"
                        value={discipline}
                        onChange={(e) => setDiscipline(e.target.value)}
                        className="w-full rounded-[6px] border border-black/[0.15] bg-[#fdfcfb] px-3.5 py-2.5 text-[15px] text-[#2e2e2e] focus:border-[#207dff] focus:outline-none"
                      >
                        <option>Academic papers &amp; monographs</option>
                        <option>Patents &amp; legal cases</option>
                        <option>Lab notebooks &amp; clinical trials</option>
                        <option>Technical specs &amp; market research</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="scholar-notes"
                      className="mb-1.5 block text-[13px] font-medium text-[#2e2e2e]"
                    >
                      What tools do you use today? (optional)
                    </label>
                    <input
                      id="scholar-notes"
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. 35 open PDF tabs, Zotero, Notion, paper printouts"
                      className="w-full rounded-[6px] border border-black/[0.15] bg-[#fdfcfb] px-3.5 py-2.5 text-[15px] text-[#2e2e2e] placeholder:text-[#a8a8a8] focus:border-[#207dff] focus:outline-none"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-[13px] font-medium text-[#c0392b]">
                      {error}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      type="submit"
                      className="cursor-pointer whitespace-nowrap rounded-full bg-[#2e2e2e] px-[26px] py-[11px] text-[16px] font-semibold leading-[20px] text-[#fdfcfb] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#454545] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#207dff]"
                    >
                      Join Waitlist
                    </button>
                    <span className="text-[13px] text-[#6a6972]">
                      418 scholars &amp; teams currently queued
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Editorial Footer */}
      <footer className="mt-[128px] border-t border-black/[0.08] bg-[#fdfcfb] py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              <rect width="22" height="22" rx="5" fill="#2e2e2e" />
              <path
                d="M5.5 16V6.5L11 11.75L16.5 6.5V16"
                stroke="#fdfcfb"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[15px] font-semibold tracking-[-0.3px] text-[#2e2e2e]">
              Margen
            </span>
            <span className="text-[13px] text-[#6a6972]">
              · A desk for reading hard things
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[13px] text-[#6a6972]">
            <a href="#why-margen" className="hover:text-[#2e2e2e]">
              Why Margen
            </a>
            <a href="#workspace" className="hover:text-[#2e2e2e]">
              How It Works
            </a>
            <a href="#case-studies" className="hover:text-[#2e2e2e]">
              Examples
            </a>
            <a href="#library" className="hover:text-[#2e2e2e]">
              Templates
            </a>
            <span>© 2026 Margen Systems</span>
          </div>
        </div>
      </footer>
    </>
  );
};
