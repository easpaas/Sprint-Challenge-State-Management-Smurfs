import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import SmurfList from './SmurfList';
import NewSmurf from "./NewSmurf";
import { SmurfContext } from "../contexts";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        // TODO dispatch action that adds new smurf to inital data
        setData(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  // add new smurf to existing smurf array
  const addSmurf = smurf => {
    setData([...data, smurf]);
  };

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>

      <SmurfContext.Provider value={{ addSmurf }}>
        <div className="form">
          <h3>Add a new smurf</h3>
          <NewSmurf />
        </div>
      </SmurfContext.Provider>

      <SmurfContext.Provider value={{ data }}>
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;
