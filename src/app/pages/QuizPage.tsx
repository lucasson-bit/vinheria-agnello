import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { quizQuestions, calculateQuizResult } from '../../data/quiz';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function QuizPage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleAnswer = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = { ...answers, [quizQuestions[currentQuestion].id]: selectedOption };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(newAnswers[quizQuestions[currentQuestion + 1].id] || '');
    } else {
      const resultColor = calculateQuizResult(newAnswers);
      navigate(`/quiz/resultado?color=${encodeURIComponent(resultColor)}`);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[quizQuestions[currentQuestion - 1].id] || '');
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] to-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#8B1538]/10 text-[#8B1538] rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Quiz de Recomendação
              </span>
            </div>
            <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#2C2C2C] mb-3">
              Encontre Seu Vinho Ideal
            </h1>
            <p className="text-gray-600">
              Responda 4 perguntas rápidas e descubra o vinho perfeito para você
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Pergunta {currentQuestion + 1} de {quizQuestions.length}
              </span>
              <span className="text-sm font-medium text-[#8B1538]">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-[#8B1538] to-[#6D0F2C]"
              />
            </div>
          </motion.div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-8"
            >
              <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#2C2C2C] mb-8">
                {question.question}
              </h2>

              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleAnswer(option.id)}
                    className={`w-full p-5 text-left rounded-xl border-2 transition-all ${
                      selectedOption === option.id
                        ? 'border-[#8B1538] bg-[#8B1538]/5 shadow-md'
                        : 'border-gray-200 hover:border-[#8B1538]/50 hover:bg-[#FAF8F3]'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedOption === option.id
                            ? 'border-[#8B1538] bg-[#8B1538]'
                            : 'border-gray-300'
                        }`}
                      >
                        {selectedOption === option.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-3 h-3 bg-white rounded-full"
                          />
                        )}
                      </div>
                      <span className="text-lg text-[#2C2C2C]">{option.text}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-between gap-4"
          >
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-white border-2 border-gray-200 text-[#2C2C2C] rounded-xl font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className="px-8 py-3 bg-gradient-to-r from-[#8B1538] to-[#6D0F2C] text-white rounded-xl font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 group"
            >
              <span>
                {currentQuestion === quizQuestions.length - 1 ? 'Ver Resultado' : 'Próxima'}
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Help Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-sm text-gray-500 mt-6"
          >
            Suas respostas nos ajudam a recomendar o vinho perfeito para seu paladar e ocasião
          </motion.p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
