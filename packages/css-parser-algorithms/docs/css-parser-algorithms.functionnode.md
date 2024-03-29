<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/css-parser-algorithms](./css-parser-algorithms.md) &gt; [FunctionNode](./css-parser-algorithms.functionnode.md)

## FunctionNode class

A function node.

**Signature:**

```typescript
export declare class FunctionNode extends ContainerNodeBaseClass 
```
**Extends:** [ContainerNodeBaseClass](./css-parser-algorithms.containernodebaseclass.md)

## Example


```js
const node = parseComponentValue(tokenize('calc(1 + 1)'));

isFunctionNode(node); // true
node.getName(); // 'calc'
```

## Constructors

<table><thead><tr><th>

Constructor


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[(constructor)(name, endToken, value)](./css-parser-algorithms.functionnode._constructor_.md)


</td><td>


</td><td>

Constructs a new instance of the `FunctionNode` class


</td></tr>
</tbody></table>

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

[endToken](./css-parser-algorithms.functionnode.endtoken.md)


</td><td>


</td><td>

CSSToken


</td><td>

The token for the closing parenthesis of the function. If the function is unclosed, this will be an EOF token.


</td></tr>
<tr><td>

[name](./css-parser-algorithms.functionnode.name.md)


</td><td>


</td><td>

TokenFunction


</td><td>

The token for the name of the function.


</td></tr>
<tr><td>

[type](./css-parser-algorithms.functionnode.type.md)


</td><td>


</td><td>

[ComponentValueType](./css-parser-algorithms.componentvaluetype.md)


</td><td>

The node type, always `ComponentValueType.Function`


</td></tr>
</tbody></table>

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[getName()](./css-parser-algorithms.functionnode.getname.md)


</td><td>


</td><td>

Retrieve the name of the current function. This is the parsed and unescaped name of the function.


</td></tr>
<tr><td>

[normalize()](./css-parser-algorithms.functionnode.normalize.md)


</td><td>


</td><td>

Normalize the current function: 1. if the "endToken" is EOF, replace with a ")-token"


</td></tr>
<tr><td>

[tokens()](./css-parser-algorithms.functionnode.tokens.md)


</td><td>


</td><td>

Retrieve the tokens for the current function. This is the inverse of parsing from a list of tokens.


</td></tr>
<tr><td>

[toString()](./css-parser-algorithms.functionnode.tostring.md)


</td><td>


</td><td>

Convert the current function to a string. This is not a true serialization. It is purely a concatenation of the string representation of the tokens.


</td></tr>
</tbody></table>