# Этап сборки
FROM node:18 AS build

WORKDIR /app
COPY ./frontend ./
RUN npm install
RUN npm run build

# Этап запуска
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
