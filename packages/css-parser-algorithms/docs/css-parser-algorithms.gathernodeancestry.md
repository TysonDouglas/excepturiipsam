<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/css-parser-algorithms](./css-parser-algorithms.md) &gt; [gatherNodeAncestry](./css-parser-algorithms.gathernodeancestry.md)

## gatherNodeAncestry() function

AST nodes do not have a `parent` property or method. This makes it harder to traverse the AST upwards. This function builds a `Map<Child, Parent>` that can be used to lookup ancestors of a node.

**Signature:**

```typescript
export declare function gatherNodeAncestry(node: {
    walk(cb: (entry: {
        node: Array<unknown> | unknown;
        parent: unknown;
    }, index: number | string) => boolean | void): false | undefined;
}): Map<unknown, unknown>;
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

node


</td><td>

{ walk(cb: (entry: { node: Array&lt;unknown&gt; \| unknown; parent: unknown; }, index: number \| string) =&gt; boolean \| void): false \| undefined; }


</td><td>


</td></tr>
</tbody></table>
**Returns:**

Map&lt;unknown, unknown&gt;

## Remarks

There is no magic behind this or the map it returns. Mutating the AST will not update the map.

Types are erased and any content of the map has type `unknown`<!-- -->. If someone knows a clever way to type this, please let us know.

## Example


```js
const ancestry = gatherNodeAncestry(mediaQuery);
mediaQuery.walk((entry) => {
	const node = entry.node; // directly exposed
	const parent = entry.parent; // directly exposed
	const grandParent: unknown = ancestry.get(parent); // lookup

	console.log('node', node);
	console.log('parent', parent);
	console.log('grandParent', grandParent);
});
```
