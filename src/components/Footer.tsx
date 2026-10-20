import React from 'react';
import { Sparkles, ArrowUp, Phone, MapPin, Mail, Instagram } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3E0F2B] text-white border-t border-[#5A1A3F] pt-16 pb-28 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#5A1A3F]">
          {/* Brand & Tagline */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C2185B] to-[#E8458B] flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-amber-200" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Make Me
              </span>
            </div>
            <p className="font-display italic text-[#D9A38F] text-base mb-4">
              "{BUSINESS_CONFIG.tagline}"
            </p>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm mb-6">
              Premier beauty parlour in Surulere, Lagos. Dedicated to celebrating your confidence with expert bridal makeup, hair styling, wigs, nails, and relaxing skincare.
            </p>

            {/* Social Icons (Rose gold with hover glow) */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5A1A3F] border border-[#D9A38F]/40 flex items-center justify-center text-[#D9A38F] hover:text-white hover:border-[#E8458B] hover:shadow-[0_0_12px_#E8458B] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* TikTok placeholder */}
              <a
                href={BUSINESS_CONFIG.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5A1A3F] border border-[#D9A38F]/40 flex items-center justify-center text-[#D9A38F] hover:text-white hover:border-[#E8458B] hover:shadow-[0_0_12px_#E8458B] transition-all font-bold text-xs"
                aria-label="TikTok"
              >
                TK
              </a>

              {/* Facebook placeholder */}
              <a
                href={BUSINESS_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5A1A3F] border border-[#D9A38F]/40 flex items-center justify-center text-[#D9A38F] hover:text-white hover:border-[#E8458B] hover:shadow-[0_0_12px_#E8458B] transition-all font-bold text-xs"
                aria-label="Facebook"
              >
                FB
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#D9A38F] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <a href="#services" className="hover:text-amber-200 transition-colors">
                  Signature Services
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-amber-200 transition-colors">
                  Bridal & Owambe
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-200 transition-colors">
                  Style Gallery
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-amber-200 transition-colors">
                  Transformations
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-200 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-200 transition-colors">
                  Frequently Asked
                </a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#D9A38F] mb-4">
              Parlour Treatments
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              <li>Bridal & Engagement Glam</li>
              <li>Knotless Braids & Cornrows</li>
              <li>Frontal & Closure Wig Installs</li>
              <li>Spa Manicures & Pedicures</li>
              <li>Lash Extensions & Brow Tinting</li>
              <li>Deep Cleansing Glow Facials</li>
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#D9A38F] mb-4">
              Visit Us in Lagos
            </h3>
            <div className="space-y-3 text-sm text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8458B] shrink-0 mt-0.5" />
                <span>44 Bode Thomas St, Surulere, Lagos 100011</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E8458B] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-white">
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="pt-2 text-xs text-white/60">
                <p className="font-semibold text-[#D9A38F]">Opening Hours:</p>
                <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 text-center sm:text-left">
          <p>
            © 2026 Make Me Beauty Place. All rights reserved. Client Demo Website.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => alert("Privacy Policy placeholder: Client privacy policy can be linked here.")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => alert("Terms of Service placeholder: Salon service terms and cancellation policies can be linked here.")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#5A1A3F] border border-[#D9A38F]/40 flex items-center justify-center text-white hover:bg-[#C2185B] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
