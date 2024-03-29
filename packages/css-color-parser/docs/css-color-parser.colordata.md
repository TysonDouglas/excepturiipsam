<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/css-color-parser](./css-color-parser.md) &gt; [ColorData](./css-color-parser.colordata.md)

## ColorData interface

A color data object. It contains as much information as possible about the color and the original parsed syntax.

**Signature:**

```typescript
export interface ColorData 
```

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

[alpha](./css-color-parser.colordata.alpha.md)


</td><td>


</td><td>

number \| ComponentValue


</td><td>

The alpha channel. This is either a number between `0` and `1` or a `ComponentValue` object.

Since most computations are not dependent on the alpha channel, we allow things like `var(--some-alpha)` as an alpha channel value for most inputs.


</td></tr>
<tr><td>

[channels](./css-color-parser.colordata.channels.md)


</td><td>


</td><td>

Color


</td><td>

The color channels. This is always an array of three numbers but the channels can only be interpreted by looking at the color notation.


</td></tr>
<tr><td>

[colorNotation](./css-color-parser.colordata.colornotation.md)


</td><td>


</td><td>

[ColorNotation](./css-color-parser.colornotation.md)


</td><td>

The color notation of the color data.

We use "color notation" and not "color space" because these represent the original notation and not the actual color space. The actual color space is however always implied by the color notation.


</td></tr>
<tr><td>

[syntaxFlags](./css-color-parser.colordata.syntaxflags.md)


</td><td>


</td><td>

Set&lt;[SyntaxFlag](./css-color-parser.syntaxflag.md)<!-- -->&gt;


</td><td>

Information about the original syntax.


</td></tr>
</tbody></table>