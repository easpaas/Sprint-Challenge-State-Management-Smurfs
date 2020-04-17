import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import SmurfList from './SmurfList';
import NewSmurf from "./NewSmurf";
import { SmurfContext } from "../contexts";

function App() {
  const [smurfData, setSmurfData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        setSmurfData(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [smurfData]);

  // add new smurf to existing smurf array
  const addSmurf = smurf => {
    setSmurfData([...smurfData, smurf]);
  };

  // remove smurf from array if remove button clicked
  const deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(() => {
      setSmurfData([...smurfData]);
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfContext.Provider value={{ addSmurf }}>
        <div className="form">
          <h3>add a new smurf</h3>
          <NewSmurf />
        </div>
      </SmurfContext.Provider>

      <SmurfContext.Provider value={{ smurfData, deleteSmurf }}>
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;
