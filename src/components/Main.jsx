import React from "react";
import Card from "./Card/Card";
import CardList from "./CardList/CardList";


function Main({ cards }) {
  return (
    <div>
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

export default Main;