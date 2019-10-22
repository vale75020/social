import React, { Component } from 'react';
import axios from 'axios';

export default class Photos extends Component {
    state = {
        photos:[]
    }
    
      componentDidMount() {
        axios
        .get("https://randomuser.me/api/?results=200")
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

      
    render() {
        return (
            <div>
                <h1>Users</h1>
                <input className="input-user" type="text" placeholder="search user" style={{borderRadius:"20px", width:"100%"}}/>
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
