# Используем node для сборки
FROM node:18-alpine AS builder

WORKDIR /

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# Используем nginx для отдачи статики
FROM nginx:alpine

COPY --from=builder /dist /usr/share/nginx/html

# Копируем конфиг nginx
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
