class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        //binding everything we pass as a props in TodoApp
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
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
    //rendering
    render() {
        var title = "Todo tasks";
        var subtitle = "Focusing everyday";
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handleTodo={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    deleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleOption={this.handleAddOption} />
            </div>
        );
    }
}
//class with component header
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handleTodo}
                    disabled={!this.props.hasOptions}
                >
                    What to do
          </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.deleteOptions}>remove all</button>
                {this.props.options.map((option) => {
                    return <Option key={option} optionText={option} />;
                })}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return <div>{this.props.optionText}</div>;
    }
}

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

ReactDOM.render(<TodoApp />, document.getElementById("app"));