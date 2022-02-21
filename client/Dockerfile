FROM node:lts-alpine3.14

WORKDIR /client

COPY ./client/package*.json /client/

RUN npm ci

COPY ./client /client/

EXPOSE 3000

CMD ["npm", "start"]
