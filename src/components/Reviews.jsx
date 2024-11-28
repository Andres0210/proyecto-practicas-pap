import React from "react";
import { Container, Typography } from "@mui/material";
import ReviewCard from "./ReviewCard";

export default function Reviews({ allReviews }) {
  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#6ede00",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
          mb: 4,
        }}
      >
        Comentarios de otros usuarios
      </Typography>
     
       
        <Container>
          <div>
            {allReviews?.map((review, index) => (
              <ReviewCard
                key={index}
                email={review.email}
                rating={review.rating}
                comment={review.comment}
              />
            ))}
          </div>
        </Container>
   
    </div>
  );
}
