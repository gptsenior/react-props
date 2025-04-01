import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

export default function CustomCard({ title, description, image }) {
  return (
    <Card sx={{ maxWidth: 300, m: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ mt: 2 }}
          onClick={() => alert(title)}
        >
          Дізнатися більше
        </Button>
      </CardContent>
    </Card>
  );
}
