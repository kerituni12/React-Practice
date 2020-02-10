import React from "react";

/**
 * This use arrow function
 */
class ClassComponent extends React.Component {
  state = { name: "hieu" };

  onClick = () => {
    this.setState({ name: "nes" });
  };

  render() {
    return (
      <div>
        This is class component
        <p>This is color {this.props.color}</p>
        <p onClick={this.onClick}>This is state {this.state.name}</p>
      </div>
    );
  }
}

export default ClassComponent;
