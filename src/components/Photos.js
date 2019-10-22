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
            console.log(response);
            this.setState({
              photos: response
            });
            console.log(this.state.photos);
          })
          .catch(error => {
            console.log(error);
          });
      }

    render() {
        const accessKey = "0da7b81bfb2aee21a9b9b2e9b2cfed0ce3f5ed081afe76de99ed42c40a660f20";
        const secretKey = "31016c65591b83d867ffeffcc836cc22a06ad5df970eaff651c8a356d16763e6"
        return (
            <div>
                <h1>Photos</h1>
                {/* {this.state.photos.map(photo => {
                    return(
                        <div>
                            <img src={photo.url} alt="" />
                        </div>
                    )
                })} */}
            </div>
        )
    }
}
