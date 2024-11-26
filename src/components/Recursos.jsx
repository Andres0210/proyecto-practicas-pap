import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const videos = [
  {
    title: "PAP",
    url: "https://www.youtube.com/embed/hbVfsJ8KJJA",
  },
  {
    title: "PAP Parte 2",
    url: "https://www.youtube.com/embed/22-my7Wl_uA",
  },
  {
    title: "Intervención en Crisis",
    url: "https://www.youtube.com/embed/E9oSVLHwx1A",
  },
  {
    title: "Habilidades Comunicativas",
    url: "https://www.youtube.com/embed/pSxYhuaUzAA",
  },
];

export default function Recursos() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        minHeight: "100vh",
        marginTop: "100px",
      }}
    >
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
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Videos de Intervención en Crisis
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {videos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
              }}
            >
              <CardMedia
                component="iframe"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sx={{
                  height: 200,
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  align="center"
                  sx={{ fontWeight: "bold", color: "#555" }}
                >
                  {video.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
