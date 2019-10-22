import React from 'react';
//import Image from "./Image";

const Posts = ({posts, deletePost, visible, images}) => {
   
    return (
        <div>
            {visible ? <h1>All Posts</h1> : <h1>My Posts</h1>}
            {posts.map( post => {
                return (
                    <div className="post" key={post.id}>
                        {/* <Image images={this.props.images} /> */}
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