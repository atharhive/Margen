export const GENERATED_IMAGES = {
  heroBackdrop: '/src/assets/images/hero_landscape_backdrop_1794632232950.jpg',
  archiveManuscript: '/src/assets/images/archive_manuscript_plate_1794632233251.jpg',
  synthesisStudyBackdrop: '/src/assets/images/synthesis_field_backdrop_1794632233662.jpg',
  labSpecimenPlate: '/src/assets/images/lab_specimen_plate_1794632234796.jpg',
  scholarStudy: '/src/assets/images/scholar_study_portrait_1794632235439.jpg',
};

export type AudienceMode = 'individual' | 'teams';

export interface DeskCardNode {
  id: string;
  title: string;
  sourceCode: string;
  excerpt: string;
  x: number;
  y: number;
  w: number;
  linkedTo?: string[];
  accent?: boolean;
}

export const HERO_MODE_DATA: Record<
  AudienceMode,
  {
    headline: string;
    subcopy: string;
    primaryCta: string;
    activeDocumentTitle: string;
    activeDocumentMeta: string;
    sourceQuote: string;
    sourceHighlight: string;
    sourceTail: string;
    sidebarDocs: { id: string; title: string; meta: string; active?: boolean }[];
    cards: DeskCardNode[];
    loopSteps: {
      step: number;
      label: string;
      statusText: string;
      focusCardId: string;
    }[];
  }
