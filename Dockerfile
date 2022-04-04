#DEV
FROM node:gallium AS development

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/compass

COPY . /opt/compass

RUN rm yarn.lock
RUN yarn global add typescript && yarn global add @nestjs/cli &&  yarn global add ts-node
RUN yarn add -D @types/node
RUN yarn && yarn build

CMD ["node", "/dist/main"]