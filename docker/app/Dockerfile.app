FROM node:12.13.1

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "server/index.js"]
