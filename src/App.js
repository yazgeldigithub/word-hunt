import axios from 'axios';
import './App.css';
import {useEffect, useState } from 'react';

function App() {

  const [meanings, setMeanings] = useState([])

  const dictionaryApi = async() => {
    try{
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane')
      console.log(data)
      setMeanings(data.data)
    } catch(error){
      console.log(error)
 }  }

 useEffect(() => {
  dictionaryApi();
 }, [])

  return (
    <div className="App">Dictionary</div>
  );
}

export default App;
