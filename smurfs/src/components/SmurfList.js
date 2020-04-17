import React, { useContext } from 'react';
import './App.css';

import {SmurfContext} from '../contexts';
import Smurf from './Smurf';

const SmurfList = () => {
  const { smurfData } = useContext(SmurfContext);

  return (
    <div className="smurf-village">
      {
        smurfData.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })
      }
    </div>
  );
}

export default SmurfList;