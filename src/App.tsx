/**
 * KGB Group (Knowledge Gurukul / Placement India)
 * High-Converting Single Page Landing Page
 *
 * @license Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { FeaturedJobs } from './components/FeaturedJobs';
import { CollegePartnership } from './components/CollegePartnership';
import { ApplicationForm } from './components/ApplicationForm';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [selectedRoleForForm, setSelectedRoleForForm] = useState<string>('');

  const scrollToApply = () => {
    const applyElement = document.getElementById('apply');
    if (applyElement) {
      applyElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToJobs = () => {
    const jobsElement = document.getElementById('jobs');
    if (jobsElement) {
      jobsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRoleForApply = (roleTitle: string) => {
    setSelectedRoleForForm(roleTitle);
    scrollToApply();
  };

  const handleClearSelectedRole = () => {
    setSelectedRoleForForm('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans pb-14 sm:pb-0">
      {/* 1. Navbar */}
      <Navbar onApplyClick={scrollToApply} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onApplyClick={scrollToApply}
          onExploreJobsClick={scrollToJobs}
        />

        {/* 3. Trust & Accreditation Strip */}
        <TrustStrip />

        {/* 4. Featured Job Openings */}
        <FeaturedJobs onSelectRoleForApply={handleSelectRoleForApply} />

        {/* 5. Institutional & Campus Placement Partnership */}
        <CollegePartnership />

        {/* 6. Lead Generation Application Form */}
        <ApplicationForm
          selectedRoleFromCard={selectedRoleForForm}
          onClearSelectedRole={handleClearSelectedRole}
        />

        {/* 7. Placed Candidate Testimonials */}
        <TestimonialsSection />

        {/* 8. FAQs Section */}
        <FaqSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Sticky / Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* 11. Mobile Sticky Action Bar */}
      <MobileQuickBar onApplyClick={scrollToApply} />
    </div>
  );
}
