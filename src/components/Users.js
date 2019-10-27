import React, { Component } from "react";
import axios from "axios";

export default class Users extends Component {
  state = {
    users: [],
    user: ""
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=80")
      .then(response => {
        console.log(response);
        this.setState({
          users: response.data.results
        });
        //console.log(this.state.users);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = e => {
    this.setState({
      user: e.target.value
    });
    //console.log(this.state.user);
  };

  handleSubmit = (e) => {
    let lastName= this.state.user
    e.preventDefault();
    let findUser = this.state.users.filter(user => lastName === user.name.last );
    console.log(findUser);
    this.setState({
      users: findUser,
      user: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
        <input
          className="input-user"
          type="text"
          placeholder="search user"
          value={this.state.user}
          onChange={this.handleChange}
        />
        <button  onClick={this.handleSubmit}>Search</button>
        {this.state.users.map(user => {
          return (
            <div className="user-photo" key={user.login.uuid}>
              <img src={user.picture.medium} alt={user.title} />
              <h4>
                {user.name.title} {user.name.first} {user.name.last}
              </h4>
              <h5>{user.email}</h5>
              <p></p>
            </div>
          );
        })}
      </div>
    );
  }
}
