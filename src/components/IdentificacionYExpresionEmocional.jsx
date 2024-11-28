import React from "react";
import { Typography, Box, Paper, Container } from "@mui/material";

const IdentificacionYExpresionEmocional = () => {
  return (
    <Box id="9" sx={{ p: 2 }}>
      <Container elevation={3} sx={{ p: 3, mb: 3 }}>
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
          Identificación y Expresión Emocional
        </Typography><br/><br/><br/>
        <Typography variant="body1" paragraph>
          En una situación de crisis, lo primordial es asegurarse de que la
          persona se sienta en un ambiente seguro y cómodo. Esto es clave para
          que pueda abrirse. El profesional puede comenzar con afirmaciones
          como: "Aquí estamos en un lugar tranquilo, así que tómate tu tiempo".
        </Typography>
        <Typography variant="body1" paragraph>
          Es importante preguntar sobre sus emociones. Una pregunta simple como:
          "¿Qué estás sintiendo en este momento?" puede ser un buen punto de
          partida. A menudo, las personas no son conscientes de lo que sienten,
          así que el profesional las anima a reflexionar un poco, recordándoles
          que es completamente normal tener una mezcla de emociones en momentos
          difíciles.
        </Typography>
        <Typography variant="body1" paragraph>
          Validar lo que siente la persona es fundamental. Expresiones como: "Lo
          que sientes es válido y normal. No hay una forma correcta o incorrecta
          de sentir" ayudan a que el individuo se sienta más cómodo al
          compartir.
        </Typography>
        <Typography variant="body1" paragraph>
          Cuando se trata de expresar esas emociones, es esencial dejar claro
          que no hay presión. Frases como: "No tienes que apresurarte. Comparte
          lo que sientas cuando estés listo" les dan el espacio necesario para
          abrirse sin sentirse obligados.
        </Typography>
        <Typography variant="body1" paragraph>
          En ocasiones, el profesional puede sugerir otras formas de expresión,
          como escribir en un diario o dibujar. Comentarios como: "Si hablar es
          difícil, puedes escribir lo que sientes. A veces, eso ayuda a aclarar
          las ideas" pueden ser útiles.
        </Typography>
        <Typography variant="body1" paragraph>
          Mientras la persona habla, se debe practicar la escucha activa.
          Mantener contacto visual y asentir muestra que el profesional está
          presente y que realmente le importa lo que dice. También es importante
          asegurar que lo que se comparta será confidencial, lo que puede
          aliviar un poco la carga emocional.
        </Typography>
        <Typography variant="body1" paragraph>
          Al final, el objetivo del psicólogo es crear un espacio donde la
          persona pueda identificar y expresar sus emociones de manera natural y
          respetuosa, ayudándola a sentirse apoyada en su proceso.
        </Typography>
      </Container>
    </Box>
  );
};

export default IdentificacionYExpresionEmocional;
