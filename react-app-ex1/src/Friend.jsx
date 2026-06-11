import React from 'react';

const friends = [
    {
        title: "Yummmmmmm",
        src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
        title: "Hey Guys! Wait Up!",
        src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
    },
    {
        title: "Yikes",
        src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
    }
];

function Friend(){
    return (
        <div>
            {friends.map(friend =>
                <div>
                    <h1>{friend.title}</h1>
                    <img 
                        src={friend.src}
                        alt={friend.title}
                        width= '200'/>
                </div>
            )}
        </div>
    );
}

export default Friend;