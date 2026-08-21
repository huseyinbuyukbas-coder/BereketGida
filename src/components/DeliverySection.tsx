import React, { useState } from 'react';
import { Truck, Phone, MessageCircle, Clock, CheckCircle2, ShoppingBag, Send, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getStoreStatus } from '../utils/timeUtils';

export const DeliverySection: React.FC = () => {
  const status = getStoreStatus();
  const [orderListText, setOrderListText] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNote, setCustomerNote] = useState('');

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    let message = 'Merhaba Bereket Gıda, paket servis için sipariş vermek istiyorum.\n\n';
    
    if (orderListText.trim()) {
      message += `🛒 *Sipariş Listem:*\n${orderListText.trim()}\n\n`;
    }
    if (customerAddress.trim()) {
      message += `📍 *Adres:* ${customerAddress.trim()}\n\n`;
    }
    if (customerNote.trim()) {
      message += `📝 *Not:* ${customerNote.trim()}\n`;
    }

    if (!orderListText.trim() && !customerAddress.trim()) {
      message = BUSINESS_INFO.whatsappDefaultMsg;
    }

    const url = `https://wa.me/905444099273?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="paket-servis" className="py-16 sm:py-20 bg-gradient-to-b from-stone-900 via-emerald-950 to-stone-900 text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Explanatory info and Main CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-100 text-xs sm:text-sm font-semibold">
              <Truck className="w-4 h-4 text-amber-300" />
              Yenibosna & Çevresi Paket Servis
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Market İhtiyacınız <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-amber-300">
                Kapınıza Gelsin
              </span>
            </h2>

            <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl">
              Sabah 10:00 ile akşam 22:00 arasında paket servisimiz mevcuttur. İhtiyacınız olan ürünleri telefon veya WhatsApp üzerinden bize ulaştırarak sipariş verebilirsiniz.
            </p>

            {/* Service steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-stone-800/80 border border-emerald-900/60 rounded-xl p-4">
                <span className="text-xs font-bold text-amber-400 block mb-1">1. Adım</span>
                <p className="text-sm font-semibold text-white">İhtiyaçlarınızı Belirleyin</p>
                <p className="text-xs text-stone-300 mt-1">Ekmek, süt, peynir, deterjan veya istediğiniz ürünler.</p>
              </div>

              <div className="bg-stone-800/80 border border-emerald-900/60 rounded-xl p-4">
                <span className="text-xs font-bold text-amber-400 block mb-1">2. Adım</span>
                <p className="text-sm font-semibold text-white">Telefon veya WhatsApp</p>
                <p className="text-xs text-stone-300 mt-1">Bizi arayın ya da WhatsApp mesajı ile listenizi atın.</p>
              </div>

              <div className="bg-stone-800/80 border border-emerald-900/60 rounded-xl p-4">
                <span className="text-xs font-bold text-amber-400 block mb-1">3. Adım</span>
                <p className="text-sm font-semibold text-white">Hızlıca Kapınızda</p>
                <p className="text-xs text-stone-300 mt-1">Siparişiniz hazırlanıp en kısa sürede adresinize ulaştırılır.</p>
              </div>
            </div>

            {/* Hours Callout */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-900/40 border border-emerald-700/40 text-xs sm:text-sm">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-white">Paket Servis Saatleri: </span>
                <span className="text-emerald-200">10:00 – 22:00 (Her gün)</span>
                <span className="block text-stone-400 text-xs">Marketimiz gece 01:30'a kadar açıktır.</span>
              </div>
            </div>

            {/* Two Primary CTAs requested */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                id="delivery-call-cta"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-base shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 fill-stone-950" />
                <span>🛵 Paket Servis İçin Ara</span>
              </a>

              <a
                id="delivery-whatsapp-cta"
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl shadow-emerald-900/50 border border-emerald-400/30 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp'tan Ulaş</span>
              </a>
            </div>

          </div>

          {/* Right: Interactive WhatsApp Quick Shopping List Generator */}
          <div className="lg:col-span-5">
            <div className="bg-stone-900/95 border border-emerald-800/80 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-md">
              
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Hızlı Sipariş Listesi</h3>
                    <p className="text-xs text-stone-400">Yazıp WhatsApp ile tek tıkla gönderin</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-amber-300 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20">
                  10:00 - 22:00
                </span>
              </div>

              <form onSubmit={handleSendWhatsAppOrder} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    İstediğiniz Ürünler:
                  </label>
                  <textarea
                    rows={3}
                    value={orderListText}
                    onChange={(e) => setOrderListText(e.target.value)}
                    placeholder="Örn: 2 ekmek, 1 lt süt, beyaz peynir, maden suyu..."
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Adresiniz (Yenibosna / Bahçelievler):
                  </label>
                  <input
                    type="text"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Örn: Taşova Sk. No: ... Daire: ..."
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Sipariş Notu (Opsiyonel):
                  </label>
                  <input
                    type="text"
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    placeholder="Örn: Kapıda nakit / kart veya zil çalmayın..."
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-whatsapp-order"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>WhatsApp ile Siparişi Gönder</span>
                </button>

                <p className="text-[11px] text-stone-400 text-center leading-tight">
                  Butona bastığınızda WhatsApp uygulamanız açılır ve listeniz mesaj olarak hazır gelir.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