> = {
  individual: {
    headline: 'Spread every source across one sunlit research desk.',
    subcopy:
      'Read monographs, trace primary citations, and arrange evidence cards on an infinite paper canvas built for deep individual scholarship.',
    primaryCta: 'Start Studying',
    activeDocumentTitle: 'On Thermal Boundary Layers in Urban Canopies (1994)',
    activeDocumentMeta: 'Fol. 18 · Monograph Ch. 4 · 142 citations linked',
    sourceQuote:
      'Across 114 street canyons measured between June and September, ',
    sourceHighlight:
      'nocturnal cooling lag scaled linearly with sky-view obstruction (R² = 0.89, p < 0.001)',
    sourceTail:
      ' once façade thermal mass exceeded 240 kg/m². Earlier parametric models underestimated stored radiant heat by ignoring courtyard ventilation asymmetry.',
    sidebarDocs: [
      { id: 'd1', title: 'Urban Canopy Monograph', meta: 'PDF · 48 pp', active: true },
      { id: 'd2', title: 'Oke 1982 Canyon Geometry', meta: 'Cite · Fol. 4' },
      { id: 'd3', title: 'Zurich Field Log 1991', meta: 'Table · CSV' },
      { id: 'd4', title: 'Synthesis Draft v3', meta: 'Note · 1,420 w' },
    ],
    cards: [
      {
        id: 'c1',
        title: 'Sky-View Cooling Lag',
        sourceCode: 'MON-04 · p. 18',
        excerpt: 'Nocturnal ΔT drops 1.8 °C per 0.15 increase in sky-view factor across dense stone blocks.',
        x: 34,
        y: 26,
        w: 224,
        linkedTo: ['c2', 'c3'],
        accent: true,
      },
      {
        id: 'c2',
        title: 'Thermal Mass Threshold',
        sourceCode: 'EQ-2B · 240 kg/m²',
        excerpt: 'Limestone façades retain longwave flux 4.2 hours longer than timber-framed envelopes.',
        x: 304,
        y: 34,
        w: 214,
        linkedTo: ['c4'],
      },
      {
        id: 'c3',
        title: 'Counter-Evidence: Kyoto',
        sourceCode: 'JRN-89 · Table 3',
        excerpt: 'Shaded wooden machiya alleys cool rapidly despite low sky-view ratios due to cross-breeze.',
        x: 56,
        y: 184,
        w: 218,
        linkedTo: ['c4'],
      },
      {
        id: 'c4',
        title: 'Working Thesis Claim',
        sourceCode: 'SYN-01 · Verified',
        excerpt: 'Material heat capacity governs overnight retention more strongly than street aspect ratio alone.',
        x: 312,
        y: 196,
        w: 226,
      },
    ],
    loopSteps: [
      {
        step: 1,
        label: 'Select passage',
        statusText: 'Highlighting empirical finding on Fol. 18',
        focusCardId: 'c1',
      },
      {
        step: 2,
        label: 'Pin card to desk',
        statusText: 'Extracting R² = 0.89 claim with page anchor',
        focusCardId: 'c2',
      },
      {
        step: 3,
        label: 'Trace counter-source',
        statusText: 'Linking Kyoto 1989 dataset contradiction',
        focusCardId: 'c3',
      },
      {
        step: 4,
        label: 'Update synthesis',
        statusText: 'Reconciling thermal mass vs. geometry thesis',
        focusCardId: 'c4',
      },
    ],
  },
  teams: {
    headline: 'One shared evidence table for every lab and fellow.',
    subcopy:
      'Keep clinical protocols, patent prior art, and lab bench logs tethered to live page anchors so every colleague sees how conclusions were earned.',
    primaryCta: 'Request Lab Pilot',
    activeDocumentTitle: 'Phase II Solid-State Electrolyte Dendrite Assay',
    activeDocumentMeta: 'Lab Protocol 19B · 18 contributors · Audit trail active',
    sourceQuote:
      'Across 64 symmetric Li-metal cells cycled at 4.5 mA/cm², ',
    sourceHighlight:
      'grain-boundary porosity below 1.2% suppressed dendrite propagation past 1,400 cycles',
    sourceTail:
      ' when annealed under 18 MPa uniaxial stack pressure. Samples milled without inert glovebox transfer exhibited immediate impedance drift.',
    sidebarDocs: [
      { id: 't1', title: 'Electrolyte Assay 19B', meta: 'Lab · 64 cells', active: true },
      { id: 't2', title: 'US Patent 11,482,910', meta: 'Prior Art · 22 pp' },
      { id: 't3', title: 'SEM Micrograph Batch', meta: 'Plate · 12 scans' },
      { id: 't4', title: 'Q4 Safety Dossier', meta: 'Brief · Shared' },
    ],
    cards: [
      {
        id: 'c1',
        title: 'Porosity < 1.2% Cutoff',
        sourceCode: 'ASSAY-19B · §3.2',
        excerpt: 'Threshold verified across 64 cells at 4.5 mA/cm² without short-circuit events.',
        x: 34,
        y: 26,
        w: 224,
        linkedTo: ['c2', 'c3'],
        accent: true,
      },
      {
        id: 'c2',
        title: 'Stack Pressure 18 MPa',
        sourceCode: 'RIG-07 · Run 44',
        excerpt: 'Uniaxial clamping reduces interfacial voids by 71% prior to initial formation cycle.',
        x: 304,
        y: 34,
        w: 214,
        linkedTo: ['c4'],
      },
      {
        id: 'c3',
        title: 'Patent Claim 4 Overlap',
        sourceCode: 'US-11482910 · Col. 8',
        excerpt: 'Prior art discloses cold-pressing at 12 MPa only; leaves hot-isostatic window open.',
        x: 56,
        y: 184,
        w: 218,
        linkedTo: ['c4'],
      },
      {
        id: 'c4',
        title: 'Lab Dossier Sign-Off',
        sourceCode: 'BRIEF-Q4 · Ready',
        excerpt: 'Cleared for pilot manufacturing scale-up with 18 MPa fixture specification.',
        x: 312,
        y: 196,
        w: 226,
      },
    ],
    loopSteps: [
      {
        step: 1,
        label: 'Anchor assay row',
        statusText: 'Pinning 1,400-cycle threshold from Assay 19B',
        focusCardId: 'c1',
      },
      {
        step: 2,
        label: 'Attach test rig log',
        statusText: 'Syncing 18 MPa clamp telemetry to evidence card',
        focusCardId: 'c2',
      },
      {
        step: 3,
        label: 'Cross-check patent',
        statusText: 'Comparing Claim 4 boundary against cold-press art',
        focusCardId: 'c3',
      },
      {
        step: 4,
        label: 'Publish lab brief',
        statusText: 'Generating verified spec sheet for engineering review',
        focusCardId: 'c4',
      },
    ],
  },
};

export type SourceArtifactKey = 'monograph' | 'patent' | 'notebook' | 'plate';

export interface SourceLoopArtifact {
  key: SourceArtifactKey;
  label: string;
  fileName: string;
  meta: string;
  image?: string;
  rawSnippetTitle: string;
  rawLines: string[];
  highlightLineIndex: number;
  extractedCardTitle: string;
  extractedClaim: string;
  citationAnchor: string;
  linkedNodes: { id: string; title: string; relation: string; code: string }[];
}

