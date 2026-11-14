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
    headline: 'Folders hide what you read. A desk lets you see it.',
    subcopy:
      'When you read 40 papers in browser tabs, you forget where every claim came from. Margen lets you pull exact passages out of PDFs, patents, and notes onto one big table—with every quote still linked to its page.',
    primaryCta: 'Join Waitlist',
    activeDocumentTitle: 'On Thermal Boundary Layers in Urban Canopies (1994)',
    activeDocumentMeta: 'Page 18 · Chapter 4 · 142 citations linked',
    sourceQuote:
      'Across 114 street canyons measured between June and September, ',
    sourceHighlight:
      'nocturnal cooling lag scaled linearly with sky-view obstruction (R² = 0.89, p < 0.001)',
    sourceTail:
      ' once façade thermal mass exceeded 240 kg/m². Earlier models underestimated stored radiant heat by ignoring courtyard ventilation.',
    sidebarDocs: [
      { id: 'd1', title: 'Urban Canopy Paper', meta: 'PDF · 48 pp', active: true },
      { id: 'd2', title: 'Oke 1982 Canyon Study', meta: 'Source · p. 4' },
      { id: 'd3', title: 'Zurich Field Log 1991', meta: 'Data · CSV' },
      { id: 'd4', title: 'Draft Argument v3', meta: 'Note · 1,420 w' },
    ],
    cards: [
      {
        id: 'c1',
        title: 'Sky-View Cooling Lag',
        sourceCode: 'PAPER-04 · p. 18',
        excerpt: 'Overnight cooling slows by 1.8 °C for every 0.15 drop in open sky visibility.',
        x: 34,
        y: 26,
        w: 224,
        linkedTo: ['c2', 'c3'],
        accent: true,
      },
      {
        id: 'c2',
        title: 'Heavy Stone Holds Heat',
        sourceCode: 'EQ-2B · 240 kg/m²',
        excerpt: 'Limestone walls release daytime heat 4.2 hours slower than timber buildings.',
        x: 304,
        y: 34,
        w: 214,
        linkedTo: ['c4'],
      },
      {
        id: 'c3',
        title: 'Exception: Kyoto Alleys',
        sourceCode: 'JRN-89 · Table 3',
        excerpt: 'Shaded wooden streets cool down fast even with narrow sky views because of breeze.',
        x: 56,
        y: 184,
        w: 218,
        linkedTo: ['c4'],
      },
      {
        id: 'c4',
        title: 'Main Takeaway',
        sourceCode: 'THESIS · Verified',
        excerpt: 'Building material weight drives overnight heat more than street width alone.',
        x: 312,
        y: 196,
        w: 226,
      },
    ],
    loopSteps: [
      {
        step: 1,
        label: 'Highlight quote',
        statusText: 'Selecting key result on page 18',
        focusCardId: 'c1',
      },
      {
        step: 2,
        label: 'Drop onto desk',
        statusText: 'Pinning card with automatic page link',
        focusCardId: 'c2',
      },
      {
        step: 3,
        label: 'Spot exception',
        statusText: 'Connecting counter-example from Kyoto data',
        focusCardId: 'c3',
      },
      {
        step: 4,
        label: 'Write conclusion',
        statusText: 'Synthesizing both findings into one claim',
        focusCardId: 'c4',
      },
    ],
  },
  teams: {
    headline: 'Your team reads the same files, then loses the trail.',
    subcopy:
      'When five people take notes in separate docs, nobody knows which number actually holds up. Margen puts your sources, lab logs, and decisions on one shared table where every claim links back to proof.',
    primaryCta: 'Join Team Waitlist',
    activeDocumentTitle: 'Phase II Solid-State Battery Cell Test',
    activeDocumentMeta: 'Lab Report 19B · 18 contributors · Live links',
    sourceQuote:
      'Across 64 test cells cycled at 4.5 mA/cm², ',
    sourceHighlight:
      'keeping pore density below 1.2% stopped short-circuits past 1,400 charge cycles',
    sourceTail:
      ' when pressed at 18 MPa during assembly. Samples built in open air degraded immediately.',
    sidebarDocs: [
      { id: 't1', title: 'Battery Test 19B', meta: 'Lab · 64 cells', active: true },
      { id: 't2', title: 'US Patent 11,482,910', meta: 'Prior Art · 22 pp' },
      { id: 't3', title: 'Microscope Scans', meta: 'Images · 12 files' },
      { id: 't4', title: 'Q4 Engineering Spec', meta: 'Brief · Shared' },
    ],
    cards: [
      {
        id: 'c1',
        title: 'Porosity < 1.2% Cutoff',
        sourceCode: 'TEST-19B · §3.2',
        excerpt: 'Verified across 64 cells at 4.5 mA/cm² with zero short-circuit failures.',
        x: 34,
        y: 26,
        w: 224,
        linkedTo: ['c2', 'c3'],
        accent: true,
      },
      {
        id: 'c2',
        title: '18 MPa Assembly Press',
        sourceCode: 'RIG-07 · Run 44',
        excerpt: 'Firm clamping cuts microscopic gaps by 71% before the first test cycle.',
        x: 304,
        y: 34,
        w: 214,
        linkedTo: ['c4'],
      },
      {
        id: 'c3',
        title: 'Patent Claim 4 Check',
        sourceCode: 'US-11482910 · Col. 8',
        excerpt: 'Existing patent only covers cold pressing at 12 MPa; 18 MPa hot press stays clear.',
        x: 56,
        y: 184,
        w: 218,
        linkedTo: ['c4'],
      },
      {
        id: 'c4',
        title: 'Pilot Build Approved',
        sourceCode: 'SPEC-Q4 · Ready',
        excerpt: 'Cleared for next manufacturing batch using the 18 MPa press fixture.',
        x: 312,
        y: 196,
        w: 226,
      },
    ],
    loopSteps: [
      {
        step: 1,
        label: 'Pin lab result',
        statusText: 'Pulling 1,400-cycle threshold from Report 19B',
        focusCardId: 'c1',
      },
      {
        step: 2,
        label: 'Link rig log',
        statusText: 'Attaching 18 MPa assembly run to the claim',
        focusCardId: 'c2',
      },
      {
        step: 3,
        label: 'Check patent',
        statusText: 'Comparing Claim 4 limit against our test data',
        focusCardId: 'c3',
      },
      {
        step: 4,
        label: 'Ship spec',
        statusText: 'Publishing engineering sign-off with full proof',
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
