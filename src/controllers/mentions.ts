import { Context, Next } from 'koa'

export const findMentions = async (ctx: Context, next: Next) => {
  const data = ctx.request.body
  
  ctx.body = data

  await next()
}
