import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper, Container } from '@mui/material';

const referencias = [
  {
    autor: "García, J.",
    titulo: "Primeros auxilios psicológicos para intervenir con personas en crisis emocional",
    url: "https://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0CCUQFjAB&url=http%3A%2F%2Fdialnet.unirioja.es%2Fdescarga%2Farticulo%2F3655753.pdf&ei=oN8LVeDJoeXgwSSyYNg&usg=AFQjCNHPOtMucHXvohkrBEcoCez7xpXXg&sig2=6VdJj8qETJUWWS1WvcKq9A&bvm=bv.88528373,d.eX",
  },
  {
    autor: "García Vera, M. P., Sanz, J., & Bermúdez, J.",
    titulo: "Manual de intervención en crisis y tratamiento psicológico de los trastornos de estrés",
    url: "https://www.papelesdelpsicologo.es/pdf/1190.pdf",
  },
  {
    autor: "Gómez del Campo, J.",
    titulo: "Intervención en las crisis: Manual para el entrenamiento",
    editorial: "México: Plaza y Valdés Editores",
  },
  {
    autor: "Hernández, M.",
    titulo: "Redes de apoyo en la intervención en crisis",
    url: "https://www.psicologia-online.com/derivacion-a-redes-de-apoyo",
  },
  {
    autor: "López, R.",
    titulo: "Psicoeducación y crisis: Estrategias de afrontamiento",
    url: "https://www.psicologia-online.com/psicoeducacion-en-crisis",
  },
  {
    autor: "Márquez, A.",
    titulo: "¿Quién puede aplicar los primeros auxilios psicológicos?",
    url: "https://psicologiaviva.com/blog/quien-puede-aplicar-los-primeros-auxilios-psicologicos/",
  },
  {
    autor: "National Child Traumatic Stress Network (NCTSN)",
    titulo: "Primeros auxilios psicológicos. Guías de operaciones prácticas (2ª ed.)",
    editorial: "U.S.A: NCTSN",
  },
  {
    autor: "Organización Mundial de la Salud",
    titulo: "Primeros auxilios psicológicos: Guía para trabajadores de campo",
    url: "https://cop.es/uploads/PDF/PRIMERAAYUDAPSICOLOGICAGUIAPARATRABAJADORESDECAMPO.pdf",
  },
  {
    autor: "Organización Panamericana de la Salud (OPS)",
    titulo: "Apoyo psicosocial en emergencias y desastres: Guía para equipos de respuesta",
    editorial: "Washington, D.C.: OPS",
  },
  {
    autor: "Osorio, A.",
    titulo: "Primeros auxilios psicológicos",
    url: "https://integracion-academica.org/25-volumen-5-numero-15-2017/173-primeros-auxilios-psicologicos#:~:text=Es%20la%20intervenci%C3%B3n%20psicol%C3%B3gica%20en,cognitivo%20y%20conductual%20(social)",
  },
  {
    autor: "Universidad de Europea",
    titulo: "¿Qué son los primeros auxilios psicológicos?",
    url: "https://colombia.universidadeuropea.com/blog/primeros-auxilios-psicologicos/",
  },
  {
    autor: "Universidad de San Buenaventura Medellín",
    titulo: "Comunicación asertiva y empatía",
    url: "https://usbmed.edu.co/noticias/ampliacion-informacion/artmid/1732/articleid/4674/comunicacion-asertiva-y-empatia#:~:text=La%20comunicaci%C3%B3n%20asertiva%20se%20basa,la%20comunicaci%C3%B3n%20entre%20las%20personas%2C",
  },
];

const ReferenciasBibliograficas = () => {
  return (
    <Container id="15" sx={{mt:10}}>
    <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
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
          Referencias bibliográficas
        </Typography>
      <List>
        {referencias.map((referencia, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={
                referencia.url ? (
                  <a href={referencia.url} target="_blank" rel="noopener noreferrer">
                    {referencia.titulo}
                  </a>
                ) : (
                  referencia.titulo
                )
              }
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    {referencia.autor}
                  </Typography>
                  {referencia.editorial && ` — ${referencia.editorial}`}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
    </Container>
  );
};

export default ReferenciasBibliograficas;
