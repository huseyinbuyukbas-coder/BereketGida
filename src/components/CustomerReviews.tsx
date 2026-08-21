import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/businessData';

export const CustomerReviews: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'GOOGLE' | 'YANDEX'>('ALL');

  const filteredReviews = REVIEWS.filter((rev) => {
    if (filter === 'GOOGLE') return rev.source === 'Google';
    if (filter === 'YANDEX') return rev.source === 'Yandex';
    return true;
  });

  return (
    <section id="yorumlar" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold tracking-wide uppercase">
            <Star className="w-3.5 h-3.5 fill-emerald-800 text-emerald-800" />
            Gerçek Müşteri Deneyimleri
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Mahallemizin güvenini kazanmaktan gurur duyuyoruz. İşte Google ve Yandex üzerindeki gerçek değerlendirmeler.
          </p>
        </div>

        {/* Rating Scoreboard Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
          
          {/* Google Score */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 font-extrabold text-2xl">
                5.0
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h3 className="font-extrabold text-stone-900 text-base">5.0 / 5 Google Puanı</h3>
                <p className="text-xs text-stone-700">21 Doğrulanmış Google Yorumu</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex px-3 py-1 bg-emerald-50 text-emerald-800 font-bold text-xs rounded-full border border-emerald-200">
              %100 Memnuniyet
            </span>
          </div>

          {/* Yandex Score */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 font-extrabold text-2xl">
                4.6
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400/40" />
                </div>
                <h3 className="font-extrabold text-stone-900 text-base">4.6 / 5 Yandex Puanı</h3>
                <p className="text-xs text-stone-700">7 Yandex Haritalar Yorumu</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex px-3 py-1 bg-stone-100 text-stone-700 font-bold text-xs rounded-full border border-stone-200">
              Yüksek Puan
            </span>
          </div>

        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              id={`review-${review.id}`}
              className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-700" />
                    Google
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-4 font-normal">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center">
                    {review.author.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-stone-900">{review.author}</span>
                </div>
                <span className="text-[11px] text-stone-700">Müşteri</span>
              </div>
            </div>
          ))}
        </div>

        {/* View all on Google Link button */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-bold text-sm border border-stone-300 shadow-sm transition-colors"
          >
            <span>Google'da tüm yorumları görüntüle</span>
            <ExternalLink className="w-4 h-4 text-emerald-700" />
          </a>
        </div>

      </div>
    </section>
  );
};
