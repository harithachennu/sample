import React, { useState } from 'react';
import Data from'./city.json';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  return (<>
    <div>
      <center>
        <h2>ENTER YOUR CITY</h2>
        <h3>hello lakshmi</h3>
        <input type="text" placeholder="enter city........." 
        value={search} style={{"color":"blue","width":"20%","border": "1px solid black", "padding": "10px"}}
        onChange={(e) => setSearch(e.target.value)} />
        <br /><br/>

        { Data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city => {
          return <div style={{ "border": "1px solid black", "padding": "10px", "margin":"10px","max-width":"50%" }}>
            {city.name}
          </div>
        })}

      </center>
     
    </div>



  </>

  );
}

export default App;
