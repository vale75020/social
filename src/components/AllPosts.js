import React from 'react';

const AllPosts = ({allPosts}) => {
    return (
        <div className="containerMyPosts">
            <button className="myposts" onClick={allPosts}>ALL POSTS</button>
        </div>
    );
};

export default AllPosts;