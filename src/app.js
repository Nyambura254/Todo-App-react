class TodoApp extends React.Component {
    render() {
        var title = "Todo tasks";
        var subtitle = "Focusing Everyday"
    }
}
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
class Actions extends React.Component {
    render() {
        return (
            <div>
                <button onClick>What to do</button>
            </div>
        );
    }
}
class Options extends React.Component {
    render() {
        return <div>{this.props.options.map((option) => {
            return <Option optionText={option} />;
        })}
        </div>
    }
};
class OptionsAdd extends React.Component {
    removeAll() {
        alert('removeAll');
    }
    render() {
        return <div><button onClick={this.removeAll}>removeAll</button>
            {this.props.options</div>
    }
}
// const jsx = (
//     <div>
//         <Header />
//         <Actions />
//         <Options/>
//         <OptionsAdd/>
//     </div>
// );
ReactDOM.render(<TodoApp />, document.getElementById("app"));