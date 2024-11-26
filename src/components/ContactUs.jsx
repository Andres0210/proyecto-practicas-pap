import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

const ContactUs = () => {
  // State para el formulario
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

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

  return (
    <Container sx={{ py: 4, marginTop:"150px" }} maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Contáctanos
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
            sx={{ width: "50%" }}
          >
            Enviar Mensaje
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ContactUs;
