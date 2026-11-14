/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { TopNav } from './components/TopNav';
import { HeroWorkspacePreview } from './components/HeroWorkspacePreview';
import { FounderPitchSection } from './components/FounderPitchSection';
import { AnimatedSourceLoopSection } from './components/AnimatedSourceLoopSection';
import { CapabilitiesAndPaperSection } from './components/CapabilitiesAndPaperSection';
import { EvidenceAndCaseStudiesSection } from './components/EvidenceAndCaseStudiesSection';
import { WorkflowLibrarySection } from './components/WorkflowLibrarySection';
import {
  LeadCaptureAndFooter,
  WaitlistEntry,
} from './components/LeadCaptureAndFooter';

const STORAGE_KEY = 'margen_waitlist_entry_v1';

export default function App() {
  const [selectedContext, setSelectedContext] = useState<string>('');
  const [waitlistEntry, setWaitlistEntry] = useState<WaitlistEntry | null>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as WaitlistEntry) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (waitlistEntry) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(waitlistEntry));
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Ignore storage quota / privacy mode errors
    }
  }, [waitlistEntry]);

  const scrollToWaitlist = (context?: string) => {
    if (context) {
      setSelectedContext(context);
    }
    const target = document.getElementById('request-access');
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleJoinWaitlist = (email: string, focus: string, notes?: string) => {
    setWaitlistEntry((prev) => ({
      email,
      focus,
      notes,
      position: prev?.position ?? 419,
    }));
  };

  const handleResetWaitlist = () => {
    setWaitlistEntry(null);
  };

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-[#2e2e2e]">
      <TopNav onStartResearch={() => scrollToWaitlist('Early Access Waitlist')} />

      <main>
        <HeroWorkspacePreview
          onRequestAccess={scrollToWaitlist}
          waitlistEntry={waitlistEntry}
          onJoinWaitlistDirect={handleJoinWaitlist}
        />
        <FounderPitchSection
          onJoinWaitlist={() => scrollToWaitlist('Tuesday Onboarding Batch')}
        />
        <AnimatedSourceLoopSection />
        <CapabilitiesAndPaperSection />
        <EvidenceAndCaseStudiesSection onSelectWorkflow={scrollToWaitlist} />
        <WorkflowLibrarySection onUseTemplate={scrollToWaitlist} />
        <LeadCaptureAndFooter
          preselectedContext={selectedContext}
          waitlistEntry={waitlistEntry}
          onJoinWaitlist={handleJoinWaitlist}
          onResetWaitlist={handleResetWaitlist}
        />
      </main>
    </div>
  );
}
