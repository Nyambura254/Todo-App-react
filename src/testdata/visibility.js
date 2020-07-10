class ToggleVisible extends React.Component {
    constructor(props) {
        super(props)
        this.showButton = this.showButton.bind(this);
        this.hideButton = this.hideButton.bind(this);
        this.state = {
            isActive:false
         }
        }
         showButton () {
             this.setState({
                 isActive: true
             })
         }
       
         hideButton () {
             this.setState({
                 isActive: false
             })
         }
       
          render(){
              return(
                  <div>
                      <h1>Visibility Toggle</h1>
                   {this.state.isActive && <p>Hi. here are your details you can now see</p>}
                    <button onClick={this.showButton}>Can You See Me</button>
                    <button onClick={this.hideButton}>Noooo</button>
                  </div>
              )
          }
       }
       ReactDOM.render(<ToggleVisible/>, document.getElementById("app"));