export const SOURCE_ARTIFACTS: SourceLoopArtifact[] = [
  {
    key: 'monograph',
    label: 'Monograph PDF',
    fileName: 'Braudel_Mediterranean_Vol2.pdf',
    meta: 'OCR + Layout Tree · 612 pages',
    rawSnippetTitle: 'Chapter IV · Silver Flows & Maritime Credit',
    rawLines: [
      'Bills of exchange drawn in Genoa settled within 42 days at Antwerp fairs.',
      'Between 1557 and 1575, Genoese bankers shifted liquidity from bullion convoys to asiento credit.',
      'Ledger folios confirm interest spreads narrowed by 180 bps during winter sailings.',
    ],
    highlightLineIndex: 1,
    extractedCardTitle: 'Shift from Bullion to Asiento Credit',
    extractedClaim:
      'Genoese houses replaced physical silver convoys with 42-day Genoa–Antwerp clearing bills between 1557 and 1575.',
    citationAnchor: 'Fol. 214v · Arch. Stato Genova',
    linkedNodes: [
      { id: 'm1', title: 'Antwerp Fair Clearing Rates', relation: 'Corroborates', code: 'TBL-14' },
      { id: 'm2', title: '1575 Crown Suspension', relation: 'Precedes', code: 'CHR-09' },
    ],
  },
  {
    key: 'patent',
    label: 'Patent Filing',
    fileName: 'EP3948102B1_Membrane_Desal.pdf',
    meta: 'Claims Parser · 34 claims indexed',
    rawSnippetTitle: 'Independent Claim 1 · Polyamide Interfacial Layer',
    rawLines: [
      'A composite reverse-osmosis membrane comprising a porous polysulfone support;',
      'an interfacial polyamide layer exhibiting a cross-linking density ≥ 0.84 mol/L and thickness 110 nm;',
      'wherein boron rejection exceeds 93.5% at 55 bar operating feed pressure.',
    ],
    highlightLineIndex: 1,
    extractedCardTitle: 'Cross-Link Density ≥ 0.84 mol/L',
    extractedClaim:
      'Maintains 93.5% boron rejection at 55 bar when polyamide film thickness is held at 110 nm.',
    citationAnchor: 'Claim 1 · ¶ 0042 · Fig. 3',
    linkedNodes: [
      { id: 'p1', title: 'US 9,814,201 Prior Art', relation: 'Distinguishes', code: 'CLM-01' },
      { id: 'p2', title: 'Pilot Brackish Run #12', relation: 'Validates', code: 'LOG-12' },
    ],
  },
  {
    key: 'notebook',
    label: 'Lab Notebook',
    fileName: 'Field_Notebook_Oct2023_Scan.tiff',
    meta: 'Handwriting + Equation OCR',
    image: GENERATED_IMAGES.archiveManuscript,
    rawSnippetTitle: 'Site A Observation Notes · Density & Enthalpy',
    rawLines: [
      'ρ = m / V   ·   ΔH = Q − W   ·   T_ambient = 14.8 °C',
      'Porous specimen A4 absorbed 14.2% moisture after 6h humidity chamber dwell.',
      'Caliper gauge confirms +0.18 mm lateral expansion across laminated timber grain.',
    ],
    highlightLineIndex: 0,
    extractedCardTitle: 'Enthalpy Balance & Swell Coefficient',
    extractedClaim:
      'Calibrated caliper delta (+0.18 mm) matches predicted moisture uptake curve under 14.8 °C baseline.',
    citationAnchor: 'Notebook p. 42 · Caliper Scan',
    linkedNodes: [
      { id: 'n1', title: 'Specimen A4 Hygro-Curve', relation: 'Plots into', code: 'EQ-07' },
      { id: 'n2', title: 'Site B Control Timber', relation: 'Contrasts', code: 'LOG-02' },
    ],
  },
  {
    key: 'plate',
    label: 'Archival Plate',
    fileName: 'Herbarium_Plate48_Digitalis.tiff',
    meta: 'Microfiche + Specimen Index',
    image: GENERATED_IMAGES.labSpecimenPlate,
    rawSnippetTitle: 'Accession 25039 · Prairie Reserve (1937)',
    rawLines: [
      'Echinacea purpurea (Plate 48) · Digitalis purpurea (Plate 21) · Salvia (Plate 39)',
      'Microfiche slide M:0019 documents petal venation anomalies in October 1941 harvest.',
      'Cross-indexed with R. Davis 1938 herbarium card catalog for alkaloid variance.',
    ],
    highlightLineIndex: 1,
    extractedCardTitle: '1941 Digitalis Venation Anomaly',
    extractedClaim:
      'Microfiche M:0019 records secondary calyx branching absent in the 1937 Prairie Reserve baseline plate.',
    citationAnchor: 'Plate 21 · Slide M:0019',
    linkedNodes: [
      { id: 'a1', title: 'R. Davis 1938 Catalog', relation: 'Indexed in', code: 'ACC-25039' },
      { id: 'a2', title: 'Salvia Control Plate 39', relation: 'Paired with', code: 'PLT-39' },
    ],
  },
];

