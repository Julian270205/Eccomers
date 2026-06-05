# ── Stage 1: Builder ──────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias primero (aprovecha cache de Docker)
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar código fuente
COPY . .

# Generar Prisma client
RUN npx prisma generate

# Compilar CSS de producción
RUN npx tailwindcss -i ./public/css/input.css -o ./public/css/output.css --minify

# ── Stage 2: Production ───────────────────────────────────────
FROM node:20-alpine AS production

WORKDIR /app

# Instalar dumb-init para manejo correcto de señales
RUN apk add --no-cache dumb-init

# Usuario no-root por seguridad
RUN addgroup -g 1001 -S nodejs && adduser -S nodeuser -u 1001

# Copiar desde el stage builder
COPY --from=builder --chown=nodeuser:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodeuser:nodejs /app/public/css/output.css ./public/css/output.css
COPY --chown=nodeuser:nodejs . .

# Crear directorio de imágenes con permisos correctos
RUN mkdir -p ./public/images/products && chown -R nodeuser:nodejs ./public/images

# Usar usuario no-root
USER nodeuser

# Exponer el puerto
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/', (r) => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

# Arrancar con dumb-init
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]
