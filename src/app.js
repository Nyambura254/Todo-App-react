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
const jsx = (
    <div>
        <Header />
    </div>
);
ReactDOM.render(jsx, document.getElementById("app"));