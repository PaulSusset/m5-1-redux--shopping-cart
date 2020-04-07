import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";
import Cart from "./Cart";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>

      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.3fr;
  grid-template-rows: 0.2fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "header header header sidebar" "main main main sidebar" "main main main sidebar";
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
  height: 100vh;
  position: sticky;
  top: 0;
`;

export default App;
