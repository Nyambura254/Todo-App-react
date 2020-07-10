class ToggleVisible extends React.Component {
    constructor(props) {
        super(props)
        this.toggleVisible = this.toggleVisible.bind(this);
        this.state = {
            visible:false
         };
        }
         toggleVisible(){
             this.setState((prevState)=>{
                 return {
                     visible: !prevState.visible,
                 };
             });
         }
       
          render(){
              return(
                  <div>
                      <h1>Visibility Toggle</h1>
                    <button onClick={this.toggleVisible}>
                        {this.state.visible? "See Me" : "Hide Me"} </button>
                        {this.state.visible && (<p>Hi. here are your details tou can see now</p>
                        )}
                   
                  </div>
              )
          }
       }
       ReactDOM.render(<ToggleVisible/>, document.getElementById("app"));
export default ToggleVisible;