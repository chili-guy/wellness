/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AlternatingSections } from './components/AlternatingSections';
import { QuoteBanner } from './components/QuoteBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AboutModal } from './components/AboutModal';
import { ApproachModal } from './components/ApproachModal';
import { ServicesModal } from './components/ServicesModal';
import { BlogModal } from './components/BlogModal';
import { ReviewModal } from './components/ReviewModal';
import { QuizModal } from './components/QuizModal';
import { InstagramPreviewModal } from './components/InstagramPreviewModal';
import { LegalModal } from './components/LegalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TESTIMONIALS, INSTAGRAM_POSTS } from './data/mockData';
import { TestimonialItem, InstagramPost } from './types';

export default function App() {
  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [initialBookingService, setInitialBookingService] = useState('free-alignment');
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isApproachOpen, setIsApproachOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedInstagramPost, setSelectedInstagramPost] = useState<InstagramPost | null>(null);
  const [legalModalType, setLegalModalType] = useState<'disclaimer' | 'terms' | 'privacy' | null>(null);

  // Dynamic testimonials state (allows users to submit real reviews)
  const [testimonialsList, setTestimonialsList] = useState<TestimonialItem[]>(TESTIMONIALS);

  const handleOpenBooking = (serviceId: string = 'free-alignment') => {
    setInitialBookingService(serviceId);
    setIsBookingOpen(true);
  };

  const handleAddReview = (newReview: TestimonialItem) => {
    setTestimonialsList([newReview, ...testimonialsList]);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c332d] flex flex-col font-sans selection:bg-[#cde4d3] selection:text-[#182a1d]">
      {/* Navigation Header */}
      <Header
        onOpenBooking={() => handleOpenBooking('free-alignment')}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenServices={() => setIsServicesOpen(true)}
        onOpenBlog={() => setIsBlogOpen(true)}
        onOpenApproach={() => setIsApproachOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking('free-alignment')}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* 3 Alternating Circular Sections matching the reference */}
        <AlternatingSections
          onOpenApproach={() => setIsApproachOpen(true)}
          onOpenServices={() => setIsServicesOpen(true)}
        />

        {/* Wide Pastel Sage Quote Banner */}
        <QuoteBanner />

        {/* 3-Column Testimonials Section */}
        <TestimonialsSection
          testimonials={testimonialsList}
          onOpenReviewModal={() => setIsReviewOpen(true)}
        />

        {/* 5-Card Aesthetic Instagram Feed */}
        <InstagramSection
          posts={INSTAGRAM_POSTS}
          onSelectPost={(post) => setSelectedInstagramPost(post)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenServices={() => setIsServicesOpen(true)}
        onOpenBlog={() => setIsBlogOpen(true)}
        onOpenBooking={() => handleOpenBooking('free-alignment')}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenDisclaimer={() => setLegalModalType('disclaimer')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenPrivacy={() => setLegalModalType('privacy')}
      />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Modals & Drawers */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={initialBookingService}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenBooking={() => handleOpenBooking('free-alignment')}
      />

      <ApproachModal
        isOpen={isApproachOpen}
        onClose={() => setIsApproachOpen(false)}
        onOpenBooking={() => handleOpenBooking('free-alignment')}
      />

      <ServicesModal
        isOpen={isServicesOpen}
        onClose={() => setIsServicesOpen(false)}
        onSelectServiceToBook={(serviceId) => handleOpenBooking(serviceId)}
      />

      <BlogModal
        isOpen={isBlogOpen}
        onClose={() => setIsBlogOpen(false)}
        onOpenBooking={() => handleOpenBooking('free-alignment')}
      />

      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        onSubmitReview={handleAddReview}
      />

      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onOpenBooking={() => handleOpenBooking('free-alignment')}
      />

      <InstagramPreviewModal
        post={selectedInstagramPost}
        onClose={() => setSelectedInstagramPost(null)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

