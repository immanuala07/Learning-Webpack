# What is `publicPath` in Webpack?

`publicPath` is a configuration option in Webpack that specifies the **base path** for all the assets within your application at runtime. It tells Webpack where to load the output files (like bundles, images, fonts) from when the app runs in the browser.

---

## Where do you set it?

You can set `publicPath` in the `output` section of your `webpack.config.js`:

```js
module.exports = {
  // other config...

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/assets/',  // <--- here
  },
};
```

## What does it do?

When Webpack generates assets, it uses `publicPath` to prefix URLs for dynamic loading (e.g., lazy-loaded chunks, images, fonts).

If `publicPath` is `/assets/`, and you have an image referenced in your CSS or JS, Webpack will generate the URL like `/assets/image.png`.

---

## Typical values for `publicPath`

- `'/'` — Assets are loaded from the root of the domain.
- `'./'` or `''` — Assets are loaded relative to the current path.
- A full URL like `'https://cdn.example.com/assets/'` — Use when serving assets from a CDN.
- `/static/` or `/assets/` — When assets are served from a subdirectory.

---

## Why is it important?

If you don’t set `publicPath` correctly, your app might fail to load assets or chunks, especially for:

- Code splitting / lazy loading
- Assets referenced inside JS or CSS
- Deployments where static files are served from a different URL or subfolder

## Example use case:

If your app is hosted at `https://example.com/app/` and your static files are in `https://example.com/app/static/`, you might want:

```js
output: {
  publicPath: '/app/static/',
}
