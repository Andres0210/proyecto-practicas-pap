import React from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Button,
  StepIcon,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import imagen from "../image/respiracion diafragmatica.gif";

const RegulaacionDeEmociones = () => {
  const steps = [
    {
      label: "Encuentra un lugar tranquilo",
      description:
        "Pide a la persona que se siente o se acueste en un lugar cómodo y silencioso, donde no haya distracciones.",
    },
    {
      label: "Cierra los ojos",
      description:
        "Invítala a cerrar los ojos suavemente para ayudar a concentrarse en su interior.",
    },
    {
      label: "Respiración diafragmática",
      description:
        "Guía a la persona a colocar una mano en su abdomen y la otra en su pecho. Pídele que inhale profundamente por la nariz, sintiendo cómo su abdomen se expande, y luego exhale lentamente por la boca. Repite esto tres veces, enfocándose en la sensación de la respiración.",
      image: imagen,
    },
    {
      label: "Escaneo corporal",
      description:
        "Pídele que lleve su atención a diferentes partes de su cuerpo, comenzando desde los pies y subiendo hasta la cabeza. Invítala a notar cualquier tensión o incomodidad y a imaginar que, al exhalar, esa tensión se disipa.",
    },
    {
      label: "Aceptación de pensamientos",
      description:
        "Recuerda a la persona que es normal que surjan pensamientos y emociones. Invítala a observarlos sin juzgarlos, como si fueran nubes que pasan por el cielo. No es necesario aferrarse a ellos.",
    },
    {
      label: "Regreso a la respiración",
      description:
        "Después de unos minutos, pídele que vuelva a centrar su atención en la respiración diafragmática, sintiendo cómo su cuerpo se relaja más con cada exhalación.",
    },
    {
      label: "Cierre",
      description:
        "Finalmente, guíala a abrir los ojos lentamente y a tomar un momento para notar cómo se siente antes de continuar con su día.",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {/* Título */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="h5"
          gutterBottom
          component="a"
          sx={{
            position: "relative",
            fontWeight: "bold",
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textAlign: "center",
            color: "#6ede00",
          }}
          id="6"
        >
          Regulación de Emociones
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Estrategias de afrontamiento: Manejo del estrés, Técnicas de
          relajación, Identificación y expresión emocional
        </Typography>
      </Box>

      {/* Contenido principal */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">¿Qué es el estrés?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            El estrés se puede definir como un estado de preocupación o tensión
            mental que surge ante situaciones difíciles (OMS, 2023). En esencia,
            es la respuesta del cuerpo a diversas presiones, tanto internas como
            externas, y se manifiesta a través de reacciones fisiológicas,
            psicológicas y comportamentales. Esta respuesta puede incluir
            síntomas como aumento de la frecuencia cardíaca, ansiedad y cambios
            en el comportamiento, lo que resalta la importancia de manejar el
            estrés de manera efectiva para promover el bienestar general.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">¿Cómo manejar el estrés?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            La técnica más efectiva para manejar el estrés en pacientes que
            reciben Primeros Auxilios Psicológicos es la meditación de atención
            plena (mindfulness). Esta práctica se basa en centrar la atención en
            el momento presente y aceptar las emociones y pensamientos sin
            juzgarlos. La evidencia científica respalda que la meditación de
            atención plena puede reducir significativamente el estrés y la
            ansiedad, mejorando el bienestar general de las personas.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Paso a paso */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          ¿Cómo hacerlo? Paso a paso:
        </Typography>
        <Stepper orientation="vertical" sx={{ mt: 2 }}>
          {steps.map((step, index) => (
            <Step key={index} active completed>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                {step.image ? (
                  <img
                    alt=""
                    src={imagen}
                    style={{ width: "300px", height: "auto" }}
                  ></img>
                ) : (
                  " "
                )}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>
  );
};

export default RegulaacionDeEmociones;
