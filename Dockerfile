# ===========> try 1 
# # Stage 1
# FROM node:14 as build-stage

# WORKDIR /loud-ui
# COPY package.json .
# RUN npm install
# COPY . .

# # ARG REACT_APP_API_BASE_URL
# # ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

# RUN npm run build

# # Stage 2
# # FROM nginx:1.17.0-alpine

# # COPY --from=build-stage /loud_client/build /usr/share/nginx/html
# # COPY --from=build-stage /loud_client/build /usr/share/nginx/test
# # EXPOSE $REACT_DOCKER_PORT
# # EXPOSE 3000

# # CMD nginx -g 'daemon off;'


# # FROM nginx
# FROM nginx:1.17.0-alpine
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build-stage  /loud-ui/build /usr/share/nginx/html

# CMD nginx -g 'daemon off;'


# FROM node:alpine
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN npm i
# CMD ["npm", "run", "start"]


# ===========> try 2
# stage1 as builder
# FROM node:10-alpine as builder

# # copy the package.json to install dependencies
# COPY package.json package-lock.json ./

# # Install the dependencies and make the folder
# RUN npm install && mkdir /react-ui && mv ./node_modules ./react-ui

# WORKDIR /react-ui

# COPY . .

# # Build the project and copy the files
# RUN npm run build


# FROM nginx:alpine

# #!/bin/sh

# # COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*


# RUN rm /etc/nginx/conf.d/*

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# # Copy from the stahg 1
# COPY --from=builder /react-ui/build /usr/share/nginx/html

# EXPOSE 3000 80

# ENTRYPOINT ["nginx", "-g", "daemon off;"]


# ===========> try 4
# stage1 as builder
# FROM node:10-alpine as builder

# # copy the package.json to install dependencies
# # COPY package.json package-lock.json ./

# # # Install the dependencies and make the folder
# # # RUN npm install && mkdir /app && mv ./node_modules ./app
# # RUN yarn && mkdir /app && mv ./node_modules ./app

# # WORKDIR /app

# # COPY . .

# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN yarn 


# # Build the project and copy the files
# # RUN npm run build
# RUN yarn build

# CMD ["yarn", "start:node"]

# FROM nginx:alpine

# #!/bin/sh

# # COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*


# RUN rm /etc/nginx/conf.d/*

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# # Copy from the stahg 1
# # COPY --from=builder /app/build /usr/share/nginx/html

# EXPOSE 4000 80

# # ENTRYPOINT ["nginx", "-g", "daemon off;"]



# FROM node:14

# WORKDIR /bezkoder-api
# COPY package.json .
# RUN npm install
# COPY . .
# CMD npm start

# FROM node:alpine
# # WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN yarn 
# CMD ["yarn", "start:node"]

FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY . ./my-app/
RUN  cd my-app && npm install && npm run build


FROM node:10 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/my-app/build ./my-app/build
# COPY api/package*.json ./api/
# RUN cd api && npm install
# COPY api/server.js ./api/

EXPOSE 4000

CMD ["node", "./server.js"]
