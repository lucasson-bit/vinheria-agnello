# Vinheria Agnello - E-commerce de Vinhos

E-commerce completo de vinhos premium, desenvolvido com React, TypeScript e Tailwind CSS.

## 🍷 Sobre o Projeto

A Vinheria Agnello é uma plataforma de e-commerce que digitaliza a excelência no atendimento da família Agnello, oferecendo uma experiência de compra de vinhos premium com curadoria especializada.

## ✨ Funcionalidades Principais

### 1. **Quiz de Recomendação "Sr. Giulio"**
- Sistema interativo de perguntas para identificar o perfil do cliente
- Resultado baseado em cores que representam categorias de vinhos
- Recomendações personalizadas de acordo com preferências e ocasião

### 2. **ChatBot Sr. Giulio**
- Assistente virtual disponível em todas as páginas
- Botão flutuante no canto inferior direito
- Ajuda na escolha de vinhos e tira dúvidas sobre o catálogo

### 3. **Catálogo de Produtos**
- Listagem completa de vinhos com filtros avançados
- Filtros por: tipo, doçura, corpo e faixa de preço
- Cards informativos com imagem, nome, preço e avaliação

### 4. **Página de Detalhes do Produto**
- Informações completas sobre o vinho
- Ficha técnica detalhada
- Sistema de avaliações com estrelas e comentários
- Sugestões de harmonização
- Botão para adicionar ao carrinho

### 5. **Carrinho de Compras**
- Gerenciamento completo de itens
- Ajuste de quantidades
- Cálculo automático do total
- Visualização resumida dos produtos

### 6. **Checkout Seguro**
- Fluxo dividido em 2 etapas:
  1. Informações de entrega
  2. Forma de pagamento (Cartão, PIX, Boleto)
- Validação de campos obrigatórios
- Resumo do pedido

### 7. **Página Sobre**
- História da família Agnello
- Valores e diferenciais competitivos
- Destaque para transporte climatizado e embalagem segura

## 🎨 Design Mobile-First

O projeto foi desenvolvido com abordagem Mobile-First, otimizado para telas de 412px de largura, mas totalmente responsivo.

## 🛠️ Tecnologias Utilizadas

- **React 18.3.1** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **React Router 7** - Roteamento e navegação
- **Tailwind CSS 4** - Estilização utility-first
- **Lucide React** - Ícones modernos
- **Vite** - Build tool e dev server

## 📁 Estrutura do Projeto

```
/src
  /app
    /components        # Componentes reutilizáveis
      - Header.tsx
      - ChatBot.tsx
      - ChatBotButton.tsx
    /pages            # Páginas da aplicação
      - HomePage.tsx
      - ProductListPage.tsx
      - ProductDetailPage.tsx
      - QuizPage.tsx
      - QuizResultPage.tsx
      - CartPage.tsx
      - CheckoutPage.tsx
      - OrderConfirmationPage.tsx
      - AboutPage.tsx
    - App.tsx         # Componente principal com rotas
  /context            # Context API
    - CartContext.tsx # Gerenciamento do carrinho
  /data               # Dados mockados
    - wines.ts        # Catálogo de vinhos
    - quiz.ts         # Perguntas e lógica do quiz
  /styles             # Estilos globais
```

## 🚀 Páginas Implementadas

1. **/** - Página inicial com hero, categorias e CTAs
2. **/produtos** - Listagem de produtos com filtros
3. **/produto/:id** - Detalhes do produto
4. **/quiz** - Quiz de recomendação interativo
5. **/quiz/resultado** - Resultado do quiz com vinhos recomendados
6. **/carrinho** - Carrinho de compras
7. **/checkout** - Processo de finalização de compra
8. **/pedido/confirmado** - Confirmação do pedido
9. **/sobre** - Sobre a Vinheria Agnello

## 🎯 Diferenciais Competitivos

### Curadoria Digital
- Quiz inteligente que "virtualiza" o atendimento do Sr. Giulio
- Recomendações baseadas em perfil e preferências

### Confiança e Transparência
- Destaque visual para transporte climatizado
- Embalagem segura garantida
- História e valores da família em destaque

### Categorização Inteligente
- Filtros por corpo, região, uva, doçura e guarda
- Sistema de cores para facilitar identificação

### Prova Social
- Sistema completo de avaliações
- Comentários de clientes reais

## 💡 Como Usar

### Navegação Principal
Use o menu hambúrguer no canto superior esquerdo para acessar todas as páginas.

### Fazer o Quiz
1. Clique em "Fazer Quiz de Recomendação" na página inicial
2. Responda as 4 perguntas sobre suas preferências
3. Receba uma cor que representa seu perfil
4. Veja os vinhos recomendados para você

### Comprar Vinhos
1. Navegue pelo catálogo em "Produtos"
2. Use os filtros para refinar sua busca
3. Clique em um vinho para ver detalhes
4. Adicione ao carrinho
5. Finalize a compra no checkout

### ChatBot Sr. Giulio
Clique no botão vermelho flutuante no canto inferior direito para abrir o chat e fazer perguntas sobre vinhos.

## 🎨 Paleta de Cores

- **Primária**: #8B0000 (Vinho tinto)
- **Secundária**: #2C1810 (Marrom escuro)
- **Destaque**: #FFD700 (Dourado)
- **Neutros**: Cinzas variados

## 📦 Dados Mockados

O projeto inclui 6 vinhos de exemplo com informações completas:
- Reserva Tinto Cabernet Sauvignon
- Chardonnay Premium
- Merlot Reserva Especial
- Rosé Elegance
- Espumante Brut Nature
- Tannat Gran Reserva

## 🔒 Segurança e Privacidade

⚠️ **Importante**: Este é um protótipo frontend. Não utilize para coletar dados pessoais ou informações sensíveis reais. Para implementação em produção, conecte a um backend seguro.

## 🌟 Próximos Passos Sugeridos

1. Integrar com backend (Supabase, Firebase, etc.)
2. Implementar autenticação de usuários
3. Adicionar sistema de busca por texto
4. Implementar filtros de região vinícola
5. Adicionar mais vinhos ao catálogo
6. Criar sistema de favoritos
7. Implementar rastreamento de pedidos
8. Adicionar integração com gateway de pagamento real

---

Desenvolvido com ❤️ e 🍷 para a Vinheria Agnello
