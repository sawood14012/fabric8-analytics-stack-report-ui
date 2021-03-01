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
RUN ls

FROM registry.access.redhat.com/ubi8/nginx-118

COPY --from=builder /opt/web/build /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY  ./nginx.config /etc/nginx/conf.d/default.conf

CMD nginx -g "daemon off;"