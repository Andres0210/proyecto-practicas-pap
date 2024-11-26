import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Rating,
  Alert,
  CircularProgress,
  Container,
} from "@mui/material";
import axios from "axios";

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    email: "",
    rating: 0,
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (event, newValue) => {
    setFormData({
      ...formData,
      rating: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await axios.post(
        "https://back-pap-production.up.railway.app/review",
        formData
      );
      setSuccess(true);
      setFormData({ email: "", rating: 0, comment: "" }); // Reinicia el formulario
    } catch (err) {
      setError("Error enviando la reseña. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          padding: 4,
          borderRadius: 2,
          textAlign: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#6ede00" }}
        >
          ¡Deja tu opinión!
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: "1.1rem" }}
        >
          Queremos saber lo que piensas. Comparte tu experiencia con nosotros y
          ayúdanos a mejorar. Tu opinión cuenta.
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 400,
          margin: "20px auto",
          padding: 2,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h5" mb={2}>
          Enviar Reseña
        </Typography>

        {/* Campo de Email */}
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
        />

        {/* Campo de Rating */}
        <Typography component="legend">Rating</Typography>
        <Rating
          name="rating"
          value={formData.rating}
          onChange={handleRatingChange}
          precision={1}
        />

        {/* Campo de Comentario */}
        <TextField
          label="Comentario"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
          multiline
          rows={4}
          inputProps={{ maxLength: 200 }}
          helperText={`${formData.comment.length}/200 caracteres`}
        />

        {/* Botón Enviar */}
        <Box mt={2} textAlign="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Enviar Reseña"}
          </Button>
        </Box>

        {/* Mensaje de Éxito */}
        {success && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Reseña enviada exitosamente.
          </Alert>
        )}

        {/* Mensaje de Error */}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </Box>
    </Container>
  );
}
