import React from 'react';
import { HeartHandshake, Smile, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      icon: Smile,
      title: 'Güler Yüz & Saygı',
      desc: 'Her müşterimizi komşumuz gibi karşılıyor, güler yüzlü esnaf geleneğini yaşatıyoruz.',
    },
    {
      icon: ShieldCheck,
      title: 'Güvenilir & Temiz',
      desc: 'Reyonlarımızın hijyenine ve ürünlerimizin son kullanma tarihlerine titizlikle dikkat ediyoruz.',
    },
    {
      icon: Clock,
      title: 'Gece 01:30\'a Kadar Açık',
      desc: 'Evinizde ansızın ihtiyaç duyulan her an kapımız açık, gece geç saatlere kadar yanınızdayız.',
    },
    {
      icon: HeartHandshake,
      title: 'Mahalle Esnafı Sıcaklığı',
      desc: 'Büyük zincir marketlerin soğukluğu yerine samimi ve çözüm odaklı hizmet sunuyoruz.',
    },
  ];

  return (
    <section id="esnaflik" className="py-16 sm:py-20 bg-emerald-950 text-white relative overflow-hidden">
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
              Mahalle Kültürü
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Sadece Bir Market Değil, <br />
              <span className="text-amber-300">Mahallenizin Esnafı</span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
              Bereket Gıda olarak müşterilerimize yalnızca alışveriş hizmeti sunmak değil, güler yüzlü ve güvenilir bir esnaf anlayışıyla yardımcı olmak istiyoruz. Ürün çeşitliliğimiz, uygun fiyatlarımız ve hızlı servisimizle günlük market ihtiyaçlarınızda yanınızdayız.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-emerald-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Yenibosna Merkez</span>
              </div>
              <span className="text-emerald-600">•</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Kaliteli & Taze Ürünler</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-sm shadow-md transition-colors"
              >
                <span>Bizimle İletişime Geçin: 0544 409 92 73</span>
              </a>
            </div>
          </div>

          {/* Right 2x2 Feature Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="bg-emerald-900/60 border border-emerald-800/70 rounded-2xl p-5 sm:p-6 backdrop-blur-xs space-y-2.5 hover:bg-emerald-900/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300 border border-emerald-700/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{point.title}</h3>
                  <p className="text-xs sm:text-sm text-emerald-200/85 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
