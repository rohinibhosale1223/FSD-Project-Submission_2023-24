import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const All_anime = () => {
    const BASE_url = "https://api.jikan.moe/v4/top/anime";
    const [Allanime,setAllanime] = useState([]);
    const getAllAnime = async()=>{
        const response = await fetch(BASE_url);
        const data = await response.json();
        console.log(data.data);
        return(setAllanime(data.data));
    }
    useEffect(()=>{
        getAllAnime()
    },[])
  return (
    <>
    <div className='Trending'>
        <h2 className='Title'>Top 25 Anime</h2>
        <div className="trending-img">
        {Allanime?.map((element)=>{
            return(
                <Link to={`/anime/${element.mal_id}`} key = {element.mal_id} alt="">
                <img src={element?.images?.jpg?.large_image_url} alt="" />
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

export default All_anime
