import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  const Container = styled.div`
    height: 60px;
  `;

  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
  `;

  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
  `;
  const Searchcontainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
  `;

  const Input = styled.input`
    border: none;
    padding: 5px;
  `;

  const Logo = styled.h1`
    font-weight: bold;
  `;

  const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>

          <Searchcontainer>
            <Input />
            <Search style={{ color: "grey", fontSize: 18 }} />
          </Searchcontainer>
        </Left>
        <Center>
          <Logo> Ecommerce</Logo>
        </Center>
        <Right>
          <MenuItem> Login</MenuItem>
          <MenuItem> Register</MenuItem>

          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
