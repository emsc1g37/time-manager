FROM node:10
RUN mkdir /frond-end
ADD . /front-end
WORKDIR /front-end
RUN npm install
EXPOSE 80
CMD ["npm", "run", "serve"]