import React, { Component } from "react";
import Modal from './Modal';
import axios from "axios";

export default class Users extends Component {
  state = {
    users: [],
    user: "",
    show: false
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

  // Modal

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  // Input User

  handleChange = e => {
    this.setState({
      user: e.target.value
    });
    //console.log(this.state.user);
  };

  // Select Users

  handleSubmit = e => {
    let lastName = this.state.user;
    e.preventDefault();
    // let findUser = this.state.users.filter(user => lastName === user.name.last || lastName === user.name.first);
    let findUser = this.state.users.filter(
      user =>
        user.name.last.startsWith(lastName) ||
        user.name.first.startsWith(lastName)
    );
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
        <div className="user-photo">
          <input
            className="input-user"
            type="text"
            placeholder="search user"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <button className="search-user" onClick={this.handleSubmit}>
            Search User
          </button>
        </div>
        {this.state.users.map(user => {
          return (
            <div className="user-photo" key={user.login.uuid}>
              <img src={user.picture.medium} alt={user.title} />
              <h4>
                {user.name.title} {user.name.first} {user.name.last}
              </h4>
              {/* <h6>{user.email}</h6> */}
              <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
        <img src={user.picture.medium} alt={user.title} />
              <h2>
                {user.name.title} {user.name.first} {user.name.last}
              </h2>
               <h3>Nickname: {user.id.name}</h3>
               <h4>Age : {user.dob.age} years</h4>
               <h4>Address: {user.location.street.number} {user.location.street.name}</h4>
               <h4> {user.location.postcode} - {user.location.city}</h4>
               <h4>{user.location.country}</h4>
               <h4>Email : {user.email}</h4>
               <h4>Phone : {user.phone}</h4>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
            </div>
          );
        })}
      </div>
    );
  }
}
