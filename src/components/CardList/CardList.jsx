import React from "react";
import Grid from "@mui/material/Grid";
import CustomCard from "../Card/Card";

export default function CardList({ cards }) {
  return (
    <Grid container spacing={3} justifyContent="center">
      {cards.map((card) => (
        <Grid item key={card.id}>
          <CustomCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
}
