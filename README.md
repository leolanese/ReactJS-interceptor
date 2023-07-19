# preact-interceptor

```js
npm init preact

cd preact-app

// produce prod at http://localhost:5173/
npm run dev

// produce normal prduction portable `/dist` but not as web-component
npm run build
```

## Building the web-component using Vite

> `Preact-custom-element` is a library that allows you to turn any Preact component into a custom element. Custom elements are a powerful way to create reusable and encapsulated web components.

> This package allows you to turn your Preact components into custom HTML elements that can be used in any HTML or JavaScript environment without requiring a Preact app.

```js
// run webpack to bundle your Preact app
npm run build-v
```

```js
vite v4.4.4 building for production...
✓ 52 modules transformed.
dist/index.html                 0.37 kB │ gzip:  0.28 kB
dist/assets/index-b89854d8.js  47.46 kB │ gzip: 18.59 kB
```

## Testing the Web-Component

```js
// install:
npm install -g http-server

// run:
// cd dist
http-server
```
