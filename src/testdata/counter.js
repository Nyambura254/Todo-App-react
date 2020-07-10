// -------------------------------
// --> In the folder testdata, create a file called counter.js, inside it create a class component called `Counter`. It should render jsx `h1` with content `Count 0`. The zero should be received from state. Hint: `this.state.count`

// --> Create three buttons with names `+1`, `-1`, `reset`. Plus 1 is for addition, minus 1 for subtraction and reset is to set the number back to zero. In the buttons create onClick handlers with functions for enabling you to add, subtract or reset.

// --> To do this change the command babel in package.json to this `babel src/testdata/counter.js --out-file=public/scripts/app.js --presets=env,react --watch`
// -------------------------------------------------------
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count: 0,
        };
    }

    //increment function

    increment() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        });
    }

    decrement() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            }
        });
    };
    reset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
           <div>
            <h1> Count: { this.state.count } </h1>   
            <button onClick = { this.count.increment }>+ 1 </button>
            <button onClick = { this.count.decrement }>- 1</button >
            <button onClick = { this.count.reset }>reset</button>  
          </div>
        );
    }
}
ReactDOM.render( <Counter/> , document.getElementById("app"));