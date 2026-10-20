import React, { useState, useEffect, useRef } from 'react';
import { Star, ExternalLink, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

export const SocialProofBand: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const bandRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate count-up
          let startRating = 0;
          const targetRating = BUSINESS_CONFIG.googleRating; // 4.3
          const ratingStep = 0.1;
          const ratingInterval = setInterval(() => {
            startRating += ratingStep;
            if (startRating >= targetRating) {
              setRating(targetRating);
              clearInterval(ratingInterval);
            } else {
              setRating(parseFloat(startRating.toFixed(1)));
            }
          }, 35);

          let startReviews = 0;
          const targetReviews = BUSINESS_CONFIG.googleReviewCount; // 624
          const reviewStep = Math.ceil(targetReviews / 40);
          const reviewInterval = setInterval(() => {
            startReviews += reviewStep;
            if (startReviews >= targetReviews) {
              setReviews(targetReviews);
              clearInterval(reviewInterval);
            } else {
              setReviews(startReviews);
            }
          }, 35);
        }
      },
      { threshold: 0.3 }
    );

    if (bandRef.current) {
      observer.observe(bandRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={bandRef} className="py-14 bg-[#FBE9EC] border-y border-[#D9A38F]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Main verified stats count-up */}
          <div className="md:col-span-8 flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
            {/* Stat 1: Rating */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2">
                <span className="font-display text-4xl sm:text-5xl font-bold text-[#C2185B] tabular-nums">
                  {rating.toFixed(1)}
                </span>
                <span className="text-3xl text-amber-500">★</span>
              </div>
              <div className="flex items-center gap-1 text-amber-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest text-[#2A1822]/70 font-semibold mt-1">
                Google Rating (Verified)
              </p>
            </div>

            <div className="hidden sm:block w-px h-20 bg-[#D9A38F]/40" aria-hidden="true" />

            {/* Stat 2: Review Count */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#3E0F2B] tabular-nums">
                {reviews.toLocaleString()}
              </span>
              <p className="text-xs uppercase tracking-widest text-[#2A1822]/70 font-semibold mt-2.5">
                Google Reviews (Verified)
              </p>
              <p className="text-[11px] text-[#2A1822]/60 mt-0.5">
                Surulere, Lagos community feedback
              </p>
            </div>

            <div className="hidden sm:block w-px h-20 bg-[#D9A38F]/40" aria-hidden="true" />

            {/* Stat 3: Location marker */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#5A1A3F]">
                Bode Thomas
              </span>
              <p className="text-xs uppercase tracking-widest text-[#2A1822]/70 font-semibold mt-2.5">
                Surulere Prime Location
              </p>
              <p className="text-[11px] text-[#2A1822]/60 mt-0.5">
                Plus Code: F9Q3+P3 Lagos
              </p>
            </div>
          </div>

          {/* Action button: Read reviews on Google */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <a
              href={BUSINESS_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FFF8F4] text-[#3E0F2B] font-semibold text-sm rounded-full border border-[#D9A38F]/50 shadow-sm hover:shadow-md transition-all group"
            >
              <span>Read Our Reviews on Google</span>
              <ExternalLink className="w-4 h-4 text-[#C2185B] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
