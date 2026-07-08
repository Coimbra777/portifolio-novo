# syntax=docker/dockerfile:1

# --- Build stage -----------------------------------------------------------
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Runtime stage -----------------------------------------------------------
# Nitro's node-server preset bundles the app into standalone .mjs files under
# .output/server — no node_modules needed at runtime, so the final image only
# needs the build output and a Node runtime.
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/.output ./.output

# Railway injects PORT at runtime; Nitro's node-server preset reads it
# automatically (defaults to 3000 if unset).
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
