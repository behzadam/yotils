<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [yotils](./yotils.md) &gt; [isSet](./yotils.isset.md)

## isSet() function

Determines whether the input is `Set` or not.

<b>Signature:</b>

```typescript
export declare function isSet<T>(value: T): value is T;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | T | input. |

<b>Returns:</b>

value is T

true if the input is `Set`<!-- -->, false otherwise.

## Example


```ts
isSet(new Set()) // true
isSet([])        // false
```

