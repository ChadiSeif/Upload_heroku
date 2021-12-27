import React, { Component } from "react";
// import { connect } from "react-redux";

class LoginClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mounir",
      timer: 1,
    };
  }
  email = this.props.user.Email;

  change(name) {
    this.setState({ name: name });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
    this.setState({ name: "khalil" });
  }

  render() {
    return (
      <div>
        {/* <h3>{this.name}</h3> */}
        <h3>{this.email}</h3>
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={() => this.change("fedi")}
        >
          test
        </button>
        <h3>hello</h3>
        <h3>{this.state.name}</h3>
        <h3>{this.state.timer}</h3>
        <h3>1</h3>
      </div>
    );
  }
}

export default LoginClass;
