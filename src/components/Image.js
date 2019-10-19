import React, { Component } from "react";
import axios from "axios";

export default class Image extends Component {
  state = {
    images: []
  };

//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/photos")
//       .then(response => {
//         // console.log(response.data)
//         this.setState({
//           images: response.data
//         });
//         console.log(this.state.images);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
  render() {
    return (
      <div>
        {/* {this.state.images.map(image => {
          return (
            <div className="img">
              <img src={image.url} />
            </div>
          );
        })} */}
      </div>
    );
  }
}
