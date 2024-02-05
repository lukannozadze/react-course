import { useState } from "react";

const App = () => {
  return <TemperatureConverter/>
};
export default App;

const TemperatureConverter = () => {
  return <TemperatureForm
    convertKelvin={(props) => <h2 key={1}>{props.value}</h2>}
    convertFahrenheit={(props) => <h3 key={2}>{props.value}</h3>}
    rectangle = {Rectangle}
  />;
};
const Rectangle = (props)=>[
  <div key={3} style={{width:'200px',height:'200px',backgroundColor:'orange'}}>{props.unique}</div>
]
const TemperatureForm = (props) => {
  const [value, setValue] = useState("");
  const unique = 50;
  return (
    <div>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      {props.convertKelvin({ value: +value + 999 })}
      {props.convertFahrenheit({ value: +value + 111 })}
      {props.rectangle({unique:unique})}
    </div>
  );
};
