
export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  category?: string;
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
