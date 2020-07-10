import React from 'react'

class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.addOption = this.addOption.bind(this);
      this.state = {
        error: undefined,
      };
    }
    addOption(evt) {
      evt.preventDefault();
      var option = evt.target.elements.option.value.trim();
      var errorData = this.props.handleOption(option);
  
      this.setState(() => {
        return { error: errorData };
      });
      evt.target.option.value = '';
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.addOption}>
            <input type="text" name="option" />
            <button>add option</button>
          </form>
        </div>
      );
    }
  }
  export default AddOption;