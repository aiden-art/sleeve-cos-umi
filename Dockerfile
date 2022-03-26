# dockerfile
# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
RUN chmod -R 777 /app
COPY package*.json ./
RUN rm -rf node_modulesa
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY  nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
