import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

export default function CustomCard({ title, description, image }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
      }}
    >
      <CardMedia component="img" height="180" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, background: "linear-gradient(90deg, #9c0128, #2575fc)" }}
          onClick={() => alert(title)}
        >
          Дізнатися більше
        </Button>
      </CardContent>
    </Card>
  );
}