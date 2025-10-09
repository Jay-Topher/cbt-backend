# path: Dockerfile
FROM node:22-alpine AS base

# Use npm (no need to install, comes with Node.js)

WORKDIR /app
COPY package.json package-lock.json pnpm-lock.yaml* ./
RUN npm install --frozen-lockfile

COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

# Build
RUN npm run prisma:generate && npm run build

# --- Runtime image ---
FROM node:22-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app

# Copy built artifacts and node_modules
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/dist ./dist
COPY --from=base /app/prisma ./prisma
COPY package.json ./

# Expose app port
EXPOSE 4000

# Run migrations on start, then launch
CMD ["sh", "-c", "node -e \"console.log('Running prisma migrate deploy...')\" && \
  npx prisma migrate deploy && \
  node dist/server.js"]
