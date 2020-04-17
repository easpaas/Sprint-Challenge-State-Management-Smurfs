import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import Smurf from "./Smurf";
import NewSmurf from "./NewSmurf";



function App() { 
  // TODO state
  const [data, setData] = useState([]);

  // TODO useEffect 
  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      // TODO dispatch action that adds new smurf to inital data
      setData(response.data);
    })
    .catch(error => {
      console.log(error.message)
    })
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <div className="form">
        <h3>Add a new smurf</h3>
        <NewSmurf />
      </div>
      <div className="smurf">
        { 
          data.map(smurf => {
            return <Smurf key={smurf.id} smurf={smurf} />
          })
        }
      </div>
    </div>
  );
}

export default App;
