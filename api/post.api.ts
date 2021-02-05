import fetch from "isomorphic-unfetch";

const API_URL = "http://localhost:4000/api";

export interface PostType {
  id: string;
  title: string;
  content: string;
}

export const getPosts = async () => {
  const request = await fetch(`${API_URL}/posts`);
  const response = await request.json();
  const posts: PostType[] = response.posts;

  return posts;
};

export const getPost = async (postId: string) => {
  const request = await fetch(`${API_URL}/posts/${postId}`);
  const response = await request.json();
  const post: PostType = response.post;

  return post;
};
