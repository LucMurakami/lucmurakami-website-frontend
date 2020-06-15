import React, { useState, useEffect } from 'react';
import BackendTemplateScreen from './BackendTemplateScreen'

const BackendTemplate = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://lucmurakami-website-backend-lb-1188070059.us-west-2.elb.amazonaws.com/')
      .then(res => res.json())
      .then(res => setData(res))
  }, []);
  
  return (
    <BackendTemplateScreen data={data}/>
  )
}

export default BackendTemplate;
