const Koa = require('koa');
const Router = require('koa-router');
const Koalog = require('./koa-logger');

const app = new Koa();
const router = new Router();


// app.use( async(ctx) => {
//   ctx.body = 'hello skyling';
// })
// function delay (){
//   return new Promise( (resolve, reject) => {
//     setTimeout( ()=> {
//       resolve()
//     },2000)
//   })
// }

router.get('/',(ctx, next) => {
  ctx.body = '首页'
})

router.get('/other',(ctx, next) => {
  ctx.body = '其他页面'
})

app
  .use(router.routes())
  .use(router.allowedMethods());
app.use(Koalog);

// app.use(async(ctx, next) => {
//   //console.log(ctx);
//   const {request} = ctx;
//   if(request.url == '/'){
//     ctx.body = '这是根路径';
//   }
//   if(request.url == '/other'){
//     ctx.body = '这是其他子路径';
//   }else{
//     ctx.body = '404';
//   }

//   await next();
 
//   ctx.body += '2';
// })

// app.use(async(ctx, next) => {
//   ctx.body += '3';
//   await delay();
//   await next();
//   ctx.body += '4';
// })

// app.use(async(ctx, next) => {
//   ctx.body += '5';
//   await next();
//   ctx.body += '6';
// })


app.listen('2008');
console.log('koa2 is running');