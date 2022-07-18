import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./componentes/navbar/Nav";
import Container from "./componentes/container/Container";
import Titulo from "./componentes/titulo/Titulo";

function App() {
  return (
    <>
      <Nav />
      <Titulo />
      <Container />
    </>
  );
}

export default App;
