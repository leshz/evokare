FROM mcr.microsoft.com/devcontainers/typescript-node:22-bookworm

# Instalar herramientas adicionales
RUN apt-get update && apt-get install -y \
    git \
    curl \
    vim \
    zsh

# Configurar el usuario por defecto
USER node

# Establecer el directorio de trabajo  
WORKDIR /workspace

# Instalar herramientas globales de Node.js
RUN npm install -g \
    @next/codemod \
    vercel \
    prettier \
    eslint

# Exponer el puerto por defecto de Next.js
EXPOSE 3000 