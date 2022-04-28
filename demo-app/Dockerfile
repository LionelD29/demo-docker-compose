# stage 1
FROM node:18.0.0-alpine3.15 AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:1.20.2-alpine
COPY --from=node /app/dist/demo-app /usr/share/nginx/html
