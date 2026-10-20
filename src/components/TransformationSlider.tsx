import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { IMAGES } from '../config';

export const TransformationSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section id="transformations" className="py-20 bg-[#FBE9EC] border-y border-[#D9A38F]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#C2185B]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A38F]">
              REAL TRANSFORMATIONS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E0F2B] tracking-tight">
            See the Magic Unfold
          </h2>
          <p className="mt-3 text-base text-[#2A1822]/75 leading-relaxed">
            Drag the slider to reveal the difference expert styling, flawless skin prep, and bridal precision make.
          </p>
          <p className="text-xs text-[#2A1822]/60 mt-1 italic">
            * Sample images in demo — client's genuine parlour transformations can be inserted.
          </p>
        </div>

        {/* Interactive Before / After Comparison */}
        <div className="max-w-3xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize bg-[#2A1822]"
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full Background) */}
            <img
              src={IMAGES.heroPortrait}
              alt="Glamour transformation After view"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Before Image (Clipped Left Layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={IMAGES.facialSpa}
                alt="Natural prep transformation Before view"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white text-[#C2185B] rounded-full shadow-xl flex items-center justify-center border-2 border-[#C2185B] hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full pointer-events-none">
              Before · Skin Prep
            </div>

            <div className="absolute top-4 right-4 bg-[#C2185B]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full pointer-events-none shadow-md">
              After · Signature Glam
            </div>
          </div>

          {/* User instruction helper */}
          <div className="mt-4 text-center">
            <p className="text-xs text-[#2A1822]/65 font-medium flex items-center justify-center gap-1.5">
              <span>Drag horizontal slider left or right to compare</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
