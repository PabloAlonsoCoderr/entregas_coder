import { useState } from "react";
import "./ItemCount.css";

let stock = 5;

const ItemCount = () => {
  const [valor, set] = useState(0);

  const aumentar = () => {
    if (valor < stock) {
      set(valor + 1);
      console.log(valor);
    } else {
      console.log("error");
    }
  };

  const disminuir = () => {
    if (valor > 0) {
      set(valor + -1);
      console.log(valor);
    } else {
      console.log("error");
    }
  };

  const carrito = () => {
    alert(`La cantidad de productos es ${valor}`);
  };

  return (
    <div className="wrapper_count">
      <div className="wrapper_count--1">
        <p>{valor}</p>
      </div>
      <div className="wrapper_count--2">
        <button type="button" class="btn btn-success" onClick={aumentar}>
          AUMENTAR
        </button>

        <button type="button" class="btn btn-danger" onClick={disminuir}>
          AUMENTAR
        </button>

        <button type="button" class="btn btn-light" onClick={carrito}>
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
