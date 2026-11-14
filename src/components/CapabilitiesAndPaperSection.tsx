import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CITATION_GRAPH_NODES, CitationNode } from '../data/researchData';
import { ArrowUpRight } from 'lucide-react';

export const CapabilitiesAndPaperSection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('g4');

  const selectedNode =
    CITATION_GRAPH_NODES.find((n) => n.id === selectedNodeId) ||
    CITATION_GRAPH_NODES[0];

  const isConnected = (a: CitationNode, bId: string) =>
    a.connections.includes(bId);

  const paperFeatures = [
    {
      index: '01.',
      title: 'Page-Anchored Excerpts',
      body: 'Highlight an equation, table cell, or manuscript paragraph and pin it onto your desk without severing its page number or edition history.',
    },
    {
      index: '02.',
      title: 'Bidirectional Citation Threads',
      body: 'Trace upstream primary evidence and downstream replications across every desk at once. Contradictions surface before you draft.',
    },
    {
      index: '03.',
      title: 'Side-by-Side Plate Calibration',
      body: 'Place scanned lab notebooks, lithograph plates, and modern CSV datasets on the same grid to compare measurements directly.',
    },
    {
      index: '04.',
      title: 'Verifiable Monograph Export',
      body: 'Compile spatial boards into structured LaTeX, Markdown, or Word manuscripts with every inline footnote automatically formatted.',
    },
  ];

  // Edges between graph nodes (undirected deduplicated)
  const edges: [string, string][] = [
    ['g1', 'g2'],
    ['g1', 'g3'],
    ['g2', 'g4'],
    ['g3', 'g4'],
  ];

  return (
    <section id="synthesis" className="mt-[128px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Heading */}
        <div className="max-w-[680px]">
          <h2
            className="font-display text-[30px] font-medium leading-[1.3] tracking-[-0.54px] text-[#2e2e2e] sm:text-[36px]"
            style={{ textWrap: 'balance' }}
          >
            Built like a physical reading table, backed by a live citation graph.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.55] text-[#454545]">
            Most note tools force deep research into narrow linear documents.
            Margen keeps primary evidence, replications, and counter-studies
            visible side by side.
          </p>
        </div>

        {/* Paper Beige Feature Boxes (#f0f0ea, 8px radius, 16px/17px padding, no shadow) */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {paperFeatures.map((feat) => (
            <div
              key={feat.index}
              className="rounded-[8px] bg-[#f0f0ea] px-[17px] py-[16px]"
            >
              <div className="font-tech text-[12px] font-medium text-[#6a6972]">
                {feat.index}
              </div>
              <h3 className="mt-1.5 text-[17px] font-medium leading-[1.4] text-[#2e2e2e]">
                {feat.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#454545]">
                {feat.body}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Spatial Citation Graph inside Whiteboard Workspace Surface */}
        <div className="mt-10 overflow-hidden rounded-[12px] border border-black/[0.08] bg-[#eeeded] p-[10px]">
          <div className="grid grid-cols-1 gap-[10px] lg:grid-cols-12">
            {/* Whiteboard Canvas Node Graph */}
            <div className="whiteboard-grid relative rounded-[8px] border border-black/[0.08] bg-[#fdfcfb]/60 p-5 lg:col-span-8">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[13px] font-semibold text-[#2e2e2e]">
                  Interactive Citation Lineage
                </span>
                <span className="text-[12px] text-[#6a6972]">
                  Select any paper card to inspect provenance threads
                </span>
              </div>

              {/* Desktop SVG + Positioned Node Cards */}
              <div className="relative hidden h-[280px] w-full md:block">
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 760 280"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {edges.map(([fromId, toId]) => {
                    const from = CITATION_GRAPH_NODES.find((n) => n.id === fromId)!;
                    const to = CITATION_GRAPH_NODES.find((n) => n.id === toId)!;
                    const active =
                      selectedNodeId === fromId || selectedNodeId === toId;
                    const x1 = from.x + 170;
                    const y1 = from.y + 42;
                    const x2 = to.x;
                    const y2 = to.y + 42;
                    const midX = (x1 + x2) / 2;
                    return (
                      <path
                        key={`${fromId}-${toId}`}
                        d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
                        stroke={active ? '#207dff' : '#c2bfb8'}
                        strokeWidth={active ? 2.2 : 1.25}
                        className="transition-all duration-200"
                      />
                    );
                  })}
                </svg>

                {CITATION_GRAPH_NODES.map((node) => {
                  const isSelected = node.id === selectedNodeId;
                  const isLinked = isConnected(selectedNode, node.id);
                  return (
                    <motion.button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNodeId(node.id)}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        left: `${(node.x / 760) * 100}%`,
                        top: `${node.y}px`,
                        width: '185px',
                      }}
                      className={`absolute cursor-pointer rounded-[8px] border bg-[#fdfcfb] p-3 text-left transition-colors ${
                        isSelected
                          ? 'z-20 border-[#207dff] shadow-[0_6px_18px_rgba(32,125,255,0.12)]'
                          : isLinked
                          ? 'z-10 border-[#207dff]/45'
                          : 'z-10 border-black/[0.08] opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span
                          className={
                            isSelected || isLinked
                              ? 'font-medium text-[#207dff]'
                              : 'text-[#6a6972]'
                          }
                        >
                          {node.kind}
                        </span>
                        <span className="font-tech tabular-nums text-[#6a6972]">
                          {node.year}
                        </span>
                      </div>
                      <div className="mt-1 text-[13px] font-semibold leading-snug text-[#2e2e2e]">
                        {node.label}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile Stack */}
              <div className="grid grid-cols-1 gap-2.5 md:hidden">
                {CITATION_GRAPH_NODES.map((node) => {
                  const isSelected = node.id === selectedNodeId;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`rounded-[8px] border bg-[#fdfcfb] p-3 text-left ${
                        isSelected ? 'border-[#207dff]' : 'border-black/[0.08]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] text-[#6a6972]">
                        <span>{node.kind}</span>
                        <span className="font-tech tabular-nums">{node.year}</span>
                      </div>
                      <div className="mt-1 text-[13.5px] font-semibold text-[#2e2e2e]">
                        {node.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Translucent Workspace Card Inspector (rgba(252,252,252,0.5), 6px radius, 16px padding, no shadow) */}
            <div className="flex flex-col justify-between rounded-[6px] border border-black/[0.08] bg-[rgba(252,252,252,0.5)] p-4 lg:col-span-4">
              <div>
                <div className="flex items-center justify-between border-b border-black/[0.08] pb-3">
                  <span className="text-[12px] font-medium text-[#6a6972]">
                    Selected Source Node
                  </span>
                  <span className="font-tech text-[12px] tabular-nums text-[#207dff]">
                    {selectedNode.year} · {selectedNode.kind}
                  </span>
                </div>

                <h3 className="mt-3 text-[18px] font-medium leading-snug text-[#2e2e2e]">
                  {selectedNode.label}
                </h3>
                <p className="mt-1 font-tech text-[12px] text-[#6a6972]">
                  {selectedNode.citation}
                </p>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#454545]">
                  {selectedNode.summary}
                </p>

                <div className="mt-4 border-t border-black/[0.08] pt-3">
                  <div className="text-[12px] font-medium text-[#2e2e2e]">
                    Connected desk cards
                  </div>
                  <div className="mt-2 flex flex-col gap-1.5">
                    {selectedNode.connections.map((connId) => {
                      const target = CITATION_GRAPH_NODES.find(
                        (n) => n.id === connId
                      );
                      if (!target) return null;
                      return (
                        <button
                          key={connId}
                          type="button"
                          onClick={() => setSelectedNodeId(connId)}
                          className="flex cursor-pointer items-center justify-between rounded-[6px] border border-black/[0.08] bg-[#fdfcfb] px-2.5 py-2 text-left text-[12.5px] font-medium text-[#2e2e2e] transition-colors hover:border-[#207dff] hover:text-[#207dff]"
                        >
                          <span className="truncate">{target.label}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-black/[0.08] pt-3 text-[12px] text-[#6a6972]">
                Provenance links persist across exports and team handoffs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
