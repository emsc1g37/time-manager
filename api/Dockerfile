FROM node:10
RUN mkdir /api
ADD . /api
WORKDIR /api
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]