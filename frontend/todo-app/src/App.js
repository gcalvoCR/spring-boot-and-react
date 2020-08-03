import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import FirstComponent, {SecondComponent} from './components/learning-examples/FirstComponent';
import Counter from './components/counter/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
           <Counter />
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="App">
//         <FirstComponent/>
//         <SecondComponent/>
//       </div>
//     );
//   }
// }


export default App;
