import React from 'react';

class Followers extends React.Component{
    constructor(props) {
        super(props)
            this.state = {
                user_followers: []
            }   
    };
    
    componentDidMount() {
        fetch(this.props.userFollowersUrl)
            .then(res => res.json())
            .then(followers => {
                this.setState({user_followers: followers});
                console.log('sg : followers.js : followers fetch value :', followers)
            })
            .catch(err => console.error('This error occurred: ', err))
    }

    render() {
        return(
            <div>
                <p>Follower Card placeholder</p>
                {this.state.user_followers === [] 
                    ? <h1>Loading Followers...</h1> 
                    : this.state.user_followers.map(follower =>
                        <p>{follower.login}</p>
                )}
            </div>
        )
    }
}

export default Followers;