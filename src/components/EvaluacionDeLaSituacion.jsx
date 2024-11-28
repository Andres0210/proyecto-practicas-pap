import React from "react";
import {
  Typography,
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const EvaluacionDeLaSituacion = () => {
  const steps = [
    {
      title: "Establecer contacto y generar confianza",
      details: [
        'Presentarte con calma y empatía: "Estoy aquí para ayudarte".',
        "Crear un ambiente de seguridad donde la persona se sienta escuchada.",
        "Propósito: Reducir la ansiedad inicial y fomentar la apertura para hablar.",
      ],
    },
    {
      title: "Identificar el problema principal",
      details: [
        'Preguntar directamente qué ocurrió: "¿Qué te llevó a sentirte así?".',
        'Explorar el contexto: "¿Cuándo empezó esta situación?".',
        "Propósito: Comprender la naturaleza del evento que desató la crisis.",
      ],
    },
    {
      title: "Evaluar el nivel de riesgo",
      details: [
        'Indagar sobre pensamientos de autolesión o suicidio: "¿Has pensado en lastimarte o hacerte daño?".',
        'Evaluar la intensidad emocional: "En una escala del 1 al 10, ¿qué tan fuerte es lo que sientes ahora?".',
        "Propósito: Determinar si hay peligro inminente para la seguridad del paciente o de otros.",
      ],
    },
    {
      title: "Explorar recursos y capacidades actuales",
      details: [
        'Identificar apoyos: "¿Hay alguien cercano con quien puedas contar ahora?".',
        'Preguntar sobre estrategias pasadas: "¿Qué te ha ayudado a superar momentos difíciles antes?".',
        "Propósito: Conocer posibles recursos internos y externos para ayudar al paciente.",
      ],
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h5"
        gutterBottom
        component="a"
        sx={{
   
          fontWeight: "bold",
          color: "#333",
          textTransform: "uppercase",
          letterSpacing: "2px",

          color: "#6ede00",
        }}
        id="6"
        align="center"
      >
        Evaluación de la Situación
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box>
        {steps.map((step, index) => (
          <Accordion key={index} defaultExpanded={index === 0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6" component="h2">
                {`${index + 1}. ${step.title}`}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {step.details.map((detail, idx) => (
                  <li
                    key={idx}
                    style={{ marginBottom: "10px", listStyle: "none" }}
                  >
                    <CheckCircleIcon  sx={{ mr: 1, color:"#6ede00" }} />
                    <Typography variant="body1" component="span">
                      {detail}
                    </Typography>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default EvaluacionDeLaSituacion;
