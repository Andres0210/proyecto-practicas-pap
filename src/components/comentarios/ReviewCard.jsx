import { Card, CardContent, Rating, Typography } from "@mui/material";
import React from "react";

export default function ReviewCard({ email, rating, comment }) {
  return (
    <Card
    sx={{
      maxWidth: 800,
      margin: "20px auto",
      boxShadow: 3,
      borderRadius: 2,
    }}
  >
    <CardContent>
      {/* Email */}
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {email}
      </Typography>

      {/* Rating */}
      <Rating name="read-only" value={rating} readOnly />

      {/* Comment */}
      <Typography variant="body1">{comment}</Typography>
    </CardContent>
  </Card>
);
}
