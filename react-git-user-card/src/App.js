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
      userData: {}, 
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/antashma')
    .then(res => res.json())
    .then(user => {
      this.setState({userData : user});
      console.log('sg: app.js : user fetch data',user);
    })
    .catch(err => console.error(err))
  }

  render() {    
    return (
      <div className="App">
        <header className="App-header">
        <h1>{this.state.userData.login}</h1>
        <img className='avatar' src={this.state.userData.avatar_url} alt={`${this.state.userData.login} avatar`}/>
        <p>User data will display below.</p>
        </header>
        <section>
          {this.state.userData.url}
          <p>User data...</p>
        </section>
      </div>
    );
  }

}

export default App;
