import React, { useState } from 'react';
import { CATEGORIES } from '../data/businessData';
import { MessageCircle, Search, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface CategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = CATEGORIES.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="kategoriler" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Geniş Ürün Yelpazesi
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              Aradığınız Ne Varsa
            </h2>
            <p className="text-base sm:text-lg text-stone-600">
              Taze şarküteriden günlük ekmeğe, temel gıdadan temizlik ürünlerine kadar evin tüm ihtiyaçları tek noktada.
            </p>
          </div>

          {/* Quick Filter Input */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Reyon veya kategori ara..."
                className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
                >
                  Temizle
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredCategories.map((cat) => {
            const waUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
              `Merhaba Bereket Gıda, "${cat.name}" reyonunuzdan sipariş vermek / bilgi almak istiyorum.`
            )}`;

            return (
              <div
                key={cat.id}
                id={`cat-${cat.id}`}
                className="group relative bg-stone-50 hover:bg-emerald-50/40 rounded-2xl p-4 sm:p-5 border border-stone-200 hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl sm:text-4xl bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-xs border border-stone-200/80 group-hover:scale-105 transition-transform">
                      <span>{cat.icon}</span>
                    </div>

                    {cat.badge && (
                      <span className="text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-md">
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1 group-hover:text-emerald-900 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200/70 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectCategory(cat.name)}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Siparişe Ekle</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-emerald-700/10 hover:bg-emerald-700 text-emerald-800 hover:text-white flex items-center justify-center transition-colors"
                    title={`${cat.name} için WhatsApp'tan Sor`}
                    aria-label={`${cat.name} için WhatsApp'tan Sor`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom category notice */}
        <div className="mt-10 p-5 rounded-2xl bg-stone-100/80 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-sm font-bold text-stone-900">
              Listede göremediğiniz veya özel bir ürün mü arıyorsunuz?
            </p>
            <p className="text-xs sm:text-sm text-stone-600">
              Stok durumu veya farklı ürün talepleriniz için bizi doğrudan arayabilir ya da WhatsApp'tan sorabilirsiniz.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="shrink-0 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
          >
            Reyonu Sor: 0544 409 92 73
          </a>
        </div>

      </div>
    </section>
  );
};
