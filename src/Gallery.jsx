export const Profile = () => {
  const imgPath =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Portrait_Gandhi.jpg/250px-Portrait_Gandhi.jpg";
  const altTxt = "Mahatma Gandhi";
  return <img src={imgPath} alt={altTxt} />;
};

const Gallery = () => {
  return (
    <section>
      <h1>Amazing Indians</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
};
export default Gallery;
