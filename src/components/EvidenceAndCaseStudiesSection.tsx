import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/researchData';
import { EditorialImage } from './EditorialImage';
import { ArrowUpRight } from 'lucide-react';

interface EvidenceAndCaseStudiesSectionProps {
  onSelectWorkflow: (discipline: string) => void;
}

export const EvidenceAndCaseStudiesSection: React.FC<
  EvidenceAndCaseStudiesSectionProps
> = ({ onSelectWorkflow }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="case-studies" className="mt-[128px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[640px]">
            <h2
              className="font-display text-[30px] font-medium leading-[1.3] tracking-[-0.54px] text-[#2e2e2e] sm:text-[36px]"
              style={{ textWrap: 'balance' }}
            >
              What happens when people stop burying sources in folders.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.55] text-[#454545]">
              Three real groups from our early cohorts and what changed once
              they moved their reading onto a spatial table.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectWorkflow('Lab / Institutional Batch')}
            className="cursor-pointer self-start whitespace-nowrap shrink-0 bg-transparent text-[18px] font-medium leading-[27px] text-[#207dff] underline-offset-4 hover:underline md:self-auto"
          >
            Join the next onboarding batch
          </button>
        </div>

        {/* 3 Case Studies with Quantified Metrics & Generated Archival Plates */}
        <div className="mt-12 space-y-12">
          {CASE_STUDIES.map((study, index) => {
            const isReversed = index % 2 === 1;
            const isExpanded = expandedId === study.id;

            return (
              <article
                key={study.id}
                className="grid grid-cols-1 items-stretch gap-8 rounded-[12px] border border-black/[0.08] bg-[#fdfcfb] p-6 lg:grid-cols-12 lg:p-8"
              >
                <div
                  className={`flex flex-col justify-between lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    {/* Clean unboxed metadata with typographic separator */}
                    <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#6a6972]">
                      <span className="font-medium text-[#2e2e2e]">
                        {study.organization}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{study.discipline}</span>
                    </div>

                    {/* Quantified Metric + Label */}
                    <div className="mt-5 flex items-baseline gap-4 border-b border-black/[0.06] pb-5">
                      <span className="font-display text-[40px] font-medium leading-none tracking-[-1.2px] tabular-nums text-[#2e2e2e]">
                        {study.metric}
                      </span>
                      <span className="text-[14px] leading-[1.45] text-[#454545]">
                        {study.metricLabel}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[20px] font-medium leading-[1.4] text-[#2e2e2e]">
                      {study.title}
                    </h3>

                    <blockquote className="mt-3 text-[15.5px] leading-[1.65] text-[#454545]">
                      “{study.quote}”
                    </blockquote>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.06] pt-4">
                    <div>
                      <div className="text-[14px] font-semibold text-[#2e2e2e]">
                        {study.author}
                      </div>
                      <div className="text-[13px] text-[#6a6972]">
                        {study.role}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setExpandedId(isExpanded ? null : study.id)
                      }
                      className="inline-flex cursor-pointer items-center gap-1 text-[14px] font-medium text-[#207dff] underline-offset-4 hover:underline"
                    >
                      <span>
                        {isExpanded ? 'Hide corpus notes' : 'Inspect corpus setup'}
                      </span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 rounded-[8px] bg-[#f0f0ea] px-[17px] py-[14px] text-[13px] leading-[1.55] text-[#454545]">
                      <span className="font-semibold text-[#2e2e2e]">
                        Desk configuration:{' '}
                      </span>
                      Multi-column PDF coordinate anchoring with automated
                      BibTeX/DOI synchronization and peer-verified margin notes.
                    </div>
                  )}
                </div>

                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <EditorialImage
                    src={study.image}
                    alt={study.imageAlt}
                    caption={study.organization}
                    aspectClass="aspect-[4/3] lg:h-full"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
