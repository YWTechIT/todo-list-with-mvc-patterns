import React from "react";
import Container from "./Components/Container";
import Header from "./Components/molecules/Header";
import TodoGroup from "./Components/molecules/TodoGroup";

const App = () => {
  return (
    <Container>
      <Header />
      <TodoGroup />
    </Container>
  );
};

export default App;
