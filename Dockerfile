FROM node:14.21.3

RUN npm install -g http-server

WORKDIR /src

COPY . .

RUN npm install

RUN npm run build-prod

EXPOSE 8080
CMD [ "http-server", "dist" ]