FROM node:latest-alpine

WORKDIR /User-Interface

ENV PATH /User-Interface/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@4.0.3 -g

COPY . ./

CMD ["npm", "start"]