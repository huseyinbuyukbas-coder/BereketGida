import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, ShoppingBag, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getStoreStatus } from '../utils/timeUtils';

interface HeaderProps {
  onOpenQuickOrder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuickOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState(getStoreStatus());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const timer = setInterval(() => {
      setStatus(getStoreStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { label: 'Ana Sayfa', href: '#hero' },
    { label: 'Neden Bereket?', href: '#neden-biz' },
    { label: 'Ürünler', href: '#kategoriler' },
    { label: 'Paket Servis', href: '#paket-servis' },
    { label: 'Yorumlar', href: '#yorumlar' },
    { label: 'Hakkımızda', href: '#esnaflik' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'İletişim', href: '#konum' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-emerald-900/50 text-white'
          : 'bg-emerald-950 text-white border-b border-emerald-900/60'
      }`}
    >
      {/* Top micro bar for live opening status */}
      <div className="bg-emerald-900/90 border-b border-emerald-800/60 text-emerald-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              {status.statusText}
            </span>
            <span className="hidden sm:inline-block text-emerald-300">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-200">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Paket Servis: 10:00 – 22:00
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-200">
              <MapPin className="w-3 h-3 text-emerald-400" />
              Yenibosna Merkez, Taşova Sk. No:10
            </span>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              WhatsApp Sipariş
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-md border border-emerald-400/30 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
                  Bereket <span className="text-emerald-400">Gıda</span>
                </span>
              </div>
              <p className="text-xs font-medium text-emerald-200/90 tracking-wide uppercase">
                Şarküteri • Market • Yenibosna
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-200 hover:text-amber-300 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenQuickOrder}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold border border-emerald-600/50 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
              Sipariş Listesi Yaz
            </button>
            <a
              id="header-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 fill-stone-950 text-stone-950" />
              <span>0544 409 92 73</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500 text-stone-950 shadow"
              aria-label="Telefonla Ara"
            >
              <Phone className="w-5 h-5 fill-current" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-stone-200 hover:text-white hover:bg-emerald-800 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Menüyü aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-emerald-950 border-b border-emerald-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-amber-500 text-stone-950 font-bold rounded-lg text-sm text-center"
            >
              <Phone className="w-4 h-4 fill-stone-950" />
              Hemen Ara
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-sm text-center"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuickOrder();
            }}
            className="w-full py-2.5 px-3 bg-emerald-900 text-emerald-200 font-semibold rounded-lg text-sm flex items-center justify-center gap-2 border border-emerald-700"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            Hızlı Sipariş Listesi Oluştur
          </button>

          <div className="pt-2 border-t border-emerald-900 grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 text-stone-200 hover:text-amber-300 hover:bg-emerald-900/60 rounded-md font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-emerald-900/80 text-xs text-emerald-300/80 space-y-1">
            <p className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              {BUSINESS_INFO.address.full}
            </p>
            <p className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Google 5.0 ★ Puan • Mahallenin Esnafı
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
