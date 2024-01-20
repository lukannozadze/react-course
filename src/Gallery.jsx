const Profile = () => {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Portrait_Gandhi.jpg/250px-Portrait_Gandhi.jpg"
      alt="Katherine Johnson"
    />
  );
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
