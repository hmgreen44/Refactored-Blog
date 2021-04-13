import React from 'react';
import './App.css';
import NavBar from './Components/Navbar'
import Herotext from './Components/Herotext'

class App extends React.Component {
  constructor() {
    super();



  }


  render() {
    return (
      <div className="App" >
        <NavBar />
        <Herotext />
      </div>

    );
  }
}
export default App;
