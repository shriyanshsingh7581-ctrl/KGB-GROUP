/**
 * KGB Group - Knowledge Gurukul (Bhopal)
 * High-Converting Single Page Landing Page + Firebase HR Admin Portal
 *
 * @license Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { CertificationsSection } from './components/CertificationsSection';
import { FeaturedJobs } from './components/FeaturedJobs';
import { CampusGallerySection } from './components/CampusGallerySection';
import { CollegePartnership } from './components/CollegePartnership';
import { ApplicationForm } from './components/ApplicationForm';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileQuickBar } from './components/MobileQuickBar';
import { AdminPortalModal } from './components/AdminPortalModal';

export default function App() {
  const [selectedRoleForForm, setSelectedRoleForForm] = useState<string>('');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);

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
      {/* 1. Top Bar & Navbar */}
      <Navbar onApplyClick={scrollToApply} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onApplyClick={scrollToApply}
          onExploreJobsClick={scrollToJobs}
        />

        {/* 3. About & Trust Strip */}
        <div id="about">
          <TrustStrip />
        </div>

        {/* 4. Official Accreditation & Government Recognition (ISO 9001:2015 & MSME Udyam) */}
        <CertificationsSection />

        {/* 5. Active Job Openings Section (Featuring Work From Home Tele-Caller) */}
        <FeaturedJobs onSelectRoleForApply={handleSelectRoleForApply} />

        {/* 6. Real Campus Drives & Facility Gallery (4-Column Authentic Photo Grid) */}
        <CampusGallerySection />

        {/* 7. Institutional & Campus Placement Partnership */}
        <CollegePartnership />

        {/* 8. High-Converting Lead Generation Application Form */}
        <ApplicationForm
          selectedRoleFromCard={selectedRoleForForm}
          onClearSelectedRole={handleClearSelectedRole}
        />

        {/* 9. Placed Candidate Testimonials */}
        <TestimonialsSection />

        {/* 10. FAQs Section */}
        <FaqSection />
      </main>

      {/* 11. Footer with Discreet Admin Portal Button */}
      <Footer onOpenAdminPortal={() => setIsAdminModalOpen(true)} />

      {/* 12. Sticky / Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* 13. Mobile Sticky Action Bar */}
      <MobileQuickBar onApplyClick={scrollToApply} />

      {/* 14. Password-Protected Admin Portal & Real-Time Lead Management Modal */}
      <AdminPortalModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />
    </div>
  );
}
