import React from "react";
import Portada from "./Portada";
import Presentation from "./Presentation";
import Contenido from "./Contenido";
import Antecedentes from "./Antecedentes";
import ConceptosBasicos from "./ConceptosBasicos";
import EtapaDePreparacion from "./EtapaDePreparacion";
import Enetrenamiento from "./Entrenamiento";
import HabilidadesComunicativas from "./HabilidadesComunicativas";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import Recursos from "./Recursos";

export default function AllBody() {
  return (
    <div>
      <Portada />
      <Presentation />
      <Contenido />
      <Antecedentes />
      <ConceptosBasicos />
      <EtapaDePreparacion />
      <Enetrenamiento />
      <HabilidadesComunicativas />
      <ReviewForm />
      <Reviews />
     
    </div>
  );
}
