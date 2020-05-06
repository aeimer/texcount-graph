FROM node:12

MAINTAINER Alexander Eimer

WORKDIR /app
EXPOSE 3000
RUN echo '[]' > data.json
COPY . .
RUN npm install --prod
RUN sed -i s/APP_VERSION/`date +%s`/ index.js

CMD ["node", "index.js"]
