FROM node:12

MAINTAINER Alexander Eimer

WORKDIR /app
EXPOSE 3000
COPY . .
RUN npm install --prod

CMD ["node", "index.js"]
