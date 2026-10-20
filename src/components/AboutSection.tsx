import React from 'react';
import { Sparkles, Heart, Shield, Crown } from 'lucide-react';
import { IMAGES } from '../config';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FFF8F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Arch-Shaped Collage with Rose-Gold Offset Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Offset decorative frame */}
            <div
              className="absolute -inset-2 sm:-inset-4 border-2 border-[#D9A38F]/50 rounded-t-[180px] rounded-b-[30px] transform -rotate-2 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative w-full max-w-sm aspect-[4/5] rounded-t-[170px] rounded-b-[24px] overflow-hidden p-2 bg-gradient-to-b from-[#D9A38F] via-[#FBE9EC] to-white shadow-xl z-10">
              <div className="w-full h-full rounded-t-[162px] rounded-b-[18px] overflow-hidden bg-[#2A1822] relative">
                <img
                  src={IMAGES.wigInstall}
                  alt="Stylist creating flawless look at Make Me Beauty Place"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3 -right-2 bg-white text-[#3E0F2B] border border-[#D9A38F]/60 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-500" />
                <div>
                  <p className="text-xs font-bold leading-tight">Loved in Surulere</p>
                  <p className="text-[10px] text-[#2A1822]/70">624+ Google Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy & Pillars */}
          {/* NOTE FOR DEVELOPER / CLIENT: Replace placeholder text below with the client's official brand story and founder bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#C2185B]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A38F]">
                OUR STORY
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E0F2B] tracking-tight leading-tight mb-6 [text-wrap:balance]">
              Beauty That Feels <span className="italic text-[#C2185B]">Like You</span>
            </h2>

            {/* Placeholder paragraphs marked clearly */}
            <div className="space-y-4 text-base text-[#2A1822]/80 leading-relaxed mb-8">
              <p>
                Located along the bustling stretch of Bode Thomas Street, <strong>Make Me Beauty Place</strong> was founded on a simple belief: luxury beauty care should be warm, personalized, and unapologetically celebrating every client's unique radiance.
              </p>
              <p>
                Whether you are stepping in for crisp knotless braids before the workweek, an afternoon of rejuvenating pedicures and skin therapy, or complete wedding party glam, our friendly team welcomes you like family and ensures you leave glowing with absolute confidence.
              </p>
            </div>

            {/* 3 Icon Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-[#D9A38F]/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FBE9EC] flex items-center justify-center text-[#C2185B] shrink-0">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#3E0F2B]">Glam</h3>
                  <p className="text-xs text-[#2A1822]/70 mt-0.5">Trendsetting styles tailored to your individual aura.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FBE9EC] flex items-center justify-center text-[#C2185B] shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#3E0F2B]">Care</h3>
                  <p className="text-xs text-[#2A1822]/70 mt-0.5">Gentle techniques that preserve hair edges and skin health.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FBE9EC] flex items-center justify-center text-[#C2185B] shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#3E0F2B]">Confidence</h3>
                  <p className="text-xs text-[#2A1822]/70 mt-0.5">Stepping out feeling empowered for every occasion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
