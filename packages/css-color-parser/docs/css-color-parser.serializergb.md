<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/css-color-parser](./css-color-parser.md) &gt; [serializeRGB](./css-color-parser.serializergb.md)

## serializeRGB() function

Convert color data to component values in the srgb color space. The return value can be converted to a string by calling `toString()` on it.

**Signature:**

```typescript
export declare function serializeRGB(color: ColorData, gamutMapping?: boolean): FunctionNode;
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

color


</td><td>

[ColorData](./css-color-parser.colordata.md)


</td><td>

The color data to be serialized.


</td></tr>
<tr><td>

gamutMapping


</td><td>

boolean


</td><td>

_(Optional)_ Whether to perform gamut mapping, defaults to `true`<!-- -->.


</td></tr>
</tbody></table>
**Returns:**

FunctionNode

{<!-- -->FunctionNode<!-- -->} The serialized color data as a FunctionNode object.
