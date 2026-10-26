/**
 * KGB Group (Knowledge Gurukul)
 * Educational & Admission Consultancy + Placement Platform
 * Public Website (/) + Separate Dedicated Admin Portal Route (/admin)
 *
 * @license Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AnnouncementsSection } from './components/AnnouncementsSection';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { ApplicationForm } from './components/ApplicationForm';
import { CampusGallerySection } from './components/CampusGallerySection';
import { CertificationsSection } from './components/CertificationsSection';
import { FeaturedJobs } from './components/FeaturedJobs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactMapSection } from './components/ContactMapSection';
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

  const scrollToBookingEngine = () => {
    const bookingEl = document.getElementById('book-consultation');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToColleges = () => {
    const collegesEl = document.getElementById('colleges') || document.getElementById('services');
    if (collegesEl) {
      collegesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWithPrefilledCourse = (courseOrService?: string) => {
    if (courseOrService) {
      setSelectedRoleForForm(courseOrService);
    }
    scrollToBookingEngine();
  };

  const handleClearSelectedRole = () => {
    setSelectedRoleForForm('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans pb-14 sm:pb-0">
      {/* 1. Sticky Header & Navigation */}
      <Navbar onBookConsultationClick={handleBookWithPrefilledCourse} />

      <main className="flex-1">
        {/* 2. Dynamic Announcements & Notices Banner (Synced with Admin 'posters/') */}
        <AnnouncementsSection onApplyClick={() => handleBookWithPrefilledCourse()} />

        {/* 3. Visual & Lucrative Hero Section */}
        <Hero
          onBookSlotClick={handleBookWithPrefilledCourse}
          onExploreCollegesClick={scrollToColleges}
        />

        {/* 4. About Us & 10+ Years Excellence Strip */}
        <div id="about">
          <TrustStrip />
        </div>

        {/* 5. Key Services (Card Layout) & Explore Top Colleges */}
        <ServicesSection onSelectServiceForBooking={handleBookWithPrefilledCourse} />

        {/* 6. Complete Interactive Booking & Consultation Engine */}
        <ApplicationForm
          selectedRoleFromCard={selectedRoleForForm}
          onClearSelectedRole={handleClearSelectedRole}
        />

        {/* 7. Image Gallery & Real Proof Section ("Our Seminars, College Drives & Student Achievements") */}
        <CampusGallerySection />

        {/* 8. Student & Parent Success Stories */}
        <TestimonialsSection />

        {/* 9. Official ISO 9001:2015 & MSME Udyam Certifications */}
        <CertificationsSection />

        {/* 10. Placement Cell & Active Job Openings (Synced with Admin 'jobs/') */}
        <FeaturedJobs onSelectRoleForApply={handleBookWithPrefilledCourse} />

        {/* 11. Frequently Asked Questions */}
        <FaqSection />

        {/* 12. Location, Contact Us & Integrated Google Map (Zone-2, MP Nagar, Bhopal) */}
        <ContactMapSection onBookSlotClick={() => handleBookWithPrefilledCourse()} />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 15. Mobile Sticky "Call Now" & "Book via WhatsApp" Action Bar */}
      <MobileQuickBar onApplyClick={() => handleBookWithPrefilledCourse()} />
    </div>
  );
}
