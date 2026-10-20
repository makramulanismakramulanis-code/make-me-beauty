import React from 'react';
import { MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { createWhatsAppBookingLink } from '../utils/businessLogic';

interface QuickActionTilesProps {
  onOpenBookingModal: () => void;
}

export const QuickActionTiles: React.FC<QuickActionTilesProps> = ({ onOpenBookingModal }) => {
  const waLink = createWhatsAppBookingLink(BUSINESS_CONFIG.whatsappNumber);

  const actions = [
    {
      title: "Book on WhatsApp",
      subtitle: "Instant response & scheduling",
      icon: MessageCircle,
      href: waLink,
      isExternal: true,
      accent: "text-emerald-500",
      bgHover: "hover:border-emerald-400/50",
    },
    {
      title: "Call Our Reception",
      subtitle: BUSINESS_CONFIG.phoneDisplay,
      icon: Phone,
      href: `tel:${BUSINESS_CONFIG.phone}`,
      isExternal: false,
      accent: "text-[#C2185B]",
      bgHover: "hover:border-[#C2185B]/50",
    },
    {
      title: "Get Directions",
      subtitle: "44 Bode Thomas, Surulere",
      icon: MapPin,
      href: BUSINESS_CONFIG.mapsUrl,
      isExternal: true,
      accent: "text-[#E8458B]",
      bgHover: "hover:border-[#E8458B]/50",
    },
    {
      title: "Explore Services",
      subtitle: "Hair, Nails, Glam & Skincare",
      icon: Sparkles,
      href: "#services",
      isExternal: false,
      accent: "text-amber-500",
      bgHover: "hover:border-amber-400/50",
    },
  ];

  return (
    <section id="quick-actions" className="py-12 bg-[#FFF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {actions.map((act) => {
            const Icon = act.icon;
            return (
              <a
                key={act.title}
                href={act.href}
                target={act.isExternal ? "_blank" : undefined}
                rel={act.isExternal ? "noopener noreferrer" : undefined}
                className={`bg-white p-6 rounded-2xl border border-[#D9A38F]/30 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1.5 flex items-start gap-4 group ${act.bgHover}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#FBE9EC] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${act.accent}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-base text-[#2A1822] group-hover:text-[#C2185B] transition-colors truncate">
                    {act.title}
                  </h3>
                  <p className="text-xs text-[#2A1822]/65 mt-1 truncate">
                    {act.subtitle}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
