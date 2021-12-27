import React from "react";

class Testing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nom: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // const style = this.context;
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ nom: e.target.value });
  }
  handleSubmit() {
    alert("hello " + this.state.nom);
  }

  render() {
    return (
      <div>
        <label>
          {" "}
          please enter your name
          <input
            type="text"
            value={this.state.nom}
            onChange={this.handleChange}
          />
        </label>
        <button
          type="submit"
          //   style={{ backgroundColor: style.backgroundColor }}
          //   style={{ backgroundColor: "red" }}
          onClick={this.handleSubmit}
        >
          {" "}
          Click me
        </button>
        <input type="submit" value="Envoyer" />
      </div>
    );
  }
}

export default Testing;
