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

## 📊 Google Analytics (Futuro)

Instruções para configuração do Google Analytics serão adicionadas na Fase 3.

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

