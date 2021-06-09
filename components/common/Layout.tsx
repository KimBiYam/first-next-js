import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Header from "./Header";

interface Props {
  title: string;
  children: React.ReactNode;
}

function Layout({ title, children }: Props) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Main>{children}</Main>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: white;
`;

const HeaderWrapper = styled.header`
  background-color: white;
  padding: 30px 24px;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 12px;
`;

const Main = styled.main`
  width: 100%;
  overflow-y: auto;
  padding: 30px 24px;
`;
