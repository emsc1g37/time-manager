# Time Manager

This project is a time tracking system for the Gotham City. It is composed of three components:
- The API: it is responsible for manipulating the database and ensuring a secure access to it. It exposes several HTTP endpoints.
- The database: this is a regular PostgreSQL database server that is packed into a Docker image.
- The Front end: this is the component with which the users interacts. It is a web application that is built using VueJs.

## Installation

This project uses Docker, and each of the three parts are ment to be run in their own container. A typical docker-compose.yml could look like this:

```
version: "3"
services:
  api:
    image: datatriny/time-manager:api-latest
    ports: 
      - 3000:3000
    command: bash -c 'while !</dev/tcp/db/5432; do sleep 1; done; npm start'
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgres://postgres:root@db:5432/time_manager
      - PORT=3000
  db:
    image: datatriny/time-manager:db-latest
    ports:
      - 5432:5432
  front-end:
    image: datatriny/time-manager:front-end-latest
    ports:
      - 80:80
    depends_on:
      - api
    environment:
      - PORT=80
```

Then all you have to do is to run those two commands:

```
docker-compose pull
docker-compose up -d
```

You can then visit yourdomain:80 to access the web app.