import React from "react";

/**
 * This use constructor and deaclare funtion
 */
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hieu"
    };

    this.onClick = this.onClick.bind(this);
  }

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
