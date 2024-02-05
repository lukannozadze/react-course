import  withStyles  from "./components/withStyles";

const App = () => {
   const NewParagraph = withStyles(Paragraph);
   const NewHeader = withStyles(Header);
  return (<div>
    <NewParagraph/>
    <NewHeader/>
  </div>);
};
export default App;

const Paragraph = ({styles}) =>{
  return <p style={styles}>RAME</p>
}
const Header = ({styles}) =>{
 return <h1 style={styles}>Hadada</h1>
}