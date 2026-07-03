# Mentoria 4D Express — Landing Page

Landing page do produto de entrada (R$299), construída em Next.js 14 + Tailwind, seguindo a
identidade visual do site principal (dourado #D4A373, fundo escuro, Montserrat).

## ⚠️ Pendências antes de publicar

1. **Checkout:** o link de pagamento (Hotmart) ainda não existe pro produto Express. Configure a
   variável `NEXT_PUBLIC_CHECKOUT_URL` (veja `.env.example`) assim que o produto estiver
   cadastrado. Até lá, os botões apontam para `#`.
2. **Meta Pixel:** o `app/layout.tsx` está usando o mesmo Pixel ID do site principal
   (`1578784523492094`). Se vocês quiserem medir o funil do Express separadamente, troque pelo
   Pixel dedicado.
3. **Domínio:** ainda não configurado. Depois do deploy na Vercel, aponte o domínio/subdomínio que
   vocês quiserem usar (ex: `express.mentoria4d.com` ou similar).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

Já testado nesse ambiente — build passa sem erros.

## Subindo pro GitHub (repositório novo)

```bash
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git branch -M main
git push -u origin main
```

## Deploy na Vercel

1. Importe o repositório em https://vercel.com/new
2. Configure a variável de ambiente `NEXT_PUBLIC_CHECKOUT_URL` no painel da Vercel
3. Deploy

## Estrutura da copy

A página segue a ordem: Hero → Storytelling (hook de origem) → Quebra de crença falsa → Bloco
"mesmo que" → Antes/Depois espelhado → Prova (case Jean Pierre) → Stack do currículo → Preço
ancorado (R$299 → upsell R$1.597) → Garantia (7 dias) → CTA final.
