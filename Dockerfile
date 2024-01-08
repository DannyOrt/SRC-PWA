# Usa la imagen de Node.js como base
FROM node:18-alpine AS base

# Instala dependencias necesarias para Chromium
# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json a la imagen
COPY package.json /

# Instala las dependencias de la aplicación
RUN yarn

# Copia el resto de la aplicación
COPY . /

# Ejecuta el comando 'npm run build' para construir la aplicación Next.js
RUN yarn build

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Inicia la aplicación cuando se ejecuta el contenedor
CMD ["yarn", "start"]
