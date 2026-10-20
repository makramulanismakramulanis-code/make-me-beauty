import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { createWhatsAppBookingLink } from '../utils/businessLogic';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const waLink = createWhatsAppBookingLink(BUSINESS_CONFIG.whatsappNumber);

  return (
    <section id="faq" className="py-20 bg-[#FFF8F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-[#C2185B]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A38F]">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E0F2B] tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-3 text-base text-[#2A1822]/75">
            Quick answers about visiting our Surulere parlour, booking slots, and service times.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {BUSINESS_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#D9A38F]/30 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2185B]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-[#3E0F2B] hover:text-[#C2185B] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FBE9EC] flex items-center justify-center text-[#C2185B] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C2185B] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#2A1822]/80 leading-relaxed border-t border-[#FBE9EC] animate-fade-in">
                    <p>{faq.answer}</p>
                    {faq.note && (
                      <p className="text-xs text-[#2A1822]/60 mt-2 italic">
                        *{faq.note}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Banner below FAQs */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FBE9EC] border border-[#D9A38F]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-display text-base font-bold text-[#3E0F2B]">
              Have a special hair or bridal request?
            </h3>
            <p className="text-xs text-[#2A1822]/70 mt-0.5">
              Please message us on WhatsApp or call {BUSINESS_CONFIG.phoneDisplay} to confirm any custom needs.
            </p>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C2185B] hover:bg-[#E8458B] text-white text-xs font-semibold rounded-full shadow-md transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
