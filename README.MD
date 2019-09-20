# Time Manager

## How to start?

- Install the dependencies with `npm install`
- Launch the server with `npm start`

## API documentation

### USERS

#### Create

**_Endpoint: _** `POST /api/users`

```shell
curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFlbDJAbWFpbC5mciIsImlhdCI6MTU2ODgwMTk4MywiZXhwIjoxNTcwMDExNTgzfQ.KSkI214iIQYpFl_zC7G-W4ifkmRszHKyvC290MStlzs' \
  -d '{
    "email" : "uneadressemail@mail.fr",
    "password" : "password",
    "firstName": "firstname",
    "lastName": "lastname"
  }' \
  http://localhost:3000/api/users
```

#### GET ALL USERS

**_Endpoint: _** `GET /api/users`

```shell
curl -X GET \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFlbDJAbWFpbC5mciIsImlhdCI6MTU2ODgwMTk4MywiZXhwIjoxNTcwMDExNTgzfQ.KSkI214iIQYpFl_zC7G-W4ifkmRszHKyvC290MStlzs' \
http://localhost:3000/api/users
```

#### GET AN USER BY ID

**_Endpoint: _** `GET /api/users/1`

```shell
curl -X GET \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFlbDJAbWFpbC5mciIsImlhdCI6MTU2ODgwMTk4MywiZXhwIjoxNTcwMDExNTgzfQ.KSkI214iIQYpFl_zC7G-W4ifkmRszHKyvC290MStlzs' \
http://localhost:3000/api/users/1
```

#### DELETE AN USER BY ID

**_Endpoint: _** `DELETE /api/users/1`

```shell
curl -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFlbDJAbWFpbC5mciIsImlhdCI6MTU2ODgwMTk4MywiZXhwIjoxNTcwMDExNTgzfQ.KSkI214iIQYpFl_zC7G-W4ifkmRszHKyvC290MStlzs' \
http://localhost:3000/api/users/1
```

#### UPDATE AN USER

**_Endpoint: _** `UPDATE /api/users/1`

```shell
curl -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFlbDJAbWFpbC5mciIsImlhdCI6MTU2ODgwMTk4MywiZXhwIjoxNTcwMDExNTgzfQ.KSkI214iIQYpFl_zC7G-W4ifkmRszHKyvC290MStlzs' \
   -d '{
    "email" : "uneadressemail@mail.fr",
    "firstName": "firstname",
    "lastName": "lastname"
  }' \
http://localhost:3000/api/users/1
```
