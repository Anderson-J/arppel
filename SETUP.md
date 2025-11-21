# Configuração do Projeto Arppel

Este documento contém instruções de configuração para funcionalidades que requerem configuração externa.

## 📧 Formulário de Contato (Formspree)

O formulário de contato está configurado para usar o Formspree, um serviço gratuito de processamento de formulários.

### Passos para Configuração

1. **Criar conta no Formspree**
   - Acesse: https://formspree.io/
   - Clique em "Get Started"
   - Crie uma conta gratuita

2. **Criar novo formulário**
   - No dashboard, clique em "New Form"
   - Nomeie o formulário (ex: "Arppel Contact Form")
   - Copie o Form ID gerado (formato: `xyzabc123`)

3. **Atualizar o código**
   - Abra o arquivo: `src/components/Contact.jsx`
   - Localize a linha 34: `const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {`
   - Substitua `YOUR_FORM_ID` pelo seu Form ID
   - Exemplo: `https://formspree.io/f/xyzabc123`

4. **Configurações opcionais no Formspree**
   - Email de notificação (para onde os formulários serão enviados)
   - Auto-resposta ao remetente
   - Proteção contra spam

### Plano Gratuito

O plano gratuito do Formspree oferece:
- 50 submissões/mês
- Proteção básica contra spam
- Notificações por email

---

## 📊 Google Analytics (GA4) + Docker

Toda a integração com Google Analytics 4 é feita via `react-ga4` e roda **apenas dentro do container Docker** (nenhuma dependência precisa ser instalada na máquina host).

### 1. Subir o ambiente em Docker

```powershell
cd C:\Users\Anderson\Documents\arppel\arppel
docker-compose up --build
```

O comando acima builda a imagem, instala as dependências dentro do container e inicia o Vite em `http://localhost:5173`.

### 2. Instalar novas dependências (ex: react-ga4) somente via Docker

Sempre que precisar adicionar uma biblioteca, use o container em vez de `npm` local:

```powershell
cd C:\Users\Anderson\Documents\arppel\arppel
docker-compose exec app npm install react-ga4 --save
```

Isso garante que:

- As dependências são instaladas dentro do container (`node_modules` não depende do host).
- `package.json` e `package-lock.json` são atualizados no diretório do projeto (via volume).

### 3. Configurar o Google Analytics 4

1. Crie uma propriedade GA4 no Google Analytics e copie o **Measurement ID** (formato `G-XXXXXXXXXX`).
2. Crie um arquivo `.env.local` na raiz do projeto com:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. Reinicie o `docker-compose up` se já estiver rodando para que o Vite leia as novas variáveis.

O código já está preparado para:

- Enviar page views da landing (`useAnalyticsPageView`).
- Enviar eventos de clique de CTA (Hero + Pricing via `useCtaTracking`).
- Registrar submissões do formulário de contato (`trackFormSubmit`).

---

## 🚀 Deploy (Vercel)

O projeto está configurado para deploy automático no Vercel.

### Configuração Inicial

1. **Criar conta no Vercel**
   - Acesse: https://vercel.com/
   - Faça login com sua conta GitHub

2. **Importar projeto**
   - No dashboard, clique em "Add New..." → "Project"
   - Selecione o repositório `Anderson-J/arppel`
   - Clique em "Import"

3. **Configurar build**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   
   (Estas configurações já estão no `vercel.json`)

4. **Variáveis de ambiente** (opcional, para futuras integrações)
   - Clique em "Environment Variables"
   - Adicione: `VITE_FORMSPREE_ID` (quando configurar Formspree)

5. **Deploy**
   - Clique em "Deploy"
   - Aguarde o build (geralmente 1-2 minutos)

### Deploy Automático

Após a configuração inicial:
- Cada push para `main` cria um deploy de produção automaticamente
- Pull requests criam preview deployments
- URL de produção: `arppel.vercel.app` (ou domínio customizado)

### Domínio Customizado (Opcional)

1. No dashboard do projeto, vá para "Settings" → "Domains"
2. Adicione seu domínio
3. Configure os DNS conforme instruções da Vercel

### Comandos Úteis

```bash
# Instalar Vercel CLI (opcional)
npm i -g vercel

# Deploy manual
vercel

# Deploy para produção
vercel --prod
```

---

## 🧪 Testes E2E com Playwright via Docker

Os testes de ponta a ponta (E2E) usam `@playwright/test` e rodam **dentro do container Docker**, sem depender de Node/npm instalados na máquina host.

### 1. Instalação (já feita na Fase 5)

```powershell
cd C:\Users\Anderson\Documents\arppel\arppel
docker-compose exec app npm install -D @playwright/test
```

### 2. Arquivos esperados

- `playwright.config.mjs` na raiz do projeto, com:
   - `testDir: './tests/e2e'`
   - `use.baseURL: 'http://localhost:5173'`
   - `webServer` opcional, caso você queira que o Playwright suba o Vite automaticamente.
- Testes em `tests/e2e`, por exemplo: `tests/e2e/home.spec.mjs` com um smoke test da landing.

### 3. Como executar os testes E2E

1. Certifique-se de que o ambiente Docker está rodando:

```powershell
cd C:\Users\Anderson\Documents\arppel\arppel
docker-compose up --build
```

2. Em outro terminal, rode os testes dentro do container:

```powershell
docker-compose exec app npx playwright test
```

ou, se houver script no `package.json`:

```powershell
docker-compose exec app npm run test:e2e
```

### 4. Observações

- Se o Playwright solicitar instalação de browsers, use:

```powershell
docker-compose exec app npx playwright install --with-deps
```

- A integração na CI/CD pode reaproveitar o mesmo padrão: subir o container da app, rodar `npm run test:e2e` dentro dele e falhar o job em caso de testes quebrados.

