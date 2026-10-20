import React, { useState, useMemo } from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Send, CheckCircle2, AlertCircle, CreditCard, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { validateNigerianPhone, getBusinessStatus, createWhatsAppBookingLink } from '../utils/businessLogic';

export const LocationContactSection: React.FC = () => {
  // Live business status
  const status = useMemo(() => {
    return getBusinessStatus(new Date(), BUSINESS_CONFIG.schedule);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Makeup & Bridal Glam',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';

    const phoneValidation = validateNigerianPhone(formData.phone);
    if (!phoneValidation.isValid) {
      errs.phone = phoneValidation.error || 'Enter a valid Nigerian phone number.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select your preferred date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleSendWhatsApp = () => {
    if (!formData.name.trim()) {
      setErrors((prev) => ({ ...prev, name: 'Please provide your name first.' }));
      return;
    }
    const link = createWhatsAppBookingLink(
      BUSINESS_CONFIG.whatsappNumber,
      formData.service,
      formData.name,
      formData.preferredDate
    );
    window.open(link, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#FBE9EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A38F] block mb-2">
            FIND US IN SURULERE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E0F2B] tracking-tight">
            Visit Make Me Beauty Place
          </h2>
          <p className="mt-3 text-base text-[#2A1822]/75">
            Conveniently situated along Bode Thomas Street with friendly, attentive reception.
          </p>
        </div>

        {/* Split Layout: Contact Info Card + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Left Column: Glass Info Card */}
          <div className="lg:col-span-5 bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-[#D9A38F]/40 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FBE9EC] flex items-center justify-center text-[#C2185B] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#3E0F2B]">Our Parlour Address</h3>
                  <p className="text-sm text-[#2A1822]/80 mt-1 leading-relaxed">
                    {BUSINESS_CONFIG.address}
                  </p>
                  <p className="text-xs font-semibold text-[#C2185B] mt-1">
                    Plus Code: {BUSINESS_CONFIG.plusCode}
                  </p>
                </div>
              </div>

              {/* Phone & Call Link */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FBE9EC] flex items-center justify-center text-[#C2185B] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#3E0F2B]">Direct Phone Line</h3>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phone}`}
                    className="text-base font-bold text-[#C2185B] hover:text-[#E8458B] transition-colors block mt-1"
                  >
                    {BUSINESS_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#2A1822]/60 mt-0.5">Click to call reception directly</p>
                </div>
              </div>

              {/* Hours & Live Badge */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FBE9EC] flex items-center justify-center text-[#C2185B] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-bold text-[#3E0F2B]">Opening Hours</h3>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        status.isOpen
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {status.statusText}
                    </span>
                  </div>
                  <p className="text-sm text-[#2A1822]/80 mt-1">
                    Mon – Sat: 9:00 AM – 7:00 PM
                  </p>
                  <p className="text-xs text-[#2A1822]/60">Sunday: Closed</p>
                  <p className="text-[10px] text-[#2A1822]/50 italic mt-0.5">
                    *{BUSINESS_CONFIG.hoursDisplay}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions: Directions + WhatsApp */}
            <div className="pt-6 mt-6 border-t border-[#D9A38F]/30 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#3E0F2B] hover:bg-[#5A1A3F] text-white text-xs uppercase tracking-wider font-semibold rounded-xl text-center flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <ExternalLink className="w-4 h-4 text-[#D9A38F]" />
                <span>Get Directions</span>
              </a>

              <a
                href={createWhatsAppBookingLink(BUSINESS_CONFIG.whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-wider font-semibold rounded-xl text-center flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border border-[#D9A38F]/40 bg-white relative min-h-[350px]">
            <iframe
              title="Make Me Beauty Place Location Map"
              src="https://maps.google.com/maps?q=44+Bode+Thomas+St,+Surulere,+Lagos+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay card */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#D9A38F]/30 text-xs">
              <p className="font-bold text-[#3E0F2B] text-sm">Make Me Beauty Place</p>
              <p className="text-[#2A1822]/80 mt-0.5">44 Bode Thomas St, Surulere, Lagos</p>
              <a
                href={BUSINESS_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C2185B] font-semibold hover:underline inline-flex items-center gap-1 mt-1.5"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Booking Enquiry Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#D9A38F]/40">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#3E0F2B]">
              Book Your Appointment Enquiry
            </h3>
            <p className="text-sm text-[#2A1822]/70 mt-1">
              Fill in your details below and our Surulere salon team will confirm immediately.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-[#FBE9EC] p-8 rounded-2xl border border-[#C2185B]/30 text-center animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-[#C2185B] mx-auto mb-3" />
              <h4 className="font-display text-2xl font-bold text-[#3E0F2B]">
                Thank you, gorgeous!
              </h4>
              <p className="text-base text-[#2A1822]/80 mt-2">
                We'll confirm your booking shortly for <strong>{formData.service}</strong> on <strong>{formData.preferredDate}</strong>.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-semibold text-[#3E0F2B] border border-[#D9A38F] rounded-full hover:bg-white"
                >
                  Send Another Enquiry
                </button>
                <a
                  href={createWhatsAppBookingLink(
                    BUSINESS_CONFIG.whatsappNumber,
                    formData.service,
                    formData.name,
                    formData.preferredDate
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Speed up via WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E0F2B] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Amina Bello"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2A1822] focus:outline-none focus:ring-2 focus:ring-[#C2185B] bg-[#FFF8F4] ${
                      errors.name ? 'border-rose-500' : 'border-[#D9A38F]/50'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone Number with Nigerian validation */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E0F2B] mb-1.5">
                    Nigerian Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0707 109 5500 or +234..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2A1822] focus:outline-none focus:ring-2 focus:ring-[#C2185B] bg-[#FFF8F4] ${
                      errors.phone ? 'border-rose-500' : 'border-[#D9A38F]/50'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E0F2B] mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#D9A38F]/50 text-sm text-[#2A1822] focus:outline-none focus:ring-2 focus:ring-[#C2185B] bg-[#FFF8F4]"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E0F2B] mb-1.5">
                    Service I'm Interested In *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D9A38F]/50 text-sm text-[#2A1822] focus:outline-none focus:ring-2 focus:ring-[#C2185B] bg-[#FFF8F4]"
                  >
                    {BUSINESS_CONFIG.services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Bridal Consultation">Bridal Consultation Package</option>
                    <option value="Other Custom Glam">Other Custom Glam Request</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E0F2B] mb-1.5">
                  Preferred Appointment Date *
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2A1822] focus:outline-none focus:ring-2 focus:ring-[#C2185B] bg-[#FFF8F4] ${
                    errors.preferredDate ? 'border-rose-500' : 'border-[#D9A38F]/50'
                  }`}
                />
                {errors.preferredDate && (
                  <p className="text-xs text-rose-500 mt-1">{errors.preferredDate}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E0F2B] mb-1.5">
                  Special Notes or Style Request (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any special preferences (e.g. hair length, bridal theme, skin sensitivity)..."
                  className="w-full px-4 py-3 rounded-xl border border-[#D9A38F]/50 text-sm text-[#2A1822] focus:outline-none focus:ring-2 focus:ring-[#C2185B] bg-[#FFF8F4]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 py-4 px-8 bg-gradient-to-r from-[#C2185B] to-[#E8458B] hover:from-[#E8458B] hover:to-[#C2185B] text-white font-semibold text-sm rounded-full shadow-lg shadow-[#C2185B]/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Booking</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 py-4 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}

          {/* Optional Future Payments / Deposits Note */}
          {/*
            CODE INTEGRATION NOTE FOR PAYSTACK / FLUTTERWAVE:
            To collect booking deposits online in Nigeria, integrate Paystack Popup JS:
            <script src="https://js.paystack.co/v1/inline.js"></script>
            or Flutterwave Checkout inline. For now, in-store POS, cash, and bank transfers are standard.
          */}
          <div className="mt-8 pt-6 border-t border-[#FBE9EC] flex flex-wrap items-center justify-between gap-4 text-xs text-[#2A1822]/60">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[#C2185B]" />
              <span>Payment Options: In-store POS, Direct Bank Transfer, Cash</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Future add-on: Paystack / Flutterwave Online Booking Deposits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
