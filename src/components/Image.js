import React from 'react';

const Image = ({images}) => {
  return (
    <div>
        {images.map(image => {
          return (
            <div className="img" >
              <img src={image.url} alt=""/>
            </div>
          );
        })}
      </div>
  );
};

export default Image;


