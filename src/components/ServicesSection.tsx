import React, { useState } from 'react';
import { Sparkles, ArrowRight, Clock, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, ServiceItem } from '../config';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'makeup', label: 'Makeup & Bridal' },
    { id: 'hair', label: 'Hair & Wigs' },
    { id: 'nails', label: 'Nails & Pedicure' },
    { id: 'lashes', label: 'Lashes & Brows' },
    { id: 'skin', label: 'Facials & Skin' },
  ];

  const filteredServices = activeCategory === 'all'
    ? BUSINESS_CONFIG.services
    : BUSINESS_CONFIG.services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-[#FFF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#C2185B]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A38F]">
              OUR SIGNATURE SERVICES
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E0F2B] tracking-tight [text-wrap:balance]">
            Crafted for Your Glow, Everyday & Big Moments
          </h2>
          <p className="mt-4 text-base text-[#2A1822]/75 leading-relaxed">
            From precision knotless braids and frontal installations to luxury bridal glam and spa treatments. Mark services to confirm with client.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist" aria-label="Service categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#3E0F2B] text-white shadow-md shadow-[#3E0F2B]/20 scale-105'
                  : 'bg-white text-[#2A1822]/80 hover:bg-[#FBE9EC] border border-[#D9A38F]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border-t-4 border-t-[#C2185B] border-x border-b border-[#D9A38F]/30 shadow-sm hover:shadow-xl hover:border-t-[#E8458B] transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-60 w-full overflow-hidden bg-[#2A1822]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  aria-hidden="true"
                />

                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-[#3E0F2B]/90 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-[#D9A38F]/40">
                  {service.categoryLabel}
                </div>

                {/* Price indicator badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-[#C2185B] text-xs font-bold px-3 py-1.5 rounded-xl shadow-md border border-[#D9A38F]/30">
                  {service.priceNote}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#3E0F2B] group-hover:text-[#C2185B] transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#2A1822]/75 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#FBE9EC] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#2A1822]/60">
                    <Clock className="w-3.5 h-3.5 text-[#C2185B]" />
                    <span>Est. {service.sampleDuration}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2185B] hover:text-[#E8458B] group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>Book This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
