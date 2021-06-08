import React from "react";

import { getPosts, PostType } from "../api";
import { Layout } from "../components/common/Layout";
import { PostList } from "../components/post/PostList";

interface Props {
  posts: PostType[];
}

const Home = ({ posts }: Props) => (
  <Layout title="홈">
    <PostList posts={posts} />
  </Layout>
);

Home.getInitialProps = async () => {
  console.log("executed home getInitialProps");

  const posts: PostType[] = await getPosts();
  return { posts };
};

export default Home;
