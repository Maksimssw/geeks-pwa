export interface IPost {
  id: number,
  title: string,
  body: string,
  userId: number
}

export interface INewPost {
  title: string,
  body: string,
  userId: number
}