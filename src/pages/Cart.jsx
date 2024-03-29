import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import pic from "../images/a.jpg";
import picc from "../images/b.jpg";
import { Add, Remove } from "@mui/icons-material";
import { Mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${Mobile({ padding: " 20px 0px" })}
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Topbutton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  &:hover {
    background-color: ${(props) =>
      props.type === "filled" ? "lightgreen" : "black"};
    color: ${(props) => (props.type === "filled" ? " black" : "white")};
  }
`;

const TopTexts = styled.div`
  ${Mobile({ display: "none" })}
`;
const TopText = styled.span`
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${Mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  ${Mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;

const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.div``;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  justify-content: space-around;
`;
const PriceDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  ${Mobile({ margin: "20px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${Mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  padding: 20px;
  height: 50vh;
  border: 1px solid #eee;
  margin-top: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 400;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0px;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "22px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: lightgreen;
  color: black;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

function Cart() {
  return (
    <Container>
      <Announcement />

      <Wrapper>
        <Title>Your Product</Title>

        <Top>
          <Topbutton> Continue Shopping</Topbutton>
          <TopTexts>
            <TopText> Cart (4) </TopText>
            <TopText>Your WishList(0) </TopText>
          </TopTexts>
          <Topbutton type="filled"> CheckOut</Topbutton>
        </Top>

        <Bottom>
          <Info>
            {" "}
            <Product>
              <ProductDetail>
                <Image src={pic} />
                <Details>
                  <ProductName>
                    <b>Product:</b> Great Shoe
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 12345322
                  </ProductId>
                  <ProductColor color="blue" />
                  <ProductSize>
                    <b>Size:</b> 45
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 89</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={picc} />
                <Details>
                  <ProductName>
                    <b>Product:</b> Nike Airforce Shoe
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 111223333
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b> 45
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 80</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle> Order Summary</SummaryTitle>

            <SummaryItem>
              <SummaryItemText> SubTotal : </SummaryItemText>
              <SummaryItemPrice> $169</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText> Estimated Shipping: </SummaryItemText>
              <SummaryItemPrice> $50</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText> Shipping Discount:</SummaryItemText>
              <SummaryItemPrice> $-6</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText> Total</SummaryItemText>
              <SummaryItemPrice> $213</SummaryItemPrice>
            </SummaryItem>

            <SummaryButton>Checkout Now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
}

export default Cart;
