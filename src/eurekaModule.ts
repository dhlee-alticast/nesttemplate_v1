import { Eureka } from 'eureka-js-client';

export const client = new Eureka({
  // application instance information
  instance: {
    app: 'DongHa APP',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: {
      $: 3000,
      '@enabled': true,
    },
    vipAddress: 'jq.test.something.com',
    dataCenterInfo: {
      name: 'MyOwn',
    },
  },
  eureka: {
    // eureka server host / port
    servicePath: '/eureka',
    host: 'localhost',
    port: 8761,
  },
});
