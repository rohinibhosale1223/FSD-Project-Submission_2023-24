import React from 'react'
// import Footer from "./Footer";
// import MoviesPage from './Movies';
import Recom from "./Recom";
import TopAiringAnime from "./TopAiringAnime";
import Trending from "./Trending";
import Upcominganime from "./Upcominganime";
const Render = () => {
  return (
    <div>
    <TopAiringAnime/>
    <Trending/>
    <Recom/>
    <Upcominganime/>
    {/* <MoviesPage/> */}
    </div>
  )
}

export default Render
