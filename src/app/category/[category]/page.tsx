'use client';

import { products } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { CartProvider } from '@/components/CartProvider';
import { useCartContext } from '@/components/CartProvider';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

function CartButton() {
  const { openCart } = useCartContext();

  return (
    <button
      onClick={openCart}
      className="fixed top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
    >
      <ShoppingCartIcon className="w-6 h-6" />
    </button>
  );
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryProducts = products.filter(
    (product) => product.category === params.category
  );

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8 capitalize">
              {params.category}
            </h1>
            {categoryProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-400">
                  No {params.category} are available now
                </p>
                <p className="mt-4">
                  <a
                    href="/"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    View available products
                  </a>
                </p>
              </div>
            ) : (
              <ProductGrid products={categoryProducts} />
            )}
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
} 