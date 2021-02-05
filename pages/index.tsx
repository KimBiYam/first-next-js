import React from "react";

import { getPosts, PostType } from "../api";
import { MainLayout } from "../components/common/MainLayout";
import { PostList } from "../components/post/PostList";

interface Props {
  posts: PostType[];
}

const Home = ({ posts }: Props) => (
  <MainLayout title="홈">
    <PostList posts={posts} />
  </MainLayout>
);

Home.getInitialProps = async () => {
  console.log("executed home getInitialProps");

  const posts: PostType[] = await getPosts();
  return { posts };
};

export default Home;
