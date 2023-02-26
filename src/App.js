
import React, { useState } from 'react';
import Screen from './components/screen.js';
import Inputbox from './components/input.js';



function App() {


const [markuplang,setMarkuplang] = useState("")
  return (
    <div style={{display : "flex"}}
    >
      <Inputbox setdatafn = {setMarkuplang}></Inputbox>
     <Screen markupdata = {markuplang} />
  
    </div>
  );
}

export default App;