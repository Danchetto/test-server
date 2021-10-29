import Router from 'koa-router'

import * as mentions from './controllers/mentions'

const router = new Router()

router.post('/mentions/', mentions.findMentions)

export default router
