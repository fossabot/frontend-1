FROM node:alpine

WORKDIR /var/www/frontend

RUN apk add --update \
    git \
    && apk add --no-cache bash

COPY ./package.json /var/www/frontend/package.json

RUN npm install -g pnpm

RUN pnpm install

# RUN git clone https://github.com/Nevatrip/frontend.git ./
# RUN pnpm install --ignore-scripts

# COPY .env /var/www/nevatrip/frontend/.env

# RUN npm run make

EXPOSE 3000
CMD [ "npm", "run", "prod" ]
