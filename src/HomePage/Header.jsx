import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  border: 1px solid black;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      Header
      <Link to="/Register">Login</Link>
    </HeaderWrapper>
  );
}
