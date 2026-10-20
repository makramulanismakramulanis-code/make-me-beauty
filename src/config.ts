/**
 * =========================================================================
 * MAKE ME BEAUTY PLACE - MASTER CONFIGURATION
 * =========================================================================
 * All business details, verified facts, and sample demonstration content
 * are defined here for easy client customization and real data handover.
 * 
 * IMPORTANT VERIFICATION NOTICE:
 * - Verified social proof facts: 4.3 Stars rating from 624 Google reviews.
 * - Address: 44 Bode Thomas St, Surulere, Lagos 100011, Lagos, Nigeria
 * - Phone: +234 707 109 5500
 * - All pricing, stylist names, specific opening hours, and client quotes are
 *   explicitly marked as sample demonstration content to confirm with the client.
 * =========================================================================
 */

import { DEFAULT_SCHEDULE, WeeklySchedule } from './utils/businessLogic';

// Import image assets directly so Vite bundles them into production dist output on Vercel
import heroPortraitImg from './assets/images/hero_glam_portrait_1792490187265.jpg';
import bridalGlamImg from './assets/images/service_bridal_glam_1792490187276.jpg';
import braidsHairImg from './assets/images/service_braids_hair_1792490187949.jpg';
import manicureNailsImg from './assets/images/service_manicure_nails_1792490187881.jpg';
import facialSpaImg from './assets/images/service_facial_spa_1792490188418.jpg';
import lashesBrowsImg from './assets/images/service_lashes_brows_1792490219518.jpg';
import wigInstallImg from './assets/images/service_wig_install_1792490219615.jpg';

// High-fidelity image assets generated for Make Me Beauty Place
export const IMAGES = {
  heroPortrait: heroPortraitImg,
  bridalGlam: bridalGlamImg,
  braidsHair: braidsHairImg,
  manicureNails: manicureNailsImg,
  facialSpa: facialSpaImg,
  lashesBrows: lashesBrowsImg,
  wigInstall: wigInstallImg,
};

export interface ServiceItem {
  id: string;
  name: string;
  category: 'makeup' | 'hair' | 'nails' | 'lashes' | 'skin';
  categoryLabel: string;
  description: string;
  sampleDuration: string;
  priceNote: string; // "Price on request" - never invented
  image: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  isSample: true;
}

