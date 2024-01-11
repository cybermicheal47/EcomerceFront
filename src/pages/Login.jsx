import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 30px 0px;
`;
const Form = styled.form`
  display: flex;

  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 16px 10px;
  padding: 10px;
`;

const Button = styled.button`
  border: 2px solid lightgreen;
  background-color: white;
  font-weight: 600;
  cursor: pointer;
  padding: 16px 70px;
  width: 30%;

  &:hover {
    background-color: lightgreen;
    color: inherit;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;
const Link = styled.a`
  cursor: pointer;
  font-size: 14px;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Login To Your Account</Title>

        <Form>
          <Input placeholder="username" />

          <Input placeholder="password" />

          <Button>Login</Button>
        </Form>
        <LinkContainer>
          <Link>CREATE A NEW ACCOUNT</Link>
          <Link>Forgot PASSWORD?</Link>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
