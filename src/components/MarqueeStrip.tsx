import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const marqueeItems = [
    "Makeup & Bridal Glam",
    "Knotless Braids",
    "Wig Customization & Installs",
    "Gel & Acrylic Nails",
    "Lash Extensions",
    "Glow Facials",
    "Gele & Owambe Styling",
    "Pedicure Spa",
  ];

  return (
    <div className="relative bg-[#D9A38F] text-[#3E0F2B] py-3.5 overflow-hidden border-y border-[#C48C77] select-none font-medium">
      <div className="flex animate-marquee whitespace-nowrap text-sm sm:text-base font-semibold tracking-wider uppercase">
        <div className="flex items-center gap-6 shrink-0">
          {marqueeItems.concat(marqueeItems).map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              <span className="text-[#C2185B] text-lg" aria-hidden="true">✦</span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-6 shrink-0" aria-hidden="true">
          {marqueeItems.concat(marqueeItems).map((item, index) => (
            <React.Fragment key={`repeat-${index}`}>
              <span>{item}</span>
              <span className="text-[#C2185B] text-lg" aria-hidden="true">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
