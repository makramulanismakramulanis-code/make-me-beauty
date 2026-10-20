/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * =========================================================================
 * MAKE ME BEAUTY PLACE - CLIENT DEMO SINGLE PAGE APPLICATION
 * =========================================================================
 * Location: 44 Bode Thomas St, Surulere, Lagos 100011, Lagos, Nigeria
 * Plus Code: F9Q3+P3 Lagos
 * Phone: +234 707 109 5500
 * Verified Social Proof: 4.3 Stars from 624 Google Reviews
 * All pricing, stylist names, and specific quotes are marked as sample demo content.
 * =========================================================================
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { QuickActionTiles } from './components/QuickActionTiles';
import { SocialProofBand } from './components/SocialProofBand';
import { ServicesSection } from './components/ServicesSection';
import { BridalSpotlight } from './components/BridalSpotlight';
import { GallerySection } from './components/GallerySection';
import { TransformationSlider } from './components/TransformationSlider';
import { BookingWorkflow } from './components/BookingWorkflow';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { NewsletterOffer } from './components/NewsletterOffer';
import { FaqSection } from './components/FaqSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';
import { ServiceModal } from './components/ServiceModal';
import { BUSINESS_CONFIG, ServiceItem } from './config';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenBookingModal = (serviceName?: string) => {
    if (serviceName) {
      const match = BUSINESS_CONFIG.services.find(
        (s) => s.name.toLowerCase() === serviceName.toLowerCase()
      );
      if (match) {
        setSelectedService(match);
        return;
      }
    }
    // Default to first service or general bridal glam if no match
    setSelectedService(BUSINESS_CONFIG.services[0]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F4] text-[#2A1822] selection:bg-[#C2185B] selection:text-white">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#C2185B] text-white px-4 py-2 rounded-lg font-semibold shadow-xl"
      >
        Skip to main content
      </a>

      {/* A. Top Announcement Bar */}
      <AnnouncementBar />

      {/* B. Sticky Navigation */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      <main id="main-content" className="flex-1">
        {/* C. Hero Section */}
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* D. Marquee Strip */}
        <MarqueeStrip />

        {/* E. Quick Action Tiles */}
        <QuickActionTiles onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* F. Social Proof Band */}
        <SocialProofBand />

        {/* G. Services Section */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* H. Bridal & Special Occasions Spotlight */}
        <BridalSpotlight onOpenBookingModal={handleOpenBookingModal} />

        {/* I. Style & Beauty Gallery */}
        <GallerySection />

        {/* J. Transformation Slider */}
        <TransformationSlider />

        {/* K. How Booking Works */}
        <BookingWorkflow />

        {/* L. About Us */}
        <AboutSection />

        {/* M. Why Choose Us */}
        <WhyChooseUs />

        {/* N. Customer Reviews */}
        <ReviewsSection />

        {/* O. Special Offer / Newsletter Banner */}
        <NewsletterOffer />

        {/* P. FAQ Accordion */}
        <FaqSection />

        {/* Q. Visit Us: Location, Map & Booking Enquiry Form */}
        <LocationContactSection />
      </main>

      {/* R. Footer */}
      <Footer />

      {/* S. Floating Elements (WhatsApp Bubble, Chat Assistant Widget, Mobile Sticky Bottom Bar) */}
      <FloatingElements />

      {/* Service Detail & Booking Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
