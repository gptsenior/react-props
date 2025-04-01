import React from "react";
import Grid from "@mui/material/Grid";
import CustomCard from "./CustomCard";

export default function CardList({ cards }) {
  return (
    <Grid container spacing={3} justifyContent="center">
      {cards.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <CustomCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
}