FROM node:20 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:121
COPY --from=node /app/dist/gerenciador-materias /usr/share/nginx/html

EXPOSE 80