import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import MyPosts from "./components/MyPosts";
import AllPosts from "./components/AllPosts";

export default class App extends Component {
  state = {
    posts: [],
    isVisible: false
  };

  fetch = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
        this.setState({
          posts: response.data
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetch()
  }

  deletePost = id => {
    console.log(id);
    let updatedPosts = this.state.posts.filter(post => post.id !== id);
    this.setState({ posts: updatedPosts });
  };

  addNewPost = post => {
    post.id = Math.random();
    let newPostArray = [...this.state.posts, post];
    console.log(newPostArray)
    this.setState({
      posts: newPostArray
    });
  };

  postsByUserId = post => {
    let postsById = this.state.posts.filter(post => post.userId === 4);
    this.setState({ posts: postsById, isVisible:true });
    console.log(postsById)
  };

  allPosts = () => {
    this.fetch()
      this.setState({isVisible:false})
  }

  render() {
    return (
      <div className="App">
        <h1>My Social Network</h1>

        <MyPosts postsByUserId={this.postsByUserId} />
        {this.state.isVisible ? <AllPosts allPosts={this.allPosts} /> : null}
        <AddPost addNewPost={this.addNewPost} />
        <Posts posts={this.state.posts} deletePost={this.deletePost} />
      </div>
    );
  }
}
