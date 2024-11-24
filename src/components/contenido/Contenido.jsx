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
import entrenamientoImg from "../image/pexels-polina-zimmerman-3747462.jpg";
import { conceptos } from "./conceptos";
import { etapaData } from "./etapaPreparacion";
import Reviews from "../comentarios/Reviews";
import ReviewForm from "../formulario/ReviewForm";

export default function Contenido() {
  const content = [
    "Antecedentes",

    "Conceptos básicos",
    "Etapa de preparación",
    "Preparación: Entrenamiento",
    "Preparación: Habilidades comunicativas",
    "Preparación: Regulación de emociones",
    "Preparación: Evaluación de la situación",
    "Preparación: Aproximación segura",
    "Preparación: Priorización de necesidades",
  ];
  const description = [
    "Antecedentes sobre los Primeros Auxilios Psicológicos (PAP): su importancia en crisis y elementos clave para el apoyo emocional.",
    "Conceptos básicos",
    "Autoevaluación",
    "Preparación: Entrenamiento",
    "Preparación: Habilidades comunicativas",
    "Preparación: Regulación de emociones",
    "Preparación: Evaluación de la situación",
    "Preparación: Aproximación segura",
    "Preparación: Priorización de necesidades",
  ];

  return (
    <Box class="contenidoBox">
      <Divider
        sx={{ marginBottom: "50px", marginLeft: "120px", marginRight: "120px" }}
      ></Divider>
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
            color: "#6ede00",
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
                  sx={{ color: "#6ede00;" }}
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
            background: "linear-gradient(to bottom, #ffffff, #f2f2f2",
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
                      color: "#6ede00",
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
      </div>
      <Container className="conceptosContainer">
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
            color: "#6ede00",
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
                  height: 500,
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
            color: "#6ede00",
          }}
          id="2"
        >
          Etapa de preparación
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
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
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
      <div className="presentacion">
        <Container
          sx={{ display: "flex", flexDirection: "column", padding: 4 }}
        >
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
            id="3"
          >
            ¿Porqué es importante el entrenamiento?
          </Typography>
          <Grid container spacing={4} alignItems="center">
            {/* Texto */}
            <Grid item xs={12} md={6}>
              <div className="textContainer">
                <Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                      textAlign: "justify",
                      marginTop: "45px",
                    }}
                  >
                    La preparación y el conocimiento son fundamentales para
                    intervenir de manera efectiva en momentos de crisis." Esta
                    afirmación del psicólogo David G. Myers (2014) resalta la
                    importancia de que el psicólogo en formación cuente con una
                    sólida base de habilidades, conocimientos de técnicas y
                    estrategias, así como actitudes adecuadas para que su
                    intervención sea eficaz. Tener habilidades interpersonales,
                    como la empatía y la escucha activa, permite establecer una
                    conexión genuina con quienes están en crisis. Además, el
                    dominio de técnicas específicas, como la regulación
                    emocional y el manejo del estrés, proporciona herramientas
                    prácticas para abordar situaciones difíciles. Las actitudes,
                    como la paciencia y la apertura, son sumamente importantes
                    al momento de crear un ambiente seguro y de confianza.{" "}
                    <br />
                    <br />
                    Por ejemplo, imagine que en su sitio de práctica recibe a
                    una joven que acaba de perder a su madre. Ella se siente
                    abrumada por la tristeza y la confusión, sin saber cómo
                    manejar su dolor. Si usted se encuentra preparado y cuenta
                    con las herramientas para realizar una adecuada
                    intervención, podrá acercarse con sensibilidad, creando un
                    espacio seguro donde ella puede expresar sus emociones.
                    Validar su dolor y ofrecer apoyo, ayudándola a entender que
                    sus sentimientos son normales y que no está sola. Además, le
                    sugiere recursos de apoyo, como grupos de duelo o terapia,
                    lo que puede ser crucial para su proceso de sanación. Esta
                    capacidad de respuesta no solo ayuda a la joven a sentirse
                    comprendida y apoyada, sino que también refuerza su
                    confianza en su habilidad para manejar situaciones
                    emocionales difíciles.
                  </Typography>
                </Box>
              </div>
            </Grid>

            {/* Imagen */}
            <Grid item xs={12} md={6}>
              <Box sx={{display:"flex", justifyContent:"center"}}>
                <img
                  
                  alt="Imagen Psicología"
                  src={entrenamientoImg}
                  style={{
                    width: "70%",
                    borderRadius: 8,
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    margin:"0 auto"
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* <div id="6">
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
      </div> */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {/* Descripción para dejar un comentario */}
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
            Queremos saber lo que piensas. Comparte tu experiencia con nosotros
            y ayúdanos a mejorar. Tu opinión cuenta.
          </Typography>
        </Box>
        <ReviewForm />
        {/* Título para la sección de comentarios */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            borderBottom: "2px solid #1976d2",
            display: "inline-block",
            mb: 3,
          }}
        >
          Comentarios de otros usuarios
        </Typography>
        <Reviews />
      </Container>
    </Box>
  );
}
