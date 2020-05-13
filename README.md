# quidol-koa-cache-control
html cache control for koajs

## Install

```
  yarn add @redpill-paris/quidol-koa-cache-control
```

## Configuration

### Koa
```javascript
const controlCache = require('@redpill-paris/quidol-koa-cache-control');

app.use(cacheControl([
    'no-cache'
]));
```
[See html control cache parameters](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
### Specific options
```javascript
async getUser(ctx) {
    ...
    ctx.cacheControl = ['public', 'max-age=600'];
    ...
    ctx.response.status = 200;
}
```
