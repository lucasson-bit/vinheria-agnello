import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Wine, Heart, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1764709125130-a286f51d69c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Italian vineyard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl text-white"
            >
              <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-4">
                Nossa História
              </p>
              <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl mb-6">
                A Família Agnello
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Tradição italiana, paixão brasileira e compromisso com a excelência desde 1985
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-['Playfair_Display'] text-4xl text-[#2C2C2C] mb-6">
                  Uma Jornada de Paixão
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Em 1985, o Sr. Giulio Agnello e sua esposa Bianca deixaram a região do Piemonte, na Itália,
                    trazendo consigo não apenas suas malas, mas uma herança familiar de gerações dedicadas
                    à viticultura e ao amor pelos vinhos finos.
                  </p>
                  <p>
                    Ao desembarcar em Bento Gonçalves, no coração da Serra Gaúcha, o casal viu a oportunidade
                    de unir a tradição italiana com o crescente mercado brasileiro de vinhos. Assim nasceu a
                    Vinheria Agnello, uma pequena loja que rapidamente se tornou referência em curadoria e
                    atendimento personalizado.
                  </p>
                  <p>
                    Por mais de três décadas, a família Agnello tem se dedicado a selecionar os melhores vinhos
                    nacionais e importados, sempre com o mesmo cuidado e paixão do primeiro dia. Hoje, com a
                    transformação digital, levamos nossa expertise para todo o Brasil, mantendo o mesmo
                    compromisso com a qualidade e o atendimento personalizado.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1714836403365-6659229f4d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Wine tasting"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-[#FAF8F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-['Playfair_Display'] text-4xl text-[#2C2C2C] mb-4">
                Nossos Valores
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Princípios que guiam nossa jornada e garantem a excelência em cada garrafa
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Wine,
                  title: 'Qualidade',
                  description: 'Seleção rigorosa dos melhores vinhos nacionais e importados'
                },
                {
                  icon: Heart,
                  title: 'Paixão',
                  description: 'Amor genuíno pelo mundo dos vinhos e pela cultura que o cerca'
                },
                {
                  icon: Award,
                  title: 'Excelência',
                  description: 'Compromisso com o padrão mais alto em produtos e serviços'
                },
                {
                  icon: Users,
                  title: 'Atendimento',
                  description: 'Experiência personalizada que valoriza cada cliente'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#6D0F2C] rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl text-[#2C2C2C] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-['Playfair_Display'] text-4xl text-[#2C2C2C] mb-4">
                Conheça o Sr. Giulio
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nosso sommelier digital, disponível 24/7 para ajudá-lo a encontrar o vinho perfeito
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#8B1538] to-[#6D0F2C] rounded-2xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto"
            >
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wine className="w-12 h-12" />
              </div>
              <h3 className="font-['Playfair_Display'] text-3xl mb-4">
                Sr. Giulio - Seu Sommelier Digital
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Inspirado no fundador da Vinheria Agnello, o Sr. Giulio digital traz toda a experiência
                e conhecimento de mais de 30 anos no mundo dos vinhos. Faça nosso quiz de recomendação
                ou converse com ele através do chat para descobrir o vinho ideal para você.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/quiz"
                  className="px-8 py-3 bg-white text-[#8B1538] rounded-xl font-semibold hover:bg-[#FAF8F3] transition-colors"
                >
                  Fazer Quiz
                </Link>
                <button
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  Falar com Sr. Giulio
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-[#2C2C2C] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '40+', label: 'Anos de Experiência' },
                { number: '500+', label: 'Vinhos Selecionados' },
                { number: '10k+', label: 'Clientes Satisfeitos' },
                { number: '100%', label: 'Garantia de Qualidade' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-['Playfair_Display'] text-5xl md:text-6xl font-semibold text-[#D4AF37] mb-2">
                    {stat.number}
                  </p>
                  <p className="text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
