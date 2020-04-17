import React, { useState } from "react";
import axios from 'axios';
import "./App.css";

const NewSmurf = () => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = e => {
    e.persist();
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setFormData(newFormData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // axios
    //   .post("https://localhost:3333/smurfs", formData)
    //   .then(res => {
    //     // reset form if successful
    //     setFormData({
    //       name: "",
    //       age: "",
    //       height: ""
    //     });
    //   })
    //   .catch(err => console.log(err.response));
    console.log(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChanges}
        />
      </label>
      <label htmlFor="age">
        Age
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChanges}
        />
      </label>
      <label htmlFor="height">
        Height
        <input
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChanges}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default NewSmurf;
