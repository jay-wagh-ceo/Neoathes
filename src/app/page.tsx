'use client';

import { products } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { CartProvider } from '@/components/CartProvider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

function HeroSection() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Flowing Hero Images */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero/hero-sec01.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero/hero-sec02.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7.5
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90" />
      </div>

      {/* Small Floating Images */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left side floating images */}
        <motion.div
          className="absolute left-4 top-1/4 w-32 h-32 rounded-lg overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero/hero-sec01.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute left-8 top-2/3 w-24 h-24 rounded-lg overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero/hero-sec02.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Right side floating images */}
        <motion.div
          className="absolute right-4 top-1/3 w-28 h-28 rounded-lg overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero/hero-sec02.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute right-8 top-3/4 w-20 h-20 rounded-lg overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero/hero-sec01.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* 3D Animated Balls */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, 
                ${i === 0 ? '#4F46E5' : 
                 i === 1 ? '#7C3AED' : 
                 i === 2 ? '#EC4899' : 
                 i === 3 ? '#3B82F6' : 
                 '#10B981'}40%, 
                ${i === 0 ? '#312E81' : 
                 i === 1 ? '#5B21B6' : 
                 i === 2 ? '#BE185D' : 
                 i === 3 ? '#1D4ED8' : 
                 '#059669'}80%)`,
              filter: 'blur(40px)',
            }}
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: [Math.random() * 100 + '%', Math.random() * 100 + '%', Math.random() * 100 + '%'],
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%', Math.random() * 100 + '%'],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Web Theme Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Luxury Fashion
            <span className="block text-white/80 mt-2">Redefined</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our exclusive collection of premium clothing, crafted with attention to detail and unmatched quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/category/shirts"
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Collection</h2>
            <ProductGrid products={products.slice(0, 8)} />
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
