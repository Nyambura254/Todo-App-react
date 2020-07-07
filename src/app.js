class TodoApp extends React.Component {
    render() {
        return (

    )
    }
}
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
                <button>What to do</button>
            </div>
        );
    }
}
class Options extends React.Component {
    render() {
        return <div>Option component here</div>
    }
}
class OptionsAdd extends React.Component {
    render() {
        return <div>more and more</div>
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