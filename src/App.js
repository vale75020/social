import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import MyPosts from "./components/MyPosts";
import AllPosts from "./components/AllPosts";
import Photos from "./components/Photos";

export default class App extends Component {
  state = {
    posts: [],
    images: [],
    isVisible: false
  };

  fetchData = () => {
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
  };

  fetchImages = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        // console.log(response.data)
        this.setState({
          images: response.data
        });
        console.log(this.state.images);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchData();
    this.fetchImages();
  }

  deletePost = id => {
    console.log(id);
    let updatedPosts = this.state.posts.filter(post => post.id !== id);
    this.setState({ posts: updatedPosts });
  };

  addNewPost = post => {
    post.id = Math.random();
    let newPostArray = [post, ...this.state.posts];
    console.log(newPostArray);
    this.setState({
      posts: newPostArray
    });
  };

  postsByUserId = post => {
    let postsById = this.state.posts.filter(post => post.userId === 4);
    this.setState({ posts: postsById, isVisible: true });
    console.log(postsById);
  };

  allPosts = () => {
    this.fetchData();
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1>My Social Network</h1>
        <div className="container-buttons">
          {this.state.isVisible ? (
            <AllPosts allPosts={this.allPosts} />
          ) : (
            <MyPosts postsByUserId={this.postsByUserId} />
          )}
        </div>
        <AddPost addNewPost={this.addNewPost} />
        <div className="container">
          <div className="leftBlock">
            <Photos />
          </div>
          <div className="centerBlock">
            <Posts
              visible={this.state.isVisible}
              posts={this.state.posts}
              deletePost={this.deletePost}
              images={this.state.images}
            />
          </div>
          <div className="rightBlock"></div>
        </div>
      </div>
    );
  }
}
