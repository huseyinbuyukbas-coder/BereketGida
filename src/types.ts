export interface Review {
  id: string;
  author: string;
  rating: number;
  source: 'Google' | 'Yandex';
  dateAgo?: string;
  text: string;
  verified?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  badge?: string;
  bgGradient?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'market-ici' | 'sarkuteri' | 'raflar' | 'paket-servis' | 'taze';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}
