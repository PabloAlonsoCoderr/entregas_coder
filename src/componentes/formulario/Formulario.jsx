import Titulo from "../titulo/Titulo";
import "./Formulario.css";

const Formulario = (props) => {
  return (
    <div className="wrapper__form">
      <form>
        <div>
          <Titulo
            titulo="soy un componente llamado desde otro componente"
            subtitulo="y me estoy importando en el contenedor"
            ruta="titulo/formulario/contenedor"
          />
        </div>
        {/* <input type="text" placeholder="INGRESE SU EMAIL" />
        <button>CLICK</button> */}
      </form>
    </div>
  );
};

export default Formulario;
