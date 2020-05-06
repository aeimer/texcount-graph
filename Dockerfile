FROM node:12-alpine

MAINTAINER Alexander Eimer

WORKDIR /app

ENV NODE_ENV production

COPY package*.json .
RUN npm ci --only=production

COPY . .
RUN echo '[]' > data.json
RUN sed -i s/APP_VERSION/`date +%s`/ index.js

EXPOSE 3000
CMD ["node", "index.js"]
