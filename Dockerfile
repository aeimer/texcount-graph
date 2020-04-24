FROM node:12

MAINTAINER Alexander Eimer

WORKDIR /app
EXPOSE 3000
RUN echo '[]' > data.json
COPY . .
RUN npm install --prod

CMD ["node", "index.js"]
