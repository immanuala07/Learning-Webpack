# Webpack `asset/inline` Module Type

## What is `asset/inline`?

`asset/inline` is a built-in Webpack module type that allows you to import assets (like images, fonts, SVGs) as **inline base64-encoded strings** directly into your JavaScript bundles.

Instead of emitting a separate file, Webpack encodes the asset content as a base64 data URI and injects it inline in the bundle.

---

## How to use `asset/inline`

In your `webpack.config.js`, you can configure a rule like this:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
};
```

## When to use `asset/inline`?

- When you want to embed small assets directly inside your JavaScript to reduce HTTP requests.
- Useful for small icons or images where separate files would add overhead.
- Helps avoid additional network requests for tiny assets.

---

## Pros and cons

| Pros                          | Cons                             |
|-------------------------------|---------------------------------|
| Reduces number of HTTP requests | Increases JavaScript bundle size |
| Simplifies asset management     | Not suitable for large assets    |
| Convenient for small assets     | Base64 encoding adds ~33% overhead |

---

## Related module types

- `asset/resource` — emits a separate file and exports the URL.
- `asset` — automatically chooses between resource or inline based on asset size (default limit is 8kb).
- `asset/source` — exports the raw source of the asset.
---