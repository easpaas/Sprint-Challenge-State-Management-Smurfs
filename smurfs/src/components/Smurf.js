import React from 'react';

const Smurf = ({smurf}) => {
  return(
    <div className="smurf-container">
      <h2>{smurf.name}</h2>
      <div className="attributes">
        <p>{`${smurf.name} is ${smurf.age} smurf years old.`}</p>
        <p>{`${smurf.name} is ${smurf.height} cm tall.`}</p>
      </div>
    </div>
  );
}

export default Smurf;