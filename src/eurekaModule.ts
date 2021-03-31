import { Eureka } from 'eureka-js-client';

export const client = new Eureka({
  // application instance information
  instance: {
    app: 'DongHa APP',
    hostName: 'localhost',
    ipAddr: '0.0.0.0',
    port: 3000,
    vipAddress: 'jq.test.something.com',
    dataCenterInfo: {
      name: 'MyOwn',
    },
  },
  eureka: {
    // eureka server host / port
    host: 'localhost',
    port: 8761,
  },
});
