# TypeScript: Object is possibly 'undefined' Bug

This repository demonstrates a common TypeScript error: "Object is possibly 'undefined'".  This error arises when the compiler cannot guarantee that a variable or property will be defined before being accessed.

The example code shows a function `printName` that takes an optional string argument.  If the argument is `undefined`, accessing the `.toUpperCase()` method will trigger the error.

The solution demonstrates how to safely handle optional values using optional chaining (?.) or the nullish coalescing operator (??).