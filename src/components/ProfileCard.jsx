import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

export default function ProfileCard({ name, description, image }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        mx: "auto",
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
        mb: 4,
      }}
    >
      <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => alert(`Привіт, я ${name}!`)}
        >
          Зв'язатися
        </Button>
      </CardContent>
    </Card>
  );
}