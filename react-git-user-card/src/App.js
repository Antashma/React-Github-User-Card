import React from 'react';
import Followers from './Followers'

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
        <p>{this.state.userData.html_url}</p>
        </header>
        <section>
          <h2>User Info</h2>
          <h3>{this.state.userData.name}</h3>
          <p>{this.state.userData.bio}</p>
          <p>Joined: {this.state.userData.created_at}</p>
          <p>Repos: {this.state.userData.public_repos}</p>
          <p>Last Update: {this.state.userData.updated_at}</p>
          
        </section>
        <section>
          <h2>Followers</h2>
          <p>This user has {this.state.userData.followers} followers.</p>
          {this.state.userData.followers_url 
            ? <Followers userFollowersUrl = {this.state.userData.followers_url}/> 
            : <h3>loading...</h3>}
        </section>
      </div>
    );
  }

}

export default App;
