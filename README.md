# Rest API Node.js with Express, Typescript, Tsoa - Boilerplate

This boilerplate it's a example to use in another api's inside the Globalsys organization. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
Node.js 12.x
```

### Installing

To install dependencies of this project, do you need to run the yarn

```
$ yarn
```

*Duplicate the file .env.example with name .env and replace values to your convenience


Generate build files to create a swagger documentation

```
yarn build:all
```

If you have sucess the server node it's up in your localhost with env port.

## Running the tests

This project using *jest* and *supertest* library.

### To run your tests

```
$ yarn test
```

### To run your tests and continue watch files

```
$ yarn test:watch
```


### To generate coverage files

```
$ yarn test:coverage
```

## Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/pt-br/) - The node.js framework
* [Typescript](https://www.typescriptlang.org/) - Dependency Management
* [TSOA](https://tsoa-community.github.io/docs/) - OpenAPI-compliant REST APIs using TypeScript and Node 

## Authors

* **Mikael Hadler** - *Initial work* - [Github](https://github.com/mikaelhadler)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
