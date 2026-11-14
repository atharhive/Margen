import React from 'react';

interface FounderPitchSectionProps {
  onJoinWaitlist: () => void;
}

export const FounderPitchSection: React.FC<FounderPitchSectionProps> = ({
  onJoinWaitlist,
}) => {
  return (
    <section id="why-margen" className="mt-[128px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-10 border-t border-b border-black/[0.08] py-16 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Plain-English Thesis Headline */}
          <div className="lg:col-span-5">
            <h2
              className="font-display text-[30px] font-medium leading-[1.3] tracking-[-0.54px] text-[#2e2e2e] sm:text-[36px]"
              style={{ textWrap: 'balance' }}
            >
              Why reading in folders doesn&apos;t work.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#6a6972]">
              The simplest way to explain Margen is to compare how computers
              store files with how people actually think.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={onJoinWaitlist}
                className="cursor-pointer bg-transparent text-[16px] font-medium text-[#207dff] underline-offset-4 hover:underline"
              >
                Reserve a spot in the next Tuesday batch →
              </button>
            </div>
          </div>

          {/* Right Column: Clear, Direct Paul Graham-Style Essay */}
          <div className="space-y-5 text-[17px] leading-[1.7] text-[#454545] lg:col-span-7">
            <p>
              When you try to figure out something hard—whether you&apos;re
              checking 30 patents, writing a thesis, or reading clinical trials—you
              don&apos;t think one document at a time. You spread papers across a
              physical table. You put two contradictory charts next to each other
              and draw a line between them.
            </p>
            <p>
              Software never really copied that desk. Instead it gave you browser
              tabs and nested folders. The moment you copy a quote into a normal
              note app, it dies: it loses the page it came from, the table next to
              it, and the paper that disagrees with it. Half of real research ends
              up being spent just re-finding things you already read.
            </p>
            <p className="text-[#2e2e2e] font-medium">
              Margen gives you the table back. You drop in raw PDFs, scanned
              notebooks, or datasets, pull out the exact claims that matter onto a
              wide paper canvas, and every card stays permanently wired to its
              original page. So you always know what you know—and why.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
