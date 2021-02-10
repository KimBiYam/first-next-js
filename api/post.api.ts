import fetch from "isomorphic-unfetch";

const API_URL = "https://jsonplaceholder.typicode.com";

export interface PostType {
  id: string;
  title: string;
  body: string;
}

export const getPosts = async () => {
  const request = await fetch(`${API_URL}/posts`);
  const response = await request.json();
  const posts: PostType[] = response;

  return posts;
};

export const getPost = async (postId: string) => {
  const request = await fetch(`${API_URL}/posts/${postId}`);
  const response = await request.json();
  const post: PostType = response;

  return post;
};
