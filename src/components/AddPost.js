import React, { Component } from "react";

export default class AddPost extends Component {
  state = {
    content: ""
  };

  

  handleChange = (e) => {
    this.setState({
        content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.content);
    this.props.addNewPost(this.state.content)
    this.setState({
        content:""
    })
  }

  render() {
    return (
      <div className="posts">
        <input className="input" type="text" onChange={this.handleChange} value={this.state.content} />
        <button className="add" onClick={this.handleSubmit}>
          Add Post
        </button>
      </div>
    );
  }
}
