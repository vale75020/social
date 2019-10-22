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
        body: this.state.content
    }
    console.log(object)
    this.props.addNewPost(object)
    this.setState({
        content: ""
    })
}


  render() {
    return (
      <div className="posts">
        <input className="input" type="text" onChange={this.handleChange} value={this.state.content} />
        <button className="add" onClick={e => this.handleSubmit(e)}>
          Add Post
        </button>
      </div>
    );
  }
}
