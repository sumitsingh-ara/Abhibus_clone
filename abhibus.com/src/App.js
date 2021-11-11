import './App.css';
import {Landing} from './components/Landing/Landing'
import { Secondlanding } from './components/secondlanding/Secondlanding';
import {useState} from 'react'
function App() {
  const [data,setData] = useState([])
  const [flag,setFlag] = useState(false)
  return (
    <div className="App">
      {!flag ?
      <Landing setFlag={setFlag}/>
      :<Secondlanding/>}
    </div>
  );
}

export default App;
