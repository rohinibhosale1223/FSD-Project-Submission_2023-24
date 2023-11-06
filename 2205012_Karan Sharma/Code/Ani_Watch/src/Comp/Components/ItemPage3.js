import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link} from 'react-router-dom'
import Footer from './Footer';
import "/Users/macbookair/Projects/AniWatch_Clone/aniwatch/src/CSS/ItemPage.css";

const ItemPage3 = () => {
    // window.location.reload(true)
    const {id} = useParams();
    console.log(id);
    //Content;
    const[animeo,setanime] = useState({});
    const [showmore,setshowmore] = useState(false);
    // const [count, setCount] = useState(0);

    //Destructure the Value
    const {anime,relatedAnimes,recommendedAnimes} = animeo;
    const getAnime = async(id) =>{
        const response = await fetch(`https://api-aniwatch.onrender.com/anime/info?id=${id}`)
        const data = await response.json();
        setanime(data);
    }
    useEffect(()=>{
        getAnime(id);
        // console.log(count);
    },[id])
  return (
    <>
    <div className='Anime-item'>
      <Link to={`/`}>
      <div className='white textdecoration' >Home </div>
      </Link>  
      <h1 className='Title'>{anime?.info?.name}</h1>
        <div className="details">
            <div className="grid-view">
                <div >
                    <img className="image" src={anime?.info?.poster}  alt="" />
                </div>
                <div className="detail">
                    <p><span>Aired: </span><span>{anime?.moreInfo?.status}</span></p> 
                    <p><span>Rating: </span><span>{anime?.info?.stats.rating}</span></p> 
                    <p><span>Score: </span><span>{anime?.moreInfo?.malscore}</span></p> 
                    <p><span>Airing: </span><span>{anime?.moreInfo?.aired}</span></p> 
                    <p><span>Status: </span><span>{anime?.moreInfo?.status}</span></p> 
                    <p><span>Studio: </span><span>{anime?.moreInfo?.studios}</span></p> 
                    <p><span>Duration: </span><span>{anime?.info?.stats.duration}</span></p> 
                </div>
            </div>
        </div>
        <p className="desc">
            {showmore ? anime?.info?.description : anime?.info?.description?.substring(0,450)+" ..."}
            <button onClick={()=>{setshowmore(!showmore)}}>{showmore ? "Show Less" : "Read More"}</button>
        </p>
    </div>
    <div className='Trending'>
        <h2 className='Title'>Related Animes</h2>
        <div className="trending-img">
        {relatedAnimes?.map((element)=>{
            return(
                <Link to={`/aniwatch/${element.id}`} key = {element.id} alt="">
                    <img src={element?.poster} alt="" />
                </Link>
            )
        })}
        </div>
        <h2 className='Title'>Recommended Animes</h2>
        <div className="trending-img">
        {recommendedAnimes?.map((element)=>{
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
        <Footer/>
    </div>
    </>
    )
}

export default ItemPage3
