import {Link} from 'react-router-dom';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "/Users/macbookair/Projects/AniWatch_Clone/aniwatch/src/CSS/Recom.css";
const BaseUrl = "https://api.jikan.moe/v4/"
const Recom = () => {
    // const [FetchCalls,setFetchCalls] = useState(TopAiring=[],TopManga=[],MostPopular=[],MostFavourite=[]);
    const [TopAiring,SetTopAiring] = useState([]);
    const [TopManga,SetTopManga] = useState([]);
    const [MostPopular,SetMostPopular] = useState([]);
    // const [MostFavourite,SetMostFavourite] = useState([]);
    const FetchTopAiring = async() =>{
        const response = await fetch(`https://api-aniwatch.onrender.com/anime/home`);
            const data = await response.json();
            return(SetTopAiring(data.topAiringAnimes));
    }
    const FetchTopManga = async() =>{
            const respose = await fetch(`${BaseUrl}manga?filter=bypopularity`);
            const data = await respose.json();
            return(SetTopManga(data.data));
    }
    const FetchMostPopular = async() =>{
            const respose = await fetch(`https://api-aniwatch.onrender.com/anime/home`);
            const data = await respose.json();
            return(SetMostPopular(data.trendingAnimes));
    }
    useEffect(()=>{
        FetchTopAiring()
    },[])
    useEffect(()=>{
        FetchTopManga()
    },[])
    useEffect(()=>{
        FetchMostPopular()
    },[])
  return (
    <div>
      <div className="Main-content">
        <div className="Top">
            <h2 className='Title'>Top Airing</h2>
            {TopAiring?.slice(0,5).map((element)=>{
                return(
                <>
                <div className="anime">
                <Link to={`/aniwatch/${element.id}`} key = {element.id} alt="">
                    <img src={element?.poster} alt="" />
                </Link>
                    <div>
                        <div className="anime-name">{element.name}</div>
                        <div className="anime-name">{element.otherInfo[0]}</div>
                    </div>
                </div>
                <div className="bor"></div>
                </>
                )
            })}
        </div>
        <div className="Top">
            <h2 className='Title'>Top Manga</h2>
            {TopManga?.slice(0,5).map((element)=>{
                return(
                <>
                <div className="anime">
                <Link to={`/anime/${element.mal_id}`} key = {element.mal_id} alt="">
                    <img src={element?.images?.jpg?.large_image_url} alt="" />
                </Link>    
                    <div>
                        <div className="anime-name">{element.title}</div>
                        <div className="anime-name">{element.type}</div>
                    </div>
                </div>
                <div className="bor"></div>
                </>
                )
            })}
        </div>
        <div className="Top">
            <h2 className='Title'>Most Popular</h2>
            {MostPopular?.slice(0,5).map((element)=>{
                return(
                <>
                <div className="anime">
                <Link to={`/aniwatch/${element.id}`} key = {element.id} alt="">
                    <img src={element?.poster} alt="" />
                </Link>
                    <div>
                        <div className="anime-name">{element.name}</div>
                        <div className="anime-name">TV</div>
                    </div>
                </div>
                <div className="bor"></div>
                </>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Recom