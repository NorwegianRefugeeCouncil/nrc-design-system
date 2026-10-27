FROM node:22.23.4
 
WORKDIR /usr/src/app
 
COPY package.json .
COPY yarn.lock .
 
RUN yarn install

COPY . .
