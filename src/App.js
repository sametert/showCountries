import React, {useState} from 'react';
import './App.css';
import Country from './components/Country';
import NeighbourCountry from './components/NeighbourCountry';

function App() {
  const [border,setBorder] = useState(null);

  console.log(border)
  return (
    <div className='parent'>
       <div className="App">
          <Country setBorder={setBorder}/>

          {border && <NeighbourCountry border={border}/>}
        </div>
    </div>
   
  );
}

export default App;
