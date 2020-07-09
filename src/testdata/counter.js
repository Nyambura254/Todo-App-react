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
      if (!this.state===0){
       return this.state.const();
      };else{

      return this.state.count: this.state.count + 1
    }
    };
  });
  //decrement function
  decrement() {
    this.setState({
      if(this.state.length>0){
        return this.state.count: this.state.count - 1;
      }else{
        if(this.state.length<=0){
          console.log('Nothing to decrement')
        }
      }
      
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
/// const jsx = (
//     <div>
//         <Counter/>
//     </div>
// );
// ReactDOM.render(<TodoApp />, document.getElementById("app"));