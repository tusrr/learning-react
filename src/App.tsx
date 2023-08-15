import React from 'react';
import './App.css';
import { Person, Country} from './components/Person'

function App() {
  return (
    <div className="App">
      <Person
      name='Tushar'
      email ='tushar.raj2000@gmail.com'
      age={23}
      isMarried={false}
      friends={["Ankit","Karuna","Ashish"]}
      country= {Country.India}
      />
    
    </div>
  );
}

export default App;
 