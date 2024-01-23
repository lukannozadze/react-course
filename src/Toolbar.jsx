export default function Toolbar() {
  return (
    <div onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={(e) => {
        e.stopPropagation();
        alert('playing');
      }}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}
