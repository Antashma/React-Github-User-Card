import React from 'react';
//import logo from './logo.svg';
import './App.css';

/* fetching data from : https://api.github.com/users/antashma 
add '/followers' for followers 
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [], 
    }
  }

  componentDidMount() {
    console.log('sg: app.js : CDM engaged!')
  }

  render() {    
    return (
      <div className="App">
        <header className="App-header">
        <h1>React Git User Fetcher App</h1>
        <p>User data will display below.</p>
        </header>
        <section>
          <p>User data...</p>
        </section>
      </div>
    );
  }

}

export default App;
