import React from 'react';
import { Star, MessageCircle, Sparkles, Users, MapPin, Crown } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Star,
      title: "Rated 4.3 by 624 Reviewers",
      desc: "Authentic Google reviews from hundreds of real Lagos clients who trust our beauty services.",
      verified: true,
    },
    {
      icon: MessageCircle,
      title: "Easy WhatsApp Booking",
      desc: "Fast responses, personalized photo consultations, and instant appointment reminders.",
      verified: false,
    },
    {
      icon: Sparkles,
      title: "Full-Service Under One Roof",
      desc: "Hair braiding, wig installs, nails, facials, and makeup all handled in one trip.",
      verified: false,
      note: "Confirm with client",
    },
    {
      icon: Users,
      title: "Friendly, Attentive Team",
      desc: "Welcoming reception, skilled stylists, and hygienic, relaxing parlour environment.",
      verified: false,
    },
    {
      icon: MapPin,
      title: "Convenient Surulere Location",
      desc: "Centrally situated on 44 Bode Thomas Street with straightforward access across Lagos.",
      verified: true,
    },
    {
      icon: Crown,
      title: "Special-Occasion & Bridal",
      desc: "Experienced bridal glam artists ready for traditional engagements, white weddings, and galas.",
      verified: false,
    },
  ];

  return (
    <section className="py-20 bg-[#3E0F2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A38F]">
              THE MAKE ME EXPERIENCE
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Why Clients Love Us in Surulere
          </h2>
          <p className="mt-4 text-base text-white/75 leading-relaxed">
            Combining the luxury standard of an upscale studio with the warm hospitality of your favorite neighborhood beauty haven.
          </p>
        </div>

        {/* 6 Rose-Gold Bordered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#5A1A3F]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#D9A38F]/30 hover:border-[#D9A38F] hover:bg-[#5A1A3F]/80 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#3E0F2B] border border-[#D9A38F]/40 flex items-center justify-center text-[#D9A38F] group-hover:text-amber-300 transition-colors mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {item.verified && (
                  <div className="mt-4 pt-3 border-t border-[#D9A38F]/20 flex items-center gap-1.5 text-[11px] text-amber-300">
                    <span>✓ Verified Fact</span>
                  </div>
                )}
                {item.note && (
                  <div className="mt-4 pt-3 border-t border-[#D9A38F]/20 text-[10px] text-white/50 italic">
                    *{item.note}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
