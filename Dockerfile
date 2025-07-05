# Сборка React-приложения на основе Vite
FROM node:18 AS build

WORKDIR /app
COPY ./frontend ./
RUN npm install
RUN npm run build

# Этап сервера (Nginx)
FROM nginx:alpine

# Копируем статические файлы Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем кастомную конфигурацию Nginx
COPY nginx.conf /etc/nginx/nginx.conf
