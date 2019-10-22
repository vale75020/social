import React, { Component } from 'react';
import axios from 'axios';

export default class Photos extends Component {
    state = {
        photos:[],
        user:""
    }
    
      componentDidMount() {
        axios
        .get("https://randomuser.me/api/?results=80")
        .then(response => {
          console.log(response)
          this.setState({
            photos: response.data.results
          });
          console.log(this.state.photos);
        })
        .catch(error => {
          console.log(error);
        });
      }
handleChange = (e) => {
    this.setState({
        user: e.target.value
    })
    console.log(this.state.user)
}

handleSubmit = (e, name) => {
    e.preventDefault();
    let findUser = this.state.photos.filter(x => x.name === this.state.user)
    console.log(findUser)
    this.setState({
        photos: findUser, user:""
    })

}
      
    render() {
        return (
            <div>
                <h1>Users</h1>
                <input className="input-user" type="text" placeholder="search user" style={{borderRadius:"20px"}} value={this.state.user} 
                onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                {this.state.photos.map(photo => {
                    return(
                        <div className="photo" key={photo.login.uuid}>
                            <img src={photo.picture.medium} alt={photo.title} />
                            <h4>{photo.name.title} {photo.name.first} {photo.name.last}</h4>
                            <h5>{photo.email}</h5>
                            <p></p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
