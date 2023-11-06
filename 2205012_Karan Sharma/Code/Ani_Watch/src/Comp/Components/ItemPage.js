import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import "/Users/macbookair/Projects/AniWatch_Clone/aniwatch/src/CSS/ItemPage.css";

const ItemPage = () => {
  const {id} = useParams();
  console.log(id);
  //Content;
  const[anime,setanime] = useState({});
  const [characteres,setcharacters] = useState([]);
  const [showmore,setshowmore] = useState(false);
//   const [count, setCount] = useState(0);

  //Destructure the Value
  const {title,synopsis,
      trailer,duration,
      aired,season,images,
      rank,score,scored_by,
      status,rating,source} = anime;
  const getAnime =async (anime) =>{
      const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
      const data = await response.json();
      setanime(data.data);
      console.log(data.data);
  }
  const getCharacters = async (anime) =>{
      const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
      const data = await response.json();
      setcharacters(data?.data);
  }
  useEffect(()=>{
      getAnime(id);
      getCharacters(id);
    //   console.log(count);
  },[id])
return (
  <>
  <div className='Anime-item'>
    <Link to={`/`}>
    <div className='white textdecoration' >Home </div>
    </Link>  
    <h1 className='Title'>{title}</h1>
    <div className="details">
    <div className="grid-view">
              <div >
                  <img className="image" src={images?.jpg.large_image_url} alt="" />
              </div>
              <div className="detail">
                  <p><span>Aired: </span><span>{aired?.string}</span></p> 
                  <p><span>Rating: </span><span>{rank}</span></p> 
                  <p><span>Rank: </span><span>{rank}</span></p> 
                  <p><span>Score: </span><span>{score}</span></p> 
                  <p><span>Scorered By: </span><span>{scored_by}</span></p> 
                  <p><span>Status: </span><span>{status}</span></p> 
                  <p><span>Rating: </span><span>{rating}</span></p> 
                  <p><span>Season: </span><span>{season}</span></p> 
                  <p><span>Source: </span><span>{source}</span></p> 
                  <p><span>Duration: </span><span>{duration}</span></p> 
              </div>
          </div>
      </div>
           <p className="desc">
              {showmore ? synopsis : synopsis?.substring(0,450)+" ..."}
              <button onClick={()=>{setshowmore(!showmore)}}>{showmore ? "Show Less" : "Read More"}</button>
          </p>
      <h1 >Trailer</h1>
      <div className="trailer-container">
          {trailer?.embed_url && 
          <iframe 
          src={trailer?.embed_url}
          width= "800"
          height="450"
          title={title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-write; gyroscope; picture-in-picture"
          allowFullScreen/>}
      </div>
      <h1>Characters</h1>
      <div className="characters">
      {characteres?.map((character,index)=>{
      const {role} = character
      const {images,name,mal_id} = character.character
      return <Link to={`/character/${mal_id}`} key={index}>
      <div className="character-img text-decoration">
              <img className="Popular-img" src={images?.jpg.image_url} alt="" /><br />
              <div className='white '>{name}</div>
              <div className='white '>{role}</div>
      </div>
      </Link>
      })}
      </div>
  </div>
  </>
  )
}

export default ItemPage
