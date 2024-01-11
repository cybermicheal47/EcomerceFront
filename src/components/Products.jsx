import React from "react";
import { popularProducts } from "../data";
import styled from "styled-components";
import SingleProduct from "./SingleProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
