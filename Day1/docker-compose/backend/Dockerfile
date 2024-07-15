FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

COPY run-migrations.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/run-migrations.sh

ENTRYPOINT ["run-migrations.sh"]

CMD ["npm", "start"]
