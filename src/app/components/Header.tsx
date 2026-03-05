import { Link, useLocation } from 'react-router';
import { ShoppingCart, Menu, X, Wine } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items, totalItems } = useCart();
  const location = useLocation();
  
  const cartItemsCount = totalItems;

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/produtos', label: 'Catálogo' },
    { path: '/quiz', label: 'Quiz' },
    { path: '/sobre', label: 'Sobre' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Wine className="w-8 h-8 text-[#8B1538] transition-transform group-hover:scale-110" />
              <div className="absolute -inset-1 bg-[#8B1538]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Playfair_Display'] font-semibold text-xl text-[#2C2C2C]">
                Vinheria Agnello
              </span>
              <span className="text-xs text-[#8B1538] tracking-wider uppercase">
                Since 1985
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-[#8B1538]'
                    : 'text-[#2C2C2C] hover:text-[#8B1538]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8B1538]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/carrinho"
              className="relative p-2 hover:bg-[#FAF8F3] rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-[#2C2C2C]" />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-[#8B1538] text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-[#FAF8F3] rounded-full transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#2C2C2C]" />
              ) : (
                <Menu className="w-6 h-6 text-[#2C2C2C]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#8B1538] text-white'
                      : 'text-[#2C2C2C] hover:bg-[#FAF8F3]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
