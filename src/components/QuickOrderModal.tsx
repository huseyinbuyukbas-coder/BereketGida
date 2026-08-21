import React, { useState, useEffect } from 'react';
import { X, Send, ShoppingBag, Plus, Trash2, Phone, Check } from 'lucide-react';
import { BUSINESS_INFO, CATEGORIES } from '../data/businessData';

interface QuickOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const QuickOrderModal: React.FC<QuickOrderModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
}) => {
  const [listText, setListText] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialCategory) {
      setListText((prev) =>
        prev
          ? `${prev}\n- ${initialCategory} reyonundan ürünler:`
          : `- ${initialCategory} reyonundan ürünler:`
      );
    }
  }, [initialCategory]);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = 'Merhaba Bereket Gıda, paket servis için sipariş vermek istiyorum.\n\n';
    if (listText.trim()) {
      msg += `🛒 *Sipariş Listem:*\n${listText.trim()}\n\n`;
    }
    if (address.trim()) {
      msg += `📍 *Adres:* ${address.trim()}\n\n`;
    }
    if (notes.trim()) {
      msg += `📝 *Not:* ${notes.trim()}\n`;
    }

    const url = `https://wa.me/905444099273?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  const addQuickCategory = (catName: string) => {
    setListText((prev) => (prev ? `${prev}\n- ${catName}` : `- ${catName}`));
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-emerald-950 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Sipariş Listenizi Oluşturun</h3>
              <p className="text-xs text-emerald-300">WhatsApp ile Bereket Gıda'ya İletin</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-emerald-900 text-stone-300 hover:text-white flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSend} className="p-5 space-y-4 overflow-y-auto flex-1">
          
          {/* Fast Category Quick Adds */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              Hızlı Reyon Seçimi (Listeye Eklemek İçin Tıklayın):
            </label>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto p-1 bg-stone-50 rounded-xl border border-stone-200">
              {CATEGORIES.slice(0, 8).map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => addQuickCategory(cat.name)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white hover:bg-emerald-50 text-stone-700 hover:text-emerald-900 text-xs border border-stone-200 font-medium transition-colors"
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  <Plus className="w-3 h-3 text-emerald-700" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              İhtiyaç Duyduğunuz Ürünler ve Miktarlar:
            </label>
            <textarea
              rows={4}
              required
              value={listText}
              onChange={(e) => setListText(e.target.value)}
              placeholder="Örn:&#10;- 2 adet ekmek&#10;- 1 paket beyaz peynir&#10;- 1 lt günlük süt&#10;- Bulaşık deterjanı"
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Teslimat Adresiniz (Yenibosna):
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Örn: Taşova Sk. No:..., Daire:..."
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              Sipariş Notu (Opsiyonel):
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Örn: Kapıda nakit veya kart ile ödeme..."
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
            />
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>WhatsApp ile Bereket Gıda'ya Gönder</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Telefonla Sipariş Vermek İstiyorum: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

        </form>
      </div>
    </div>
  );
};
