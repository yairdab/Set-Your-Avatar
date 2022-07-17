import React, {useState} from 'react';

const frames = [
'Cute+bear.png',
'Gold+Brush.png',
'Magical.png',
'Olive+Branch.png',
'Ring+of+Fire.png',
'The+Movies.png'
]


function Frame(props) {

  return (<div className="row">

            {frames.map(frame => {
              return <div className="col" onClick={()=>{props.setFrame('/assets/frames/'+frame)}}>
                <img class-Name="frame" src={`/assets/frames/${frame}`} alt="Avatar" />
              </div>
            })}

          </div>);
}

export default Frame;
