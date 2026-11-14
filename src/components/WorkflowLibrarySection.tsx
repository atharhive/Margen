import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WORKFLOW_TEMPLATES, DeskTemplate } from '../data/researchData';
import { ArrowRight, Layers } from 'lucide-react';

interface WorkflowLibrarySectionProps {
  onUseTemplate: (templateTitle: string) => void;
}

export const WorkflowLibrarySection: React.FC<WorkflowLibrarySectionProps> = ({
  onUseTemplate,
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState<DeskTemplate>(
    WORKFLOW_TEMPLATES[0]
  );

  return (
    <section id="library" className="mt-[128px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[660px]">
          <h2
            className="font-display text-[30px] font-medium leading-[1.3] tracking-[-0.54px] text-[#2e2e2e] sm:text-[36px]"
            style={{ textWrap: 'balance' }}
          >
            Four ways people actually use Margen.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.55] text-[#454545]">
            Click any layout below to see how researchers organize papers, patent
            claims, clinical trials, or engineering specs on one desk.
          </p>
        </div>

        {/* Standard Content Cards (#fdfcfb, 12px radius, 24px padding, no shadow) */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {WORKFLOW_TEMPLATES.map((tpl) => {
            const isSelected = tpl.id === selectedTemplate.id;
            return (
              <button
                key={tpl.id}
                type="button"
                onClick={() => setSelectedTemplate(tpl)}
                className={`flex cursor-pointer flex-col justify-between rounded-[12px] border bg-[#fdfcfb] p-6 text-left transition-colors duration-150 ${
                  isSelected
                    ? 'border-[#207dff]'
                    : 'border-black/[0.08] hover:border-black/[0.2]'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-[#6a6972]">
                    <span>{tpl.discipline}</span>
                    <span className="font-tech text-[12px] tabular-nums">
                      {tpl.nodeCount}
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-[20px] font-medium leading-[1.45] text-[#2e2e2e]">
                    {tpl.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#454545]">
                    {tpl.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-[14px] font-medium text-[#207dff]">
                  <span>
                    {isSelected ? 'Inspecting below' : 'Preview desk layout'}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Interactive Template Preview Tray */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTemplate.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 rounded-[12px] border border-[#e4ded3] bg-[#f7f7f7] p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.08] pb-4">
              <div className="flex items-center gap-2.5">
                <Layers className="h-4 w-4 text-[#2e2e2e]" />
                <span className="text-[15px] font-semibold text-[#2e2e2e]">
                  {selectedTemplate.title}
                </span>
                <span className="text-[13px] text-[#6a6972]">
                  · {selectedTemplate.nodeCount}
                </span>
              </div>

              <button
                type="button"
                onClick={() => onUseTemplate(selectedTemplate.title)}
                className="cursor-pointer whitespace-nowrap shrink-0 bg-transparent text-[15px] font-medium text-[#207dff] underline-offset-4 hover:underline"
              >
                Join waitlist for this workflow
              </button>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              {selectedTemplate.cards.map((card, i) => (
                <div
                  key={card.label}
                  className="rounded-[8px] border border-black/[0.08] bg-[#fdfcfb] p-4"
                >
                  <div className="flex items-center justify-between text-[12px] text-[#6a6972]">
                    <span className="font-medium text-[#207dff]">
                      {card.kind}
                    </span>
                    <span className="font-tech">0{i + 1}</span>
                  </div>
                  <div className="mt-1.5 text-[15px] font-semibold text-[#2e2e2e]">
                    {card.label}
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-[1.55] text-[#454545]">
                    {card.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
