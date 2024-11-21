import React from "react";
import "../../components/portada/estilosPortada.css";

export default function Portada() {
  return (
    <div className="portada">
      <div className="overlay">
        <div className="contenedor">
          <h1 className="titulo">GUIA DE INTERVENCION EN CRISIS</h1>
          <h3 className="subtitulo">
            Herramienta para el psicólogo en formación
          </h3>
        </div>
      </div>
    </div>
  );
}
