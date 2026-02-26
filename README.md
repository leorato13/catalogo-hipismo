# Catálogo de Peças Únicas – Hipismo

Catálogo estático de peças de hipismo. Sem carrinho, login ou banco de dados. Roda 100% localmente e pode ser publicado na Vercel (plano gratuito).

## Como rodar localmente

1. **Instalar dependências**
   ```bash
   npm install
   ```

2. **Subir o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

3. Abra no navegador: **http://localhost:5173/**

O projeto usa **Vite + React**. Não depende de Mocha, Cloudflare nem serviços externos.

## Como editar os produtos

Todos os produtos vêm de um único arquivo:

- **`src/react-app/data/products.ts`**

Abra esse arquivo e edite o array `products`. Cada item tem:

- `id` – identificador único (ex.: `"1"`, `"2"`)
- `name` – nome da peça
- `category` – uma de: `"Culote"`, `"Camisa de Prova"`, `"Camisa de Treino"`, `"Colete"`, `"Jaqueta"`, `"Acessório"`
- `size` – ex.: `"M"`, `"38"`, `"PP"`, `"G"`
- `condition` – `"Nova com pequeno defeito"` | `"Coleção antiga"` | `"Usada"`
- `observations` – texto livre
- `price` – número (em reais)
- `status` – `"Disponível"` | `"Reservado"` | `"Vendido"`
- `image` – URL da imagem (pode ser link externo ou imagem na pasta `public/`)

Para **novos tamanhos ou categorias**, edite também os arrays `sizes` e `categories` no mesmo arquivo.

## Número do WhatsApp

No arquivo **`src/react-app/pages/Home.tsx`**, na linha em que aparece `WHATSAPP_NUMBER`, troque `"5511999999999"` pelo seu número (código do país + DDD + número, sem `+` ou espaços).

## Build para produção

```bash
npm run build
```

A pasta **`dist/`** será gerada com os arquivos estáticos. Essa pasta é o que você sobe para a Vercel.

## Publicar na Vercel (grátis)

1. Crie uma conta em [vercel.com](https://vercel.com).
2. Conecte seu repositório Git (GitHub, GitLab ou Bitbucket) ou use o Vercel CLI.
3. O Vercel detecta Vite automaticamente. O comando de build deve ser `npm run build` e a pasta de saída `dist`.
4. Faça o deploy. O site ficará online com uma URL gratuita.

## Scripts disponíveis

| Comando        | Descrição                          |
|----------------|------------------------------------|
| `npm run dev`  | Sobe o site em modo desenvolvimento |
| `npm run build`| Gera a versão para produção em `dist/` |
| `npm run lint` | Verifica o código com ESLint       |

## Estrutura do projeto

- **`src/react-app/`** – código do catálogo (React)
- **`src/react-app/data/products.ts`** – lista de produtos (edite aqui)
- **`src/react-app/pages/Home.tsx`** – página principal e número do WhatsApp
- **`index.html`** – página HTML inicial
- **`vite.config.ts`** – configuração do Vite (sem Mocha/Cloudflare)

Projeto configurado para rodar só com Node, sem backend, sem banco de dados e sem serviços pagos.
