FROM node:latest
RUN npm install -g http-server
RUN mkdir /frond-end
WORKDIR /front-end
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD ["http-server", "dist"]