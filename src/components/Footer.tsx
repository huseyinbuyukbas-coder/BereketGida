import React from 'react';
import { ShoppingBag, Phone, MapPin, Clock, Truck, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 lg:pb-16 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-md">
                <ShoppingBag className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  Bereket <span className="text-emerald-400">Gıda</span>
                </span>
                <p className="text-xs text-stone-400 font-medium">Şarküteri • Market</p>
              </div>
            </div>

            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              Mahallenizin güvenilir marketi. Yenibosna Merkez'de kaliteli, taze ürünler ve hızlı paket servis ile komşularımızın hizmetindeyiz.
            </p>

            <div className="flex items-center gap-3 text-xs text-stone-400 pt-1">
              <span className="inline-flex items-center gap-1 text-amber-400 font-bold">
                ★ 5.0 Google Puanı (21 Yorum)
              </span>
              <span>•</span>
              <span className="text-emerald-400 font-medium">★ 4.6 Yandex Puanı</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#hero" className="hover:text-amber-300 transition-colors">Ana Sayfa</a>
              </li>
              <li>
                <a href="#neden-biz" className="hover:text-amber-300 transition-colors">Neden Bereket Gıda?</a>
              </li>
              <li>
                <a href="#kategoriler" className="hover:text-amber-300 transition-colors">Ürünler</a>
              </li>
              <li>
                <a href="#paket-servis" className="hover:text-amber-300 transition-colors">Paket Servis</a>
              </li>
              <li>
                <a href="#yorumlar" className="hover:text-amber-300 transition-colors">Müşteri Yorumları</a>
              </li>
              <li>
                <a href="#esnaflik" className="hover:text-amber-300 transition-colors">Esnaflık & Güven</a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-amber-300 transition-colors">Galeri</a>
              </li>
              <li>
                <a href="#konum" className="hover:text-amber-300 transition-colors">İletişim & Konum</a>
              </li>
            </ul>
          </div>

          {/* Business Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">İşletme Bilgileri</h4>
            <div className="space-y-3 text-sm text-stone-400">
              
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white font-bold hover:text-amber-300 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Açık: Her gün gece <strong>01:30'a kadar</strong></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Paket Servis: <strong>10:00 – 22:00</strong></span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Bereket Gıda (Şarküteri-Market). Tüm hakları saklıdır.
          </p>
          <p className="flex items-center gap-1 text-stone-400">
            <span>Yenibosna, Bahçelievler / İstanbul</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
