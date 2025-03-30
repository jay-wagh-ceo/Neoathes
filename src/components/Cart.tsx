import { useCart } from '@/hooks/useCart';
import { motion, AnimatePresence } from 'framer-motion';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeFromCart } = useCart();
  const hasMultipleItems = items.length > 1;
  const subtotal = items.reduce((sum, item) => sum + 500 * item.quantity, 0);
  const originalSubtotal = items.reduce((sum, item) => sum + 860 * item.quantity, 0);
  const discountedTotal = hasMultipleItems ? subtotal * 0.9 : subtotal;

  const handleWhatsAppOrder = () => {
    const message = items
      .map(
        (item) =>
          `${item.product.name} (${item.size}) x${item.quantity}\n` +
          `Original Price: ₹${860 * item.quantity}\n` +
          `Discounted Price: ₹${500 * item.quantity}`
      )
      .join('\n\n');

    const whatsappMessage = `Order Details:\n\n${message}\n\n${
      hasMultipleItems
        ? `Original Subtotal: ₹${originalSubtotal}\nDiscounted Subtotal: ₹${subtotal}\nAdditional Discount (10%): -₹${subtotal * 0.1}\nFinal Total: ₹${discountedTotal}`
        : `Original Price: ₹${originalSubtotal}\nDiscounted Price: ₹${subtotal}`
    }`;
    const whatsappUrl = `https://wa.me/918766422681?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 p-6 rounded-lg w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            
            {items.length === 0 ? (
              <p className="text-gray-400">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.size}`}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="font-semibold">{item.product.name}</p>
                        <p className="text-gray-400">
                          {item.size} x {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-gray-400 line-through text-sm">₹{860 * item.quantity}</p>
                          <p className="text-green-400">₹{500 * item.quantity}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-800 pt-4 mb-6">
                  {hasMultipleItems ? (
                    <>
                      <div className="flex justify-between items-center mb-2">
                        <span>Original Subtotal:</span>
                        <span className="text-gray-400 line-through">₹{originalSubtotal}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span>Discounted Subtotal:</span>
                        <span>₹{subtotal}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span>Additional Discount (10%):</span>
                        <span className="text-green-400">-₹{subtotal * 0.1}</span>
                      </div>
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Final Total:</span>
                        <span className="text-green-400">₹{discountedTotal}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-center mb-2">
                        <span>Original Price:</span>
                        <span className="text-gray-400 line-through">₹{originalSubtotal}</span>
                      </div>
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Discounted Price:</span>
                        <span className="text-green-400">₹{subtotal}</span>
                      </div>
                    </>
                  )}
                </div>

                <button
                  onClick={handleWhatsAppOrder}
                  className="luxury-button w-full"
                >
                  Order via WhatsApp
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 