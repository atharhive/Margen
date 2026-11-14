import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Link2,
  Pause,
  Play,
  Plus,
  Search,
  BookMarked,
  CornerDownRight,
} from 'lucide-react';
import {
  AudienceMode,
  GENERATED_IMAGES,
  HERO_MODE_DATA,
} from '../data/researchData';

interface HeroWorkspacePreviewProps {
  onRequestAccess: (context?: string) => void;
}

export const HeroWorkspacePreview: React.FC<HeroWorkspacePreviewProps> = ({
  onRequestAccess,
}) => {
  const [mode, setMode] = useState<AudienceMode>('individual');
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [selectedCardId, setSelectedCardId] = useState<string>('c1');
  const [backdropError, setBackdropError] = useState(false);

  const data = HERO_MODE_DATA[mode];
  const currentStep = data.loopSteps[activeStepIndex];

  // Auto-cycle the animated GIF-like workspace loop
  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % data.loopSteps.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [isPlaying, data.loopSteps.length]);

  // Keep selected card synchronized during active playback
  useEffect(() => {
    if (isPlaying && currentStep) {
      setSelectedCardId(currentStep.focusCardId);
    }
  }, [activeStepIndex, isPlaying, currentStep]);

  const handleModeChange = (nextMode: AudienceMode) => {
    setMode(nextMode);
    setActiveStepIndex(0);
    setSelectedCardId('c1');
  };

  const handleWatchLoop = () => {
    setIsPlaying(true);
    setActiveStepIndex(0);
    const el = document.getElementById('hero-preview-frame');
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const cardById = (id: string) => data.cards.find((c) => c.id === id);

  return (
    <section id="top" className="pt-14 pb-20 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Centered Hero Header Stack */}
        <div className="mx-auto flex max-w-[740px] flex-col items-center text-center">
          {/* Pill Segmented Switcher */}
          <div
            role="tablist"
            aria-label="Workspace mode"
            className="mb-7 inline-flex items-center rounded-full bg-[#f7f7f7] p-1 border border-black/[0.05]"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'individual'}
              onClick={() => handleModeChange('individual')}
              className={`cursor-pointer whitespace-nowrap shrink-0 rounded-full px-4 py-2 text-[13px] font-medium leading-[13px] transition-all duration-150 ${
                mode === 'individual'
                  ? 'bg-[#fdfcfb] text-[#2e2e2e] shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                  : 'text-[#6a6972] hover:text-[#2e2e2e]'
              }`}
            >
              Individual Scholars
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'teams'}
              onClick={() => handleModeChange('teams')}
              className={`cursor-pointer whitespace-nowrap shrink-0 rounded-full px-4 py-2 text-[13px] font-medium leading-[13px] transition-all duration-150 ${
                mode === 'teams'
                  ? 'bg-[#fdfcfb] text-[#2e2e2e] shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                  : 'text-[#6a6972] hover:text-[#2e2e2e]'
              }`}
            >
              Research Teams
            </button>
          </div>

          {/* Display Headline: Instrument Sans 48px/500, -1.584px tracking */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={mode + '-h1'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[36px] font-medium leading-[1.25] tracking-[-1.2px] text-[#2e2e2e] sm:text-[48px] sm:leading-[1.3] sm:tracking-[-1.584px]"
              style={{ textWrap: 'balance' }}
            >
              {data.headline}
            </motion.h1>
          </AnimatePresence>

          {/* Introductory Copy: Inter 18px/400, 27px leading */}
          <p className="mt-5 max-w-[600px] text-[18px] font-normal leading-[27px] text-[#454545]">
            {data.subcopy}
          </p>

          {/* Hero Primary Charcoal Pill + Editorial Blue Link */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => onRequestAccess(mode === 'individual' ? 'Individual Scholar' : 'Research Team')}
              className="cursor-pointer whitespace-nowrap shrink-0 rounded-full bg-[#2e2e2e] px-[26px] py-[11px] text-[16px] font-semibold leading-[20px] text-[#fdfcfb] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#454545] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#207dff]"
            >
              {data.primaryCta}
            </button>
            <button
              type="button"
              onClick={handleWatchLoop}
              className="cursor-pointer whitespace-nowrap shrink-0 bg-transparent text-[18px] font-medium leading-[27px] text-[#207dff] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#207dff]"
            >
              Watch live desk loop
            </button>
          </div>
        </div>

        {/* Floating Product Preview over Contained Atmospheric Landscape Backdrop */}
        <div
          id="hero-preview-frame"
          className="relative mt-14 overflow-hidden rounded-[16px] border border-[#e4ded3] p-4 sm:p-8 md:p-11"
        >
          {/* Contained Landscape Backdrop */}
          <div className="pointer-events-none absolute inset-0">
            {!backdropError ? (
              <img
                src={GENERATED_IMAGES.heroBackdrop}
                alt="Sunlit rolling meadow landscape beneath the research desk window"
                referrerPolicy="no-referrer"
                onError={() => setBackdropError(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-[#f0f0ea]" />
            )}
            <div className="absolute inset-0 bg-[#fdfcfb]/12" />
          </div>

          {/* Floating Eggshell Application Window */}
          <div
            className="relative mx-auto overflow-hidden rounded-[12px] border border-black/[0.08] bg-[#fdfcfb]"
            style={{
              boxShadow:
                '0 0 4px rgba(0, 0, 0, 0.03), 0 4px 8px rgba(0, 0, 0, 0.04), 0 16px 26px rgba(0, 0, 0, 0.05)',
            }}
          >
            {/* Window Title & Animated Loop Playback Chrome */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.08] bg-[#fdfcfb] px-4 py-2.5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                </div>
                <span className="h-3.5 w-px bg-black/[0.08]" aria-hidden="true" />
                <span className="text-[13px] font-medium text-[#2e2e2e]">
                  {mode === 'individual' ? 'Urban Canopy Thesis Desk' : 'Solid-State Assay Bench'}
                </span>
                <span className="hidden text-[12px] text-[#6a6972] sm:inline">
                  · {currentStep.statusText}
                </span>
              </div>

              {/* Loop Step Indicators + Play/Pause Toggle */}
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-1 rounded-[6px] bg-[#f7f7f7] p-0.5 lg:flex">
                  {data.loopSteps.map((s, idx) => (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => {
                        setIsPlaying(false);
                        setActiveStepIndex(idx);
                        setSelectedCardId(s.focusCardId);
                      }}
                      className={`cursor-pointer whitespace-nowrap rounded-[4px] px-2.5 py-1 text-[12px] font-medium transition-colors ${
                        activeStepIndex === idx
                          ? 'bg-[#fdfcfb] text-[#2e2e2e] shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                          : 'text-[#6a6972] hover:text-[#2e2e2e]'
                      }`}
                    >
                      {s.step}. {s.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsPlaying((p) => !p)}
                  aria-label={isPlaying ? 'Pause workspace loop' : 'Play workspace loop'}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-[6px] border border-black/[0.13] bg-transparent px-2.5 py-1 text-[12px] font-medium text-[#2e2e2e] transition-colors hover:bg-[#f7f7f7]"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-3.5 w-3.5" />
                      <span>Pause loop</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5" />
                      <span>Play loop</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Inner 3-Pane Desk Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Rail: Desk Binder */}
              <aside className="border-b border-black/[0.08] bg-[#f7f7f7]/70 p-3.5 lg:col-span-3 lg:border-r lg:border-b-0">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[12px] font-semibold text-[#2e2e2e]">
                    Desk Sources
                  </span>
                  <Search className="h-3.5 w-3.5 text-[#6a6972]" />
                </div>
                <div className="space-y-1.5">
                  {data.sidebarDocs.map((doc) => (
                    <div
                      key={doc.id}
                      className={`flex items-start gap-2.5 rounded-[6px] px-2.5 py-2 text-left transition-colors ${
                        doc.active
                          ? 'border border-black/[0.08] bg-[#fdfcfb] text-[#2e2e2e]'
                          : 'text-[#454545] hover:bg-black/[0.03]'
                      }`}
                    >
                      <FileText
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                          doc.active ? 'text-[#207dff]' : 'text-[#6a6972]'
                        }`}
                      />
                      <div className="min-w-0">
                        <div className="truncate text-[13px] font-medium leading-tight">
                          {doc.title}
                        </div>
                        <div className="mt-0.5 text-[11px] text-[#6a6972]">
                          {doc.meta}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Primary Document Excerpt Pane inside Left/Lower Column */}
                <div className="mt-4 rounded-[6px] border border-black/[0.08] bg-[#fdfcfb] p-3">
                  <div className="flex items-center justify-between gap-2 border-b border-black/[0.06] pb-2">
                    <span className="truncate text-[12px] font-semibold text-[#2e2e2e]">
                      {data.activeDocumentTitle}
                    </span>
                  </div>
                  <div className="mt-1.5 font-tech text-[11px] text-[#6a6972]">
                    {data.activeDocumentMeta}
                  </div>
                  <p className="mt-2.5 text-[12.5px] leading-[1.6] text-[#454545]">
                    {data.sourceQuote}
                    <mark
                      className={`rounded-[3px] px-1 py-0.5 transition-colors duration-300 ${
                        activeStepIndex === 0
                          ? 'bg-[#207dff]/18 text-[#2e2e2e] ring-1 ring-[#207dff]/40'
                          : 'bg-[#f0f0ea] text-[#2e2e2e]'
                      }`}
                    >
                      {data.sourceHighlight}
                    </mark>
                    {data.sourceTail}
                  </p>
                  <div className="mt-3 flex items-center justify-between border-t border-black/[0.06] pt-2 text-[11px] text-[#207dff]">
                    <span className="inline-flex items-center gap-1 font-medium">
                      <CornerDownRight className="h-3 w-3" />
                      Pinned to spatial desk
                    </span>
                    <span className="font-tech text-[#6a6972]">1:1 anchor</span>
                  </div>
                </div>
              </aside>

              {/* Right Spatial Whiteboard Surface (#eeeded) */}
              <div className="whiteboard-grid relative min-h-[380px] overflow-hidden p-4 sm:p-5 lg:col-span-9">
                {/* Floating Whiteboard Toolbar */}
                <div className="relative z-10 mb-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-[6px] border border-black/[0.08] bg-[#fdfcfb]/90 px-2.5 py-1.5 text-[12px] text-[#454545]">
                    <BookMarked className="h-3.5 w-3.5 text-[#207dff]" />
                    <span className="font-medium text-[#2e2e2e]">Spatial Canvas</span>
                    <span className="text-[#a8a8a8]">/</span>
                    <span>Click any card to trace lineage</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsPlaying(false);
                      const nextIdx = (activeStepIndex + 1) % data.loopSteps.length;
                      setActiveStepIndex(nextIdx);
                      setSelectedCardId(data.loopSteps[nextIdx].focusCardId);
                    }}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-[6px] border border-black/[0.13] bg-[#fdfcfb] px-2.5 py-1.5 text-[12px] font-medium text-[#2e2e2e] transition-colors hover:bg-[#f7f7f7]"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Next synthesis frame</span>
                  </button>
                </div>

                {/* Desktop Spatial Coordinate Map with SVG Bezier Citation Threads */}
                <div className="relative hidden h-[330px] w-full md:block">
                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 620 330"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    {data.cards.map((card) =>
                      (card.linkedTo || []).map((targetId) => {
                        const target = cardById(targetId);
                        if (!target) return null;
                        const x1 = card.x + card.w / 2;
                        const y1 = card.y + 52;
                        const x2 = target.x + target.w / 2;
                        const y2 = target.y + 52;
                        const isHighlighted =
                          selectedCardId === card.id || selectedCardId === target.id;
                        const cx1 = (x1 + x2) / 2;
                        return (
                          <g key={`${card.id}-${targetId}`}>
                            <path
                              d={`M ${x1} ${y1} C ${cx1} ${y1}, ${cx1} ${y2}, ${x2} ${y2}`}
                              stroke={isHighlighted ? '#207dff' : '#b8b6b0'}
                              strokeWidth={isHighlighted ? 2 : 1.25}
                              strokeDasharray={isHighlighted ? 'none' : '4 4'}
                              className="transition-all duration-300"
                            />
                            {isHighlighted && (
                              <circle r="3.5" fill="#207dff">
                                <animateMotion
                                  dur="2s"
                                  repeatCount="indefinite"
                                  path={`M ${x1} ${y1} C ${cx1} ${y1}, ${cx1} ${y2}, ${x2} ${y2}`}
                                />
                              </circle>
                            )}
                          </g>
                        );
                      })
                    )}
                  </svg>

                  {/* Interactive Cards on Whiteboard */}
                  {data.cards.map((card) => {
                    const isFocused = selectedCardId === card.id;
                    return (
                      <motion.button
                        key={mode + '-' + card.id}
                        type="button"
                        onClick={() => {
                          setIsPlaying(false);
                          setSelectedCardId(card.id);
                        }}
                        animate={{
                          y: isFocused ? -3 : 0,
                          scale: isFocused ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          left: `${(card.x / 620) * 100}%`,
                          top: `${card.y}px`,
                          width: `${card.w}px`,
                        }}
                        className={`absolute cursor-pointer rounded-[8px] border bg-[#fdfcfb] p-3.5 text-left transition-shadow duration-200 ${
                          isFocused
                            ? 'z-20 border-[#207dff] shadow-[0_8px_20px_rgba(32,125,255,0.12)]'
                            : 'z-10 border-black/[0.08] hover:border-black/[0.18]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-tech text-[11px] font-normal text-[#6a6972]">
                            {card.sourceCode}
                          </span>
                          <Link2
                            className={`h-3 w-3 shrink-0 ${
                              isFocused ? 'text-[#207dff]' : 'text-[#a8a8a8]'
                            }`}
                          />
                        </div>
                        <div className="mt-1 text-[13.5px] font-semibold leading-snug text-[#2e2e2e]">
                          {card.title}
                        </div>
                        <p className="mt-1.5 text-[12px] leading-[1.45] text-[#454545]">
                          {card.excerpt}
                        </p>
                      </motion.button>
                    );
                  })}

                  {/* Animated Synthetic Cursor for GIF-like Replay Feel */}
                  {isPlaying && currentStep && (() => {
                    const target = cardById(currentStep.focusCardId);
                    if (!target) return null;
                    return (
                      <motion.div
                        aria-hidden="true"
                        animate={{
                          left: `${((target.x + target.w - 28) / 620) * 100}%`,
                          top: `${target.y + 84}px`,
                        }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="pointer-events-none absolute z-30 flex items-center gap-1"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M2.5 1.5L13 7.5L8 9L6.2 14L2.5 1.5Z"
                            fill="#2e2e2e"
                            stroke="#fdfcfb"
                            strokeWidth="1.2"
                          />
                        </svg>
                        <span className="rounded-[4px] bg-[#2e2e2e] px-1.5 py-0.5 text-[10px] font-medium text-[#fdfcfb]">
                          Step {currentStep.step}
                        </span>
                      </motion.div>
                    );
                  })()}
                </div>

                {/* Responsive Stacked Cards on Mobile */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  {data.cards.map((card) => {
                    const isFocused = selectedCardId === card.id;
                    return (
                      <button
                        key={card.id}
                        type="button"
                        onClick={() => {
                          setIsPlaying(false);
                          setSelectedCardId(card.id);
                        }}
                        className={`rounded-[8px] border bg-[#fdfcfb] p-3.5 text-left ${
                          isFocused ? 'border-[#207dff]' : 'border-black/[0.08]'
                        }`}
                      >
                        <div className="font-tech text-[11px] text-[#6a6972]">
                          {card.sourceCode}
                        </div>
                        <div className="mt-1 text-[14px] font-semibold text-[#2e2e2e]">
                          {card.title}
                        </div>
                        <p className="mt-1 text-[12.5px] leading-[1.45] text-[#454545]">
                          {card.excerpt}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Award Outline Badges + Investor / Institutional Proof Row */}
        <div className="mt-10 flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { title: 'Best Research Tool', sub: 'Archival Software Guild · 2026' },
              { title: 'Product of the Day', sub: 'Scholarly Tools Showcase' },
              { title: 'Open Citation Standard', sub: 'DOI & Folio Spec v2' },
            ].map((award) => (
              <div
                key={award.title}
                className="inline-flex items-center gap-2.5 rounded-[6px] border border-[#e4ded3] bg-[#fdfcfb] px-[12px] py-[8px]"
              >
                {/* Small warm orange/red laurel icon per Award Outline Badge spec */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path
                    d="M5.5 13.5C3.5 11.8 3 8.8 4.2 6.2M12.5 13.5C14.5 11.8 15 8.8 13.8 6.2M9 14.5V16M6.8 14.2L9 14.5L11.2 14.2"
                    stroke="#d96b38"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <circle cx="9" cy="7.5" r="2.2" fill="#e85d35" fillOpacity="0.18" stroke="#d96b38" strokeWidth="1.3" />
                </svg>
                <div className="text-left">
                  <div className="text-[12px] font-semibold leading-tight text-[#2e2e2e]">
                    {award.title}
                  </div>
                  <div className="text-[11px] leading-tight text-[#6a6972]">
                    {award.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Investor & Fellow Proof Row (unboxed desaturated marks, >= 12px gaps) */}
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[14px] font-medium leading-[20px] text-[#a8a8a8]">
              Supported by scholars, patent labs, and fellows from
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] font-semibold tracking-tight text-[#6a6972]">
              <span>ETH Zurich Archive</span>
              <span>Max Planck Fellow Group</span>
              <span>St. Andrews Maritime</span>
              <span>Nordic Materials Lab</span>
              <span>Helvetia IP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