export interface CitationNode {
  id: string;
  label: string;
  kind: 'Primary Source' | 'Replication' | 'Counter-Study' | 'Synthesis';
  year: string;
  citation: string;
  summary: string;
  connections: string[];
  x: number;
  y: number;
}

export const CITATION_GRAPH_NODES: CitationNode[] = [
  {
    id: 'g1',
    label: '1978 Basel Soil Archive',
    kind: 'Primary Source',
    year: '1978',
    citation: 'Brunner & Haldimann, Fol. 112',
    summary:
      '40-year continuous mineral nitrogen logs from 18 unfertilized alpine meadow plots.',
    connections: ['g2', 'g3'],
    x: 40,
    y: 44,
  },
  {
    id: 'g2',
    label: '2011 Innsbruck Re-Assay',
    kind: 'Replication',
    year: '2011',
    citation: 'Keller et al., Biogeochem. 104',
    summary:
      'Re-sampled archived 1978 cores with mass spectrometry; confirmed 11.4% organic carbon persistence.',
    connections: ['g1', 'g4'],
    x: 310,
    y: 26,
  },
  {
    id: 'g3',
    label: '2019 Tyrol Warm-Slope Test',
    kind: 'Counter-Study',
    year: '2019',
    citation: 'Vogt & Stein, Alpine Ecol. 29',
    summary:
      'Demonstrates south-facing slopes above 1,900 m lose microbial stability twice as fast during dry summers.',
    connections: ['g1', 'g4'],
    x: 290,
    y: 190,
  },
  {
    id: 'g4',
    label: '2026 Unified Canopy Brief',
    kind: 'Synthesis',
    year: '2026',
    citation: 'Margen Desk · Working Synthesis',
    summary:
      'Reconciles Brunner baseline with Vogt slope-aspect correction factor into one calibrated predictive curve.',
    connections: ['g2', 'g3'],
    x: 560,
    y: 108,
  },
];

export interface CaseStudy {
  id: string;
  metric: string;
  metricLabel: string;
  title: string;
  organization: string;
  discipline: string;
  quote: string;
  author: string;
  role: string;
  image: string;
  imageAlt: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    metric: '42%',
    metricLabel: 'Faster systematic literature synthesis across 640 papers',
    title: 'Replacing folder hierarchies with pinned evidence tables',
    organization: 'Nordic Climate Materials Lab',
    discipline: 'Atmospheric Physics · 14 Fellows',
    quote:
      'Before Margen, our postdocs lost two days every month re-verifying which paper contained a boundary equation. Now every equation card stays anchored to its exact PDF coordinate.',
    author: 'Dr. Astrid Lindqvist',
    role: 'Principal Investigator, Nordic Climate Materials Lab',
    image: GENERATED_IMAGES.archiveManuscript,
    imageAlt: 'Open scientific notebooks with handwritten equations and brass calipers on an oak study desk',
  },
  {
    id: 'cs-2',
    metric: '1,840',
    metricLabel: 'Cross-referenced patent filings audited in 19 days',
    title: 'Auditing prior-art claims side by side without tab sprawl',
    organization: 'Helvetia IP & Photonics Practice',
    discipline: 'Patent Litigation · 9 Analysts',
    quote:
      'Seeing independent claims mapped directly beside microfiche lab plates let our team spot a subtle thickness contradiction in three hours instead of three weeks.',
    author: 'Martin Breitenbach',
    role: 'Senior Patent Counsel, Helvetia IP',
    image: GENERATED_IMAGES.labSpecimenPlate,
    imageAlt: 'Archival specimen lithographs, glass microfiche slides, and catalog cards arranged on warm paper',
  },
  {
    id: 'cs-3',
    metric: '3.4×',
    metricLabel: 'More primary footnotes retained in final monographs',
    title: 'Long-form historical collation from archival folios to draft',
    organization: 'St. Andrews Maritime Archive Project',
    discipline: 'Economic History · 6 Scholars',
    quote:
      'Every paragraph in our published volume links backward through two generations of handwritten ledger notes. Nothing gets detached from its provenance.',
    author: 'Prof. Eleanor Vance',
    role: 'Chair of Archival Studies, St. Andrews',
    image: GENERATED_IMAGES.scholarStudy,
    imageAlt: 'Sunlit library wooden desk with stacked clothbound books and open leather-bound journal',
  },
];

