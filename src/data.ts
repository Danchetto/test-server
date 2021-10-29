export interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
}

export const users: IUser[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Brown',
    email: 'john@gmail.com'
  },
  {
    id: 2,
    firstName: 'Matt',
    lastName: 'Black',
    email: 'matt@gmail.com'
  },
  {
    id: 3,
    firstName: 'Olivia',
    lastName: 'Hudson',
    email: 'olivia@gmail.com'
  },
]

export interface ITag {
  id: number
  tag: string
}

export const tags: ITag[] = [
  {
    id: 1,
    tag: 'cool',
  },
  {
    id: 2,
    tag: 'hot',
  },
  {
    id: 2,
    tag: 'interesting',
  },
]