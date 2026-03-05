import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useCart } from '../../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  const getWineImage = (type: string) => {
    switch (type) {
      case 'tinto':
        return 'https://images.unsplash.com/photo-1743184579851-5ec9972100b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200';
      case 'branco':
        return 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200';
      case 'rosé':
        return 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200';
      case 'espumante':
        return 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200';
      default:
        return 'https://images.unsplash.com/photo-1743184579851-5ec9972100b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200';
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md"
          >
            <div className="w-24 h-24 bg-[#FAF8F3] rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-[#8B1538]" />
            </div>
            <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              Seu Carrinho Está Vazio
            </h1>
            <p className="text-gray-600 mb-8">
              Adicione vinhos ao seu carrinho para continuar comprando.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/produtos"
                className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-[#8B1538] to-[#6D0F2C] text-white rounded-xl font-semibold hover:shadow-xl transition-all group"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-white border-2 border-gray-200 text-[#2C2C2C] rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                <span>Fazer Quiz</span>
              </Link>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  const subtotal = totalPrice;
  const shipping = subtotal >= 200 ? 0 : 29.90;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#2C2C2C] mb-2">
            Carrinho de Compras
          </h1>
          <p className="text-gray-600">
            {items.length} {items.length === 1 ? 'item' : 'itens'} no carrinho
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-6">
                    {/* Image */}
                    <div className="w-24 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-[#FAF8F3] to-[#F5F5F5]">
                      <ImageWithFallback
                        src={getWineImage(item.type)}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <Link
                        to={`/produto/${item.id}`}
                        className="font-['Playfair_Display'] text-xl font-semibold text-[#2C2C2C] hover:text-[#8B1538] transition-colors mb-2 block"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-600 mb-1">{item.region}</p>
                      <p className="text-sm text-gray-500 capitalize mb-3">
                        {item.type} • {item.grape}
                      </p>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-9 h-9 bg-[#FAF8F3] hover:bg-[#8B1538] hover:text-white rounded-lg transition-colors flex items-center justify-center"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-semibold text-[#2C2C2C]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-9 h-9 bg-[#FAF8F3] hover:bg-[#8B1538] hover:text-white rounded-lg transition-colors flex items-center justify-center"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price and Remove */}
                        <div className="flex items-center space-x-4">
                          <p className="font-['Playfair_Display'] text-2xl font-semibold text-[#8B1538]">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-24 bg-white border-2 border-[#8B1538]/20 rounded-2xl p-6"
            >
              <h2 className="font-['Playfair_Display'] text-2xl text-[#2C2C2C] mb-6">
                Resumo do Pedido
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-[#2C2C2C]">
                    R$ {subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span className="font-semibold text-[#2C2C2C]">
                    {shipping === 0 ? (
                      <span className="text-green-600">Grátis</span>
                    ) : (
                      `R$ ${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>

                {shipping > 0 && (
                  <div className="p-3 bg-[#FAF8F3] rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Tag className="w-4 h-4 text-[#8B1538] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Frete grátis para compras acima de R$ 200,00
                      </p>
                    </div>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg text-[#2C2C2C]">Total</span>
                    <span className="font-['Playfair_Display'] text-3xl font-semibold text-[#8B1538]">
                      R$ {total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full py-4 bg-gradient-to-r from-[#8B1538] to-[#6D0F2C] text-white rounded-xl font-semibold text-center hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Finalizar Compra</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/produtos"
                className="block w-full py-3 mt-3 bg-white border-2 border-gray-200 text-[#2C2C2C] rounded-xl font-semibold text-center hover:bg-gray-50 transition-colors"
              >
                Continuar Comprando
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transporte climatizado</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Embalagem segura</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pagamento seguro</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
