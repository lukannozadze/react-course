/*
import { getImageUrl } from "./utils.js";
const Profile = () => {
  return <div></div>;
};
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl("szV5sdG")}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl("YfeOqp2")}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
*/
// This Gallery component contains some very similar markup for two profiles.
//Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.
const profiles = [
  {
    name: "Maria Sklowodska-Curie",
    imgPath:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg",
    profession: "physicist and chemist",
    awardQuantity: 4,
    awardsDescription:
      "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
    discovered: "polonium (chemical element)",
  },
  {
    name: "Katsuko Saruhashi",
    imgPath:
      "https://archive.mith.umd.edu/gcr/text/images/saruhashi_chemist.jpg",
    profession: "geochemist",
    awardQuantity: 2,
    awardsDescription: "(Miyake Prize for geochemistry, Tanaka Prize)",
    discovered: "a method for measuring carbon dioxide in seawater",
  },
];

const Profile = (props) => {
  return (
    <section>
      <h2>{props.name}</h2>
      <img
        className="avatar"
        src={props.imgPath}
        alt={props.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {props.profession}
        </li>
        <li>
          <b>Awards:{props.awardQuantity}</b>
          {props.awardsDescription}
        </li>
        <li>
          <b>Discovered: </b>
          {props.discovered}
        </li>
      </ul>
    </section>
  );
};

const Wrapper = ({ children }) => {
  return <div style={{ backgroundColor: "orange" }}>{children}</div>;
};

const Gallery = () => {
  return (
    <Wrapper>
      <Profile {...profiles[0]} />
      <Profile {...profiles[1]} />
    </Wrapper>
  );
};
export default Gallery;
