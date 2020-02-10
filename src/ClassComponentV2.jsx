import React from "react";

/**
 * Not use constructor
 */
class ClassComponent extends React.Component {
  //https://github.com/tc39/proposal-class-fields
  state = { name: "hieu" };
  onClick = this.onClick.bind(this);

  render() {
    return (
      <div>
        This is class component
        <p>This is color {this.props.color}</p>
        <p onClick={this.onClick}>This is state {this.state.name}</p>
      </div>
    );
  }

  onClick() {
    this.setState({ name: "nes" });
  }
}

export default ClassComponent;
