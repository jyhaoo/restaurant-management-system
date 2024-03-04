import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Body = styled.div`
  display: flex;
`;

function App() {
  return (
    <Body>
      <Navbar />
      <Header />
    </Body>
  );
}

export default App;
