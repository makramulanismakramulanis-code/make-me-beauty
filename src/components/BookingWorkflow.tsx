import React from 'react';
import { MessageSquare, CalendarCheck, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { createWhatsAppBookingLink } from '../utils/businessLogic';

export const BookingWorkflow: React.FC = () => {
  const waLink = createWhatsAppBookingLink(BUSINESS_CONFIG.whatsappNumber);

  const steps = [
    {
      num: "1",
      icon: MessageSquare,
      title: "Message Us on WhatsApp",
      description: "Send us a quick greeting, let us know what look you'd love, or share your inspiration photo.",
    },
    {
      num: "2",
      icon: CalendarCheck,
      title: "Confirm Date & Time",
      description: "Our front desk team confirms your slot, provides prep advice, and locks in your preferred stylist.",
    },
    {
      num: "3",
      icon: Sparkles,
      title: "Come in and Glow",
      description: "Relax at 44 Bode Thomas St, Surulere, enjoy our serene parlour ambience, and step out looking radiant.",
    },
  ];

  return (
    <section className="py-20 bg-[#FFF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#C2185B]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A38F]">
              SIMPLE 3-STEP PROCESS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#3E0F2B] tracking-tight">
            How Booking Works
          </h2>
          <p className="mt-3 text-base text-[#2A1822]/75">
            Booking your beauty appointment in Surulere is hassle-free and takes just minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white p-8 rounded-3xl border border-[#D9A38F]/30 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1.5 flex flex-col items-center text-center group"
              >
                {/* Step number badge */}
                <span className="absolute -top-4 font-display text-xs font-bold px-3 py-1 bg-[#3E0F2B] text-amber-200 rounded-full border border-[#D9A38F]/40 shadow-sm">
                  Step {step.num}
                </span>

                <div className="w-16 h-16 rounded-2xl bg-[#FBE9EC] flex items-center justify-center text-[#C2185B] group-hover:scale-110 transition-transform mb-6 mt-2">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="font-display text-xl font-bold text-[#3E0F2B] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#2A1822]/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Fast Action CTA */}
        <div className="mt-12 text-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-full shadow-lg shadow-emerald-600/20 hover:shadow-xl transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat with Us on WhatsApp Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};
