
//import 
import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
//component TodoApp
class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.deleteOption = this.deleteOption.bind(this);
      this.state = {
        options: ["speaking", "designing", "writing", "running"],
      };
    }
    handleDeleteOptions() {
      this.setState(() => {
        return {
          options: [],
        };
      });
    }
    deleteOption(dataToRemove) {
      this.setState((prevState) => {
        return {
          options: prevState.options.filter((option) => dataToRemove !== option),
        };
      });
    }
    handlePick() {
      var randomTodo = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomTodo];
      alert(option);
    }
    handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "That option exists";
      }
  
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option),
        };
      });
    }
    render() {
      var title = "Todo tasks";
      var subtitle = "Focusing everyday";
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handleTodo={this.handlePick}
          />
      <div className="widget"/>
          <Options
            options={this.state.options}
            deleteOptions={this.handleDeleteOptions}
            deleteOption={this.deleteOption}
          />
          <AddOption handleOption={this.handleAddOption} />
        </div>
        </div>
      );
    }
  }
  export default TodoApp;