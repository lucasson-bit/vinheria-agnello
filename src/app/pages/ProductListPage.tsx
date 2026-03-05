import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { wines } from '../../data/wines';
import { SlidersHorizontal, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ProductListPage() {
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');
  
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: typeFilter || '',
    sweetness: '',
    body: '',
    priceRange: 'all' as 'all' | 'under100' | '100to150' | 'over150'
  });

  const filteredWines = useMemo(() => {
    return wines.filter(wine => {
      if (filters.type && wine.type !== filters.type) return false;
      if (filters.sweetness && wine.sweetness !== filters.sweetness) return false;
      if (filters.body && wine.body !== filters.body) return false;
      
      if (filters.priceRange === 'under100' && wine.price >= 100) return false;
      if (filters.priceRange === '100to150' && (wine.price < 100 || wine.price > 150)) return false;
      if (filters.priceRange === 'over150' && wine.price <= 150) return false;
      
      return true;
    });
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      type: '',
      sweetness: '',
      body: '',
      priceRange: 'all'
    });
  };

  const activeFiltersCount = [
    filters.type,
    filters.sweetness,
    filters.body,
    filters.priceRange !== 'all' ? filters.priceRange : ''
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#2C2C2C] mb-4">
              Nosso Catálogo
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore nossa seleção premium de vinhos cuidadosamente escolhidos
            </p>
          </motion.div>

          {/* Quiz CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-[#8B1538] to-[#6D0F2C] rounded-2xl p-6 md:p-8 text-white text-center mb-8"
          >
            <Sparkles className="w-10 h-10 mx-auto mb-3" />
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl mb-3">
              Não sabe qual vinho escolher?
            </h2>
            <p className="text-white/90 mb-4 max-w-2xl mx-auto">
              Faça nosso quiz personalizado e descubra o vinho perfeito para você em apenas 4 perguntas!
            </p>
            <Link
              to="/quiz"
              className="inline-block px-8 py-3 bg-white text-[#8B1538] rounded-xl font-semibold hover:bg-[#FAF8F3] transition-colors"
            >
              Fazer Quiz de Recomendação
            </Link>
          </motion.div>
        </div>

        {/* Filters and Results */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block lg:w-64 flex-shrink-0"
          >
            <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg text-[#2C2C2C]">Filtros</h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[#8B1538] hover:text-[#6D0F2C] font-medium"
                  >
                    Limpar ({activeFiltersCount})
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {/* Type Filter */}
                <div>
                  <label className="block font-medium text-[#2C2C2C] mb-3">Tipo</label>
                  <div className="space-y-2">
                    {['', 'tinto', 'branco', 'rosé', 'espumante'].map((type) => (
                      <label key={type} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          checked={filters.type === type}
                          onChange={() => setFilters({ ...filters, type })}
                          className="w-4 h-4 text-[#8B1538] focus:ring-[#8B1538]"
                        />
                        <span className="text-sm text-gray-700 capitalize">
                          {type || 'Todos'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sweetness Filter */}
                <div>
                  <label className="block font-medium text-[#2C2C2C] mb-3">Doçura</label>
                  <select
                    value={filters.sweetness}
                    onChange={(e) => setFilters({ ...filters, sweetness: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                  >
                    <option value="">Todos</option>
                    <option value="seco">Seco</option>
                    <option value="meio-seco">Meio-Seco</option>
                    <option value="suave">Suave</option>
                    <option value="doce">Doce</option>
                  </select>
                </div>

                {/* Body Filter */}
                <div>
                  <label className="block font-medium text-[#2C2C2C] mb-3">Corpo</label>
                  <select
                    value={filters.body}
                    onChange={(e) => setFilters({ ...filters, body: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                  >
                    <option value="">Todos</option>
                    <option value="leve">Leve</option>
                    <option value="médio">Médio</option>
                    <option value="encorpado">Encorpado</option>
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block font-medium text-[#2C2C2C] mb-3">Faixa de Preço</label>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'Todos' },
                      { value: 'under100', label: 'Até R$ 100' },
                      { value: '100to150', label: 'R$ 100 - R$ 150' },
                      { value: 'over150', label: 'Acima de R$ 150' }
                    ].map((range) => (
                      <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="priceRange"
                          checked={filters.priceRange === range.value}
                          onChange={() => setFilters({ ...filters, priceRange: range.value as any })}
                          className="w-4 h-4 text-[#8B1538] focus:ring-[#8B1538]"
                        />
                        <span className="text-sm text-gray-700">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Mobile Filters Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(true)}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-[#8B1538] text-white rounded-xl font-semibold"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filtros</span>
              {activeFiltersCount > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-white text-[#8B1538] rounded-full text-sm font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                <span className="font-semibold text-[#2C2C2C]">{filteredWines.length}</span> {filteredWines.length === 1 ? 'vinho encontrado' : 'vinhos encontrados'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWines.map((wine, index) => (
                <motion.div
                  key={wine.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProductCard wine={wine} />
                </motion.div>
              ))}
            </div>

            {filteredWines.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-[#FAF8F3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <SlidersHorizontal className="w-10 h-10 text-[#8B1538]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl text-[#2C2C2C] mb-2">
                  Nenhum vinho encontrado
                </h3>
                <p className="text-gray-600 mb-6">
                  Tente ajustar os filtros para ver mais opções
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-[#8B1538] text-white rounded-xl font-semibold hover:bg-[#6D0F2C] transition-colors"
                >
                  Limpar Filtros
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowFilters(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
                <h2 className="font-semibold text-lg text-[#2C2C2C]">Filtros</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Type Filter */}
                <div>
                  <label className="block font-medium text-[#2C2C2C] mb-3">Tipo</label>
                  <div className="space-y-2">
                    {['', 'tinto', 'branco', 'rosé', 'espumante'].map((type) => (
                      <label key={type} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type-mobile"
                          checked={filters.type === type}
                          onChange={() => setFilters({ ...filters, type })}
                          className="w-4 h-4 text-[#8B1538] focus:ring-[#8B1538]"
                        />
                        <span className="text-sm text-gray-700 capitalize">
                          {type || 'Todos'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sweetness Filter */}
                <div>
                  <label className="block font-medium text-[#2C2C2C] mb-3">Doçura</label>
                  <select
                    value={filters.sweetness}
                    onChange={(e) => setFilters({ ...filters, sweetness: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                  >
                    <option value="">Todos</option>
                    <option value="seco">Seco</option>
                    <option value="meio-seco">Meio-Seco</option>
                    <option value="suave">Suave</option>
                    <option value="doce">Doce</option>
                  </select>
                </div>

                {/* Body Filter */}
                <div>
                  <label className="block font-medium text-[#2C2C2C] mb-3">Corpo</label>
                  <select
                    value={filters.body}
                    onChange={(e) => setFilters({ ...filters, body: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF8F3] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                  >
                    <option value="">Todos</option>
                    <option value="leve">Leve</option>
                    <option value="médio">Médio</option>
                    <option value="encorpado">Encorpado</option>
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block font-medium text-[#2C2C2C] mb-3">Faixa de Preço</label>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'Todos' },
                      { value: 'under100', label: 'Até R$ 100' },
                      { value: '100to150', label: 'R$ 100 - R$ 150' },
                      { value: 'over150', label: 'Acima de R$ 150' }
                    ].map((range) => (
                      <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="priceRange-mobile"
                          checked={filters.priceRange === range.value}
                          onChange={() => setFilters({ ...filters, priceRange: range.value as any })}
                          className="w-4 h-4 text-[#8B1538] focus:ring-[#8B1538]"
                        />
                        <span className="text-sm text-gray-700">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 space-y-2">
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="w-full px-6 py-3 bg-gray-100 text-[#2C2C2C] rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Limpar Filtros
                  </button>
                )}
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#8B1538] to-[#6D0F2C] text-white rounded-xl font-semibold"
                >
                  Ver {filteredWines.length} {filteredWines.length === 1 ? 'Vinho' : 'Vinhos'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
