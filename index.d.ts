/**
Creates a `.stack` property on the given `object`, which when accessed returns a string representing the location in the code at which `captureStackTrace()` was called.

@example
```
import captureStackTrace from 'capture-stack-trace';

const object = {};
captureStackTrace(object);
object.stack;  // Similar to `new Error().stack`
```
*/
export default function captureStackTrace(targetObject: object): void; // eslint-disable-line @typescript-eslint/ban-types
