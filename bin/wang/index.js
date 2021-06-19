const Koa = require("koa");
const app = new Koa();

const Router = require("koa-router");
const router = new Router();
router.get("/", (ctx) => {
  ctx.body = "hello test1";
});
app.use(router.routes());

const serve = require("koa-static");
app.use(serve(__dirname + "/static"));

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
