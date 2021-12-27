import React, { useState } from "react";
import Context from "./Context";

const Convert = () => {
  const [fahrenheit, setFahrenheit] = useState("");
  const [fah, setFah] = useState(false);
  const [Cel, setCel] = useState(false);
  const [celsius, setCelsius] = useState("");

  const toFahrenheit = (temp) => {
    if (temp === "") {
      return "";
    }
    return (temp * 9) / 5 + 32;
  };

  const toCelsius = (temp) => {
    if (temp === "") {
      return "";
    }
    return ((temp - 32) * 5) / 9;
  };

  return (
    <div>
      <legend>entrer la temperature</legend>

      <label>
        {" "}
        temperature en F :
        <input
          type="number"
          value={
            fah ? fahrenheit : Math.round(toFahrenheit(celsius) * 100) / 100
          }
          //   value={fahrenheit ? fahrenheit : toFahrenheit(celsius)}
          onChange={(e) => {
            setFahrenheit(e.target.value);
            setFah(true);
            setCel(false);
          }}
        />
      </label>

      <label for="temperatureCelsius">
        temperature en C :
        <input
          type="number"
          id="temperatureCelsius"
          value={Cel ? celsius : Math.round(toCelsius(fahrenheit) * 100) / 100}
          onChange={(e) => {
            setCelsius(e.target.value);
            setFah(false);
            setCel(true);
          }}
        />
      </label>
      <Context />
    </div>
  );
};

export default Convert;
