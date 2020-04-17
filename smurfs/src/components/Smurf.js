import React from 'react';
import Axios from 'axios';

const Smurf = ({smurf}) => {

  //TODO state update will cause re-render. Currently state lives in App. Push this function to App an call it via props
  
  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  return(
    <div className="smurf-container">
      <h2>{smurf.name}</h2>
      <div className="attributes">
        <p>{`${smurf.name} is ${smurf.age} smurf years old.`}</p>
        <p>{`${smurf.name} is ${smurf.height} cm tall.`}</p>
      </div>
      <button onClick={() => handleDelete(smurf.id)}>Remove the bad smurf</button>
    </div>
  );
}

export default Smurf;