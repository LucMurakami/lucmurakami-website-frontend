import React, { useState, useEffect } from 'react';
import MotivationMicroserviceScreen from './MotivationMicroserviceScreen'

const MotivationMicroservice = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.lucmurakami.ca/motivation')
      .then(res => res.json())
      .then(res => setData(res))
  }, []);
  
  return (
    <MotivationMicroserviceScreen data={data}/>
  )
}

export default MotivationMicroservice;