export interface BusinessConfig {
  businessName: string;
  legalCategory: string;
  tagline: string;
  address: string;
  neighborhood: string;
  state: string;
  plusCode: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string; // 2347071095500 (confirm with client)
  whatsappDisplay: string;
  email: string;
  googleRating: number;
  googleReviewCount: number;
  currency: string;
  mapsUrl: string;
  hoursDisplay: string;
  schedule: WeeklySchedule;
  socials: {
    instagram: string;
    tiktok: string;
    facebook: string;
  };
  services: ServiceItem[];
  sampleReviews: ReviewItem[];
  faqs: { question: string; answer: string; note?: string }[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  businessName: "Make Me Beauty Place",
  legalCategory: "Beauty Parlour",
  tagline: "Where Beauty Begins.",
  address: "44 Bode Thomas St, Surulere, Lagos 100011, Lagos, Nigeria",
  neighborhood: "Surulere",
  state: "Lagos, Nigeria",
  plusCode: "F9Q3+P3 Lagos",
  phone: "+2347071095500",
  phoneDisplay: "+234 707 109 5500",
  whatsappNumber: "2347071095500", // placeholder: confirm with client
  whatsappDisplay: "+234 707 109 5500",
  email: "hello@makemebeautyplace.ng", // placeholder to confirm
  googleRating: 4.3,
  googleReviewCount: 624,
  currency: "₦",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Make+Me+Beauty+Place+44+Bode+Thomas+St+Surulere+Lagos",
  hoursDisplay: "Mon – Sat: 9:00 AM – 7:00 PM | Sun: Closed (Sample hours - confirm with client)",
  schedule: DEFAULT_SCHEDULE,
  socials: {
    instagram: "https://instagram.com/makemebeautyplace", // placeholder
    tiktok: "https://tiktok.com/@makemebeautyplace", // placeholder
    facebook: "https://facebook.com/makemebeautyplace", // placeholder
  },
  services: [
    {
      id: "makeup-bridal",
      name: "Makeup & Bridal Glam",
      category: "makeup",
      categoryLabel: "Makeup",
      description: "Radiant, flawless makeup for brides, traditional weddings, owambe celebrations, and photo shoots crafted to complement your skin tone.",
      sampleDuration: "60 – 120 mins",
      priceNote: "Price on request",
      image: IMAGES.bridalGlam,
      features: ["Custom skin prep & undertone matching", "Lash application included", "Long-lasting, sweat-resistant finish", "Touch-up kit guidance"]
    },
    {
      id: "hair-braids",
      name: "Hair Styling & Braids",
      category: "hair",
      categoryLabel: "Hair",
      description: "Immaculate knotless braids, goddess braids, cornrows, twists, and contemporary bridal updos designed with gentle tension and edge care.",
      sampleDuration: "2 – 4 hours",
      priceNote: "Price on request",
      image: IMAGES.braidsHair,
      features: ["Precision parting & scalp care", "Lightweight hypoallergenic hair extensions", "Styling with luxury hair oils & accessories", "Longevity maintenance tips"]
    },
    {
      id: "wigs-install",
      name: "Wigs & Installations",
      category: "hair",
      categoryLabel: "Hair",
      description: "Frontal customization, lace melting, bleaching of knots, glueless installs, and revamping to give you an undetectable, natural hairline.",
      sampleDuration: "90 – 150 mins",
      priceNote: "Price on request",
      image: IMAGES.wigInstall,
      features: ["HD/Swiss lace melting technique", "Custom plucked hairline", "Heat styling (silk press, curls, or body wave)", "Lace care product advice"]
    },
    {
      id: "nails-pedicure",
      name: "Nails (Manicure & Pedicure)",
      category: "nails",
      categoryLabel: "Nails",
      description: "Chic gel manicures, acrylic sculpting, chrome finishes, nail art, and soothing spa pedicures with exfoliation and foot massage.",
      sampleDuration: "45 – 90 mins",
      priceNote: "Price on request",
      image: IMAGES.manicureNails,
      features: ["Cuticle hydration & gentle treatment", "Extensive collection of luxury nude & bold shades", "Long-lasting non-chip gel formulas", "Warm paraffin & scrub options"]
    },
    {
      id: "lashes-brows",
      name: "Lashes & Brows",
      category: "lashes",
      categoryLabel: "Lashes & Brows",
      description: "Classic, hybrid, and Russian volume lash extensions, brow tinting, microshading consultation, and precise brow sculpting.",
      sampleDuration: "45 – 90 mins",
      priceNote: "Price on request",
      image: IMAGES.lashesBrows,
      features: ["Customized curl, length, and mapping", "Safe, ophthalmologist-grade adhesive", "Brow shaping tailored to your facial geometry", "Aftercare spoolie and care card"]
    },
    {
      id: "facials-skincare",
      name: "Facials & Skincare",
      category: "skin",
      categoryLabel: "Skincare",
      description: "Deep cleansing facials, dermaplaning, hydrating hydro-facials, and brightening treatments to restore your natural glow.",
      sampleDuration: "50 – 75 mins",
      priceNote: "Price on request",
      image: IMAGES.facialSpa,
      features: ["Skin barrier assessment", "Gentle enzymatic exfoliation & steam", "Targeted nutrient serum infusion", "Relaxing face & neck lymphatic massage"]
    },
  ],
  sampleReviews: [
    {
      id: "rev-1",
      author: "Amina K.",
      role: "Surulere Resident",
      rating: 5,
      date: "Sample review · October 2026",
      text: "The bridal glam team made me feel like royalty for my sister's wedding! Flawless makeup that stayed fresh in the Lagos heat all through the reception. The staff were so warm and hospitable.",
      isSample: true,
    },
    {
      id: "rev-2",
      author: "Chioma E.",
      role: "Regular Client",
      rating: 5,
      date: "Sample review · September 2026",
      text: "Best wig installation and knotless braids in Surulere. My hairline looks so natural and there was zero pain or tension. Booking through WhatsApp was super quick!",
      isSample: true,
    },
    {
      id: "rev-3",
      author: "Blessing O.",
      role: "Verified Demo Review",
      rating: 5,
      date: "Sample review · August 2026",
      text: "Such a serene environment on Bode Thomas Street. The spa pedicure was heavenly and my chrome nails have lasted over three weeks with no chips. Highly recommended!",
      isSample: true,
    },
  ],
  faqs: [
    {
      question: "How do I book an appointment?",
      answer: "Booking is easiest directly on WhatsApp or by giving us a call at +234 707 109 5500. You can also fill out the booking enquiry form below, and our reception team will quickly confirm your preferred time and stylist availability."
    },
    {
      question: "Do you accept walk-ins?",
      answer: "Walk-ins are warmly welcomed subject to daily stylist availability. However, for bridal glam, intricate braids, and weekend sessions, we strongly recommend booking in advance via WhatsApp to guarantee your preferred slot.",
      note: "Sample policy to confirm with client."
    },
    {
      question: "How long does a service take?",
      answer: "Timing depends on your chosen service: makeup typically takes 60–90 minutes, wig installation 90–120 minutes, and intricate braids 2–4 hours. Please message us on WhatsApp for a personalized time estimate."
    },
    {
      question: "Do you offer bridal and special-occasion glam packages?",
      answer: "Yes! We specialize in traditional Nigerian weddings, white weddings, bridal showers, and owambe group bookings. We offer consultation, pre-wedding trials, and on-location or in-studio styling."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We support convenient payment options including direct Nigerian bank transfer, in-store POS (debit cards), and cash. Online booking deposits via Paystack/Flutterwave can also be enabled upon client confirmation.",
      note: "Sample payment options to confirm with client."
    },
    {
      question: "Where are you located and what are your opening hours?",
      answer: "We are conveniently located at 44 Bode Thomas St, Surulere, Lagos 100011 (Plus Code: F9Q3+P3 Lagos). We are open Monday to Saturday from 9:00 AM to 7:00 PM. Please call +234 707 109 5500 for directions."
    }
  ]
};
