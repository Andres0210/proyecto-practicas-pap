import { Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get("https://back-pap-production.up.railway.app/review");
        setAllReviews(response.data); // Actualizar el estado con las reseñas
      } catch (error) {
        console.error("Error obteniendo reseñas:", error);
      }
    };

    getReviews();
  }, []);

  return (
    <div>
      <Container>
        
        <div>
      {allReviews.map((review, index) => (
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
