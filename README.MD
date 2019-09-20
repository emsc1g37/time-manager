## HOW TO START ?

install dependencies with npm install
lunch server with node npm start

# Documentation API

## USERS

### Create

**_Endpoint: _** `POST /api/users`

```shell
curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFlbDJAbWFpbC5mciIsImlhdCI6MTU2ODgwMTk4MywiZXhwIjoxNTcwMDExNTgzfQ.KSkI214iIQYpFl_zC7G-W4ifkmRszHKyvC290MStlzs' \
  -d '{
    "email" : "uneadressemail@mail.fr",
    "password" : "password",
    "first_name": "firstname",
    "last_name": "lsatname",
    "role_id":1
  }' \
  http://localhost:3000/api/users
```

### GET USER BY EMAIL AND USERNAME

**_Endpoint: _** `GET /api/users`

```shell
curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFlbDJAbWFpbC5mciIsImlhdCI6MTU2ODgwMTk4MywiZXhwIjoxNTcwMDExNTgzfQ.KSkI214iIQYpFl_zC7G-W4ifkmRszHKyvC290MStlzs' \
  -d
http://localhost:3000/api/users/?email=mail@mail.fr&username=username
```

### GET ALL USERS

**_Endpoint: _** `GET /api/users/all`

```shell
curl -X GET \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFlbDJAbWFpbC5mciIsImlhdCI6MTU2ODgwMTk4MywiZXhwIjoxNTcwMDExNTgzfQ.KSkI214iIQYpFl_zC7G-W4ifkmRszHKyvC290MStlzs' \
  -d
http://localhost:3000/api/users/all
```

### GET A USER BY ID

**_Endpoint: _** `GET /api/users/1`

```shell
curl -X GET \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFlbDJAbWFpbC5mciIsImlhdCI6MTU2ODgwMTk4MywiZXhwIjoxNTcwMDExNTgzfQ.KSkI214iIQYpFl_zC7G-W4ifkmRszHKyvC290MStlzs' \
  -d
http://localhost:3000/api/users/1
```

### DELETE A USER BY ID

**_Endpoint: _** `DELETE /api/users/1`

```shell
curl -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFlbDJAbWFpbC5mciIsImlhdCI6MTU2ODgwMTk4MywiZXhwIjoxNTcwMDExNTgzfQ.KSkI214iIQYpFl_zC7G-W4ifkmRszHKyvC290MStlzs' \
  -d
http://localhost:3000/api/users/1
```

### UPDATE USER

**_Endpoint: _** `UPDATE /api/users/all`

```shell
curl -X UPDATE \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFlbDJAbWFpbC5mciIsImlhdCI6MTU2ODgwMTk4MywiZXhwIjoxNTcwMDExNTgzfQ.KSkI214iIQYpFl_zC7G-W4ifkmRszHKyvC290MStlzs' \
   -d '{
    "email" : "uneadressemail@mail.fr",
    "password" : "password",
    "first_name": "firstname",
    "last_name": "lsatname",
    "role_id":1
  }' \
http://localhost:3000/api/users/1
```
