import React, { useState } from 'react';
import { MapPin, Phone, Clock, Truck, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Google Maps embed search query encoded
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Taşova Sk. No:10, Yenibosna Merkez, Bahçelievler, İstanbul'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="konum" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5 text-emerald-800" />
            Adres & Ulaşım
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Bize Ulaşın
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Yenibosna Merkez'de kolay ulaşılabilir konumumuzla hizmetinizdeyiz. İster dükkanımıza uğrayın, ister siparişinizi kapınıza getirelim.
          </p>
        </div>

        {/* 2-Column Layout: Info Cards & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Detailed Info & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              {/* Address Card */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-base">Adresimiz</h3>
                    <p className="text-sm text-stone-700 mt-1 leading-relaxed font-medium">
                      {BUSINESS_INFO.address.full}
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Yenibosna Merkez Mahallesi, Taşova Sokak No:10 (Bahçelievler)
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={copyAddressToClipboard}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Adres Kopyalandı!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Adresi Kopyala</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 fill-amber-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-base">Telefon</h3>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base font-extrabold text-emerald-800 hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold shadow-xs transition-colors"
                >
                  Ara
                </a>
              </div>

              {/* Working Hours Card */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm">Çalışma Saatleri</h3>
                      <p className="text-sm font-semibold text-emerald-800">
                        Her gün açık — 01:30'a kadar
                      </p>
                    </div>
                    
                    <div className="pt-2 border-t border-stone-200 flex items-center gap-2 text-xs">
                      <Truck className="w-4 h-4 text-amber-600 shrink-0" />
                      <div>
                        <span className="font-bold text-stone-800">Paket Servis: </span>
                        <span className="text-stone-600">10:00 – 22:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Big Directions Button */}
            <div className="pt-2">
              <a
                id="location-directions-cta"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-base shadow-lg shadow-emerald-950/20 transition-all transform hover:-translate-y-0.5"
              >
                <Navigation className="w-5 h-5 text-amber-300" />
                <span>📍 Yol Tarifi Al (Google Haritalar)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[440px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden border border-stone-300 shadow-md bg-stone-100">
              <iframe
                title="Bereket Gıda Konumu"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Floating Quick Action over Map */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-stone-200 rounded-xl p-3 shadow-md max-w-xs text-xs">
                <p className="font-extrabold text-stone-900">Bereket Gıda (Şarküteri-Market)</p>
                <p className="text-stone-600 mt-0.5">Taşova Sk. No:10, Yenibosna</p>
                <div className="mt-2 flex items-center gap-2">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1"
                  >
                    <span>Haritada Aç</span>
                    <ExternalLink className="w-3 h-3" />
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
