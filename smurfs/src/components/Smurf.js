import React, { useContext } from 'react';
import './App.css';

import {SmurfContext} from '../contexts';


const Smurf = ({smurf}) => {
  const {deleteSmurf} = useContext(SmurfContext);

  return (
    <div className="smurf-container">
      <h2>{smurf.name}</h2>
      <div className="attributes">
        <p>{`${smurf.name} is ${smurf.age} smurf years old.`}</p>
        <p>{`${smurf.name} is ${smurf.height} cm tall.`}</p>
      </div>
      <button id="delete" onClick={() => deleteSmurf(smurf.id)}>Remove the bad smurf</button>
    </div>
  );
}

export default Smurf;