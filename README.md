# Fashion Blog Using MERN Stack

<h1 align="center">
🌐 MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

<p align="center">
   <a href="https://github.com/sharangramana/Fashion_Blog_MERN">
      <img src="https://travis-ci.com/amazingandyyy/mern.svg?branch=master" />
   </a>
   <a href="https://github.com/sharangramana/Fashion_Blog_MERN/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p>

> It's a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

## clone or download
```terminal
$ git clone https://github.com/sharangramana/Fashion_Blog_MERN.git
$ npm i
```

# Usage (run fullstack app on your machine)

## Prerequirements
- [MongoDB Cloud Account](https://account.mongodb.com/account/login)
- [Node](https://nodejs.org/en/download/) ^12.16.3
- [npm](https://nodejs.org/en/download/package-manager/)

NOTE : you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 8000)
```terminal
$ cd Client   // go to client folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 5000)

### Add your MongoDB integration link in the .env file
### Start

```terminal
$ cd Server   // go to server folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally
$ npm run build // this will build the server code to es6 js codes and generate a dist file
```
# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^0.19.2 | bcrypt: ^4.0.1
bootstrap: ^4.5.0|body-parser: ^1.19.0
jquery: ^3.5.1 | cors: ^2.8.1
react: ^16.13.1 | dotenv: ^8.2.0
react-dom: ^16.13.1 | express: ^4.17.1
react-scripts: ^3.4.1 | jsonwebtoken: ^8.5.1
react-router-dom: ^5.2.0 | mongoose: ^5.9.15
jwt-decode: ^2.2.0 | nodemon: ^2.0.4

## BUGs or comments

[Create new Issues](https://github.com/sharangramana/Fashion_Blog_MERN/issues) (preferred)

Email Me: sharangramana20@gmail.com

### License
[MIT](https://github.com/sharangramana/Fashion_Blog_MERN/blob/master/LICENSE)
