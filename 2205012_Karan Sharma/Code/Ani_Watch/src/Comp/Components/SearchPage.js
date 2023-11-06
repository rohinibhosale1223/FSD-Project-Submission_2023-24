import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
const BaseUrl = "https://api.jikan.moe/v4";
function SearchPage(props) {
    console.log(props.data);
    const [Trending,SetTrending] = useState([]);
    const fetchdata = async () =>{
        console.log(props.name);
        const response = await fetch(`${BaseUrl}/anime?q=${props.name}&order_by=popularity&sort=asc&sfw`)
        const data = await response.json();
        // console.log(data.data);
        return(SetTrending(data.data));
    }
    useEffect(()=>{
        fetchdata();
    },[])
  return (
    <>
    <div className='Main-content'>
        <div className="trending-img">
        {Trending?.map((element)=>{
            return(
                <Link to={`/anime/${element.mal_id}`} key = {element.mal_id} alt="">
                <img src={element?.images?.jpg?.large_image_url} alt="" />
                </Link>
            )
        })}
        </div>
    </div>
    </>
  )
}

export default SearchPage
