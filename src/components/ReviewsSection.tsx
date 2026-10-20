import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = BUSINESS_CONFIG.sampleReviews;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-[#FFF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verified Stats */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBE9EC] border border-[#D9A38F]/40 mb-3">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#3E0F2B]">
              4.3 ★ on Google | 624 Reviews (Verified)
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E0F2B] tracking-tight">
            Client Words & Smiles
          </h2>

          <p className="mt-3 text-base text-[#2A1822]/75 leading-relaxed">
            Surulere residents and brides share their experiences at Make Me Beauty Place.
          </p>

          {/* Explicit disclaimer notice */}
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#2A1822]/65 bg-amber-50/80 px-3 py-1 rounded-lg border border-amber-200/60">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Sample demo reviews below illustrate layout. Replace with real Google review permissions.</span>
          </div>
        </div>

        {/* Reviews Cards Grid / Slider */}
        {/* CODE COMMENT: Replace sample reviews below with real reviews, with permission, from the client's Google listing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={rev.id}
              className={`p-8 rounded-3xl bg-white border border-[#D9A38F]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                index === currentIndex ? 'ring-2 ring-[#C2185B]' : ''
              }`}
            >
              <div>
                {/* Header with sample review tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                    Sample Review
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#D9A38F]/30 mb-2" />

                <p className="text-sm text-[#2A1822]/80 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#FBE9EC] flex items-center justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-[#3E0F2B]">
                    {rev.author}
                  </h3>
                  <p className="text-xs text-[#2A1822]/60">
                    {rev.role}
                  </p>
                </div>
                <span className="text-[11px] text-[#2A1822]/50">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link to Google Reviews */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FBE9EC] text-[#3E0F2B] font-semibold text-sm rounded-full border border-[#D9A38F]/50 shadow-sm hover:shadow-md transition-all group"
          >
            <span>See Real Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-[#C2185B] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
