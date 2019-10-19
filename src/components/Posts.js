import React from 'react';
import Image from "./Image";

const Posts = ({posts, deletePost}) => {
    const mystyle = {
        width:"60%",
        margin:"0 auto"
    }
    return (
        <div style={mystyle}>
            <h1>All Posts</h1>
            {posts.map( post => {
                return (
                    <div className="post" key={post.id}>
                        <Image />
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button className="delete" onClick={() => deletePost(post.id)}>Delete Post</button>
                    </div>
                )
            })}
        </div>
    );
};

export default Posts;