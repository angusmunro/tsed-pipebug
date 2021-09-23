# tsed V6.55.2 bug

## Description

cannot mount controllers if using custom decorator with pipe that contains an injected mongoose connection

## Replication steps

- npm install
- npm run start
- Controllers will not mount

## Error message

```javascript
INJECTION_ERROR: Injection failed on PlatformModule > UserRepository > UserModel > MONGOOSE_CONNECTIONS
Origin: MONGOOSE_CONNECTIONS provider is not injectable to another provider
    at Function.throwInjectorError (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/errors/InjectionError.ts:44:11)
    at Map.resolve (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:586:22)
    at Map.invoke (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:225:36)
    at Object.loadInjector (/Users/XXX/tsed-pipebug/node_modules/@tsed/common/src/platform/utils/loadInjector.ts:9:12)
    at PlatformExpress.loadInjector (/Users/XXX/tsed-pipebug/node_modules/@tsed/common/src/platform/builder/PlatformBuilder.ts:182:11)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at PlatformExpress.runLifecycle (/Users/XXX/tsed-pipebug/node_modules/@tsed/common/src/platform/builder/PlatformBuilder.ts:167:5)
    at PlatformExpress.bootstrap (/Users/XXX/tsed-pipebug/node_modules/@tsed/common/src/platform/builder/PlatformBuilder.ts:319:5)
    at bootstrap (/Users/XXX/tsed-pipebug/src/index.ts:8:22) {
  tokens: [
    [class PlatformModule],
    [class UserRepository],
    [class UserModel],
    Symbol(MONGOOSE_CONNECTIONS)
  ],
  origin: {
    message: 'MONGOOSE_CONNECTIONS provider is not injectable to another provider',
    stack: 'INJECTION_ERROR: MONGOOSE_CONNECTIONS provider is not injectable to another provider\n' +
      '    at Map.resolve (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:551:15)\n' +
      '    at Map.invoke (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:225:36)\n' +
      '    at /Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:573:70\n' +
      '    at Array.map (<anonymous>)\n' +
      '    at Map.resolve (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:580:29)\n' +
      '    at Map.invoke (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:225:36)\n' +
      '    at /Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:573:70\n' +
      '    at Array.map (<anonymous>)\n' +
      '    at Map.resolve (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:580:29)\n' +
      '    at Map.invoke (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:225:36)\n' +
      '    at Map.bindProperty (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:424:26)\n' +
      '    at /Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:372:16\n' +
      '    at Array.forEach (<anonymous>)\n' +
      '    at Map.bindInjectableProperties (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:366:31)\n' +
      '    at Map.resolve (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:597:12)\n' +
      '    at Map.invoke (/Users/XXX/tsed-pipebug/node_modules/@tsed/di/src/services/InjectorService.ts:225:36)\n' +
      '    at map (/Users/XXX/tsed-pipebug/node_modules/@tsed/common/src/mvc/models/ParamMetadata.ts:82:54)\n' +
      '    at Array.map (<anonymous>)\n' +
      '    at ParamMetadata.cachePipes (/Users/XXX/tsed-pipebug/node_modules/@tsed/common/src/mvc/models/ParamMetadata.ts:84:49)\n' +
      '    at /Users/XXX/tsed-pipebug/node_modules/@tsed/common/src/platform/services/PlatformHandler.ts:318:15\n' +
      '    at Array.forEach (<anonymous>)\n' +
      '    at PlatformExpressHandler.buildPipe (/Users/XXX/tsed-pipebug/node_modules/@tsed/common/src/platform/services/PlatformHandler.ts:317:27)'
  }
}
```
