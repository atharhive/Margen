import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface TopNavProps {
  onStartResearch: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onStartResearch }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Why Margen', href: '#why-margen' },
    { label: 'How It Works', href: '#workspace' },
    { label: 'Examples', href: '#case-studies' },
    { label: 'Templates', href: '#library' },
  ];

  return (
    <header className="sticky top-0 z-40 h-[72px] w-full border-b border-black/[0.06] bg-[#fdfcfb]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-8 px-6">
        {/* Zone 1: Brand lockup (single-line wordmark + compact geometric M mark) */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap text-[18px] font-semibold leading-none tracking-[-0.36px] text-[#2e2e2e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#207dff]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
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
          <span>Margen</span>
        </a>

        {/* Zone 2: Centered concise public links */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 md:flex"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 text-[16px] font-normal leading-[20px] text-[#2e2e2e] underline-offset-4 transition-colors duration-150 hover:text-[#207dff] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#207dff]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary Charcoal Pill Conversion Button */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onStartResearch}
            className="hidden whitespace-nowrap shrink-0 cursor-pointer rounded-full bg-[#2e2e2e] px-[22px] py-[7px] text-[16px] font-medium leading-[20px] text-[#fdfcfb] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#454545] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#207dff] sm:inline-flex"
          >
            Join Waitlist
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-black/[0.12] text-[#2e2e2e] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-b border-[#e4ded3] bg-[#fdfcfb] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 text-[16px] font-normal text-[#2e2e2e]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onStartResearch();
              }}
              className="mt-2 w-full rounded-full bg-[#2e2e2e] px-[22px] py-[10px] text-[16px] font-medium text-[#fdfcfb]"
            >
              Join Waitlist
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
