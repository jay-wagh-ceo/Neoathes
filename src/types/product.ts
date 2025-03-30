export type Size = 'XL' | 'L' | 'M';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: Size[];
  category: 'shirts' | 't-shirts' | 'jeans';
  description: string;
}

export interface CartItem {
  product: Product;
  size: Size;
  quantity: number;
} 