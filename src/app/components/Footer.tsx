import { Link } from 'react-router';
import { Wine, Facebook, Instagram, Mail, Phone, MapPin, Shield, Truck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white mt-auto">
      {/* Trust Badges */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#8B1538] rounded-lg">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Transporte Climatizado</h4>
                <p className="text-sm text-gray-400">Seus vinhos protegidos</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#8B1538] rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Embalagem Segura</h4>
                <p className="text-sm text-gray-400">Entrega garantida</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#8B1538] rounded-lg">
                <Wine className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Curadoria Especializada</h4>
                <p className="text-sm text-gray-400">Seleção premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Wine className="w-8 h-8 text-[#D4AF37]" />
              <span className="font-['Playfair_Display'] font-semibold text-xl">
                Vinheria Agnello
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Tradição familiar desde 1985, oferecendo vinhos premium selecionados 
              com paixão e expertise para transformar cada momento em uma experiência memorável.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-[#8B1538] rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-[#8B1538] rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/produtos" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Quiz de Recomendação
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/carrinho" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Meu Carrinho
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Rua das Vinhas, 123<br />
                  Bento Gonçalves, RS
                </span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm">(54) 3456-7890</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm">contato@agnello.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2026 Vinheria Agnello. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
