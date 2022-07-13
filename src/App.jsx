import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./componentes/navbar/Nav";
import Titulo from "./componentes/titulo/Titulo";
import Container from "./componentes/container/Container";

function App() {
  return (
    <>
      <Nav />
      <Titulo
        titulo="soy un componente  llamado desde APP"
        subtitulo="titulo"
      />
      <Container />
    </>
  );
}

export default App;
