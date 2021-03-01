#FROM registry.redhat.io/rhel8/nodejs-14 AS builder

# Add application sources
#USER root
#ADD . .

# Install the dependencies
#RUN npm install

# Run script uses standard ways to run the application
#CMD npm ci && npm run build 
FROM node:14.1-alpine AS builder

WORKDIR /opt/web
COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build

FROM registry.access.redhat.com/ubi8/nginx-118

ADD nginx/nginx.conf "${NGINX_CONF_PATH}"
ADD nginx/default.conf "${NGINX_CONFIGURATION_PATH}"
ADD nginx/alias.conf "${NGINX_DEFAULT_CONF_PATH}"

COPY --from=builder /opt/web/build ./
RUN ls

CMD nginx -g "daemon off;"