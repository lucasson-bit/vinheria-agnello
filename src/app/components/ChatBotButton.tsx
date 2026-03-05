import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ChatBotButtonProps {
  onClick: () => void;
}

export function ChatBotButton({ onClick }: ChatBotButtonProps) {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#6D0F2C] text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-[0_0_30px_rgba(139,21,56,0.5)] transition-shadow group"
      aria-label="Abrir chat com Sr. Giulio"
    >
      <MessageCircle className="w-7 h-7 transition-transform group-hover:rotate-12" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#8B1538] opacity-20" />
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-20 bg-[#2C2C2C] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg pointer-events-none"
      >
        Fale com o Sr. Giulio
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-[#2C2C2C] rotate-45" />
      </motion.div>
    </motion.button>
  );
}
