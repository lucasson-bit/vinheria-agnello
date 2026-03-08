import { BrowserRouter, Routes, Route } from 'react-router';
import { useState } from 'react';

import { CartProvider } from '../context/CartContext';

import { HomePage } from './pages/HomePage';
import { ProductListPage } from './pages/ProductListPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { QuizPage } from './pages/QuizPage';
import { QuizResultPage } from './pages/QuizResultPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { AboutPage } from './pages/AboutPage';

import { ChatBotButton } from './components/ChatBotButton';
import { ChatBot } from './components/ChatBot';

export default function App() {
  const [showChatBot, setShowChatBot] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<ProductListPage />} />
            <Route path="/produto/:id" element={<ProductDetailPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/quiz/resultado" element={<QuizResultPage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/pedido/confirmado" element={<OrderConfirmationPage />} />
            <Route path="/sobre" element={<AboutPage />} />
          </Routes>

          <ChatBotButton onClick={() => setShowChatBot(true)} />
          {showChatBot && <ChatBot onClose={() => setShowChatBot(false)} />}
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}