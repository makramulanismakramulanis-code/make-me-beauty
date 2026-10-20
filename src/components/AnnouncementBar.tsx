import React, { useMemo } from 'react';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { getBusinessStatus, createWhatsAppBookingLink } from '../utils/businessLogic';

export const AnnouncementBar: React.FC = () => {
  const status = useMemo(() => {
    return getBusinessStatus(new Date(), BUSINESS_CONFIG.schedule);
  }, []);

  const waLink = useMemo(() => {
    return createWhatsAppBookingLink(BUSINESS_CONFIG.whatsappNumber);
  }, []);

  return (
    <aside aria-label="Business Announcements" className="bg-[#3E0F2B] text-[#D9A38F] text-xs py-2 px-4 border-b border-[#5A1A3F] transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
        {/* Status Indicator & Location */}
        <div className="flex items-center gap-4 mx-auto sm:mx-0 flex-wrap justify-center">
          <div className="flex items-center gap-1.5 font-medium text-white">
            <span
              className={`w-2 h-2 rounded-full ${
                status.isOpen ? 'bg-emerald-400' : 'bg-rose-400'
              }`}
              aria-hidden="true"
            />
            <span>{status.statusText}</span>
            <span className="text-[#D9A38F] font-normal hidden md:inline">
              ({status.detailText})
            </span>
          </div>

          <span className="text-[#5A1A3F] hidden sm:inline" aria-hidden="true">|</span>

          <a
            href={BUSINESS_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#E8458B]" />
            <span>Surulere, Lagos</span>
          </a>
        </div>

        {/* Quick Contact Links */}
        <div className="flex items-center gap-4 mx-auto sm:mx-0 flex-wrap justify-center">
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#E8458B]" />
            <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
          </a>

          <span className="text-[#5A1A3F] hidden sm:inline" aria-hidden="true">|</span>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium text-white hover:text-[#E8458B] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Book Easily on WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
