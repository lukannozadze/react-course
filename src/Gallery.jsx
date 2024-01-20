export const Profile = (props) => {
  const imgPath = props.imgPath;
  const altTxt = props.altTxt;
  return (
    <img
      src={imgPath}
      alt={altTxt}
      style={{ width: "300px", height: "400px" }}
    />
  );
};

const Gallery = () => {
  const profiles = [
    {
      imgPath:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Portrait_Gandhi.jpg/250px-Portrait_Gandhi.jpg",
      altTxt: "Mahatma Gandhi",
    },
    {
      imgPath:
        "https://m.media-amazon.com/images/M/MV5BNmZmOWVmOTAtZTE3OS00OTBlLTg3M2EtYWRlNDI0NzI5OWY3XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg",
      altTxt: "Aishwarya Rai Bachchan",
    },
    {
      imgPath:
        "https://cdn.britannica.com/82/220482-050-17843B41/Priyanka-Chopra-2020.jpg",
      altTxt: "Priyanka Chopra",
    },
  ];
  return (
    <section>
      <h1 style={{ color: "red", backgroundColor: "pink" }}>Amazing Indians</h1>
      <Profile {...profiles[0]} />
      <Profile imgPath={profiles[1].imgPath} altTxt={profiles[1].altTxt} />
      <Profile imgPath={profiles[2].imgPath} altTxt={profiles[2].altTxt} />
    </section>
  );
};
export default Gallery;
