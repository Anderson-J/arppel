# Arppel - Landing Page DevOps & Cloud

> Landing page moderna e responsiva para consultoria especializada em DevOps, SRE e Cloud Infrastructure.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=github-actions)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)

## 📋 Sobre o Projeto

Arppel é uma landing page desenvolvida para uma boutique de DevOps & Cloud que oferece infraestrutura de Big Tech para Software Houses e Startups. O projeto foi construído com foco em performance, responsividade e experiência do usuário.

### ✨ Características

- 🎨 **Design Moderno**: Interface clean com estilo "Tech Minimalist"
- 📱 **Totalmente Responsivo**: Otimizado para mobile, tablet e desktop
- 🐳 **Dockerizado**: Ambiente de desenvolvimento isolado e reproduzível
- 🚀 **CI/CD**: Pipeline automatizada com GitHub Actions
- ♿ **Acessível**: Componentes baseados em Radix UI
- 🌐 **SEO Otimizado**: Meta tags e estrutura semântica

## 🛠️ Tecnologias

- **Frontend**: React 19 + Vite 7
- **Estilização**: Tailwind CSS 3.4
- **Ícones**: Lucide React
- **Componentes UI**: Radix UI (Tabs, Accordion)
- **Containerização**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Linting**: ESLint

## 🚀 Como Executar

### Pré-requisitos

- Docker e Docker Compose instalados
- Git

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Anderson-J/arppel.git
cd arppel
```

2. Inicie o ambiente Docker:
```bash
docker-compose up -d
```

3. Acesse a aplicação:
```
http://localhost:5173
```

### Comandos Úteis

```bash
# Parar o ambiente
docker-compose down

# Ver logs em tempo real
docker-compose logs -f app

# Executar build de produção
docker-compose exec app npm run build

# Executar linter
docker-compose exec app npm run lint

# Executar auditoria de segurança
docker-compose exec app npm audit
```

## 📁 Estrutura do Projeto

```
arppel/
├── .github/
│   └── workflows/
│       └── ci.yml              # Pipeline CI/CD
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Cabeçalho com navegação
│   │   ├── Hero.jsx            # Seção principal
│   │   ├── Pillars.jsx         # Pilares de serviço
│   │   ├── Methodology.jsx     # Metodologia de trabalho
│   │   ├── Pricing.jsx         # Planos e preços
│   │   ├── Faq.jsx             # FAQ interativo
│   │   ├── Footer.jsx          # Rodapé
│   │   └── ui/                 # Componentes reutilizáveis
│   ├── lib/
│   │   └── utils.js            # Funções utilitárias
│   ├── App.jsx                 # Componente raiz
│   └── main.jsx                # Entry point
├── Dockerfile                  # Configuração Docker
├── docker-compose.yml          # Orquestração de containers
├── tailwind.config.js          # Configuração Tailwind
└── vite.config.js              # Configuração Vite
```

## 🎨 Design System

### Paleta de Cores

- **Deep Blue**: `#0f172a` (Slate-900) - Cor primária
- **Neon Green**: `#a3e635` (Lime-400) - Cor de destaque
- **Backgrounds**: Slate-50, Slate-100
- **Texto**: Slate-600, Slate-900

### Tipografia

- **Fonte Principal**: Inter, Roboto
- **Tamanhos**: Sistema responsivo com Tailwind

## 🧩 Componentes Principais

### Header
- Navegação sticky com backdrop blur
- Links para seções (#solutions, #methodology, #pricing, #faq)
- CTA principal

### Hero
- Título impactante com gradiente
- Duplo CTA
- Card de visualização de código (Terraform)
- Social proof (Azure, AWS, Kubernetes)

### Pillars
- 4 pilares de serviço em grid responsivo
- Ícones customizados

### Methodology
- Explicação do modelo "Solution-First"
- Fluxo visual de tickets
- Lista de benefícios

### Pricing
- 3 planos (Starter, Builder, Enterprise)
- Comparação de features
- CTAs por plano

### FAQ
- 3 categorias em tabs
- Accordion para perguntas/respostas
- Otimizado para mobile

## 🔄 CI/CD Pipeline

A pipeline automatizada executa:

1. **Lint**: Verificação de código com ESLint
2. **Security Audit**: Análise de vulnerabilidades
3. **Build**: Build de produção

Triggers: Push e Pull Requests para `main`

## 📦 Build de Produção

```bash
# Via Docker
docker-compose exec app npm run build

# Localmente (requer Node.js 20+)
npm install
npm run build
```

Os arquivos otimizados serão gerados em `dist/`.

## 🧪 Testes

```bash
# Lint
docker-compose exec app npm run lint

# Audit
docker-compose exec app npm audit
```

## 🚀 Deploy

O projeto está pronto para deploy em:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Via GitHub Actions

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Próximos Passos

- [ ] Adicionar animações de scroll (AOS/Framer Motion)
- [ ] Implementar formulário de contato funcional
- [ ] Adicionar Google Analytics
- [ ] Otimizar imagens (WebP)
- [ ] Adicionar testes E2E (Playwright/Cypress)
- [ ] Configurar deploy automático (Vercel/Netlify)

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**Anderson J**

- GitHub: [@Anderson-J](https://github.com/Anderson-J)
- Projeto: [Arppel](https://github.com/Anderson-J/arppel)

---

⭐ Se este projeto foi útil, considere dar uma estrela!
