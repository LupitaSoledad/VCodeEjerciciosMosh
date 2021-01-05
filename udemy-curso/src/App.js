import React, { Component } from 'react';
import Forms from './sections/forms'
//importo la clase conditional
//import ConditionalSection from './sections/conditional'

//import cars from './data/cars.json'

/*function Hello(props) {
  return <h2>{props.title}</h2>
}
*/

/*mi primer componente 
class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}*/





class App extends Component {



  render() {

    return (
      < div className="App" >
        <Forms />
      </ div>
    );
  }
}

export default App;
