import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
function MoviesPage() {
    const baseurl = "https://ghibliapi.vercel.app/films";
    const [movies,setmovies] = useState([]);
    const getmovies = async()=>{
        const response = await fetch(baseurl);
        const data = await response.json();
        console.log(data);
        return(setmovies(data));
    }
    useEffect(()=>{
        getmovies()
    },[])
  return (
    <div>
      <>
      <div className='Trending'>
        <h2 className='Title'>Top 25 Movies</h2>
        <div className="trending-img">
        {movies?.slice(0,20).map((element)=>{
            return(
                <img src={element?.image} alt="" />
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
    </div>
  )
}

export default MoviesPage
