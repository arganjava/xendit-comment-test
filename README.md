# xendit-comment-test v1.0.0

## Installation

- All the `code` required to get started
### Clone

- Clone this repo to your local machine using `https://github.com/arganjava/xendit-comment-test`

### Setup

- install mongoDB run on default port 27017
- install nodejs runtime v12+
- install nodejs editor webstrom/visual studio code
---

### How To run App
- go to root source code
- npm install
- npm start
- if no error the apps will run on port 3001
---

### How To run Test
- go to root source code
- npm test
---

## Additional Features
- Comment Add `POST https://xendit-comment-service.herokuapp.com/comment/`
- Comment Show `GET https://xendit-comment-service.herokuapp.com/comment/{{organizationName}}`
- Comment Delete All `DELETE https://xendit-comment-service.herokuapp.com/comment/deleteAllComments/{{organizationName}}`

- > note: if you want to run locally just used `http://localhost:3001 instead
- > postman doc in folder `postman` file Xendit Organzation Comment.postman_collection.json

## Test Case Scenarios
- `Comment Add` When client input add comment then message will response code 200 and body message **{"organization": "organization", "message":"message"}**
- `Comment Show` When client input add comment then message will response code 200 and body message **[ { "isDeleted": false, "_id": "5f2ea9b079f32f0004114175", "message": "message", "organization": "organization", "createdDate": "2020-08-08T13:33:36.269Z", "__v": 0 },**
- `Comment Delete All` When client input add comment then message will response code 200 and body message **{ "n": 0, "nModified": 1, "opTime": { "ts": "6858606255343140866", "t": 11 }, "electionId": "electionId", "ok": 1, "operationTime": "operationTime", "$clusterTime": { "clusterTime": "6858606255343140866", "signature": { "hash": "hash", "keyId": "keyId" } } }**

## Technical Steps

- add new db repository on `models` folder 
- add new business logic on `services` folder
- create unit test to cover business logic on `test` folder
- add new route `routes` folder
- register all route in `app.js` file
- postman documentation in `postman` folder 

## Author

> Argan Megariansyah arganjava@gmail.com **[Linkedin](https://www.linkedin.com/in/argan-megariansyah-65751a89/)**