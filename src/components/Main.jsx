import React, {useState} from 'react';

import Frame from "./Frame"
import Footer from "./Footer"


const imageSizeMax = 400;
const imageSizeMin = 0;

function Main() {

  const [frame, setFrame] = useState(null);
  const [size, setSize] =useState(250);

  const onChange = (event) => {
    const value = Math.max(imageSizeMin, Math.min(imageSizeMax, Number(event.target.value)));
    setSize(value);
  };

  return (<div className="container">
  <h1 className="header"> Set Your Avatar</h1>
    <div className="upperContainer">
      <h1>Your Profile Pictrue with your Avatar</h1>
      <div
          style={{
            height: size + 'px',
            width: size + 'px'
          }}
          className="profile-picture-container">
        <img className="profile-picture" src="../../public/assets/profile/profile-image.jpg"/>
        {
          frame &&
          <img className="profile-picture-frame" src={`${frame}`}/>
        }
      </div>
    </div>

    <div className="middleContainer">

      <div className="small-container">
        <h2 className="title">Featured Avatar Frames</h2>

        <Frame setFrame = {setFrame}/>

        <h2 className="title">Set your Image Size</h2>

          <input
              type="number"
              value={size}
              onChange={onChange}
              >
            </input>
      </div>

    </div>

    <Footer/>

  </div>);
}

export default Main;
