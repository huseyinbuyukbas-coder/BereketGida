import React from 'react';
import { Home, Phone, MessageCircle, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const MobileBottomNav: React.FC = () => {
  return (
    <div
      id="mobile-bottom-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-md border-t border-emerald-800/80 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] pb-safe"
    >
      <div className="grid grid-cols-4 h-16 max-w-lg mx-auto">
        
        {/* 1. Ana Sayfa */}
        <a
          href="#hero"
          className="flex flex-col items-center justify-center text-stone-300 hover:text-white transition-colors active:scale-95 touch-manipulation"
        >
          <Home className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-semibold tracking-tight">Ana Sayfa</span>
        </a>

        {/* 2. Telefonla Ara */}
        <a
          id="mobile-nav-call"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center text-amber-400 hover:text-amber-300 transition-colors active:scale-95 touch-manipulation"
        >
          <div className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center -mt-2 shadow-md">
            <Phone className="w-4 h-4 fill-stone-950" />
          </div>
          <span className="text-[10px] font-extrabold text-amber-400 tracking-tight mt-0.5">Ara</span>
        </a>

        {/* 3. WhatsApp */}
        <a
          id="mobile-nav-whatsapp"
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-emerald-400 hover:text-emerald-300 transition-colors active:scale-95 touch-manipulation"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center -mt-2 shadow-md">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold text-emerald-400 tracking-tight mt-0.5">WhatsApp</span>
        </a>

        {/* 4. Yol Tarifi */}
        <a
          id="mobile-nav-directions"
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-stone-300 hover:text-white transition-colors active:scale-95 touch-manipulation"
        >
          <Navigation className="w-5 h-5 mb-1 text-emerald-400" />
          <span className="text-[10px] font-semibold tracking-tight">Yol Tarifi</span>
        </a>

      </div>
    </div>
  );
};
