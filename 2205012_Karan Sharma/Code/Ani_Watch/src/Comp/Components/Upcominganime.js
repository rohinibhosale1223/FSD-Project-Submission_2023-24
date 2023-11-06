import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "/Users/macbookair/Projects/AniWatch_Clone/aniwatch/src/CSS/upcominganime.css";
const Upcominganime = () => {
    const [upcomingAnime,SetUpComingAnime] = useState([]);
    const GetUpcomingAnime = async()=>{
        const response = await fetch(`https://api-aniwatch.onrender.com/anime/home`);
        const data = await response.json();
        return(SetUpComingAnime(data.topUpcomingAnimes))
    }
    useEffect(()=>{
        GetUpcomingAnime()
    },[])
  return (
    <>
    <div className='Main-Upcoming'>
      <h2 className='Title'>Upcoming Anime</h2>
        <div className="row">
        {upcomingAnime?.slice(0,8).map((element)=>{
            console.log("hey");
            return(
            <div className="images">
            <Link to={`/aniwatch/${element.id}`} key = {element.id} alt="">
                    <img src={element?.poster} alt="" />
                </Link>
                <div className="details">
                    <h3 className='white'>{element.name.slice(0,35)+"..."}</h3>
                </div>
            </div>)
        })}
        </div>
    </div>
    </>
  )
}

export default Upcominganime
