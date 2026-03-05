import { useSearchParams, Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { colorDescriptions } from '../../data/quiz';
import { getWinesByColor } from '../../data/wines';
import { Sparkles, RefreshCw, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function QuizResultPage() {
  const [searchParams] = useSearchParams();
  const color = searchParams.get('color') || '#8B0000';
  const colorInfo = colorDescriptions[color];
  const recommendedWines = getWinesByColor(color);

  const getColorGradient = (colorCode: string) => {
    switch (colorCode) {
      case '#8B0000':
        return 'from-red-900 to-red-700';
      case '#FFD700':
        return 'from-yellow-600 to-yellow-400';
      case '#FFB6C1':
        return 'from-pink-600 to-pink-400';
      case '#F5DEB3':
        return 'from-amber-600 to-amber-400';
      default:
        return 'from-red-900 to-red-700';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Result Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-700 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Resultado do Quiz
            </span>
          </div>

          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#2C2C2C] mb-8">
            Encontramos o Vinho Perfeito!
          </h1>

          {/* Color Badge */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className={`relative w-64 h-64 rounded-full bg-gradient-to-br ${getColorGradient(color)} shadow-2xl flex items-center justify-center`}
            >
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm" />
              <div className="relative text-center p-8">
                <h2 className="font-['Playfair_Display'] text-3xl font-semibold text-white mb-2">
                  {colorInfo?.name || 'Sua Recomendação'}
                </h2>
              </div>
              
              {/* Sparkle animations */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#D4AF37] rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#D4AF37] rounded-full blur-sm"
              />
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {colorInfo?.description || 'Encontramos os vinhos perfeitos para você!'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/quiz"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-200 text-[#2C2C2C] rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Refazer Quiz</span>
              </Link>
              <Link
                to="/produtos"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#8B1538] to-[#6D0F2C] text-white rounded-xl font-semibold hover:shadow-xl transition-all group"
              >
                <span>Ver Todo Catálogo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Recommended Wines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#2C2C2C] mb-3">
              Vinhos Recomendados Para Você
            </h2>
            <p className="text-gray-600">
              Selecionados especialmente com base nas suas preferências
            </p>
          </div>

          {recommendedWines.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendedWines.map((wine, index) => (
                <motion.div
                  key={wine.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <ProductCard wine={wine} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-[#FAF8F3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-[#8B1538]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl text-[#2C2C2C] mb-2">
                Em breve teremos vinhos desta categoria
              </h3>
              <p className="text-gray-600 mb-6">
                Que tal explorar outras opções do nosso catálogo?
              </p>
              <Link
                to="/produtos"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#8B1538] to-[#6D0F2C] text-white rounded-xl font-semibold hover:shadow-xl transition-all"
              >
                <span>Ver Catálogo Completo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          )}
        </motion.section>

        {/* Why These Wines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-[#FAF8F3] to-white rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-[#8B1538] mx-auto mb-4" />
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#2C2C2C] mb-4">
              Por Que Recomendamos Estes Vinhos?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Com base nas suas respostas sobre ocasião, harmonização e preferências de sabor, 
              nossa curadoria especializada selecionou os vinhos que melhor se adequam ao seu 
              paladar e necessidades. Cada recomendação foi pensada para proporcionar a melhor 
              experiência possível.
            </p>
            <Link
              to="/sobre"
              className="inline-flex items-center space-x-2 text-[#8B1538] font-semibold hover:text-[#6D0F2C] transition-colors group"
            >
              <span>Conheça Nossa Curadoria</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
