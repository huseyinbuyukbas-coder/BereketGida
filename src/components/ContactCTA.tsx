import React from 'react';
import { Phone, MessageCircle, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-stone-900 text-white relative overflow-hidden border-b border-stone-800">
      
      {/* Subtle green ambient light */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-stone-900 to-emerald-950/80 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-3xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-600/40 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            01:30'a Kadar Açığız • 10:00 - 22:00 Paket Servis
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            İhtiyacınız Olan Bir Şey Mi Var?
          </h2>

          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Aradığınız ürünü bulmak veya paket servis hakkında bilgi almak için hemen bize ulaşın.
          </p>

          {/* 3 Prominent Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <a
              id="cta-bottom-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-base shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 fill-stone-950" />
              <span>📞 {BUSINESS_INFO.phone}</span>
            </a>

            <a
              id="cta-bottom-whatsapp"
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl shadow-emerald-950/40 border border-emerald-400/30 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              <span>💬 WhatsApp</span>
            </a>

            <a
              id="cta-bottom-map"
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-base border border-stone-600 shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <Navigation className="w-5 h-5 text-amber-300" />
              <span>📍 Yol Tarifi</span>
            </a>

          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Google 5.0 ★ Puan
            </span>
            <span>•</span>
            <span>Yenibosna Merkez, Taşova Sk. No:10</span>
            <span>•</span>
            <span>Hızlı & Güler Yüzlü Hizmet</span>
          </div>

        </div>

      </div>
    </section>
  );
};
