import { Button } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

function Header() {
  return (
    <Container>
      <Link href="/">
        <LogoBlack>Post-app</LogoBlack>
      </Link>
      <Link href="/auth/login">
        <Button color="primary">Login</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
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

export default Header;
