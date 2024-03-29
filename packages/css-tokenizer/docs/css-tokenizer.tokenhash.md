<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/css-tokenizer](./css-tokenizer.md) &gt; [TokenHash](./css-tokenizer.tokenhash.md)

## TokenHash interface

**Signature:**

```typescript
export interface TokenHash extends Token<TokenType.Hash, {
    value: string;
    type: HashType;
}> 
```
**Extends:** [Token](./css-tokenizer.token.md)<!-- -->&lt;[TokenType.Hash](./css-tokenizer.tokentype.md)<!-- -->, { value: string; type: [HashType](./css-tokenizer.hashtype.md)<!-- -->; }&gt;

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

[type](./css-tokenizer.tokenhash.type.md)


</td><td>


</td><td>

[HashType](./css-tokenizer.hashtype.md)


</td><td>

The hash type.


</td></tr>
<tr><td>

[value](./css-tokenizer.tokenhash.value.md)


</td><td>


</td><td>

string


</td><td>

The unescaped hash value without the leading `#`<!-- -->.


</td></tr>
</tbody></table>