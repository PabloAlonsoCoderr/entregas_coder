import "./Titulo.css";

const Titulo = (props) => {
  return (
    <>
      <p className="Titulo">{props.titulo}</p>
      <p className="subTitulo">{props.subtitulo}</p>
      <p className="ruta">{props.ruta}</p>
    </>
  );
};

export default Titulo;
