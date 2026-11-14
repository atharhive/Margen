import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Scale,
  BookOpen,
  Microscope,
  Play,
  Pause,
  ArrowRight,
  Check,
} from 'lucide-react';
import {
  GENERATED_IMAGES,
  SOURCE_ARTIFACTS,
  SourceArtifactKey,
} from '../data/researchData';

const ARTIFACT_ICONS: Record<SourceArtifactKey, React.ReactNode> = {
  monograph: <FileText className="h-4 w-4" strokeWidth={1.6} />,
  patent: <Scale className="h-4 w-4" strokeWidth={1.6} />,
  notebook: <BookOpen className="h-4 w-4" strokeWidth={1.6} />,
  plate: <Microscope className="h-4 w-4" strokeWidth={1.6} />,
};

const LOOP_PHASES = [
  { id: 0, label: '01. Scan source' },
  { id: 1, label: '02. Lift claim' },
  { id: 2, label: '03. Thread links' },
];

export const AnimatedSourceLoopSection: React.FC = () => {
  const [activeKey, setActiveKey] = useState<SourceArtifactKey>('notebook');
  const [phase, setPhase] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(true);
  const [backdropFailed, setBackdropFailed] = useState(false);

  const artifact =
    SOURCE_ARTIFACTS.find((a) => a.key === activeKey) || SOURCE_ARTIFACTS[0];

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setPhase((prev) => (prev + 1) % LOOP_PHASES.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, [playing]);

  const handleSelectArtifact = (key: SourceArtifactKey) => {
    setActiveKey(key);
    setPhase(0);
    setPlaying(true);
  };

  return (
    <section id="workspace" className="mt-[128px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Left-aligned Instrument Sans 36px/500 Section Heading */}
        <div className="max-w-[660px]">
          <h2
            className="font-display text-[30px] font-medium leading-[1.3] tracking-[-0.54px] text-[#2e2e2e] sm:text-[36px]"
            style={{ textWrap: 'balance' }}
          >
            Drop raw artifacts. Watch claims link themselves.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.55] text-[#454545]">
            Whether a document arrives as a 600-page monograph, a patent claim
            tree, handwritten lab calipers, or an archival microfiche plate,
            Margen parses structure without detaching coordinates.
          </p>
        </div>

        {/* Compact Outlined Tool Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Source artifact types"
            className="flex flex-wrap items-center gap-2"
          >
            {SOURCE_ARTIFACTS.map((item) => {
              const isSelected = item.key === activeKey;
              return (
                <button
                  key={item.key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectArtifact(item.key)}
                  className={`inline-flex cursor-pointer items-center gap-[6px] whitespace-nowrap shrink-0 rounded-[6px] border py-[8px] pr-[10px] pl-[12px] text-[14px] font-medium transition-all duration-150 ${
                    isSelected
                      ? 'border-[#2e2e2e] bg-[#2e2e2e] text-[#fdfcfb]'
                      : 'border-black/[0.13] bg-transparent text-[#2e2e2e] hover:bg-[#f7f7f7]'
                  }`}
                >
                  {ARTIFACT_ICONS[item.key]}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Scrubbable Animated Sequence Controls (GIF-style playback bar) */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-[6px] bg-[#f7f7f7] p-1 border border-black/[0.06]">
              {LOOP_PHASES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setPlaying(false);
                    setPhase(p.id);
                  }}
                  className={`cursor-pointer whitespace-nowrap rounded-[4px] px-2.5 py-1 text-[12px] font-medium transition-colors ${
                    phase === p.id
                      ? 'bg-[#fdfcfb] text-[#2e2e2e] shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                      : 'text-[#6a6972] hover:text-[#2e2e2e]'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setPlaying((v) => !v)}
              aria-label={playing ? 'Pause extraction animation' : 'Play extraction animation'}
              className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-[6px] border border-black/[0.13] bg-[#fdfcfb] text-[#2e2e2e] hover:bg-[#f7f7f7]"
            >
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

        {/* Large Workspace Overlay over Sunlit Architectural Study Backdrop */}
        <div className="relative mt-6 overflow-hidden rounded-[16px] border border-[#e4ded3] p-4 sm:p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0">
            {!backdropFailed ? (
              <img
                src={GENERATED_IMAGES.synthesisStudyBackdrop}
                alt="Sunlit architectural study room with linen curtains and oak desk"
                referrerPolicy="no-referrer"
                onError={() => setBackdropFailed(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-[#f0f0ea]" />
            )}
            <div className="absolute inset-0 bg-[#fdfcfb]/15" />
          </div>

          <div
            className="relative overflow-hidden rounded-[12px] border border-black/[0.08] bg-[#fdfcfb]"
            style={{
              boxShadow:
                '0 0 0 1px rgba(0, 0, 0, 0.04), 0 14px 32px rgba(0, 0, 0, 0.1), 0 28px 70px rgba(0, 0, 0, 0.14)',
            }}
          >
            {/* Top Workspace File Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.08] bg-[#fdfcfb] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="font-tech text-[12px] font-medium text-[#2e2e2e]">
                  {artifact.fileName}
                </span>
                <span className="text-[#a8a8a8]" aria-hidden="true">
                  ·
                </span>
                <span className="text-[12px] text-[#6a6972]">
                  {artifact.meta}
                </span>
              </div>

              {/* Animated progress bar across 3 loop phases */}
              <div className="flex items-center gap-2">
                <span className="font-tech text-[11px] tabular-nums text-[#6a6972]">
                  Frame 0{phase + 1} / 03
                </span>
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[#eeeded]">
                  <motion.div
                    className="h-full bg-[#207dff]"
                    animate={{ width: `${((phase + 1) / 3) * 100}%` }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </div>

            {/* 2-Pane Extraction Animator */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Pane: Raw Artifact Reader */}
              <div className="relative border-b border-black/[0.08] bg-[#fdfcfb] p-5 lg:col-span-6 lg:border-r lg:border-b-0">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-[#2e2e2e]">
                    {artifact.rawSnippetTitle}
                  </span>
                  <span className="font-tech text-[11px] text-[#6a6972]">
                    {artifact.citationAnchor}
                  </span>
                </div>

                {/* If artifact includes a photographic scan (Lab Notebook / Archival Plate), render it with animated OCR scanline */}
                {artifact.image && (
                  <div className="relative mb-4 overflow-hidden rounded-[8px] border border-black/[0.08] bg-[#f0f0ea]">
                    <img
                      src={artifact.image}
                      alt={artifact.rawSnippetTitle}
                      referrerPolicy="no-referrer"
                      className="h-44 w-full object-cover"
                    />
                    {/* Animated calibration bounding box + scanline */}
                    <motion.div
                      aria-hidden="true"
                      animate={{
                        top: phase === 0 ? ['12%', '74%', '12%'] : '38%',
                        opacity: phase === 0 ? 1 : 0.35,
                      }}
                      transition={{
                        duration: phase === 0 ? 2.1 : 0.4,
                        repeat: phase === 0 ? Infinity : 0,
                        ease: 'easeInOut',
                      }}
                      className="pointer-events-none absolute right-3 left-3 h-[2px] bg-[#207dff] shadow-[0_0_10px_rgba(32,125,255,0.65)]"
                    />
                    <motion.div
                      aria-hidden="true"
                      animate={{
                        opacity: phase >= 1 ? 1 : 0.4,
                        scale: phase >= 1 ? 1 : 0.98,
                      }}
                      className="pointer-events-none absolute top-6 right-8 bottom-6 left-8 rounded-[4px] border border-dashed border-[#207dff]"
                    />
                  </div>
                )}

                {/* Text lines with live sweeping highlight */}
                <div className="space-y-2.5">
                  {artifact.rawLines.map((line, idx) => {
                    const isTarget = idx === artifact.highlightLineIndex;
                    const highlighted = isTarget && phase >= 0;
                    return (
                      <motion.div
                        key={artifact.key + '-line-' + idx}
                        animate={{
                          backgroundColor: highlighted
                            ? 'rgba(32, 125, 255, 0.08)'
                            : 'rgba(247, 247, 247, 0.7)',
                          borderColor: highlighted
                            ? 'rgba(32, 125, 255, 0.4)'
                            : 'rgba(0, 0, 0, 0.06)',
                        }}
                        transition={{ duration: 0.25 }}
                        className="rounded-[6px] border px-3 py-2.5 text-[13px] leading-[1.55] text-[#2e2e2e]"
                      >
                        <span className="mr-2 font-tech text-[11px] text-[#6a6972]">
                          0{idx + 1}
                        </span>
                        <span>{line}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Pane: Whiteboard Canvas Receiving Animated Claim Card + Thread Links */}
              <div className="whiteboard-grid relative flex flex-col justify-between p-5 lg:col-span-6">
                <div className="flex items-center justify-between text-[12px] text-[#6a6972]">
                  <span className="font-medium text-[#2e2e2e]">
                    Desk Synthesis Output
                  </span>
                  <span className="font-tech">
                    {phase === 0
                      ? 'Detecting anchor...'
                      : phase === 1
                      ? 'Pinning card...'
                      : 'Linked to 2 nodes'}
                  </span>
                </div>

                {/* Animated Extracted Card */}
                <div className="my-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={artifact.key + '-card-' + (phase >= 1 ? 'active' : 'ghost')}
                      initial={{ opacity: 0.45, y: 12, scale: 0.97 }}
                      animate={{
                        opacity: phase >= 1 ? 1 : 0.55,
                        y: phase >= 1 ? 0 : 6,
                        scale: 1,
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className={`rounded-[8px] border bg-[#fdfcfb] p-4 ${
                        phase >= 1
                          ? 'border-[#207dff] shadow-[0_8px_22px_rgba(32,125,255,0.1)]'
                          : 'border-dashed border-black/[0.18]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-tech text-[11px] text-[#207dff]">
                          {artifact.citationAnchor}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#454545]">
                          {phase >= 1 ? (
                            <>
                              <Check className="h-3 w-3 text-[#207dff]" />
                              Anchored
                            </>
                          ) : (
                            'Scanning passage'
                          )}
                        </span>
                      </div>
                      <h3 className="mt-1.5 text-[15px] font-semibold text-[#2e2e2e]">
                        {artifact.extractedCardTitle}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-[1.55] text-[#454545]">
                        {artifact.extractedClaim}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Animated Connector Line to Linked Desk Nodes */}
                  <div className="relative mx-auto flex h-7 w-full items-center justify-center">
                    <motion.div
                      animate={{
                        scaleY: phase >= 2 ? 1 : 0.2,
                        opacity: phase >= 2 ? 1 : 0.25,
                      }}
                      transition={{ duration: 0.3 }}
                      className="h-full w-[1.5px] origin-top bg-[#207dff]"
                    />
                  </div>

                  {/* Linked Sibling Nodes */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {artifact.linkedNodes.map((node, i) => (
                      <motion.div
                        key={node.id}
                        animate={{
                          opacity: phase >= 2 ? 1 : 0.45,
                          y: phase >= 2 ? 0 : 4,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: i * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="rounded-[8px] border border-black/[0.08] bg-[#fdfcfb] p-3"
                      >
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-medium text-[#207dff]">
                            {node.relation}
                          </span>
                          <span className="font-tech text-[#6a6972]">
                            {node.code}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center justify-between gap-2 text-[13px] font-medium text-[#2e2e2e]">
                          <span className="truncate">{node.title}</span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#6a6972]" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-black/[0.06] pt-2.5 text-[12px] text-[#6a6972]">
                  Every extracted card retains a live backlink to its source coordinate.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
