FROM node:17.0.1-alpine3.14

COPY package.json tsconfig.json /build/
COPY ./src /build/src

WORKDIR /build

RUN yarn install

RUN ls

ENTRYPOINT ["yarn", "dev"]