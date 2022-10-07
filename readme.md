# capture-stack-trace

> [Ponyfill](https://ponyfill.com) for [`Error#captureStackTrace`](https://nodejs.org/api/errors.html#errorcapturestacktracetargetobject-constructoropt)

This is useful for creating cross-platform code as `Error#captureStackTrace` is only available in V8-based JavaScript environments like Node.js and Chrome.

## Install

```sh
npm install capture-stack-trace
```

## Usage

```js
import captureStackTrace from 'capture-stack-trace';

const object = {};
captureStackTrace(object);
object.stack;  // Similar to `new Error().stack`
```

## API

### captureStackTrace(object)

Creates a `.stack` property on the given `object`, which when accessed returns a string representing the location in the code at which `captureStackTrace()` was called.

**Note:** This ponyfill does not support the second parameter of `Error#captureStackTrace`.
