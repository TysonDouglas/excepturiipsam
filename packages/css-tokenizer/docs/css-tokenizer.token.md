<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/css-tokenizer](./css-tokenizer.md) &gt; [Token](./css-tokenizer.token.md)

## Token interface

The CSS Token interface

**Signature:**

```typescript
export interface Token<T extends TokenType, U> extends Array<T | string | number | U> 
```
**Extends:** Array&lt;T \| string \| number \| U&gt;

## Remarks

CSS Tokens are fully typed and have a strict structure. This makes it easier to iterate and analyze a token stream.

The string representation and the parsed value are stored separately for many token types. It is always assumed that the string representation will be used when stringifying, while the parsed value should be used when analyzing tokens.

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

["0"](./css-tokenizer.token._0_.md)


</td><td>


</td><td>

T


</td><td>

The type of token


</td></tr>
<tr><td>

["1"](./css-tokenizer.token._1_.md)


</td><td>


</td><td>

string


</td><td>

The token representation


</td></tr>
<tr><td>

["2"](./css-tokenizer.token._2_.md)


</td><td>


</td><td>

number


</td><td>

Start position of representation


</td></tr>
<tr><td>

["3"](./css-tokenizer.token._3_.md)


</td><td>


</td><td>

number


</td><td>

End position of representation


</td></tr>
<tr><td>

["4"](./css-tokenizer.token._4_.md)


</td><td>


</td><td>

U


</td><td>

Extra data


</td></tr>
</tbody></table>