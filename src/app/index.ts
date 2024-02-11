import {Base} from "../base";
import {INewPost, IPost} from "./types";

export class App extends Base {
  getPostById(id: number): Promise<IPost> {
    return this.invoke(`/posts/${id}`)
  }

  getPosts(): Promise<IPost[]> {
    return this.invoke(`/posts`)
  }

  createPost(newPost: INewPost): Promise<IPost> {
    return this.invoke(`/posts/add`, {
      method: 'POST',
      body: JSON.stringify(newPost)
    })
  }
}