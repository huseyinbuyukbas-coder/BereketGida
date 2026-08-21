import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Layers, Eye, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/businessData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'sarkuteri', label: 'Şarküteri' },
    { id: 'raflar', label: 'Raflar & Reyonlar' },
    { id: 'taze', label: 'Taze Ürünler' },
    { id: 'market-ici', label: 'Market İçi' },
    { id: 'paket-servis', label: 'Paket Servis' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeri" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold tracking-wide uppercase">
            <Camera className="w-3.5 h-3.5 text-emerald-800" />
            İşletmemiz
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Marketimizden Kareler
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Temiz, düzenli raflarımız ve taze şarküteri reyonlarımızla Yenibosna'da hizmetinizdeyiz.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="relative h-56 bg-stone-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="w-10 h-10 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-md">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-stone-900 text-base mb-1 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-800 font-semibold">
                  <span>Bereket Gıda Yenibosna</span>
                  <span>Büyütmek için tıkla</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for lightbox view */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-stone-900/80 text-white flex items-center justify-center hover:bg-stone-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-80 sm:h-96 bg-stone-900">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                  {selectedImage.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-2 mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-stone-600">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
