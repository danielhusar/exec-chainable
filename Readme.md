# Object cache [![Build Status](https://travis-ci.org/danielhusar/exec-chainable.svg)](https://travis-ci.org/danielhusar/exec-chainable)

> Exec shell command and return promise so you can chain commands

## Install

#### [npm](https://npmjs.org/package/exec-chainable)

```
npm install --save exec-chainable
```

## Example

```javascript
var exec  = require('exec-chainable');
exec(command);
```

```javascript
var exec  = require('exec-chainable');
exec('echo 1').then(function (stdout) {
  console.log(stdout);
  //=> 1
  return exec('echo 2');
}).done(function (stdout) {
  console.log(stdout);
  //=> 2
});
```

## Options

#### command

Type: `String`  
Default: ``

Command to execute.


## License

MIT ©
