<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [yotils](./yotils.md) &gt; [wrapInArray](./yotils.wrapinarray.md)

## wrapInArray() function

Wraps the input in an array even if the input is an array.

**Signature:**

```typescript
declare function wrapInArray<Input>(input: Input): Input[];
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

input


</td><td>

Input


</td><td>

input


</td></tr>
</tbody></table>
**Returns:**

Input\[\]

wrapped input in an array.

## Example


```ts
wrapInArray('a')     // ['a']
wrapInArray(1)       // [1]
wrapInArray(['a'])   // [['a']]
```

