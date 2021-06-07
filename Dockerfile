FROM node:alpine

WORKDIR /User-Interface

ENV PATH /User-Interface/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

CMD ["npm", "start"]