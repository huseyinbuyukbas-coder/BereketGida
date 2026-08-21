import React from 'react';
import { Phone, MessageCircle, Truck, Star, Clock, CheckCircle2, ShoppingCart, ArrowDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getStoreStatus } from '../utils/timeUtils';

interface HeroProps {
  onOpenQuickOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuickOrder }) => {
  const status = getStoreStatus();

  return (
    <section id="hero" className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Subtle organic pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <path d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Local Trust Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/70 border border-emerald-600/40 text-emerald-100 text-xs sm:text-sm shadow-sm backdrop-blur-sm">
              <span className="flex items-center gap-1 text-amber-300 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                5.0 Google Puanı (21 Yorum)
              </span>
              <span className="text-emerald-400">•</span>
              <span className="text-emerald-200">Yenibosna Merkez</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Mahallenizin <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-amber-300">
                Güvenilir Marketi
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-stone-200/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Kaliteli ve taze ürünler, uygun fiyatlar ve hızlı paket servis. Aradığınız birçok ürünü kolayca bulabileceğiniz <strong className="text-white font-semibold">Bereket Gıda</strong>, Yenibosna'da hizmetinizde.
            </p>

            {/* Highlights micro list */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-emerald-100/90 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Her gün 01:30'a kadar açık</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>10:00 – 22:00 Paket Servis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Güler yüzlü mahalle esnafı</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
              <a
                id="hero-call-cta"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-base shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <div className="w-8 h-8 rounded-lg bg-stone-950/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 fill-stone-950 text-stone-950" />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider font-extrabold text-stone-900">Doğrudan Ara</span>
                  <span className="text-base font-extrabold">{BUSINESS_INFO.phone}</span>
                </div>
              </a>

              <a
                id="hero-delivery-cta"
                href="#paket-servis"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-900/40 hover:shadow-emerald-600/30 border border-emerald-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Truck className="w-5 h-5 text-amber-300" />
                <span>🛵 Paket Servis Bilgisi</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuickOrder}
                className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-200 font-semibold text-sm border border-stone-600/60 transition-colors cursor-pointer"
                title="WhatsApp Sipariş Listesi Yaz"
              >
                <ShoppingCart className="w-4 h-4 text-emerald-400" />
                <span>Sipariş Notu Yaz</span>
              </button>
            </div>

            {/* Delivery Alert status badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs text-stone-300 bg-stone-900/60 px-3.5 py-2 rounded-lg border border-stone-800">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {status.isDeliveryActive
                    ? '🛵 Paket servisimiz şu an aktiftir (10:00 – 22:00).'
                    : '🛵 Paket servis saatleri: Her gün 10:00 – 22:00 arasıdır.'}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: High visual appeal market showcase card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative aura glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-stone-900/90 border border-emerald-800/60 p-3 sm:p-4 shadow-2xl backdrop-blur-md overflow-hidden">
                
                {/* Image showcase */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-stone-800">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                    alt="Bereket Gıda Şarküteri ve Market Reyonları"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/30"></div>
                  
                  {/* Floating badge inside image */}
                  <div className="absolute top-3 left-3 bg-emerald-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-200 text-xs px-2.5 py-1 rounded-full font-semibold flex items-center gap-1.5 shadow">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Şarküteri & Market
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">Yenibosna Mahalle Marketi</p>
                    <p className="text-sm sm:text-base font-bold text-white leading-tight">Taze Peynir, Şarküteri & Günlük Gıda</p>
                  </div>
                </div>

                {/* Quick Interactive Mini-Features */}
                <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                  <div className="bg-emerald-950/70 border border-emerald-800/50 rounded-xl p-3 text-left">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      5.0 Puan
                    </div>
                    <p className="text-xs text-stone-300 font-medium">21 Gerçek Google Yorumu</p>
                  </div>

                  <div className="bg-emerald-950/70 border border-emerald-800/50 rounded-xl p-3 text-left">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      01:30'a Kadar
                    </div>
                    <p className="text-xs text-stone-300 font-medium">Her Gün Geceye Kadar Açık</p>
                  </div>
                </div>

                {/* Fast Action Row */}
                <div className="mt-3 pt-3 border-t border-emerald-900/60 flex items-center justify-between text-xs">
                  <span className="text-stone-300 flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-emerald-400" />
                    Kapınıza hızlı teslimat
                  </span>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp'tan Yaz →
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
