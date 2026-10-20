import React, { useState } from 'react';
import { Sparkles, Eye, X, MessageCircle, Instagram, ExternalLink } from 'lucide-react';
import { IMAGES, BUSINESS_CONFIG } from '../config';
import { createWhatsAppBookingLink } from '../utils/businessLogic';

interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'makeup' | 'hair' | 'nails' | 'lashes';
  categoryLabel: string;
  image: string;
  desc: string;
}

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'Traditional Bridal Glam & Gele Styling',
      category: 'makeup',
      categoryLabel: 'Bridal Makeup',
      image: IMAGES.bridalGlam,
      desc: 'Complete ceremonial glam with warm bronze eyeshadow and sculpted lip contour.',
    },
    {
      id: 'g-2',
      title: 'Knotless Goddess Braids with Accents',
      category: 'hair',
      categoryLabel: 'Braids & Hair',
      image: IMAGES.braidsHair,
      desc: 'Clean waist-length knotless braids finished with delicate rose-gold jewelry clips.',
    },
    {
      id: 'g-3',
      title: 'Rose-Gold Chrome Almond Nails',
      category: 'nails',
      categoryLabel: 'Nail Art',
      image: IMAGES.manicureNails,
      desc: 'Mirror-finish chrome manicure on tailored almond extensions.',
    },
    {
      id: 'g-4',
      title: 'Hydra-Glow Facial & Aesthetician Care',
      category: 'makeup',
      categoryLabel: 'Skincare',
      image: IMAGES.facialSpa,
      desc: 'Deep barrier restoration with enzyme exfoliation and relaxing facial massage.',
    },
    {
      id: 'g-5',
      title: 'Fluffy Hybrid Lash Extensions & Brow Lift',
      category: 'lashes',
      categoryLabel: 'Lashes & Brows',
      image: IMAGES.lashesBrows,
      desc: 'Weightless silk lash fans matched with custom brow lamination geometry.',
    },
    {
      id: 'g-6',
      title: 'Custom HD Lace Frontal Wig Styling',
      category: 'hair',
      categoryLabel: 'Wig Install',
      image: IMAGES.wigInstall,
      desc: 'Flawless melted hairline with soft body wave styling and bleached knots.',
    },
  ];

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-20 bg-[#FFF8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#C2185B]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A38F]">
              STYLE & BEAUTY GALLERY
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E0F2B] tracking-tight">
            Glow in Every Frame
          </h2>
          <p className="mt-4 text-base text-[#2A1822]/75 leading-relaxed">
            A showcase of bridal glam, precision braids, custom lace wig installs, and nail artistry.
          </p>
          <p className="text-xs text-[#2A1822]/60 mt-2 italic">
            * Sample demonstration portfolio — client's official parlour lookbook will be integrated.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Looks' },
            { id: 'makeup', label: 'Bridal & Makeup' },
            { id: 'hair', label: 'Braids & Wigs' },
            { id: 'nails', label: 'Nails & Pedicure' },
            { id: 'lashes', label: 'Lashes & Brows' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#C2185B] text-white shadow-md'
                  : 'bg-white text-[#2A1822]/75 hover:bg-[#FBE9EC] border border-[#D9A38F]/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#2A1822] cursor-pointer shadow-sm hover:shadow-xl border border-[#D9A38F]/30 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Scrim Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
                aria-hidden="true"
              />

              {/* Badge & Text */}
              <div className="absolute top-3 left-3 bg-[#3E0F2B]/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#D9A38F]/30">
                {item.categoryLabel}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/75 mt-1 line-clamp-1">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-amber-200 mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to view look</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed Placeholder */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-[#D9A38F]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#C2185B] via-[#E8458B] to-amber-400 flex items-center justify-center text-white shrink-0 shadow-md">
              <Instagram className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#3E0F2B]">
                Follow Our Everyday Glam on Instagram
              </h3>
              <p className="text-sm text-[#2A1822]/70">
                @makemebeautyplace · Daily client transformations, hair tutorials, and Lagos beauty vibes
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3E0F2B] hover:bg-[#5A1A3F] text-white text-xs uppercase tracking-wider font-semibold rounded-full transition-colors whitespace-nowrap shadow-md"
          >
            <span>Visit Instagram</span>
            <ExternalLink className="w-4 h-4 text-[#D9A38F]" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#D9A38F]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] bg-black">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs uppercase tracking-wider text-[#C2185B] font-bold">
                  {activeLightboxItem.categoryLabel}
                </span>
                <span className="text-[11px] text-[#2A1822]/60 italic">
                  Demo Sample Image
                </span>
              </div>

              <h2 className="font-display text-2xl font-bold text-[#3E0F2B] mb-2">
                {activeLightboxItem.title}
              </h2>

              <p className="text-sm text-[#2A1822]/80 leading-relaxed mb-6">
                {activeLightboxItem.desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={createWhatsAppBookingLink(
                    BUSINESS_CONFIG.whatsappNumber,
                    `Style Look: ${activeLightboxItem.title}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 bg-[#C2185B] hover:bg-[#E8458B] text-white font-semibold text-sm rounded-xl text-center shadow-lg shadow-[#C2185B]/30 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Love this look? Book it on WhatsApp</span>
                </a>

                <button
                  onClick={() => setActiveLightboxItem(null)}
                  className="py-3 px-6 border border-[#D9A38F]/50 text-[#2A1822] text-sm font-medium rounded-xl hover:bg-[#FFF8F4] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
