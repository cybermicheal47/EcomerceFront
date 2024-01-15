import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import pic from "../images/a.jpg";
import { Add, Remove } from "@mui/icons-material";
import { Mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${Mobile({ flexDirection: "column", padding: "10px" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 90vh;
  width: 100%;
  object-fit: cover;
  ${Mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  padding: 0px 20px;
  flex: 1;
`;

const Title = styled.h1``;

const Desc = styled.p`
  padding: 20px 0px;
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  ${Mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 6px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 6px;
  margin-left: 10px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${Mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: bold;
`;
const Amount = styled.option`
  font-weight: 600;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 16px;
  border: 2px solid lightgreen;
  background-color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: white;
  }
`;

const ProductPage = () => {
  return (
    <Container>
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={pic} />
        </ImgContainer>
        <InfoContainer>
          <Title> Custom Made Shoe</Title>
          <Desc>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            dolores ab doloribus sed esse corporis saepe, dolore asperiores ut.
            Ad molestiae eos tenetur mollitia. Animi nesciunt est eaque
            similique totam?
          </Desc>
          <Price>$20</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Add />
              <Amount>1</Amount>
              <Remove />
            </AmountContainer>
            <Button>Add To Cart </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
