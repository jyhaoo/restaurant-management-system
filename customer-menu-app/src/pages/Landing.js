import styled from "styled-components";
import Button from "react-bootstrap/Button";
const Logo = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  font-size: 150px;
`;

const Name = styled.div`
  position: absolute;
  top: 53%;
  left: 45%;
  font-size: 40px;
`;

const Landing = () => {
  return (
    <>
      <Logo>面条</Logo>
      <Name>Mian Tiao</Name>
      <Button
        style={{ position: "absolute", top: "62%", left: "656px" }}
        variant="primary"
        size="lg"
      >
        Guest Login
      </Button>
    </>
  );
};

export default Landing;
