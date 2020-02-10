import React from "react";

/**
 * Not use inline function or bind in render()
 * => Use subcomponet(Pure Component) and pass parameter through props
 * (a,b) => (e) => {} the same <CPM {() => {}} />
 *
 * Only difference when using the Pure Component
 *
 * https://stackoverflow.com/a/52788669
 */

class InlineFunction extends React.Component {
  state = {
    counter: 0
  };

  increment = () =>
    this.setState(currentState => ({
      counter: currentState.counter + 1
    }));

  handleClick = (param = "dsds") => {
    console.log("aaaaaa");
  };

  render() {
    // console.log("inner");
    return (
      <div>
        <button style={{ backgroundColor: "#fff" }} onClick={this.increment}>
          Increment
        </button>
        Counter is: {this.state.counter}
        <ChildInlineFunction onClick={this.handleClick} event="hello" />
        {/* <ChildInlineFunction onClick={()=> this.handleClick()} event="hello" />   */}
        {/* // It will re-render every parent change state */}
      </div>
    );
  }
}

class ChildInlineFunction extends React.PureComponent {
  _onClick = () => this.props.onClick(this.props.event);
  render() {
    console.log("child rendered");
    return (
      <div>
        {/* <button onClick={this.props.onClick}>Click</button> */}
        <button onClick={this._onClick}>Click</button>
      </div>
    );
  }
}

export { InlineFunction, ChildInlineFunction };
