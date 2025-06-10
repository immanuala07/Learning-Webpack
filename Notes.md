# Asset Modules in Webpack 5

In **Webpack 5**, **Asset Modules** are a new way to manage and include static assets like images, fonts, and other files in your build. They replace older loaders such as `file-loader`, `url-loader`, and `raw-loader` with a built-in, cleaner syntax.

---

## What Are Asset Modules?

Asset modules allow you to **import a file (e.g. `.png`, `.svg`, `.woff`, etc.) directly in your JavaScript** and control how it is emitted to your build output.

---

## Types of Asset Modules

Webpack 5 provides **four types** of asset modules:

| Type             | Behavior                                                                   |
|------------------|----------------------------------------------------------------------------|
| `asset/resource` | Emits a separate file and exports the URL (like `file-loader`).           |
| `asset/inline`   | Exports the file as a base64-encoded string (like `url-loader`).          |
| `asset/source`   | Exports the raw source of the file (like `raw-loader`).                   |
| `asset`          | Automatically chooses between `resource` and `inline` based on file size. |

---

## Usage Example

### 1. Basic Webpack Config

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Always emits a separate file
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline', // Inline as base64 string
      },
      {
        test: /\.txt$/i,
        type: 'asset/source', // Import as raw string
      },
      {
        test: /\.woff2?$/i,
        type: 'asset', // Automatically choose between inline or resource
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb limit
          },
        },
      },
    ],
  },
};
```

### 📝 Notes

- No need to install `file-loader`, `url-loader`, or `raw-loader` with Webpack 5.
- Asset modules are supported natively.
- You can configure output filename using `generator.filename`:

```js
{
  test: /\.(png|jpg)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'images/[hash][ext][query]'
  }
}
