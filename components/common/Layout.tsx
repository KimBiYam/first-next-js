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
  width: 100%;
  height: 100%;
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: white;
  padding: 30px 24px;
  border-bottom: 1px solid #eeeeee;
`;

const Main = styled.main`
  padding: 110px 24px 30px;
`;
