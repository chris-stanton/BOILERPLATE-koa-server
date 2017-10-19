
// pulling in dependancies
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const port = 5000;


// middleware
app.use((ctx, next) => {
    console.log('Koa middleware...');
    next();
});

// routes
router.get('/', (ctx, next) => {
  ctx.response.body = 'koa index route success';
});


// route configuration
app.use(router.routes());
app.use(router.allowedMethods());


// port listening
app.listen(port, function() {
  console.log('Listening on port: ', port);
});
