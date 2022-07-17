import React, {useState} from 'react';

import img1 from '../assets/frames/Cute+bear.png'
import img2 from '../assets/frames/Gold+Brush.png'
import img3 from '../assets/frames/Magical.png'
import img4 from '../assets/frames/Olive+Branch.png'
import img5 from '../assets/frames/Ring+of+Fire.png'
import img6 from '../assets/frames/The+Movies.png'


const frames = [img1, img2, img3, img4, img5, img6];


function Frame(props) {

  return (<div className="row">

            {frames.map(frame => {
              return <div className="col" onClick={()=>{props.setFrame(frame)}}>
                <img className="frame" src={frame} alt="Avatar" />
              </div>
            })}

          </div>);
}

export default Frame;
