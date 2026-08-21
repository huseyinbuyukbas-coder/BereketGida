import React from 'react';
import { ShoppingBasket, BadgePercent, Sparkles, Bike } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'feature-variety',
      icon: ShoppingBasket,
      title: 'Geniş Ürün Çeşidi',
      desc: 'Aradığınız birçok ürünü tek noktada bulabilirsiniz. Şarküteriden temel gıdaya, içecekten temizliğe zengin reyonlar.',
      accent: 'emerald',
    },
    {
      id: 'feature-price',
      icon: BadgePercent,
      title: 'Uygun Fiyat',
      desc: 'Çevre marketlere göre uygun fiyat avantajı. Kaliteli ürünleri bütçenizi yormayan fiyatlarla sunuyoruz.',
      accent: 'amber',
    },
    {
      id: 'feature-freshness',
      icon: Sparkles,
      title: 'Kaliteli ve Taze Ürünler',
      desc: 'Ürün kalitesi ve tazeliğine önem veriyoruz. Her gün özenle seçilen şarküteri, süt ve kahvaltılık ürünleri.',
      accent: 'emerald',
    },
    {
      id: 'feature-delivery',
      icon: Bike,
      title: 'Hızlı Paket Servis',
      desc: '10:00 – 22:00 arasında hızlı paket servis. Bir telefon veya WhatsApp mesajıyla siparişleriniz kapınızda.',
      accent: 'emerald',
    },
  ];

  return (
    <section id="neden-biz" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold tracking-wide uppercase">
            Bereket Gıda Farkı
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Neden Bereket Gıda?
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Mahallenizde ihtiyaç duyduğunuz ürünlere kolayca ulaşabileceğiniz, güler yüzlü hizmeti ve hızlı servisiyle fark yaratan bir market.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-13 h-13 rounded-xl flex items-center justify-center mb-5 ${
                    item.accent === 'amber'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                  <span>Güvenilir Mahalle Hizmeti</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
