import React from "react";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };
    this.handleChange = this.handleChange.bind();
  }

  handleChange = (e) => {
    this.setState({ temperature: e.target.value });
  };

  toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  render() {
    const scaleNames = {
      c: "Celsius",
      f: "Fahrenheit",
    };
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <div>
        <fieldset>
          <legend>
            {" "}
            Veuillez saisir la temperature en {scaleNames[scale]}
          </legend>
          <input type="text" value={temperature} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

export default Converter;
