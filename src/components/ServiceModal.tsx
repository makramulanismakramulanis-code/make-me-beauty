import React from 'react';
import { X, Check, Clock, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { ServiceItem, BUSINESS_CONFIG } from '../config';
import { createWhatsAppBookingLink } from '../utils/businessLogic';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const waLink = createWhatsAppBookingLink(BUSINESS_CONFIG.whatsappNumber, service.name);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#D9A38F]/40 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image Banner */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-t-3xl bg-[#2A1822]">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
            aria-hidden="true"
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-[#E8458B] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] uppercase tracking-widest text-amber-300 font-semibold">
              {service.categoryLabel} · Sample Service
            </span>
            <h2 id="modal-service-title" className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              {service.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <p className="text-base text-[#2A1822]/80 leading-relaxed">
            {service.description}
          </p>

          {/* Pricing & Duration Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#FBE9EC] border border-[#D9A38F]/30">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#2A1822]/60 font-semibold">
                Pricing
              </p>
              <p className="font-display text-xl font-bold text-[#C2185B]">
                {service.priceNote}
              </p>
              <p className="text-[11px] text-[#2A1822]/60">
                (Client to confirm official rate card)
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#2A1822]/80">
              <Clock className="w-4 h-4 text-[#C2185B]" />
              <span>Est. {service.sampleDuration}</span>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold text-[#3E0F2B] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#E8458B]" />
              <span>What's Included (Sample details)</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-[#2A1822]/80">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Notice to Client */}
          <div className="flex items-start gap-2 text-xs text-[#2A1822]/70 bg-amber-50 p-3.5 rounded-xl border border-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Demo Note:</strong> Service descriptions and features are sample content. Real pricing, stylist assignments, and packages can be updated in the config block.
            </p>
          </div>

          {/* Direct Booking Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-center rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="py-3.5 px-6 border border-[#D9A38F]/60 text-[#2A1822] hover:bg-[#FFF8F4] font-medium text-center rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
