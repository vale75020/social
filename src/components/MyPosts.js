import React from 'react';

const MyPosts = ({postsByUserId}) => {
    return (
        <div className="containerMyPosts">
            <button className="myposts" onClick={postsByUserId}>MY POSTS</button>
        </div>
    );
};

export default MyPosts;