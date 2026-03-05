export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  text: string;
  colors: string[]; // Wine colors this option suggests
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é a ocasião para o vinho?',
    options: [
      { id: 'a', text: 'Jantar especial', colors: ['#8B0000', '#FFD700'] },
      { id: 'b', text: 'Celebração', colors: ['#F5DEB3', '#FFB6C1'] },
      { id: 'c', text: 'Casual/Dia a dia', colors: ['#FFB6C1', '#FFD700'] },
      { id: 'd', text: 'Presente', colors: ['#8B0000', '#F5DEB3'] }
    ]
  },
  {
    id: 2,
    question: 'Que tipo de comida você vai harmonizar?',
    options: [
      { id: 'a', text: 'Carnes vermelhas', colors: ['#8B0000'] },
      { id: 'b', text: 'Peixes e frutos do mar', colors: ['#FFD700', '#F5DEB3'] },
      { id: 'c', text: 'Massas e risotos', colors: ['#8B0000', '#FFD700'] },
      { id: 'd', text: 'Aperitivos leves', colors: ['#FFB6C1', '#F5DEB3'] }
    ]
  },
  {
    id: 3,
    question: 'Qual intensidade de sabor você prefere?',
    options: [
      { id: 'a', text: 'Forte e encorpado', colors: ['#8B0000'] },
      { id: 'b', text: 'Equilibrado', colors: ['#8B0000', '#FFD700'] },
      { id: 'c', text: 'Leve e suave', colors: ['#FFB6C1', '#F5DEB3'] },
      { id: 'd', text: 'Não tenho preferência', colors: ['#8B0000', '#FFD700', '#FFB6C1', '#F5DEB3'] }
    ]
  },
  {
    id: 4,
    question: 'Você prefere vinhos mais secos ou mais doces?',
    options: [
      { id: 'a', text: 'Bem seco', colors: ['#8B0000', '#FFD700', '#F5DEB3'] },
      { id: 'b', text: 'Meio-seco', colors: ['#FFB6C1'] },
      { id: 'c', text: 'Mais doce', colors: ['#FFB6C1'] },
      { id: 'd', text: 'Não sei a diferença', colors: ['#8B0000', '#FFD700', '#FFB6C1', '#F5DEB3'] }
    ]
  }
];

export const colorDescriptions: Record<string, { name: string; description: string }> = {
  '#8B0000': {
    name: 'Vermelho Intenso',
    description: 'Vinhos tintos encorpados e robustos, perfeitos para carnes vermelhas e ocasiões especiais. Taninos marcantes e sabores complexos.'
  },
  '#FFD700': {
    name: 'Dourado Brilhante',
    description: 'Vinhos brancos elegantes e aromáticos, ideais para peixes e frutos do mar. Frescor e sofisticação em cada taça.'
  },
  '#FFB6C1': {
    name: 'Rosé Delicado',
    description: 'Vinhos rosés leves e refrescantes, perfeitos para dias quentes e refeições leves. Leveza e charme.'
  },
  '#F5DEB3': {
    name: 'Champanhe Dourado',
    description: 'Espumantes sofisticados para celebrar momentos especiais. Elegância e efervescência.'
  }
};

export const calculateQuizResult = (answers: Record<number, string>): string => {
  const colorCounts: Record<string, number> = {};
  
  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = quizQuestions.find(q => q.id === parseInt(questionId));
    const option = question?.options.find(o => o.id === optionId);
    
    option?.colors.forEach(color => {
      colorCounts[color] = (colorCounts[color] || 0) + 1;
    });
  });
  
  let maxColor = '#8B0000';
  let maxCount = 0;
  
  Object.entries(colorCounts).forEach(([color, count]) => {
    if (count > maxCount) {
      maxCount = count;
      maxColor = color;
    }
  });
  
  return maxColor;
};
