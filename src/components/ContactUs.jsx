import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  // State para el formulario
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (!email || !message) {
      setIsError(true);
      return;
    }

    // Enviar el mensaje (aquí podrías integrar con un servicio de correo)
    // Por ejemplo, usando un API o un backend

    // Si todo es correcto, mostramos un mensaje de éxito
    setIsSubmitted(true);
    setEmail("");
    setMessage("");
  };
  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container sx={{mt: 15}}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={handleClick}
        sx={{
          backgroundColor: "#8bbe35", // Cambia el color del botón
          "&:hover": {
            backgroundColor: "#79a42d", // Cambia el color cuando el mouse pasa por encima
          },
          textTransform: "none", // Evita que el texto esté en mayúsculas
          fontWeight: "bold",
        }}
      >
        Volver a la guía
      </Button>
      <Container sx={{ py: 4, mt:10 }} maxWidth="sm">
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            position: "relative",
            fontWeight: "bold",
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textAlign: "center",
            color: "#6ede00",
            mb: 8,
          }}
          textAlign="center"
        >
          escribenos
        </Typography>

        {/* Mensaje de éxito o error */}
        {isSubmitted && !isError && (
          <Alert severity="success" sx={{ mb: 2 }}>
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
          </Alert>
        )}
        {isError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Todos los campos son requeridos.
          </Alert>
        )}

        {/* Formulario de contacto */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Mensaje"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#8bbe35", // Cambia el color del botón
                "&:hover": {
                  backgroundColor: "#79a42d", // Cambia el color cuando el mouse pasa por encima
                },
                textTransform: "none", // Evita que el texto esté en mayúsculas
                fontWeight: "bold",
              }}
            >
              Enviar Mensaje
            </Button>
          </Box>
        </form>
      </Container>
    </Container>
  );
};

export default ContactUs;
