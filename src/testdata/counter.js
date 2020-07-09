class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    this.state = {
      count: 0
    };

    //increment function

    increment() {
      this.setState({
        this.state.count: this.state.count + 1
      });
    };

    decrement() {
      this.setState({
        this.state.count: this.state.count - 1
      });
    };

    //reset function

    reset() {
      this.setState({
        this.state.count: 0;// back at zero
      });
    };


    render() {
      return (

        <div>
          <button></button>
          <button></button>
          <button></button>
          <h1>Display Count: {this.state.count}</h1>
        </div>
      );
    }

  };