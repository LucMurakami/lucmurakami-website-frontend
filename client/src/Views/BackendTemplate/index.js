import React, { useState, useEffect } from 'react';
import BackendTemplateScreen from './BackendTemplateScreen'

const BackendTemplate = () => {
  const [data, setData] = useState(null)
  console.log(data)

  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(res => setData(res))
  }, []);

  return (
    <BackendTemplateScreen data={data}/>
  )
}

export default BackendTemplate;
