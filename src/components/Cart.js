import React, { useEffect } from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getStoreItemArr } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArr);
  const updateTotal = () => {
    let total = 0;
    for (let i = 0; i < storeItems.length; i++) {
      total += storeItems[i].quantity * storeItems[i].price;
    }
    return total / 100;
  };

  return (
    <>
      <div style={{ position: "sticky" }}>
        <Total>
          <div>
            <TopInfo>
              <h3 style={{ marginTop: "0" }}>Your Cart</h3>
              <NumOfItems>
                {`${storeItems.length} Item`}
                {storeItems.length > 1 || storeItems.length === 0 ? "s" : ""}
              </NumOfItems>
            </TopInfo>
            {storeItems.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
          <div>
            <div>Total:</div>
            <div>{updateTotal()}$</div>
          </div>
        </Total>
      </div>
    </>
  );
};
const Total = styled.div`
  background: #401f43;
  color: white;
  height: 100vh;
  position: sticky;
  margin: 0;
  padding: 10px;
`;
const TopInfo = styled.div`
  padding: 20px;
`;
const NumOfItems = styled.p`
  color: lightgrey;
  font-size: 0.9rem;
`;

export default Cart;
