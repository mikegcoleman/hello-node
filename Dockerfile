FROM node:19-alpine3.15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY app.js ./

EXPOSE 3000
CMD [ "node", "app.js" ]
