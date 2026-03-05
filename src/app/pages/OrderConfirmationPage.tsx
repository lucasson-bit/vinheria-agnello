import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CheckCircle, Package, Mail, Home } from 'lucide-react';
import { motion } from 'motion/react';

export function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#2C2C2C] mb-4">
              Pedido Confirmado!
            </h1>
            <p className="text-lg text-gray-600">
              Seu pedido foi recebido com sucesso e está sendo processado
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border-2 border-green-200 rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Número do Pedido</p>
                <p className="font-['Playfair_Display'] text-2xl font-semibold text-[#2C2C2C]">
                  #AGN{Math.floor(Math.random() * 100000).toString().padStart(5, '0')}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Data</p>
                <p className="font-semibold text-[#2C2C2C]">
                  {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#8B1538]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#8B1538]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-1">
                    Confirmação Enviada
                  </h3>
                  <p className="text-sm text-gray-600">
                    Enviamos um e-mail com os detalhes do seu pedido e o código de rastreamento
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#8B1538]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-[#8B1538]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C] mb-1">
                    Transporte Climatizado
                  </h3>
                  <p className="text-sm text-gray-600">
                    Seus vinhos serão transportados em temperatura controlada para garantir a qualidade
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/"
              className="flex-1 py-4 bg-gradient-to-r from-[#8B1538] to-[#6D0F2C] text-white rounded-xl font-semibold text-center hover:shadow-xl transition-all flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Voltar ao Início</span>
            </Link>
            <Link
              to="/produtos"
              className="flex-1 py-4 bg-white border-2 border-gray-200 text-[#2C2C2C] rounded-xl font-semibold text-center hover:bg-gray-50 transition-colors"
            >
              Continuar Comprando
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-2">
              Precisa de ajuda? Fale com nosso time
            </p>
            <a href="mailto:contato@agnello.com.br" className="text-[#8B1538] font-semibold hover:text-[#6D0F2C]">
              contato@agnello.com.br
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
