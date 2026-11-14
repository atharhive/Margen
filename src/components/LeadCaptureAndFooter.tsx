import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface LeadCaptureAndFooterProps {
  preselectedContext: string;
}

export const LeadCaptureAndFooter: React.FC<LeadCaptureAndFooterProps> = ({
  preselectedContext,
}) => {
  const [email, setEmail] = useState('');
  const [discipline, setDiscipline] = useState('Academic & Monograph Research');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedContext) {
      setNotes(`Interested in: ${preselectedContext}`);
      setSubmitted(false);
    }
  }, [preselectedContext]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmed)) {
      setError('Please enter a valid institutional or personal email address.');
      return;
    }
    setError('');
    setSubmitted(true);
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
                Bring Margen to your reading desk.
              </h2>
              <p className="mt-3 text-[17px] leading-[1.55] text-[#454545]">
                Onboarding cohorts open weekly for individual scholars, research
                fellows, and technical labs. Tell us what sources you work with.
              </p>

              {submitted ? (
                <div
                  role="status"
                  className="mt-8 rounded-[8px] border border-[#e4ded3] bg-[#fdfcfb] p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#207dff]" />
                    <div>
                      <h3 className="text-[16px] font-semibold text-[#2e2e2e]">
                        Desk invitation queued for {email}
                      </h3>
                      <p className="mt-1 text-[14px] leading-[1.55] text-[#454545]">
                        We have recorded your focus ({discipline}). Expect your
                        installer link and starter archive pack within 48 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setEmail('');
                          setNotes('');
                        }}
                        className="mt-3 cursor-pointer text-[14px] font-medium text-[#207dff] underline-offset-4 hover:underline"
                      >
                        Submit another request
                      </button>
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
                        placeholder="name@university.edu"
                        className="w-full rounded-[6px] border border-black/[0.15] bg-[#fdfcfb] px-3.5 py-2.5 text-[15px] text-[#2e2e2e] placeholder:text-[#a8a8a8] focus:border-[#207dff] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="scholar-discipline"
                        className="mb-1.5 block text-[13px] font-medium text-[#2e2e2e]"
                      >
                        Primary corpus
                      </label>
                      <select
                        id="scholar-discipline"
                        value={discipline}
                        onChange={(e) => setDiscipline(e.target.value)}
                        className="w-full rounded-[6px] border border-black/[0.15] bg-[#fdfcfb] px-3.5 py-2.5 text-[15px] text-[#2e2e2e] focus:border-[#207dff] focus:outline-none"
                      >
                        <option>Academic &amp; Monograph Research</option>
                        <option>Patent Prior-Art &amp; Legal Discovery</option>
                        <option>Clinical &amp; Biomedical Literature</option>
                        <option>Systems &amp; RFC Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="scholar-notes"
                      className="mb-1.5 block text-[13px] font-medium text-[#2e2e2e]"
                    >
                      Source formats or workflow notes (optional)
                    </label>
                    <input
                      id="scholar-notes"
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. 400-page PDFs, Zotero BibTeX, archival scans"
                      className="w-full rounded-[6px] border border-black/[0.15] bg-[#fdfcfb] px-3.5 py-2.5 text-[15px] text-[#2e2e2e] placeholder:text-[#a8a8a8] focus:border-[#207dff] focus:outline-none"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-[13px] font-medium text-[#c0392b]">
                      {error}
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="cursor-pointer whitespace-nowrap rounded-full bg-[#2e2e2e] px-[26px] py-[11px] text-[16px] font-semibold leading-[20px] text-[#fdfcfb] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#454545] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#207dff]"
                    >
                      Request Workspace Access
                    </button>
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
              · Spatial research bench for primary sources
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[13px] text-[#6a6972]">
            <a href="#workspace" className="hover:text-[#2e2e2e]">
              Workspace
            </a>
            <a href="#synthesis" className="hover:text-[#2e2e2e]">
              Synthesis
            </a>
            <a href="#case-studies" className="hover:text-[#2e2e2e]">
              Case Studies
            </a>
            <a href="#library" className="hover:text-[#2e2e2e]">
              Library
            </a>
            <span>© 2026 Margen Systems</span>
          </div>
        </div>
      </footer>
    </>
  );
};
