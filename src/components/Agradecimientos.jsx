import React from "react";
import { Typography, Box } from "@mui/material";

const Agradecimientos = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "30px",
        backgroundColor: "#e8f5e9",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        mt: 8
      }}
    >
      <Typography
        variant="h6"
         fontWeight="bold"
        sx={{ fontWeight: "bold", color: "#2e7d32", marginBottom: "15px",  }}
      >
        Agradecimientos
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{  lineHeight: 1.6, textAlign:"justify" }}>
        Expresamos nuestro más sincero agradecimiento a la docente{" "}
        <strong>Yuly Carolina Santana Ramirez</strong> y al coordinador{" "}
        <strong>Alberto Valencia Zableh</strong> por su invaluable orientación,
        apoyo constante y dedicación en el proceso de desarrollo de este
        proyecto. Su guía ha sido fundamental para fortalecer nuestras
        competencias y alcanzar los objetivos planteados. Apreciamos
        profundamente su compromiso y el impacto positivo que han tenido en
        nuestro aprendizaje.
      </Typography>
    </Box>
  );
};

export default Agradecimientos;
