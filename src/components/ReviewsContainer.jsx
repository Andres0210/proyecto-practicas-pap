import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";

export default function ReviewsContainer() {
  const [allReviews, setAllReviews] = useState([]);

  // Función para cargar reseñas desde la API
  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        "https://back-pap-production.up.railway.app/review"
      );
      setAllReviews(response.data);
    } catch (error) {
      console.error("Error obteniendo reseñas:", error);
    }
  };

  // Cargar las reseñas al montar el componente
  useEffect(() => {
    fetchReviews();
  }, []);

  // Función para agregar una nueva reseña y actualizar la lista
  const addReview = async (newReview) => {
    try {
      await axios.post(
        "https://back-pap-production.up.railway.app/review",
        newReview
      );
      fetchReviews(); // Recargar reseñas después de agregar una nueva
    } catch (error) {
      console.error("Error enviando la reseña:", error);
    }
  };

  return (
    <div style={{marginTop:"100px"}}>
      <ReviewForm addReview={addReview} />
      <Reviews allReviews={allReviews} />
    </div>
  );
}
