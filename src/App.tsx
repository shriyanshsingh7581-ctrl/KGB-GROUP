/**
 * KGB Group - Knowledge Gurukul (Bhopal)
 * Public Website (/) + Separate Dedicated Admin Portal Route (/admin)
 *
 * @license Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AnnouncementsSection } from './components/AnnouncementsSection';
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

function checkIsAdminRoute(): boolean {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const searchParams = new URLSearchParams(window.location.search);
  return (
    path === '/admin' ||
    path.startsWith('/admin/') ||
    hash === '#admin' ||
    hash === '#/admin' ||
    searchParams.get('portal') === 'admin' ||
    searchParams.get('admin') === '1'
  );
}

export default function App() {
  const [selectedRoleForForm, setSelectedRoleForForm] = useState<string>('');
  const [isAdminRoute, setIsAdminRoute] = useState<boolean>(checkIsAdminRoute);

  useEffect(() => {
    const syncRoute = () => setIsAdminRoute(checkIsAdminRoute());
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  // Dedicated Separate Admin Link (/admin or /#admin)
  if (isAdminRoute) {
    return (
      <div className="min-h-screen bg-slate-950 font-sans">
        <AdminPortalModal
          isOpen={true}
          isStandalonePage={true}
          onClose={() => {
            window.location.href = '/';
          }}
        />
      </div>
    );
  }

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
      {/* 1. Top Bar & Navbar (Public Website - No Admin Links) */}
      <Navbar onApplyClick={scrollToApply} />

      <main className="flex-1">
        {/* 2. Top Prominent Announcements & Posters Section (Dynamic) */}
        <AnnouncementsSection onApplyClick={scrollToApply} />

        {/* 3. Hero Section */}
        <Hero
          onApplyClick={scrollToApply}
          onExploreJobsClick={scrollToJobs}
        />

        {/* 4. About & Trust Strip */}
        <div id="about">
          <TrustStrip />
        </div>

        {/* 5. Official Accreditation & Government Recognition (ISO 9001:2015 & MSME Udyam) */}
        <CertificationsSection />

        {/* 6. Active Job Openings Section (Hybrid Static + Dynamic Firebase Jobs) */}
        <FeaturedJobs onSelectRoleForApply={handleSelectRoleForApply} />

        {/* 7. Real Campus Drives & Facility Gallery (4-Column Authentic Photo Grid) */}
        <CampusGallerySection />

        {/* 8. Institutional & Campus Placement Partnership */}
        <CollegePartnership />

        {/* 9. High-Converting Lead Generation Application Form */}
        <ApplicationForm
          selectedRoleFromCard={selectedRoleForForm}
          onClearSelectedRole={handleClearSelectedRole}
        />

        {/* 10. Placed Candidate Testimonials */}
        <TestimonialsSection />

        {/* 11. FAQs Section */}
        <FaqSection />
      </main>

      {/* 12. Footer (Public Website - No Admin Links) */}
      <Footer />

      {/* 13. Sticky / Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* 14. Mobile Sticky Action Bar */}
      <MobileQuickBar onApplyClick={scrollToApply} />
    </div>
  );
}
