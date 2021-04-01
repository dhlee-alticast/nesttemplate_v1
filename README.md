<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# TODO

```
1. lerna로 감싸야 할지 확인
2. Typeorm 으로 되어있는 프로젝트 -> mongoose로 변경 해야하는지 - BFF는 디비 접속을 안한다.
3. log 저장 방법 (elk 또는 회사 라이브러리가 있는지?)
4. BFF 는 API 호출로만 가져와서 리턴하게 되어있음
```

## 개발환경

1. nodejs v15.11.0 (M1 )
2. vscode
3. npm 7.6.0
4. docker 설치

## 이외의 세팅

1. MongoDB 설치 / 실행

```
$ docker run -d -p 27017:27017 mongo:latest
```

2. eureka client와의 통신을 위해 eureka-server가 설치/ 실행되어있어야함.

```
$ cd ./{Project root}
$ cd ./eurekaServer
$ java -jar eureka-server-0.1.5.jar
```

3. zipkin 서버 설치 / 실행

```
$ docker run -d -p 9411:9411 openzipkin/zipkin
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
