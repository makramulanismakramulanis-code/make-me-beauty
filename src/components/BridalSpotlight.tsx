import React from 'react';
import { Sparkles, Heart, Crown, Calendar, CheckCircle } from 'lucide-react';
import { IMAGES, BUSINESS_CONFIG } from '../config';
import { createWhatsAppBookingLink } from '../utils/businessLogic';

interface BridalSpotlightProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const BridalSpotlight: React.FC<BridalSpotlightProps> = ({ onOpenBookingModal }) => {
  const waLink = createWhatsAppBookingLink(
    BUSINESS_CONFIG.whatsappNumber,
    "Bridal & Special Occasion Glam Consultation"
  );

  const workflowSteps = [
    {
      num: "01",
      title: "Bridal Consultation",
      desc: "Discuss your wedding theme, gown, traditional fabric colors (Aso-Ebi / Gele), and skin undertones.",
    },
    {
      num: "02",
      title: "Hair & Makeup Preview Trial",
      desc: "Test your bridal looks in advance so you step into your big day completely confident and relaxed.",
    },
    {
      num: "03",
      title: "The Big Day Glam Experience",
      desc: "On-site or in-studio bridal prep with touch-up support to ensure you stay picture-perfect through every dance.",
    },
  ];

  return (
    <section id="bridal" className="py-20 bg-[#3E0F2B] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div
        className="absolute top-1/2 -left-20 w-80 h-80 bg-[#C2185B]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 right-10 w-96 h-96 bg-[#D9A38F]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bridal Image in Arch with Rose Gold Border */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md aspect-[4/5] rounded-t-[160px] rounded-b-[24px] overflow-hidden p-2 bg-gradient-to-b from-[#D9A38F] via-[#5A1A3F] to-[#3E0F2B] shadow-2xl">
              <div className="w-full h-full rounded-t-[152px] rounded-b-[18px] overflow-hidden bg-[#2A1822] relative">
                <img
                  src={IMAGES.bridalGlam}
                  alt="Traditional Nigerian bride with exquisite gele and bridal makeup"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#3E0F2B]/85 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-5 left-5 right-5 text-center">
                  <span className="text-xs uppercase tracking-widest text-amber-200 font-semibold">
                    Lagos Weddings & Owambe Glam
                  </span>
                  <p className="font-display italic text-lg text-white mt-1">
                    "Picture-perfect memories that last forever."
                  </p>
                </div>
              </div>
            </div>

            {/* Floating pill badge */}
            <div className="absolute -bottom-4 right-2 sm:right-6 bg-[#5A1A3F]/90 backdrop-blur-md border border-[#D9A38F]/40 text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-300" />
              <span className="text-xs font-semibold">Bridal Suite Specialists</span>
            </div>
          </div>

          {/* Right Column: Copy, Bridal Workflow, & Consultation CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A38F]">
                BRIDAL & SPECIAL OCCASIONS
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6 [text-wrap:balance]">
              Ready for Your <span className="italic text-amber-200">Big Day?</span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              From traditional Yoruba, Igbo, and Edo ceremonies to white wedding receptions and red-carpet galas. Our team creates long-wearing, heat-resistant glam that celebrates your unique beauty.
            </p>

            {/* 3-Point Workflow */}
            <div className="space-y-4 mb-8">
              <div className="text-xs uppercase tracking-wider text-[#D9A38F] font-semibold flex items-center gap-2">
                <span>Our Bridal Journey (Sample process to confirm):</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {workflowSteps.map((step) => (
                  <div
                    key={step.num}
                    className="p-4 rounded-2xl bg-[#5A1A3F]/50 border border-[#D9A38F]/20 backdrop-blur-sm hover:border-[#D9A38F]/50 transition-colors"
                  >
                    <span className="font-display text-2xl font-bold text-amber-300 block mb-1">
                      {step.num}
                    </span>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-gradient-to-r from-[#C2185B] to-[#E8458B] hover:from-[#E8458B] hover:to-[#C2185B] text-white font-semibold text-sm rounded-full shadow-lg shadow-[#C2185B]/30 hover:shadow-[#C2185B]/50 transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Request a Bridal Consultation</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBookingModal("Bridal Consultation")}
                className="px-6 py-3.5 border border-[#D9A38F]/50 hover:border-[#D9A38F] hover:bg-white/5 text-white font-medium text-sm rounded-full transition-colors"
              >
                View Bridal Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
