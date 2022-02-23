FROM node:lts-alpine3.14

WORKDIR /api

COPY ./api/package*.json /api/

RUN npm ci

COPY ./api /api/

EXPOSE 9000

CMD ["npm", "start"]
