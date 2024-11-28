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
import Actitudes from "./Actitudes";
import RegulacionDeEmociones from "./RegulacionDeEmociones";
import TecnicaDeRelajacion from "./TecnicaDeRelajacion";
import IdentificacionYExpresionEmocional from "./IdentificacionYExpresionEmocional";
import EvaluacionDeLaSituacion from "./EvaluacionDeLaSituacion";
import AproximacionSegura from "./AproximacionSegura";

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
      <Actitudes/>
      <RegulacionDeEmociones/>
      <TecnicaDeRelajacion/>
      <IdentificacionYExpresionEmocional/>
      <EvaluacionDeLaSituacion/>
      <AproximacionSegura/>
      <ReviewForm />
      <Reviews />
     
    </div>
  );
}
