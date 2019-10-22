import React, { Component } from "react";

export default class AddPost extends Component {
  state = {
    title: "",
    body:""
  };

  

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state.content);
  //   this.props.addNewPost(this.state.content)
  //   this.setState({
  //       content:""
  //   })
  // }

  handleSubmit = e => {
    e.preventDefault()
    const object = {
        userId: 4,
        title: this.state.title,
        body: this.state.body
    }
    console.log(object)
    this.props.addNewPost(object)
    this.setState({
        title: "",
        body:""
    })
}


  render() {
    return (
      <div className="posts">
        <input className="input" type="text" name="title" onChange={this.handleChange} value={this.state.title} placeholder="enter title"/>
        <input className="input" type="text" name="body" onChange={this.handleChange} value={this.state.body} placeholder="enter comment"/>
        <button className="add" onClick={e => this.handleSubmit(e)}>
          Add Post
        </button>
      </div>
    );
  }
}
