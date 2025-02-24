import React from "react";
import Card from "../Card/Card";

export default function CardList({ cards }) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
}