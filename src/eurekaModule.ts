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
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
    },
  },
  eureka: {
    // eureka server host / port

    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps',
    maxRetries: 10,
    requestRetryDelay: 2000,

    // overrides: 1,
    // custom: 'test',
    // heartbeatInterval: 999,
    // registryFetchInterval: 999,
    // fetchRegistry: false,
    // servicePath: '/eureka/v2/apps/',
    // ssl: false,
    // useDns: false,
    // fetchMetadata: false,
  },
});
