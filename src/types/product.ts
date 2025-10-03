// src/types/product.ts

export interface ColorVariant {
  color: string;
  images: string[];
}

// Alias for backward compatibility
export type Variant = ColorVariant;

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[]; // Keep for backward compatibility (default images)
  colorVariants?: ColorVariant[]; // New: images organized by color
  colors: string[];
  sizes: string[];
  description: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}
