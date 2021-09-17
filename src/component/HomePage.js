import React, {useEffect, useState} from 'react'
import Axios from "axios";
import "./HomePage.css";
import MovieRow from './MovieRow';

const base_url = "https://image.tmdb.org/t/p/original/"

const randomIndex = Math.floor(Math.random() * 10) + 1;

function HomePage(props) {

  const {onMovieSelect, setSelectType} = props;

  console.log(props)

     const [trending, setTrending] = useState([]);
     const [netflix, setNetflix] = useState([]);
     const [topRated, setTopRated] = useState([]);
     const [action, setAction] = useState([]);
    //  const [comedy, setComedy] = useState([]);
    //  const [horror, setHorror] = useState([]);
    //  const [romance, setRomance] = useState([]);
    //  const [documentaries, setDocumentaries] = useState([]);


    //  useEffect(()=>{
    //   Axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=97eb23fcd82e71c43d7cea68617196a7`)
    //   .then((response)=>{
    //     setTrending(response.data.results[Math.floor(Math.random() * response.data.results.length -1)]);
    //   });
    //  },[]);
    
     useEffect(()=>{
      Axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=97eb23fcd82e71c43d7cea68617196a7`)
      .then((response)=>{
        setTrending(response.data.results);
      });
     },[]);

     useEffect(()=>{
      Axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=97eb23fcd82e71c43d7cea68617196a7&with_networks=213`)
      .then((response)=>{
        setNetflix(response.data.results);
      });
     },[]);

     useEffect(()=>{
      Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=97eb23fcd82e71c43d7cea68617196a7&language=en-US`)
      .then((response)=>{
        setTopRated(response.data.results);
      });
     },[]);

       useEffect(()=>{
        Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=97eb23fcd82e71c43d7cea68617196a7&with_gentes=28`)
        .then((response)=>{
          setAction(response.data.results);
        });
       },[]);





      //  useEffect(()=>{
      //   Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=97eb23fcd82e71c43d7cea68617196a7&with_gentes=35`)
      //   .then((response)=>{
      //     setComedy(response.data.results);
      //   });
      //  },[]);

      //  useEffect(()=>{
      //   Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=97eb23fcd82e71c43d7cea68617196a7&with_gentes=27`)
      //   .then((response)=>{
      //     setHorror(response.data.results);
      //   });
      //  },[]);

      //  useEffect(()=>{
      //   Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=97eb23fcd82e71c43d7cea68617196a7&with_gentes=10749`)
      //   .then((response)=>{
      //     setRomance(response.data.results);
      //   });
      //  },[]);

      //  useEffect(()=>{
      //   Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=97eb23fcd82e71c43d7cea68617196a7&with_gentes=99`)
      //   .then((response)=>{
      //     setDocumentaries(response.data.results);
      //   });
      //  },[]);

       console.log(trending);

    return (
        <div>

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={`${base_url}${trending[randomIndex + 0]?.backdrop_path}`} alt="..." />
      <div class="carousel-caption ">
        <h5>{ trending[randomIndex + 0]?.title || trending[randomIndex + 0]?.name || trending[randomIndex + 0]?.original_name }</h5>
        <p>{trending[randomIndex + 0]?.overview}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={`${base_url}${trending[randomIndex + 1]?.backdrop_path}`}  alt="..." />
      <div class="carousel-caption ">
        <h5>{ trending[randomIndex + 1]?.title || trending[randomIndex + 1]?.name || trending[randomIndex + 1]?.original_name }</h5>
        <p>{trending[randomIndex + 1]?.overview}</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src={`${base_url}${trending[randomIndex + 2]?.backdrop_path}`}  alt="..." />
      <div class="carousel-caption ">
        <h5>{ trending[randomIndex + 2]?.title || trending[randomIndex + 2]?.name || trending[randomIndex + 2]?.original_name }</h5>
        <p>{trending[randomIndex + 2]?.overview}</p>
      </div>
    </div> 

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


   <h3 className="movieCatagroy" >Netflix</h3>
  <div className="poster_row" >
  { netflix?.length ? netflix.map((movie, index)=>(<MovieRow key={index} movie={movie} onMovieSelect = {onMovieSelect} setSelectType = {setSelectType}  />)) : <p>Loading...</p> }
  </div>

   <h3 className="movieCatagroy" >Top Rated Movies</h3>
  <div className="poster_row" >
  { topRated?.length ? topRated.map((movie, index)=>(<MovieRow key={index} movie={movie} onMovieSelect = {onMovieSelect} setSelectType = {setSelectType} />)) : <p>Loading...</p> }
  </div>

   <h3 className="movieCatagroy" >Action Movies</h3>
  <div className="poster_row" >
  { action?.length ? action.map((movie, index)=>(<MovieRow key={index} movie={movie} onMovieSelect = {onMovieSelect} setSelectType = {setSelectType} />)) : <p>Loading...</p> }
  </div>


   {/* <h3 className="movieCatagroy" >Comedy Movies</h3>
  <div className="poster_row" >
  { comedy?.length ? comedy.map((movie, index)=>(<MovieRow key={index} movie={movie}  />)) : <p>Loading...</p> }
  </div>
   <h3 className="movieCatagroy" >Horror Movies</h3>
  <div className="poster_row" >
  { horror?.length ? horror.map((movie, index)=>(<MovieRow key={index} movie={movie}  />)) : <p>Loading...</p> }
  </div>
   <h3 className="movieCatagroy" >Romance Movies</h3>
  <div className="poster_row" >
  { romance?.length ? romance.map((movie, index)=>(<MovieRow key={index} movie={movie}  />)) : <p>Loading...</p> }
  </div>
   <h3 className="movieCatagroy" >Documentaries</h3>
  <div className="poster_row" >
  { documentaries?.length ? documentaries.map((movie, index)=>(<MovieRow key={index} movie={movie}  />)) : <p>Loading...</p> }
  </div> */}




        </div>
    )
}

export default HomePage
