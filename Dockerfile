FROM node:17.0.1-alpine3.14

COPY package.json tsconfig.json /build/

WORKDIR /build

RUN yarn install

COPY ./src /build/src

ENTRYPOINT ["yarn", "dev"]