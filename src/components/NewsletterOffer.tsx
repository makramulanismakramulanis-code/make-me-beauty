import React, { useState } from 'react';
import { Mail, Sparkles, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { createWhatsAppBookingLink } from '../utils/businessLogic';

export const NewsletterOffer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubscribed(true);
  };

  const waVipLink = createWhatsAppBookingLink(
    BUSINESS_CONFIG.whatsappNumber,
    "VIP Beauty Club Opt-in"
  );

  return (
    <section className="py-16 bg-[#FFF8F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#C2185B] via-[#5A1A3F] to-[#3E0F2B] text-white p-8 sm:p-12 shadow-2xl border border-[#D9A38F]/40">
          {/* Subtle background glitter effect */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Glow Club · Sample Offer</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 [text-wrap:balance]">
              Get Lagos Beauty Tips & Exclusive Special Offers
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
              Join our VIP broadcast list for seasonal discounts, bridal prep check-lists, and first access to weekend appointment slots. (Offer text is sample content to be confirmed with client).
            </p>

            {/* Email form or Success message */}
            {isSubscribed ? (
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center animate-fade-in">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                <h3 className="font-display text-lg font-bold text-white">
                  Welcome to the Make Me Glow Club!
                </h3>
                <p className="text-xs text-white/80 mt-1">
                  We'll keep you updated with genuine Lagos beauty inspiration and specials.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-white/50 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    aria-label="Email address for beauty tips"
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/15 border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 backdrop-blur-sm"
                  />
                  {error && (
                    <p className="text-left text-xs text-rose-300 mt-1.5 pl-4">
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="px-6 py-3.5 bg-white text-[#3E0F2B] hover:bg-amber-100 font-semibold text-sm rounded-full shadow-md transition-all whitespace-nowrap"
                >
                  Join via Email
                </button>
              </form>
            )}

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-white/70">
              <span>Or join our priority broadcast on WhatsApp:</span>
              <a
                href={waVipLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 font-semibold underline underline-offset-4"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Opt-in on WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-white/50 mt-4">
              We respect your privacy. No spam. You may unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
