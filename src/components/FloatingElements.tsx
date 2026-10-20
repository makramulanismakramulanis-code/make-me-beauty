import React, { useState, useMemo, useRef, useEffect } from 'react';
import { MessageCircle, Phone, MapPin, X, Send, Bot, Sparkles, ChevronUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { createWhatsAppBookingLink, getBusinessStatus } from '../utils/businessLogic';

interface Message {
  sender: 'assistant' | 'user';
  text: string;
}

export const FloatingElements: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text: `Hello, gorgeous! Welcome to Make Me Beauty Place demo. How can I help you today? You can tap any quick question below or chat with our team on WhatsApp!`,
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const status = useMemo(() => {
    return getBusinessStatus(new Date(), BUSINESS_CONFIG.schedule);
  }, []);

  const waLink = createWhatsAppBookingLink(BUSINESS_CONFIG.whatsappNumber);

  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatOpen]);

  const quickChips = [
    "What services do you offer?",
    "How do I book?",
    "Where are you located?",
    "Are you open now?",
  ];

  /*
   * SCRIPTED RULE-BASED LOGIC FOR DEMO ASSISTANT
   * Never invents prices, stylist names, or unconfirmed hours.
   * Directs to WhatsApp or phone for confirmation.
   *
   * CODE INTEGRATION NOTE:
   * To power this with Google Gemini 2.5/3 API in production:
   * 1. Send the user message to backend /api/chat
   * 2. Ground prompt with BUSINESS_CONFIG as system instructions
   */
  const handleScriptedReply = (question: string) => {
    const qLower = question.toLowerCase();
    let reply = "";

    if (qLower.includes("service") || qLower.includes("offer")) {
      reply = `We offer a full range of beauty treatments at our Surulere parlour:
• Makeup & Bridal Glam
• Hair Styling & Knotless Braids
• Wigs & Frontal Installations
• Gel Nails, Acrylics & Spa Pedicures
• Lashes & Brow Sculpting
• Deep Cleansing Glow Facials
• Gele & Special-Occasion Styling

(All services are sample items to confirm with our reception team).`;
    } else if (qLower.includes("book") || qLower.includes("appointment")) {
      reply = `You can easily book by messaging us on WhatsApp (+234 707 109 5500) or calling our front desk directly. You can also scroll to the booking enquiry form on this page!`;
    } else if (qLower.includes("where") || qLower.includes("location") || qLower.includes("address")) {
      reply = `We are located at:
44 Bode Thomas St, Surulere, Lagos 100011, Lagos, Nigeria.
Plus Code: F9Q3+P3 Lagos.
Click "Get Directions" on the page to open Google Maps!`;
    } else if (qLower.includes("open") || qLower.includes("hours") || qLower.includes("time")) {
      reply = `Current Status: ${status.statusText} (${status.detailText}).
Standard hours: Monday to Saturday 9:00 AM – 7:00 PM (Sunday closed).
*Please confirm Sunday/holiday hours via WhatsApp or call +234 707 109 5500.`;
    } else if (qLower.includes("price") || qLower.includes("cost") || qLower.includes("how much")) {
      reply = `Prices depend on your specific style, hair length, and customization. Please message our team on WhatsApp for an exact price quote and consultation! We never charge hidden fees.`;
    } else {
      reply = `Thank you for your question! For custom inquiries, availability, and specific pricing, please message our front desk on WhatsApp or call +234 707 109 5500. We'd love to welcome you!`;
    }

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: question },
      { sender: 'assistant', text: reply },
    ]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const userQ = inputVal;
    setInputVal('');
    handleScriptedReply(userQ);
  };

  return (
    <>
      {/* 1. Desktop & Tablet Floating WhatsApp Circular Button (Bottom-Right) */}
      <div className="fixed bottom-24 md:bottom-8 right-6 z-40 flex items-center gap-3">
        {/* Tooltip */}
        <div className="hidden sm:block bg-[#3E0F2B] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-[#D9A38F]/40 animate-pulse">
          Book with us on WhatsApp ✦
        </div>

        {/* WhatsApp Circle Button */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300 active:scale-95 group"
          aria-label="Chat with Make Me Beauty Place on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C2185B] rounded-full border-2 border-white animate-ping" />
        </a>

        {/* Chat Widget Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-12 h-12 rounded-full bg-[#3E0F2B] hover:bg-[#5A1A3F] text-amber-200 border border-[#D9A38F]/40 shadow-xl flex items-center justify-center transition-transform hover:scale-105 cursor-pointer ml-1"
          aria-label="Open Make Me Assistant chat demo"
          title="Demo Assistant"
        >
          {isChatOpen ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
        </button>
      </div>

      {/* 2. Chat Widget Window (Make Me Assistant Demo) */}
      {isChatOpen && (
        <div
          className="fixed bottom-28 md:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[520px] bg-white rounded-3xl shadow-2xl border border-[#D9A38F]/50 flex flex-col overflow-hidden animate-fade-in"
          role="dialog"
          aria-label="Make Me Assistant Chat"
        >
          {/* Chat Header */}
          <div className="bg-[#3E0F2B] text-white p-4 flex items-center justify-between border-b border-[#5A1A3F]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C2185B] to-[#E8458B] flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-amber-200" />
              </div>
              <div>
                <p className="font-display text-sm font-bold leading-tight">Make Me Assistant</p>
                <p className="text-[10px] text-[#D9A38F]">Surulere Salon Demo Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white"
              aria-label="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FFF8F4] text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-line leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#C2185B] text-white rounded-br-xs'
                      : 'bg-white text-[#2A1822] border border-[#D9A38F]/30 shadow-xs rounded-bl-xs'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Chips */}
          <div className="p-2.5 bg-white border-t border-[#FBE9EC] flex gap-1.5 overflow-x-auto select-none no-scrollbar">
            {quickChips.map((chip, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleScriptedReply(chip)}
                className="px-2.5 py-1 text-[11px] bg-[#FBE9EC] text-[#3E0F2B] hover:bg-[#C2185B] hover:text-white rounded-full whitespace-nowrap transition-colors border border-[#D9A38F]/30 shrink-0 cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-[#D9A38F]/20 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 px-3 py-2 bg-[#FFF8F4] border border-[#D9A38F]/40 rounded-full text-xs text-[#2A1822] focus:outline-none focus:ring-1 focus:ring-[#C2185B]"
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-[#C2185B] hover:bg-[#E8458B] text-white flex items-center justify-center shrink-0 cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* 3. Mobile Sticky Bottom Bar (Three Large Buttons: WhatsApp, Call, Directions) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D9A38F]/40 p-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          {/* WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-600 active:bg-emerald-700 text-white rounded-xl shadow-xs"
          >
            <MessageCircle className="w-5 h-5 mb-0.5" />
            <span className="text-[11px] font-bold">WhatsApp</span>
          </a>

          {/* Call */}
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="flex flex-col items-center justify-center py-2 px-1 bg-[#3E0F2B] active:bg-[#5A1A3F] text-white rounded-xl shadow-xs"
          >
            <Phone className="w-5 h-5 mb-0.5 text-[#E8458B]" />
            <span className="text-[11px] font-bold">Call Us</span>
          </a>

          {/* Directions */}
          <a
            href={BUSINESS_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 bg-[#FBE9EC] active:bg-[#F3D5DC] text-[#3E0F2B] border border-[#D9A38F]/50 rounded-xl shadow-xs"
          >
            <MapPin className="w-5 h-5 mb-0.5 text-[#C2185B]" />
            <span className="text-[11px] font-bold">Directions</span>
          </a>
        </div>
      </div>
    </>
  );
};
