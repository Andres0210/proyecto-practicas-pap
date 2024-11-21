import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import "../contenido/estilosContenido.css";
import imgAntecedentes1 from "../image/pexels-shvets-production-7176319.jpg";
import imgAntecedentes2 from "../image/pexels-david-garrison-1128051-2128817.jpg";
import { conceptos } from "./conceptos";
import { etapaData } from "./etapaPreparacion";





export default function Contenido() {
  const content = [
    "Antecedentes",
    "Objetivos",
    "Conceptos básicos",
    "Autoevaluación",
    "Preparación: Entrenamiento",
    "Preparación: Habilidades comunicativas",
    "Preparación: Regulación de emociones",
    "Preparación: Evaluación de la situación",
    "Preparación: Aproximación segura",
    "Preparación: Priorización de necesidades",
  ];
  const description = [
    "Antecedentes sobre los Primeros Auxilios Psicológicos (PAP): su importancia en crisis y elementos clave para el apoyo emocional.",
    "Objetivos",
    "Conceptos básicos",
    "Autoevaluación",
    "Preparación: Entrenamiento",
    "Preparación: Habilidades comunicativas",
    "Preparación: Regulación de emociones",
    "Preparación: Evaluación de la situación",
    "Preparación: Aproximación segura",
    "Preparación: Priorización de necesidades",
  ];
  const objetivos = [
    "Proporcionar una herramienta accesible y comprensible para los psicólogos en formación, que les permita aplicar los Primeros Auxilios Psicológicos (PAP) de manera efectiva en situaciones de crisis.",
    "Mejorar las habilidades y conocimientos de los psicólogos en formación, facilitando su preparación para intervenir en momentos críticos y responder adecuadamente a las necesidades de los afectados.",
    "Actuar como orientación práctica para los psicólogos en formación, ofreciendo pautas claras sobre cómo abordar situaciones de crisis y aplicar técnicas de intervención.",
    "Brindar psicoeducación sobre conceptos básicos, reglas y normas que garanticen intervenciones éticas y eficaces, asegurando el respeto por la dignidad y los derechos de los pacientes en todo momento."
  ];

  return (
    <Box class="contenidoBox">
      <Divider sx={{marginBottom:"50px", marginLeft:"120px", marginRight:"120px"}}></Divider>
      <Container>
        <Typography
          variant="h3"
          gutterBottom
          component="a"
          sx={{
            position: "relative",
            fontWeight: "bold",
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textAlign: "center",
          }}
        >
          Contenido
        </Typography>

        <Box sx={{ mt: 4 }}>
          {/* Secciones */}
          {content.map((item, index) => (
            <Card
              key={index}
              sx={{
                mb: 3,
                boxShadow: 4,
                backgroundColor: "background.paper",
                "&:hover": {
                  transform: "scale(1.02)",
                  transition: "transform 0.3s",
                },
              }}
            >
              <CardContent>
                <Typography
                  component="a"
                  href={`#${index}`}
                  variant="h6"
                  gutterBottom
                  className="temasContenido"
                  sx={{color:"#6ede00;"}}
                >
                  {item}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      {/* <CheckCircleIcon color="success" /> */}
                    </ListItemIcon>
                    <ListItemText primary={description[index]} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
      <div>
        <Box
          id="0"
          sx={{
            background: 'linear-gradient(to right, #ffffff, #b2f0b2)',
            padding: "150px 0",
          }}
        >
          <Container>
            <Grid container spacing={4}>
              {/* Primera columna: texto arriba, imagen abajo */}
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    component="a"
                    sx={{
                      position: "relative",
                      fontWeight: "bold",
                      color: "#333",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      textAlign: "center",
                    }}
                    id="0"
                  >
                    Antecedentes
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                      textAlign: "justify",
                      marginBottom: "100px",
                      marginTop: "50px",
                    }}
                  >
                    La intervención temprana en crisis psicológicas ha sido
                    objeto de un intenso debate en la comunidad científica,
                    donde persiste una falta de consenso teórico y empírico
                    sobre cuál es la estrategia más efectiva y segura para
                    restablecer el bienestar emocional de las personas afectadas
                    por situaciones traumáticas. A pesar de esta incertidumbre,
                    los Primeros Auxilios Psicológicos (PAP) han sido promovidos
                    por diversas organizaciones internacionales como una
                    herramienta fundamental para abordar crisis. Los PAP se
                    definen como una técnica de apoyo humanitario destinada a
                    personas en crisis, con el objetivo de recuperar el
                    equilibrio emocional y prevenir el desarrollo de secuelas
                    psicológicas. Los estudios de Hobfoll y colaboradores (2007)
                    identificaron cinco elementos clave para la intervención
                    inmediata: calma, seguridad, autoeficacia, conexión y
                    esperanza, que son esenciales para guiar la aplicación de
                    los PAP en contextos de crisis (Hobfoll , 2007).
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={imgAntecedentes1} // Cambia esta URL
                    alt="Ilustración 1"
                    style={{
                      maxWidth: "100%",
                      borderRadius: "8px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </Box>
              </Grid>

              {/* Segunda columna: imagen arriba, texto abajo */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    marginBottom: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={imgAntecedentes2} // Cambia esta URL
                    alt="Ilustración 2"
                    style={{
                      maxWidth: "100%",
                      borderRadius: "8px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                      marginBottom: "60px",
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8, textAlign: "justify" }}
                  >
                    Una intervención efectiva es crucial para el bienestar de
                    las personas, especialmente en situaciones que pueden
                    amenazar su vida o salud mental. Los Primeros Auxilios
                    Psicológicos (PAP) se han consolidado como una herramienta
                    esencial en este contexto, promoviendo la recuperación
                    emocional y la prevención de secuelas psicológicas. Estas
                    intervenciones están diseñadas para ofrecer apoyo inmediato
                    a quienes enfrentan crisis, como desastres naturales,
                    accidentes o situaciones de violencia, y su objetivo es
                    restaurar el equilibrio emocional y prevenir el desarrollo
                    de trastornos más graves. Según Hobfoll et al. (2007), los
                    PAP se fundamentan en cinco elementos clave: calma,
                    seguridad, autoeficacia, conexión y esperanza, que son
                    vitales para guiar a los profesionales en la atención de
                    personas en crisis. La importancia de los PAP radica no solo
                    en su capacidad para mitigar el estrés y la angustia, sino
                    también en su potencial para prevenir situaciones que puedan
                    poner en peligro la vida de las personas. La Organización
                    Mundial de la Salud (2012) destaca que estas intervenciones
                    deben ser prácticas y no invasivas, enfocándose en las
                    necesidades inmediatas de los afectados. Escuchar sin forzar
                    a hablar sobre el trauma, reconfortar y ayudar a la calma
                    mediante técnicas de relajación son componentes esenciales
                    de esta técnica. Para los psicólogos, estar preparados para
                    aplicar los PAP de manera efectiva es fundamental, ya que
                    les permite actuar con confianza y competencia en momentos
                    críticos. La creación de una guía de intervención en crisis
                    se presenta como una necesidad imperante, proporcionando a
                    los profesionales en formación las herramientas necesarias
                    para implementar los PAP de forma ética y efectiva,
                    contribuyendo así al bienestar emocional de las personas y a
                    la prevención de consecuencias más graves en situaciones de
                    vulnerabilidad.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/*  OBJETIVOS*/}

        
        <Box className='objetives' sx={{ background: 'linear-gradient(to right, #ffffff, #b2f0b2)', padding: '50px 0', padding: "50px 0" }}>
          <Container>
            <Typography
               variant="h4"
               gutterBottom
               component="a"
               sx={{
                 position: "relative",
                 fontWeight: "bold",
                 color: "#333",
                 textTransform: "uppercase",
                 letterSpacing: "2px",
                 textAlign: "center",
                 
               }}
               id="1"
            >
              Objetivos
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {objetivos.map((objetivo, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                  className="cardObj"
                    sx={{
                      marginTop:"60px",
                      borderRadius: "50px",
                      height:"400px",
                      boxShadow: 3,
                      background: 'linear-gradient(to bottom, #E9E4F0, #f2f2f2)',
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#6ede00;", // Verde menta oscuro
                          textAlign: "center",
                          mb: 2,
                          fontWeight:"700"
                        }}
                      >
                        Objetivo {index + 1}
                      </Typography>
                      <Typography
                        variant="body1"
                        
                        sx={{
                          textAlign: "center",
                          lineHeight: 1.6,
                          fontSize: "16px",
                          color:"#333333",
                          fontWeight:"700"
                        }}
                      >
                        {objetivo}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </div>
      <Container   className="conceptosContainer">
      <Typography
               variant="h4"
               gutterBottom
               component="a"
               sx={{
                 position: "relative",
                 fontWeight: "bold",
                 color: "#333",
                 textTransform: "uppercase",
                 letterSpacing: "2px",
                 textAlign: "center",
                 
               }}
               id="1"
            >
              Conceptos básicos
            </Typography>
      <Grid container spacing={3} style={{ padding: "20px" }}>
      {conceptos.map((concepto, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card 
            sx={{ 
              maxWidth: 345, 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              height: 500
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={concepto.imagen} // Imagen del concepto
              alt={concepto.titulo}
            />
            <CardContent>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                {concepto.titulo} {/* Nombre del concepto */}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "justify", marginTop: "10px" }}
                dangerouslySetInnerHTML={{ __html: concepto.definicion }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
    <Container sx={{ paddingY: 4 }}>
      {/* Título Principal */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#006b61" }}
      >
        Etapa de Preparación
      </Typography>

      {/* Subtítulos con contenido */}
      {etapaData.map((item, index) => (
        <Box key={index} sx={{ marginY: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            {item.subtitulo}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ textAlign: "justify" }}>
            {item.definicion}
          </Typography>
          <Box
            component="img"
            src={item.imagen}
            alt={`Imagen para ${item.subtitulo}`}
            sx={{
              width: "100%",
              maxWidth: 500,
              height: "auto",
              display: "block",
              margin: "16px auto",
              borderRadius: 4,
              boxShadow: 2,
            }}
          />
          <Typography
            variant="body2"
            sx={{
              fontStyle: "italic",
              textAlign: "justify",
              color: "gray",
            }}
          >
            {item.reflexion}
          </Typography>
        </Box>
      ))}
    </Container>
      <div id="3">
        <h1>Etapa de preparación</h1>
        <p>El Rol del Psicólogo</p>
      </div>
      <div id="4">
        <h1>Entrenamiento</h1>
        <p>El Rol del Psicólogo</p>
      </div>
      <div id="6">
        <h1>Preparación: Regulación de emociones</h1>
        <p>El Rol del Psicólogo</p>
      </div>
      <div id="7">
        <h1>Preparación: Evaluación de la situación</h1>
        <p>El Rol del Psicólogo</p>
      </div>
      <div id="8">
        <h1>Preparación: Aproximación segura</h1>
        <p>El Rol del Psicólogo</p>
      </div>
      <div id="9">
        <h1>Preparación: Priorización de necesidades</h1>
        <p>El Rol del Psicólogo</p>
      </div>
    </Box>
  );
}
