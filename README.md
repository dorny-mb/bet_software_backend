# techincal assessement

This repository contains the betsotware techincal assessement code, powered by Strapi @ `3.6.8`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before we get started, we're going to need to make sure we have a few things installed and available on our machine.

#### Node >= 12

##### MacOS

```bash
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

##### Other

See the installation guides available @ nodejs.org:

https://nodejs.org/en/download/package-manager/

#### Yarn

```bash
npm i -g yarn
```

### Installing

Below is a series of step by step instructions that tell you how to get a development env running.

Create a local clone of the repository

```
git clone git@bitbucket.org:betsotware/repo-name.git
```

Enter the cloned repositories' directory

```
cd repo-name
```

Install the projects dependencies

```
yarn
```

Start the projects development server

```
yarn develop
```

Start the projects development server - with hot reloading

```
yarn develop --watch-admin
```

The project should now be available at http://localhost:1337 or http://localhost:8000

You will first be greeted with a registration page, as by default Strapi uses the `development` environment configuration, which points to a sqlite db on your local machine (this does not exist until first run).

![registration page](https://nsokoo-assets.s3.sa-east-1.amazonaws.com/387c28ba-3a7b-48ee-8235-9b9176df7b9c.png)

## Built With

Details of the tech stack that has been used.

- [React](https://reactjs.org/) - Client Framework
- [Strapi](https://strapi.io/) - Server Framework

## Changelog

A running changelog can be found here: [CHANGELOG.md](CHANGELOG.md)

## Authors

- **Dorny Muba** <dornymuba2016@gmail.com>

## Meta

| Version | Author                               | Date       |
| ------- | ------------------------------------ | ---------- |
| 0.0.1   | Dorny Muba <dornymuba2016@gmail.com> | 12/12/2021 |
