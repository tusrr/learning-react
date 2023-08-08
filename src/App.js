import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

   const [name,SetName]= useState("Tushar");
   const [predictedAge,SetPredictedAge]= useState(0);
  const fetchData =  ()=>{
      Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
        SetPredictedAge(res.data);
      })
      
  }
  return (
    <div className="App">
      <input 
      placeholder='Tushar..' 
      onChange={(event)=>{
        SetName(event.target.value);
      }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1> Name:{predictedAge.name} </h1>
      <h1> Age:{predictedAge.age} </h1>
      <h1> Your Name Occurences in this API:{predictedAge.count} </h1>
    </div>
  );
}
export default App;
