import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import "/Users/macbookair/Projects/AniWatch_Clone/aniwatch/src/CSS/TopAiring.css";
function TopAiringAnime() {
  const [TopAiring,SetTopAiring] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const getTopAiring = async() =>{
    const response = await fetch(`https://api-aniwatch.onrender.com/anime/home`);
    const data = await response.json();
    return SetTopAiring(data.spotlightAnimes);
  }
  useEffect(()=>{
    getTopAiring()
  },[])
  let [num,changnum] = useState(0);
  let [num2,changnum2] = useState(1);
  const Change = () =>{
    changnum(num-1);
    changnum2(num2-1);
    if(num <= 0 ){
      changnum(0);
      changnum2(1);
    }
  }
  const Change2 = () =>{
    changnum(num + 1) ;
    changnum2(num2 + 1);
    if (num2 === 9) {
      changnum(0);
      changnum2(1);
    }
  }

  return (
    <>
    {console.log(num)}
    {TopAiring?.slice(num,num2).map((ele)=>{
      return(
      <div className="Main-div">
        <div className="Top-Details">
          <div className="title">{ele?.name}</div>
              <ul className="icons">
                <li ><i className="	fa fa-play-circle"> </i> {ele.otherInfo[0]}</li>
                <li><i className="	fa fa-hourglass-start" > </i> {ele.otherInfo[1]}</li>
                <li ><i className="fa fa-calendar" > </i>  {ele.otherInfo[2]}</li>
                <li className="HD"> {ele.otherInfo[3]}</li>
                <li className="epi" ><i className="fa fa-image"></i>  {ele.otherInfo[4].slice(0,1)}</li>
              </ul>
          <h4 className="desc">
              {ele.description.slice(0,500)+"..."}
            </h4>
            <div className="btn">
              <button className="WatchNow"><i className="	fa fa-play-circle"></i> Watch Now</button>
              <Link to={`/aniwatch/${ele.id}`} key = {ele.id} alt="">
              <button className="Details" s>Details <i className=" fa fa-forward"></i> </button>
              </Link>
            </div>
            <div className="btn-2" >
             <button onClick={Change}><i className=" fa fa-backward"></i></button>
             <button onClick={Change2}><i className=" fa fa-forward"></i></button>
            </div>
          </div>
          <div className="div-img">
              <img src={ele.poster} alt=""/>
          </div>

      </div>)
      })}
      </>
  );
}

export default TopAiringAnime;
