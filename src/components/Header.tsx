import Link from 'next/link';
import { useCartContext } from './CartProvider';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const categories = [
  { name: 'Shirts', href: '/category/shirts' },
  { name: 'T-Shirts', href: '/category/t-shirts' },
  { name: 'Jeans', href: '/category/jeans' },
];

export default function Header() {
  const { openCart } = useCartContext();

  return (
    <header className="bg-gray-900 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Neoathes
          </Link>
          
          <nav className="flex items-center gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {category.name}
              </Link>
            ))}
            <button
              onClick={openCart}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <ShoppingCartIcon className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
} 