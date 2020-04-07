import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../actions";
import { useSelector } from "react-redux";

const CartItem = ({ item }) => {
  const numOfItem = useSelector((state) => {
    return state[item.id].quantity;
  });

  const dispatch = useDispatch();
  return (
    <Box>
      <ItemBox>
        <ItemName>{item.title}</ItemName>
        <i onClick={() => dispatch(removeItem({ item }))}>X</i>
      </ItemBox>
      <QuantityBox>
        <tag>Quantity:</tag>
        <Qty
          type={"number"}
          step={1}
          min={0}
          value={numOfItem}
          onChange={(event) =>
            dispatch(updateItem({ item, value: event.target.value }))
          }
        />
      </QuantityBox>
    </Box>
  );
};
const Box = styled.div`
  border: 1px dashed lightgrey;
  margin: 12px 0;
`;
const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: fit-content;
`;
const ItemName = styled.h3`
  margin: 0;
  font-size: 1.4rem;
`;
const QuantityBox = styled.form`
  background: #331936;
  padding: 10px;
`;
const Qty = styled.input`
  width: 30px;
  font-size: 1rem;
`;

export default CartItem;
