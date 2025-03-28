import Card from "./components/Card";
import React from "react";

export default function App() {
  const fruits = [
    { id: 1333, name: "🍌 banana", color: "yellow" },
    { id: 1334, name: "🍓 strawberry", color: "red" },

    { id: 1336, name: "🥝 kiwi", color: "green" },

    { id: 1387, name: "🍉 watermelon", color: "pink" },

    { id: 1137, name: "🍍 pineapple", color: "pineapple" },
  ];

  return (
    <div className="app">
      {fruits?.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
