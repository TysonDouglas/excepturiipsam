<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/media-query-list-parser](./media-query-list-parser.md) &gt; [MediaQueryInvalid](./media-query-list-parser.mediaqueryinvalid.md) &gt; [walk](./media-query-list-parser.mediaqueryinvalid.walk.md)

## MediaQueryInvalid.walk() method

**Signature:**

```typescript
walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaQueryInvalidWalkerEntry;
        parent: MediaQueryInvalidWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
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

cb


</td><td>

(entry: { node: [MediaQueryInvalidWalkerEntry](./media-query-list-parser.mediaqueryinvalidwalkerentry.md)<!-- -->; parent: [MediaQueryInvalidWalkerParent](./media-query-list-parser.mediaqueryinvalidwalkerparent.md)<!-- -->; state?: T; }, index: number \| string) =&gt; boolean \| void


</td><td>


</td></tr>
<tr><td>

state


</td><td>

T


</td><td>

_(Optional)_


</td></tr>
</tbody></table>
**Returns:**

false \| undefined
