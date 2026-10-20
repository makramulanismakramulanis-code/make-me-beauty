import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

interface NavbarProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Visit Us', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-[#3E0F2B] border-b border-[#5A1A3F] ${
          isScrolled
            ? 'shadow-lg border-b border-[#D9A38F]/30 py-3'
            : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar 3-Zone Contract */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-white group whitespace-nowrap shrink-0"
              aria-label="Make Me Beauty Place Home"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#C2185B] to-[#E8458B] flex items-center justify-center text-white shadow-md shadow-[#C2185B]/30 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-amber-200" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors leading-none">
                  Make Me
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9A38F] font-semibold mt-0.5">
                  BEAUTY PLACE
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-white/90">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8458B] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Mobile Hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenBookingModal()}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#C2185B] to-[#E8458B] hover:from-[#E8458B] hover:to-[#C2185B] rounded-full shadow-lg shadow-[#C2185B]/30 hover:shadow-[#C2185B]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                Book Appointment
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-[#E8458B] rounded-lg"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#3E0F2B] text-white overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-[#5A1A3F]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-200" />
              <span className="font-display text-xl font-bold">Make Me Beauty Place</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-[#E8458B] rounded-lg"
              aria-label="Close navigation menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium py-3 border-b border-[#5A1A3F]/50 text-white/90 hover:text-amber-200 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-6 flex flex-col gap-3 mt-auto">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-4 text-center font-semibold text-white bg-gradient-to-r from-[#C2185B] to-[#E8458B] rounded-xl shadow-lg shadow-[#C2185B]/40"
              >
                Book Appointment
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="w-full py-3 text-center text-sm font-medium border border-[#D9A38F]/40 text-[#D9A38F] hover:bg-white/5 rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#E8458B]" />
                Call {BUSINESS_CONFIG.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
