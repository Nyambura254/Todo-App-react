class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <h2>Organizating data</h2>
            </div>
        );
    }
}
class Actions extends React.Component {
    render() {
        return (
            <div>
                <button>Add items</button>
            </div>
        );
    }
}
const jsx = (
    <div>
        <Header />
        <Actions />
    </div>
);
ReactDOM.render(jsx, document.getElementById("app"));