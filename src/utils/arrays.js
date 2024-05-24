import bulbasaurImg from "./Bulbasaur.png";
import squirtleImg from "./Squirtle.png";
import charmanderImg from "./Charmander.png";

export const pokemons = [
  {
    name: "Bulbasaur",
		energy: 120,
    attack: 62,
    defense: 62,
    attacks: [
      { name: "Razor Leaf", power: 20, type: "plant" },
      { name: "Vine Whip", power: 10, type: "plant" },
    ],
    type: "plant",
    image: bulbasaurImg,
  },
  {
    name: "Squirtle",
		energy: 119,
    attack: 61,
    defense: 76,
    attacks: [
      { name: "Water Gun", power: 7, type: "water" },
      { name: "Water Pulse", power: 25, type: "water" },
    ],
    type: "water",
    image: squirtleImg,
  },
  {
    name: "Charmander",
		energy: 114,
    attack: 65,
    defense: 57,
    attacks: [
      { name: "Flamethrower", power: 37, type: "fire" },
      { name: "Flame Burst", power: 28, type: "fire" },
    ],
    type: "fire",
    image: charmanderImg,
  },
];
