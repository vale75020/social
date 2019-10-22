import React from 'react';

const AllPosts = ({allPosts}) => {
    return (
        <div className="containerMyPosts">
            <button className="allposts" onClick={allPosts}>BACK TO ALL POSTS</button>
        </div>
    );
};

export default AllPosts;