import React from "react";
import ReactDOM from "react-dom";
import Timer from "./data2";
import Todo from "./data3";




import App from "./data8";
import TodoApp from "./data3";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
        <Timer/>
        <TodoApp/>
        <App/>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('app')
);