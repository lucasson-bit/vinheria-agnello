import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useCart } from '../../context/CartContext';
import { CreditCard, Smartphone, Barcode, ArrowLeft, Check, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

type CheckoutStep = 'delivery' | 'payment';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'pix' | 'boleto'>('credit');

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    email: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    city: '',
    state: ''
  });

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-md">
            <div className="w-24 h-24 bg-[#FAF8F3] rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-[#8B1538]" />
            </div>
            <h1 className="font-['Playfair_Display'] text-3xl text-[#2C2C2C] mb-4">
              Carrinho Vazio
            </h1>
            <p className="text-gray-600 mb-8">
              Adicione produtos ao carrinho para continuar.
            </p>
            <Link
              to="/produtos"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-[#8B1538] to-[#6D0F2C] text-white rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              <span>Ver Catálogo</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate('/pedido/confirmado');
  };

  const subtotal = totalPrice;
  const shipping = subtotal >= 200 ? 0 : 29.90;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to="/carrinho"
            className="inline-flex items-center space-x-2 text-[#8B1538] font-semibold hover:text-[#6D0F2C] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar ao Carrinho</span>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#2C2C2C] mb-2">
            Finalizar Compra
          </h1>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-3 ${step === 'delivery' ? 'opacity-100' : 'opacity-50'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step === 'delivery' ? 'bg-[#8B1538] text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <span className="font-semibold text-[#2C2C2C]">Entrega</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300" />
            <div className={`flex items-center space-x-3 ${step === 'payment' ? 'opacity-100' : 'opacity-50'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step === 'payment' ? 'bg-[#8B1538] text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <span className="font-semibold text-[#2C2C2C]">Pagamento</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {step === 'delivery' ? (
              <motion.form
                key="delivery"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleDeliverySubmit}
                className="bg-white border border-gray-200 rounded-2xl p-8"
              >
                <h2 className="font-['Playfair_Display'] text-2xl text-[#2C2C2C] mb-6">
                  Dados de Entrega
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Oliveira"
                      value={deliveryInfo.name}
                      onChange={(e) => setDeliveryInfo({ ...deliveryInfo, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        value={deliveryInfo.email}
                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={deliveryInfo.phone}
                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CEP
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="00000-000"
                        value={deliveryInfo.cep}
                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, cep: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Endereço
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Rua, Avenida, Alameda..."
                        value={deliveryInfo.address}
                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Número
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        value={deliveryInfo.number}
                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, number: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Complemento
                      </label>
                      <input
                        type="text"
                        placeholder="Apto, bloco, casa, referência"
                        value={deliveryInfo.complement}
                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, complement: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cidade
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: São Paulo"
                        value={deliveryInfo.city}
                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, city: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estado
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="SP"
                        maxLength={2}
                        value={deliveryInfo.state}
                        onChange={(e) => setDeliveryInfo({ ...deliveryInfo, state: e.target.value.toUpperCase() })}
                        className="w-full px-4 py-3 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-8 py-4 bg-gradient-to-r from-[#8B1538] to-[#6D0F2C] text-white rounded-xl font-semibold hover:shadow-xl transition-all"
                >
                  Continuar para Pagamento
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handlePaymentSubmit}
                className="bg-white border border-gray-200 rounded-2xl p-8"
              >
                <h2 className="font-['Playfair_Display'] text-2xl text-[#2C2C2C] mb-6">
                  Forma de Pagamento
                </h2>

                <div className="space-y-3 mb-8">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit')}
                    className={`w-full p-4 border-2 rounded-xl text-left transition-all ${
                      paymentMethod === 'credit'
                        ? 'border-[#8B1538] bg-[#8B1538]/5'
                        : 'border-gray-200 hover:border-[#8B1538]/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-6 h-6 text-[#8B1538]" />
                      <div>
                        <p className="font-semibold text-[#2C2C2C]">Cartão de Crédito</p>
                        <p className="text-sm text-gray-600">Em até 12x sem juros</p>
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`w-full p-4 border-2 rounded-xl text-left transition-all ${
                      paymentMethod === 'pix'
                        ? 'border-[#8B1538] bg-[#8B1538]/5'
                        : 'border-gray-200 hover:border-[#8B1538]/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-6 h-6 text-[#8B1538]" />
                      <div>
                        <p className="font-semibold text-[#2C2C2C]">PIX</p>
                        <p className="text-sm text-gray-600">Aprovação imediata</p>
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('boleto')}
                    className={`w-full p-4 border-2 rounded-xl text-left transition-all ${
                      paymentMethod === 'boleto'
                        ? 'border-[#8B1538] bg-[#8B1538]/5'
                        : 'border-gray-200 hover:border-[#8B1538]/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Barcode className="w-6 h-6 text-[#8B1538]" />
                      <div>
                        <p className="font-semibold text-[#2C2C2C]">Boleto</p>
                        <p className="text-sm text-gray-600">Vencimento em 3 dias</p>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep('delivery')}
                    className="w-full py-4 bg-white border-2 border-gray-200 text-[#2C2C2C] rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#8B1538] to-[#6D0F2C] text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <Check className="w-5 h-5" />
                    <span>Finalizar Pedido</span>
                  </button>
                </div>
              </motion.form>
            )}
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border-2 border-[#8B1538]/20 rounded-2xl p-6">
              <h3 className="font-['Playfair_Display'] text-xl text-[#2C2C2C] mb-4">
                Resumo do Pedido
              </h3>

              <div className="space-y-3 mb-6">
                {items.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.quantity}x {item.name}</span>
                    <span className="text-[#2C2C2C]">R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                {items.length > 3 && (
                  <p className="text-sm text-gray-500">+ {items.length - 3} itens</p>
                )}
              </div>

              <div className="space-y-2 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-[#2C2C2C]">R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Frete</span>
                  <span className={shipping === 0 ? 'text-green-600' : 'text-[#2C2C2C]'}>
                    {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-200">
                  <span className="font-semibold text-[#2C2C2C]">Total</span>
                  <span className="font-['Playfair_Display'] text-2xl font-semibold text-[#8B1538]">
                    R$ {total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
