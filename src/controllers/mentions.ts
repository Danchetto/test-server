import { Context, Next } from 'koa'

import { users, tags, IUser, ITag } from '../data'

const mapIdToUsers = users.reduce((acc: Record<number, IUser>, user: IUser) => {
  acc[user.id] = { ...user }

  return acc
}, {})

const mapIdToTags = tags.reduce((acc: Record<number, ITag>, tag: ITag) => {
  acc[tag.id] = { ...tag }

  return acc
}, {})

export const findMentions = async (ctx: Context, next: Next) => {
  const { text } = ctx.request.body

  const data: Array<string>[] = Array.from(text.matchAll(/(@user-\d( \(.*\))?)|(#tag-\d)/gm))

  const usersCache: Record<string, Partial<IUser>> = {}
  const tagsCache: Record<string, Partial<ITag>> = {}

  data.forEach(item => {
    if (usersCache[item[0]] || tagsCache[item[0]]) {
      return
    }

    const [mention, userValue] = item[0].split(' ')
    const id = mention.split('-')[1]

    const common = {
      mention: item[0],
      userValue: userValue?.slice(1, userValue.length - 1),
    }

    switch (mention[0]) {
      case '@':
        const userValue = { ...common, ...mapIdToUsers[+id] }
        usersCache[item[0]] = userValue
        break

      case '#':
        const tagValue = { ...common, ...mapIdToTags[+id] }
        tagsCache[item[0]] = tagValue
        break

      default:
        break
    }
  })

  ctx.body = {
    user: Object.values(usersCache),
    tag: Object.values(tagsCache),
  }

  await next()
}
