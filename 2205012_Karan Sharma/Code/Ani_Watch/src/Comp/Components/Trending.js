import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import "/Users/macbookair/Projects/AniWatch_Clone/aniwatch/src/CSS/Trending.css";
const BaseUrl = "https://api-aniwatch.onrender.com/anime/home"
function Trending() {
    const [Trending,SetTrending] = useState([]);
    const fetchdata = async () =>{
        const response = await fetch(BaseUrl);
        const data = await response.json();

        return(SetTrending(data.trendingAnimes));
    }
    useEffect(()=>{
        fetchdata();
    },[])
  return (
    <>
    <div className='Trending'>
        <h2 className='Title'>Trending</h2>
        <div className="trending-img">
        {Trending?.map((element)=>{
            return(
                <Link to={`/aniwatch/${element.id}`} key = {element.id} alt="">
                <img src={element?.poster} alt="" />
                </Link>
            )
        })}
        </div>
        <div className="gif">
            <img src="https://aniwatch.to/images/share-icon.gif" alt="" />
            <div className="titles">
                <h1 className='Yellow'>Share</h1>
                <div className='white'>To your friends</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Trending
