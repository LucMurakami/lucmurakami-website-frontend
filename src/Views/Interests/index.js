import React from 'react';
import InterestsScreen from './InterestsScreen'

const Interests = () => {
  const data = [
    {
      title: "Hockey",
      expansionPanelSummary: "I like to play ice hockey and currently play in the NCHL at the oval",
      description: "I have been playing ice hockey since late 2018, and currenctly play for the NCHL team Ninja Pandas. Previously I also played for the Flying Saucers.",
      link: "http://stats.nchl.com/site/3333/page.asp?Site=9818&page=Players&LeagueID=9818&SeasonID=27&DivisionID=24&TeamID=5596&PlayerID=37787&Section=Home",
      linkDescription: "NCHL Stats Page"
    },
    {
      title: "Games",
      expansionPanelSummary: "I was a super big nintendo fan growing up, and now I play online games with my friends.",
      description: "I am a hugh Legend of Zelda fan. I play a mean Link in super smash bros, and currently am playing Borderlands with my friends in my spare time.",
    },
    {
      title: "Golf",
      expansionPanelSummary: "I regularly play golf in the summers",
      description: "I've been playing golf since I was younger. But I'm still not very good haha.",
    },
    {
      title: "Car Maintenance",
      expansionPanelSummary: "I like to fix my own car, an Acura CSX",
      description: "I usually try to do all my own car repairs, if it doesn't involve major areas of the engine or the suspension. I've changed my alternator, spark plugs, brakes, oil + filters, among others.",
    },
    {
      title: "Coffee",
      expansionPanelSummary: "I am a big coffee fan and make drip coffee every morning",
      description: "I love coffee and I usually take home coffee from whereever I visit, or ask for coffee as a souvenier. My favourite coffee is Kona from Hawaii.",
    },
  ]

  return (
    <InterestsScreen data={data}/>
  )
}

export default Interests;
