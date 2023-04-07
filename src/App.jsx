import { useState, useEffect } from 'react'

import { fetchDataFromApi } from './utils/api';

function App() {

  useEffect(() => {
    ApiTest();
  }, []);

  const ApiTest = () => {
    fetchDataFromApi('/movie/popular')
    .then((res) => {
      console.log(res);
    })
  };
  

  return (
    <div className="App">
      HELLO
    </div>
  )
}

export default App
