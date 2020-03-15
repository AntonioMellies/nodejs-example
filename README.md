# Nodejs-example

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### Tech

This project uses a number of open source projects to work properly:

* [NodeJs]
* [MongoDB]
* [Redis]
* [Docker]
* [Express]

### Installation

Requires [Node.js](https://nodejs.org/).
Requires [Docker](https://www.docker.com/).

Install the dependencies and devDependencies and start the server.

```sh
$ cd nodejs-example
$ npm install -d
```

### Development

Open your favorite Terminal and run these commands.

First Tab, to transpile:
```nodejs 
npm run compile
```

Second Tab, to run application:
```nodejs 
docker-compose up -d mongodb-service
docker-compose up -d redis-service
```
(Optional) Verify containers
```sh 
docker ps
```

Third Tab, to run application:
```nodejs 
npm run dev
```

### Environment variables

Configure the environment variables
- For production, use a '.env' file
- For development use the '.env.development' file

Comments 
    - The variables used in the system are listed in the '.env.sample' file
    - To select the execution environment, the application uses the NODE_ENV environment variable, with the possible values: [production] [development]
### Docker

To upload the complete application, use only the following Docker command:
```sh
docker-compose up -d
```
(Optional) Verify containers
```sh 
docker ps
```



