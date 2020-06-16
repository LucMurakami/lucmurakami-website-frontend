import React, { useState, useEffect } from 'react';
import BackendTemplateScreen from './BackendTemplateScreen'

const BackendTemplate = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.lucmurakami.ca/')
      .then(res => res.json())
      .then(res => setData(res))
  }, []);
  
  return (
    <BackendTemplateScreen data={data}/>
  )
}

export default BackendTemplate;
