import Koa from 'koa'
import logger from 'koa-logger'
import body from 'koa-bodyparser'

import router from './router'

const app = new Koa()

app.use(logger())
app.use(body())

app.use(router.routes()).use(router.allowedMethods())

export default app
