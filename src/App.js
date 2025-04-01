import React from "react";
import { Container, Typography } from "@mui/material";
import ProfileCard from "./components/ProfileCard";
import CardList from "./components/CardList";

const cardsData = [
  {
    id: 1,
    title: "Захід сонця",
    description: "Чудовий захід сонця на березі океану.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Ліс",
    description: "Зелені дерева та стежка через лісову гущавину.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Гірський пейзаж",
    description: "Краєвид величних гір під яскравим сонячним небом.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Морський берег",
    description: "Спокійний пляж із чистою водою та м'яким піском.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Захід сонця",
    description: "Романтичний захід сонця, що фарбує небо у дивовижні кольори.",
    image: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?w=400&h=300&fit=crop"
  }
];

function App() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      {/* Картка профілю */}
      <ProfileCard
        name="Той що ходить на пари"
        description="Студент, який любить програмувати та спати"
        image="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=300&fit=crop"
      />
      {/* Список карток */}
      <Typography variant="h5" align="center" sx={{ mt: 4, mb: 2 }}>
        Список карток
      </Typography>
      <CardList cards={cardsData} />
    </Container>
  );
}

export default App;