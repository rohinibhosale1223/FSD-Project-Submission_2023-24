import React from "react";
import { useState } from "react";
import All_anime from "./Components/All_anime";
import Footer from "./Components/Footer";
import MoviesPage from "./Components/Movies";
import Render from "./Components/Render";
import SearchPage from "./Components/SearchPage";
import "/Users/macbookair/Projects/AniWatch_Clone/aniwatch/src/CSS/Navbar.css";
// import {Link} from 'react-router-dom'

function HomePage() {
  const [search,setsearch] = useState(false);
  const [allAnime,setAllAnime] = useState(false);
  const [movies,setmovies] = useState(false);
  const [Home,setHome] = useState(true);
  const [data,setdata] = useState('');
  const change = (e)=>{
    setdata(e.target.value)
    if(e.target.value === ''){
      setsearch(false);
      console.log(search);
    }
  }
  const handlesubmit = (e) =>{
    e.preventDefault();
    setsearch(true);
  }
  const render= () =>{
     switch (search) {
       case false:
         if (allAnime) {
          return(<All_anime/>);
        } 
        else if(movies){
          return(<MoviesPage/>)
        }
        else if(Home){
           return(<Render/>);
        }
        break;
      case true:
        return(<SearchPage name={data}/>);
      default:
        break;  
     }
  }
 const AllAnime = ()=>{
    setsearch(false);
    setdata("");
    setHome(false);
    setmovies(false);
    setAllAnime(true);
  }
 const Movies = ()=>{
    setsearch(false);
    setdata("");
    setHome(false);
    setAllAnime(false);
    setmovies(true);
  }
 const HomePage = ()=>{
    setsearch(false);
    setdata("");
    setAllAnime(false);
    setmovies(false);
    setHome(true);
  }
  return (
    <div className="App">
      <div className="Navbar">
        <ul>
          <li><img src="https://aniwatch.to/images/logo.png" onClick={HomePage} style={{cursor:"pointer"}} alt="" /></li>
          <li>
          <form action="" onSubmit={handlesubmit}><input type="text" value={data} onChange={change} className="inputSearch" placeholder="search"/></form></li>
          <li><button class="fa fa-search"></button></li>
          <li onClick={HomePage} style={{cursor:"pointer"}}>Home</li>
          <li onClick={AllAnime} style={{cursor:"pointer"}}>AllAnime</li>
          <li onClick={Movies} style={{cursor:"pointer"}}>Movies</li>
        </ul>
      </div>
      {render()}
      <Footer/>
    </div>
  );
}

export default HomePage;
