FROM node:10.15.3

WORKDIR /webdriveio

COPY package*.json ./

RUN npm install


