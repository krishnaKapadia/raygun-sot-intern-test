import React, { useState } from 'react';
import './app.css';

import { Case } from './case';
import { Lights, Light } from './light';
import { Button } from './button';

const lights = [
  'red',
  'yellow',
  'green'
];

function App() {
  const [activeLight, setActiveLight] = useState(lights.length-1);

  return (
    <div className="app">
      <Case>
        <Lights>
          {lights.map((color, index) => (
            <Light color={color} active={activeLight==index} />
          ))}
        </Lights>
      </Case>
      <Button 
        onClick={() => setActiveLight(l => {
            const newLight = l - 1;
            return (l <= 0) ? lights.length - 1 : newLight;
          })
        }
      />
    </div>
  );
}

export default App;
