import { Product, Size } from '@/types/product';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize);
    }
  };

  return (
    <motion.div 
      className="luxury-card group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-80 mb-4 overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-400 text-sm mb-2">{product.description}</p>
      
      <div className="flex items-center gap-2 mb-4">
        <div className="flex flex-col">
          <span className="text-gray-400 line-through text-sm">₹860</span>
          <span className="text-green-400 font-semibold">₹500</span>
        </div>
        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">42% OFF</span>
      </div>
      
      <div className="flex gap-2 mb-4">
        {product.sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-3 py-1 rounded text-sm ${
              selectedSize === size
                ? 'bg-white text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      
      <button
        onClick={handleAddToCart}
        disabled={!selectedSize}
        className="luxury-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add to Cart
      </button>
    </motion.div>
  );
} 