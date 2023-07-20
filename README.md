# PReact interceptor with Web-Component

> Web-Component is a web standard and can be used across different frameworks, as long as the target environment has support for web components. Exporting our Preact component as a `web component`, we can use it in other frameworks or environments that support web components.

```js
npm init preact

cd preact-app

// serve http://localhost:5173/
npm run dev

// produce portable `/dist`
npm run build
```

## Building the web-component using Vite

> `Preact-custom-element` is a library that allows you to turn any Preact component into a custom element. Custom elements are a powerful way to create reusable and encapsulated web components.

> This package allows you to turn your `Preact components into custom HTML elements that can be used in any HTML or JavaScript environment without requiring a Preact app`

```js
// run vite to bundle your Preact app
npm run build

vite v4.4.4 building for production...
✓ 52 modules transformed.
dist/index.html                 0.37 kB │ gzip:  0.28 kB
dist/assets/index-b89854d8.js  47.46 kB │ gzip: 18.59 kB
```

## Consuming the Web-Component

```js
npm install -g http-server

// cd dist
http-server

// test index.html that load the web-component
http://localhost:5173/
```

---

## TIPS

```js
// Missing:	<div id="app"></div> 
Uncaught TypeError: Cannot read properties of null (reading '__k')
    at bn (index-18ebafdc.js:1:15413)
    at index-18ebafdc.js:3:15918
```



