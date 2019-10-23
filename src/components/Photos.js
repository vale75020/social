import React, { Component } from 'react'
import axios from 'axios';

export default class Photos extends Component {
    state = {
        photos: []
    }
    
    componentDidMount() {
        axios
          .get("https://picsum.photos/v2/list")
          .then(response => {
            //console.log(response);
            this.setState({
              photos: response.data
            });
            // console.log(this.state.photos);
          })
          .catch(error => {
            console.log(error);
          });
      }

    render() {
        return (
            <div>
                <h1>Photos</h1>
                {this.state.photos.map(photo => {
                    return(
                        <div key={photo.id}>
                            <img style={{width:"320px", height:"240px"}} src={photo.url} alt="" />
                            <p>{photo.author}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
