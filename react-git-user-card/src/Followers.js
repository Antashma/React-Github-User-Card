import React from 'react';

class Followers extends React.Component{
    constructor(props) {
        super(props)
            this.state = {
                user_followers: {}
            }   
    };
    
    componentDidMount() {
        fetch(this.props.userFollowersUrl)
            .then(res => res.json())
            .then(followers => {
                console.log('sg : followers.js : followers val', followers)
            })
            .catch(err => console.error('This error occurred: ', err))
    }

    render() {
        return(
            <div>
                <p>Follower Card placeholder</p>
            </div>
        )
    }
}

export default Followers;