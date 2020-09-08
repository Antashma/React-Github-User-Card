import React from 'react';

export default function FollowerCard(props) {
    console.log('sg : followercard.js : props value',props)
    return (
        <div className='follower-card'>
            <h3>{props.followerData.login}</h3>
            <img src={props.followerData.avatar_url} alt={`${props.followerData.login}'s avatar`} />
            <p>{props.followerData.html_url}</p>
        </div>
    )
}