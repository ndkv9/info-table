FROM node:16

WORKDIR /usr/src/app

COPY package.json yarn.lock

RUN npm install yarn

RUN yarn
