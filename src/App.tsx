/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickInfoCards } from './components/QuickInfoCards';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Categories } from './components/Categories';
import { DeliverySection } from './components/DeliverySection';
import { CustomerReviews } from './components/CustomerReviews';
import { TrustSection } from './components/TrustSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { QuickOrderModal } from './components/QuickOrderModal';

export default function App() {
  const [quickOrderOpen, setQuickOrderOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const handleOpenQuickOrder = (categoryName?: string) => {
    setSelectedCategory(categoryName);
    setQuickOrderOpen(true);
  };

  const handleCloseQuickOrder = () => {
    setQuickOrderOpen(false);
    setSelectedCategory(undefined);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-emerald-800 selection:text-white">
      
      {/* Navigation Header */}
      <Header onOpenQuickOrder={() => handleOpenQuickOrder()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero onOpenQuickOrder={() => handleOpenQuickOrder()} />

        {/* 2. Quick Info Cards (Google 5.0, Delivery 10:00-22:00, Open till 01:30, Yenibosna) */}
        <QuickInfoCards />

        {/* 3. Why Choose Us (Neden Bereket Gıda?) */}
        <WhyChooseUs />

        {/* 4. Product Categories (Aradığınız Ne Varsa - 12 Categories) */}
        <Categories onSelectCategory={(cat) => handleOpenQuickOrder(cat)} />

        {/* 5. Delivery Section (Market İhtiyacınız Kapınıza Gelsin) */}
        <DeliverySection />

        {/* 6. Customer Reviews (5.0 Google / 4.6 Yandex Social Proof) */}
        <CustomerReviews />

        {/* 7. Trust & Neighborhood Merchant (Sadece Bir Market Değil, Mahallenizin Esnafı) */}
        <TrustSection />

        {/* 8. Gallery (Marketimizden Kareler) */}
        <GallerySection />

        {/* 9. Location & Google Map (Bize Ulaşın & Yol Tarifi Al) */}
        <LocationSection />

        {/* 10. Contact CTA Banner (İhtiyacınız Olan Bir Şey Mi Var?) */}
        <ContactCTA />

      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed 4-Button Bottom Bar */}
      <MobileBottomNav />

      {/* Interactive Quick Shopping List Modal */}
      <QuickOrderModal
        isOpen={quickOrderOpen}
        onClose={handleCloseQuickOrder}
        initialCategory={selectedCategory}
      />

    </div>
  );
}
