import "./Container.css";
import ItemCount from "./ItemCount";
import Titulo from "../titulo/Titulo";

const Container = () => {
  return (
    <div className="wrapper__container">
      <Titulo titulo="EJERCICIO INCREMENTADOR" />
      <ItemCount />
    </div>
  );
};

export default Container;
