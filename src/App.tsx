import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import Format from "./components/Format";
import * as Constants from "./constants";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 8rem 6rem; // top-bottom left-right

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: auto;

  background-color: ${Constants.BACKGROUND_COLOR};
  text-align: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Header = styled.header`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.4rem;
`;

const App: FC = (): ReactElement => (
  <Wrapper>
    <Helmet>
      {/* Block indexing for now. Remove react-helmet when site goes live. */}
      <meta name="robots" content="noindex" />
    </Helmet>
    <Header>
      <Title>{Constants.APP_TITLE}</Title>
    </Header>
    <Format {...Constants.FP32} />
    {/*
    <Format {...Constants.FP64} />
    <Format {...Constants.FP16} />
    <Format {...Constants.BF16} />
    <Format {...Constants.TF32} />
    */}
  </Wrapper>
);

export default App;