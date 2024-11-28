import React from "react";
import {
  Container,
  Box,
  Typography,
  LinearProgress,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)({
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
  background: "linear-gradient(90deg, #f9f9f9, #ffffff)",
});

const ProgressSegment = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 15px",
  borderRadius: "4px",
  background: "rgba(0, 0, 0, 0.05)",
  marginBottom: "5px",
});

const PriorizacionNecesidades = () => {
  return (
    <Container id="13" sx={{ p: 3 }}>
      <div style={{marginBottom:"40px"}}>
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
          textAlign="center"
        >
          Priorización de Necesidades
        </Typography>
      </div>
      <StyledPaper>
        <Typography variant="h6" gutterBottom>
          1. Seguridad Física
        </Typography>
        <ProgressSegment>
          <Typography variant="body1">
            La primera prioridad es garantizar la seguridad de la persona. Si
            hay riesgos inmediatos de daño (accidentes, violencia,
            autolesiones), se deben tomar medidas para proteger a la persona y
            al entorno.
          </Typography>
        </ProgressSegment>
        <Typography variant="body2" color="textSecondary">
          Ejemplo: Buscar atención médica urgente si hay lesiones graves o
          peligro inminente.
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <Typography variant="h6" gutterBottom>
          2. Apoyo Emocional Inmediato
        </Typography>
        <ProgressSegment>
          <Typography variant="body1">
            Asegurar que la persona no se sienta sola y brindar contención
            emocional. Validar sus sentimientos y ofrecer un espacio seguro para
            expresarse.
          </Typography>
        </ProgressSegment>
        <Typography variant="body2" color="textSecondary">
          Ejemplo: Escuchar de manera activa y empática para reducir el impacto
          emocional agudo de la crisis.
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <Typography variant="h6" gutterBottom>
          3. Necesidades Básicas
        </Typography>
        <ProgressSegment>
          <Typography variant="body1">
            Atender las necesidades fisiológicas inmediatas, como agua, comida o
            descanso, si es necesario.
          </Typography>
        </ProgressSegment>
        <Typography variant="body2" color="textSecondary">
          Ejemplo: Preguntar si la persona tiene hambre, sed o necesita
          descansar.
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <Typography variant="h6" gutterBottom>
          4. Conexión con Recursos Profesionales
        </Typography>
        <ProgressSegment>
          <Typography variant="body1">
            Identificar si la persona necesita ser derivada a servicios
            especializados (médicos, psiquiátricos, familiares) para un
            tratamiento continuo o apoyo a largo plazo.
          </Typography>
        </ProgressSegment>
        <Typography variant="body2" color="textSecondary">
          Ejemplo: Contactar con un terapeuta, hospital o línea de emergencia si
          la situación lo requiere.
        </Typography>
      </StyledPaper>
    </Container>
  );
};

export default PriorizacionNecesidades;
