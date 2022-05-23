# Stage 1
FROM node:14 as build-stage

WORKDIR /loud-ui
COPY package.json .
RUN npm install
COPY . .

# ARG REACT_APP_API_BASE_URL
# ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

RUN npm run build

# Stage 2
# FROM nginx:1.17.0-alpine

# COPY --from=build-stage /loud_client/build /usr/share/nginx/html
# COPY --from=build-stage /loud_client/build /usr/share/nginx/test
# EXPOSE $REACT_DOCKER_PORT
# EXPOSE 3000

# CMD nginx -g 'daemon off;'


FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /loud-ui/build /usr/share/nginx/html

CMD nginx -g 'daemon off;'