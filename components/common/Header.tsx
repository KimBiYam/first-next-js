import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

export const Header = () => {
  return (
    <Container>
      <Link href="/">
        <LogoBlack>Post-app</LogoBlack>
      </Link>
      <div>
        <Link href="/login">
          <LogoBlue>Login</LogoBlue>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  backgroudn-color: white;
  color: #222222;
`;

const LogoBase = css`
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
`;

const LogoBlack = styled.a`
  ${LogoBase}
  color: #222222;
`;

const LogoBlue = styled.a`
  ${LogoBase}
  color: blue;
`;
