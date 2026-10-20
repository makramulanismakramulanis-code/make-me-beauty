import React from 'react';
import { Star, Sparkles, ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG, IMAGES } from '../config';

interface HeroProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="relative bg-[#3E0F2B] text-white overflow-hidden pt-8 pb-20 lg:py-24 border-b border-[#5A1A3F]">
      {/* Background ambient glow effects */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#C2185B]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 left-10 w-80 h-80 bg-[#D9A38F]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle floating sparkle vectors (pure SVG, transform/opacity only) */}
      <div className="absolute top-12 left-10 text-amber-300/40 animate-sparkle pointer-events-none" aria-hidden="true">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-20 right-12 text-rose-300/30 animate-sparkle pointer-events-none [animation-delay:2s]" aria-hidden="true">
        <Sparkles className="w-8 h-8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy, Actions & Trust Proof */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#D9A38F]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A38F]">
                SURULERE, LAGOS · BEAUTY PARLOUR
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 [text-wrap:balance]">
              Your Beauty. Your Moment. Made{' '}
              <span className="italic font-normal text-amber-200">
                Perfect.
              </span>
            </h1>

            {/* Sub-text */}
            <p className="text-lg sm:text-xl text-white/80 max-w-xl font-normal leading-relaxed mb-8">
              Makeup, hair, nails, lashes and skin therapy, crafted by a friendly, talented team in the vibrant heart of Surulere.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onOpenBookingModal()}
                className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#C2185B] via-[#E8458B] to-[#C2185B] hover:shadow-[#C2185B]/50 hover:shadow-xl rounded-full transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="px-8 py-4 text-base font-semibold text-white/90 hover:text-white border border-[#D9A38F]/50 hover:border-[#D9A38F] hover:bg-white/5 rounded-full transition-all"
              >
                See Our Work
              </a>
            </div>

            {/* Trust Strip */}
            <div className="pt-6 border-t border-[#5A1A3F]/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-white/80">
              <div className="flex items-center gap-2 bg-[#5A1A3F]/50 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#D9A38F]/20">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white tabular-nums">4.3</span>
                <span className="text-white/60">·</span>
                <span className="text-white/90 tabular-nums">624 Google Reviews</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Surulere Favourite</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Booking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Arch-Shaped Collage with Floating Glass Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient background aura */}
            <div
              className="absolute -inset-4 bg-gradient-to-b from-[#C2185B]/30 to-[#D9A38F]/20 rounded-[40px] blur-xl"
              aria-hidden="true"
            />

            {/* Main Arch Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] p-2 bg-gradient-to-b from-[#D9A38F]/40 via-[#5A1A3F]/40 to-[#3E0F2B] rounded-t-[180px] rounded-b-[32px] shadow-2xl">
              <div className="relative w-full h-full rounded-t-[172px] rounded-b-[26px] overflow-hidden border border-[#D9A38F]/30 bg-[#2A1822]">
                <img
                  src={IMAGES.heroPortrait}
                  alt="Radiant Nigerian woman showcasing luxury bridal glam and styled hair at Make Me Beauty Place"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Bottom subtle gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#3E0F2B]/90 via-[#3E0F2B]/20 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="font-display italic text-amber-200 text-lg">
                    "Every woman deserves to glow."
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-[#D9A38F]/90 mt-0.5">
                    Surulere Studio Experience
                  </p>
                </div>
              </div>

              {/* Floating Glass Badge 1: Top Right */}
              <div className="absolute -top-3 -right-3 sm:-right-6 bg-[#3E0F2B]/90 backdrop-blur-md border border-[#D9A38F]/40 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 transform hover:scale-105 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8458B]" />
                <div>
                  <p className="text-xs font-semibold leading-tight">Bridal Glam</p>
                  <p className="text-[10px] text-[#D9A38F]">Flawless & Long-lasting</p>
                </div>
              </div>

              {/* Floating Glass Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-[#3E0F2B]/90 backdrop-blur-md border border-[#D9A38F]/40 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 transform hover:scale-105 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div>
                  <p className="text-xs font-semibold leading-tight">Hair & Nails</p>
                  <p className="text-[10px] text-[#D9A38F]">Braids · Wigs · Pedicures</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="mt-14 flex flex-col items-center justify-center text-center">
          <a
            href="#quick-actions"
            className="group flex flex-col items-center text-xs text-[#D9A38F] hover:text-white transition-colors"
            aria-label="Scroll to discover features"
          >
            <span className="uppercase tracking-widest text-[10px] mb-1">Discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#E8458B]" />
          </a>
        </div>
      </div>
    </section>
  );
};
