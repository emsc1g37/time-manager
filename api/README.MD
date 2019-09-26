# Time Manager

## How to start?

- Install the dependencies with `npm install`
- Launch the server with `npm start`

## API documentation

To interract with the API, you must call appropriate URls also called endpoints. They all start with a base path: yourdomain/api. You then need to append the endpoint to get an usable URL.

Since it deals with JSON data, you must also specify the content type in your requests by sending the following header: `Content-Type: application/json`.

Whenever an error occures, an appropriate HTTP Status Code will be sent (400, 401, 403, 404 or 500). In most cases, a JSON object containing an `error` field will be returned. When a validation error is encountered, this field will be named `errors` instead. The value of this field can vary from a simple string to an object or an array of objects.

### Public endpoints

The following endpoints can be accessed by everyone (e.g. they don't require any authentication).

| Method | Endpoint | Input data | Output data | Description |
|--------|----------|------------|-------------|-------------|
| POST | /users/ | `{"email":"string","password":"string","first_name":"string","last_name":"string"}` | `{"id":"int","email":"string","first_name":"string","last_name":"string","role_id":"int","role_label":"string","teams":[]}` | Sign up as a new user. |
| POST | /users/login | `{"email":"string","password":"string"}` | `{"id":"int","email":"string","first_name":"string","last_name":"string","role_id":"int","role_label":"string","token":"string","teams":[{"id":"int","name":"string","manager_id":"string","manager_first_name":"string","manager_last_name":"string"},...],"clocked_in":"bool"}` | Log in to the API. The JWT token is contained in the `token` field. |

### Employee endpoints

The following endpoints are accessible to users whose role is Employee or higher. This means that you must pass a valid Employee (or higher) JWT token in order to be able to perform the call.
Here is the format of the header you must include in your requests: `Authorization: Bearer <token>`, where `<token>` is a token that can be obtained when logging in.

| Method | Endpoint | Input data | Output data | Description |
|--------|----------|------------|-------------|-------------|
| GET | /users/ | | `[{"id":"int","email":"string","first_name":"string","last_name":"string","role_id":"int","role_label":"string","clocked_in":"bool"},...]' | Get all users. |
| PUT | /users/:id | `{"email":"string","first_name":"string","last_name":"string"}` | | Update informations of the user referenced by `:id`. |
| GET | /users/:id | | `{"id":"int","email":"string","first_name":"string","last_name":"string","role_id":"int","role_label":"string","teams":[{"id":"int","name":"string","manager_id":"string","manager_first_name":"string","manager_last_name":"string"},...],"clocked_in":"bool"}` | Get the user referenced by `:id`. |
| DELETE | /user/:id | | | Delete the user identified by `:id`. |
| PUT | /users/changePassword | `{"old_password":"string","password":"string","confirm_password":"string"}` | | Change the password of the current user. |
| PUT | /clocks/ | | `{"user_id":"int","user_id":"int","arrival":"timestamp","departure":"timestamp"}` | Clocks in or out for the current user. |
| GET | /users/:id/workingTimes/?from=yyyy-mm-dd&to=yyyy-mm-dd | | `[{"id":"int","user_id":"int","arrival":"string","departure":"string or null"},...]` | Get the working times of the user referenced by :id that are comprized between the from and to dates. |
| GET | /roles/ | | `[{"id":"int","label":"string"},...]` | Get all the available roles. |

### Manager endpoints

These routes can be accessed with a valid Manager JWT token. The format of the Authorization header is the same as above.

| Method | Endpoint | Input data | Output data | Description |
|--------|----------|------------|-------------|-------------|
| POST | /teams/ | `{"name":"string"}` | `{"id":"int","name":"string","manager_id":"int","manager_first_name":"string","manager_last_name":"string"}` | Create a new team. |
| GET | /teams/:id | | `{"id":"int","name":"string","manager_id":"int","manager_first_name":"string","manager_last_name":"string"}` | Get the team identified by `:id`. |
| PUT | /teams/:id | `{"name":"string"}` | `{"id":"int","name":"string","manager_id":"int","manager_first_name":"string","manager_last_name":"string"}` | Update the team identified by `:id`. |
| DELETE | /teams/:id | | | Delete the team identified by `:id`. |
| POST | /teams/:id/add/:userId | | | Add the user referenced by `:userId` to the team identified by `:id`. |
| DELETE | /teams/:id/remove/:userId | | | Remove the user referenced by `:uierId` from the team identified by `:id`. |
| POST | /teams/:teamId/workPeriods/ | `{"user_id":"int","arrival":"yyyy-mm-dd hh:mm:ss","departure":"yyyy-mm-dd hh:mm:ss"}` | `{"team_id":"int","id":"int","user_id":"int","arrival":"yyyy-mm-dd hh:mm::ss","departure":"yyyy-mm-dd hh:mm:ss"}` | Create a new work period for a given member of the team identified by `:teamId`. |
| GET | /teams/:teamId/users/:userId/workPeriods?from=yyyy-mm-dd&to=yyyy-mm-dd | | `[{"team_id":"int","id":"int","user_id":"int","arrival":"yyyy-mm-dd hh:mm:ss","departure":"yyyy-mm-dd hh:mm:ss"},...]` | Get the work periods that corresponds to the user identified by `:userId` inside the team referenced by `:teamId`. |
| GET | /teams/:teamId/workPeriods?from=yyyy-mm-dd&to=yyyy-mm-dd | | `[{"team_id":"int","id":"int","user_id":"int","arrival":"yyyy-mm-dd hh:mm:ss","departure":"yyyy-mm-dd hh:mm:ss"},...]` | Get the work periods for all users of the team referenced by `:teamId` that are comprized between `from` and `to` dates. |
| DELETE | /teams/:teamId/workPeriods/:id | | | Delete the work period identified by `:id` inside the team referenced by `:teamId`. |

### Administrator endpoints

The following endpoints require an administrator JWT token. The format of the Authorization header is stil the same.

| Method | Endpoint | Input data | Output data | Description |
|--------|----------|------------|-------------|-------------|
| PUT | /users/:id/promote | | | Promote the Employee identified by `:id` to Manager. |
