/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TopNav } from './components/TopNav';
import { HeroWorkspacePreview } from './components/HeroWorkspacePreview';
import { AnimatedSourceLoopSection } from './components/AnimatedSourceLoopSection';
import { CapabilitiesAndPaperSection } from './components/CapabilitiesAndPaperSection';
import { EvidenceAndCaseStudiesSection } from './components/EvidenceAndCaseStudiesSection';
import { WorkflowLibrarySection } from './components/WorkflowLibrarySection';
import { LeadCaptureAndFooter } from './components/LeadCaptureAndFooter';

export default function App() {
  const [selectedContext, setSelectedContext] = useState<string>('');

  const scrollToAccessForm = (context?: string) => {
    if (context) {
      setSelectedContext(context);
    }
    const target = document.getElementById('request-access');
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-[#2e2e2e]">
      <TopNav onStartResearch={() => scrollToAccessForm('General Workspace Access')} />

      <main>
        <HeroWorkspacePreview onRequestAccess={scrollToAccessForm} />
        <AnimatedSourceLoopSection />
        <CapabilitiesAndPaperSection />
        <EvidenceAndCaseStudiesSection onSelectWorkflow={scrollToAccessForm} />
        <WorkflowLibrarySection onUseTemplate={scrollToAccessForm} />
        <LeadCaptureAndFooter preselectedContext={selectedContext} />
      </main>
    </div>
  );
}
