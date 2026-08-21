import React from 'react';
import { Star, Truck, Moon, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const QuickInfoCards: React.FC = () => {
  const cards = [
    {
      id: 'rating-card',
      icon: Star,
      iconColor: 'text-amber-400 fill-amber-400',
      bgColor: 'bg-amber-500/10 text-amber-900 border-amber-200/80',
      title: '5.0 Google Puanı',
      subtitle: '21 Google Yorumu',
      badge: 'Mükemmel Memnuniyet',
      link: '#yorumlar',
    },
    {
      id: 'delivery-card',
      icon: Truck,
      iconColor: 'text-emerald-700',
      bgColor: 'bg-emerald-700/10 text-emerald-950 border-emerald-200/80',
      title: '10:00 – 22:00',
      subtitle: 'Paket Servis',
      badge: 'Kapınıza Teslim',
      link: '#paket-servis',
    },
    {
      id: 'hours-card',
      icon: Moon,
      iconColor: 'text-emerald-800',
      bgColor: 'bg-emerald-800/10 text-emerald-950 border-emerald-200/80',
      title: "01:30'a Kadar",
      subtitle: 'Her Gün Açığız',
      badge: 'Gece Hizmeti',
      link: '#konum',
    },
    {
      id: 'location-card',
      icon: MapPin,
      iconColor: 'text-emerald-700',
      bgColor: 'bg-emerald-700/10 text-emerald-950 border-emerald-200/80',
      title: 'Yenibosna',
      subtitle: 'Bahçelievler / İstanbul',
      badge: 'Taşova Sk. No:10',
      link: '#konum',
    },
  ];

  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <a
              key={card.id}
              href={card.link}
              id={card.id}
              className="group bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 block"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center ${card.bgColor} transition-transform group-hover:scale-105`}>
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                <span className="text-[11px] font-semibold text-stone-700 bg-stone-100/90 px-2 py-0.5 rounded-full">
                  {card.badge}
                </span>
              </div>

              <div className="space-y-0.5">
                <h3 className="text-base sm:text-lg font-extrabold text-stone-900 tracking-tight group-hover:text-emerald-800 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-stone-700">
                  {card.subtitle}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
