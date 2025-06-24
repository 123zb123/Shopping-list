FROM node:20-slim

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY . .

RUN pnpm install
RUN pnpm run build

EXPOSE 3001

CMD ["node", "dist/server.js"]
