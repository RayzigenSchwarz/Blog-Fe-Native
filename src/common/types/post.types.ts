export interface IPostProps {
  title: string;
  createdAt: string;
  postImg?: string;
  description?: string;
  id?: string;
  // isComments?: boolean;
  // userId: string;
  like: string;
  postAuthor: string;
  userAvatar: string;
}

export type PostsTypes = {
  title: string;
  description: string;
  image: string;
};
