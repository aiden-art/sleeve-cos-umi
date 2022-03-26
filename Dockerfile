# dockerfile
# build stage
FROM node:lts-alpine as build-stage

ENV NODE_OPTIONS="–max_old_space_size=4096"

# make directory
RUN mkdir -p /app
RUN chmod -R 777 /app

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install

# build app
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY  nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
