import React from 'react';
import InterestsScreen from './InterestsScreen'

const Interests = () => {
  const data = [
    {
      title: "test",
      expansionPanelSummary: "test",
      description: "test",
    }
  ]

  return (
    <InterestsScreen data={data}/>
  )
}

export default Interests;