export interface DeskTemplate {
  id: string;
  title: string;
  discipline: string;
  nodeCount: string;
  description: string;
  cards: { label: string; kind: string; excerpt: string }[];
}

export const WORKFLOW_TEMPLATES: DeskTemplate[] = [
  {
    id: 'tpl-lit',
    title: 'Comparative Literature Matrix',
    discipline: 'Humanities & Social Science',
    nodeCount: '18 linked cards · 6 sources',
    description:
      'Lay competing monographs beside primary archival letters to isolate methodological disagreements and shared citations.',
    cards: [
      { label: 'Thesis Anchor', kind: 'Core Claim', excerpt: 'Compare primary archival consensus across 1950–1985 revisions.' },
      { label: 'Methodological Split', kind: 'Divergence', excerpt: 'Quantifies shift from parish tax rolls to customs ledgers.' },
      { label: 'Appendix A Citations', kind: 'Provenance', excerpt: 'Direct folio backlinks preserved for peer-review verification.' },
    ],
  },
  {
    id: 'tpl-patent',
    title: 'Prior-Art & Claim Dissection',
    discipline: 'IP Strategy & Engineering',
    nodeCount: '24 linked cards · 11 filings',
    description:
      'Pin independent patent claims alongside experimental lab notebooks to validate novelty boundaries and invalidation risk.',
    cards: [
      { label: 'Claim 1 Elements', kind: 'Statutory', excerpt: 'Breaks down thickness, pressure, and molar ratio constraints.' },
      { label: 'Prior Art Delta', kind: 'Comparison', excerpt: 'Flags overlapping disclosures across EP, US, and JP filings.' },
      { label: 'Bench Verification', kind: 'Evidence', excerpt: 'Attaches raw lab micrograph runs directly beneath claim clauses.' },
    ],
  },
  {
    id: 'tpl-clinical',
    title: 'Clinical Trial Evidence Synthesis',
    discipline: 'Biomedical & Epidemiology',
    nodeCount: '32 linked cards · 9 cohorts',
    description:
      'Group cohort endpoints, inclusion criteria, and adverse-event tables onto one visual sheet before drafting meta-analyses.',
    cards: [
      { label: 'Cohort Baseline', kind: 'Population', excerpt: 'Normalizes median age, dosage schedule, and washout windows.' },
      { label: 'Endpoint Variance', kind: 'Statistics', excerpt: 'Highlights confidence interval drift across multi-center arms.' },
      { label: 'Protocol Amendments', kind: 'Audit', excerpt: 'Tracks every criterion revision with date-stamped PDF excerpts.' },
    ],
  },
  {
    id: 'tpl-systems',
    title: 'Architecture & RFC RFC-Tradeoff Map',
    discipline: 'Systems Engineering',
    nodeCount: '15 linked cards · 4 specs',
    description:
      'Connect RFC specifications, benchmark traces, and postmortem transcripts into one navigable decision desk.',
    cards: [
      { label: 'Consensus Constraint', kind: 'Invariant', excerpt: 'Maps tail-latency bounds against quorum durability guarantees.' },
      { label: 'Trace Evidence', kind: 'Benchmark', excerpt: 'Embeds p99 flamegraph excerpts beside lock-free queue notes.' },
      { label: 'Decision Record', kind: 'Outcome', excerpt: 'Locks final architectural choice with dissenting tradeoffs intact.' },
    ],
  },
];
