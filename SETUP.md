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

## 🚀 Deploy

Instruções de deploy serão adicionadas na Fase 6.
