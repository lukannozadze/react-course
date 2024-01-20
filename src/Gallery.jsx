const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

const chemists = people.filter((person) => person.profession === "chemist");
const listItems = chemists.map((item) => (
  <li key={item.id}>
    Name {item.name} Profession {item.profession}
  </li>
));
const Gallery = () => {
  return listItems;
};

export default Gallery;
