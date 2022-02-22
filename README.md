# Knowledge Shop

Super simple full-stack application represented small online store

## Project Structure

This repo contains frontend and backend applications in the following folders:

/api - backend API server (NodeJS server on ExpressJS with MongoDB database)

runs on port 3000 by default

/client - frontend web application (ReactJS app based on ReactCreateApp build)

runs on port 9000 by default

## How to run the app

The application hasn't been released, so that all the code is in `develop` branch for now

So that you have to do checkout to `develop` branch

The simplest way to run the app just running bash script from the root DIR

!NOTE `docker` and `docker-compose` must be installed to your system for the next steps

`bash bin/start.sh` (should be run with root rights in case your system requires it for docker)

Under the hood this script do the following:

- builds the docker containers for the `api` and `client`
- runs the containers
  `9000` port for `api`,
  `3000` port for `client`,
  `27017` port for mongoDB container (As for local testing usage no addition credentials needed on this step)
- opens the `client` app on `3000` port of your browser

You can also do all the steps above manually:

- `docker build`
- `docker-compose up`
- open `3000` port in your browser

## Frontend app

Runs on port 3000 by default with `npm run start` script

### Browser support

This application support (and have been tested on) the following browsers:

- Google Chrome [`last version`]
- Safari [`last version`]
- MS Edge (Chromium) [`last version`]

### Scripts

- `npm run start` - runs application in development mode on 3000 port
- `npm run build` - builds application in production mode (artifacts will be placed in `/dist` folder)
- `npm run test` - runs tests
- `npm run check:types` - checks the types
- `npm run format` - runs prettier to fix formatting
- `npm run lint:styles` - runs linter checks for CSS styles using _stylelint_
- `npm run lint:fix` - makes attempt to fix linter issues in JS, TS, TSX scripts using _eslint_
- `npm run lint:fixAll` - makes attempt to fix linter issues in JS, TS, TSX scripts using _eslint_ and prettier formatting issues
- `npm run lint` - runs both CSS and TS linter checks
- `npm run check:build` - runs all the checks before the build

### Linting rules

- _[AirBnB](https://www.npmjs.com/package/eslint-config-airbnb)_ config is used as a base for JS and TS (using _typescript_ version) linting rules.
- _[@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)_ config is used for advanced TS linting rules.
- _[Stylelint Standard](https://github.com/stylelint/stylelint-config-standard)_ config is used for CSS linting rules.

## Backend app

Runs on port 9000 by default with `npm run start` script

### Scripts

- `npm run start` - runs application in production mode on 9000 port
- `npm run start: dev` - runs application via nodemon in development mode on 9000 port
- `npm run check:types` - checks the types
- `npm run lint` - TS linter and ESlint checks
- `npm run test` - runs all the tests

### Linting rules

- _[AirBnB](https://www.npmjs.com/package/eslint-config-airbnb)_ config is used as a base for JS and TS (using _typescript_ version) linting rules.
- _[@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)_ config is used for advanced TS linting rules.
