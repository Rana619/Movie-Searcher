import React, {useState, useEffect } from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core'
import Axios from "axios";
import "./movieInfoComponent.css";
const API_KEY = 'bd96ff03';


function MovieInfoComponent(props) {

   const [movieInfok, setMovieInfok] = useState();
   const { selectedMovie,selectType } = props;

   console.log("selectType" + selectType)
   
   useEffect(()=>{
        Axios.get(`https://www.omdbapi.com/?${selectType}=${selectedMovie}&apikey=${API_KEY}`)
        .then((response)=> setMovieInfok(response.data));
   },[selectedMovie]);

    return (
        <div className="movieFullInfo" >
        {movieInfok?<>
            <img src={movieInfok?.Poster} />
            <div className="movieInfo" >
               <h3>Movie : {movieInfok?.Title}</h3>
               <span><span className="prName" >IMDB Rating</span> : <span className="prval" >{movieInfok?.imdbRating}</span></span>
               <span><span className="prName" >Year</span> : <span className="prval" >{movieInfok?.Year}</span></span>
               <span><span className="prName" >Language</span> : <span className="prval" >{movieInfok?.Language}</span></span>
               <span><span className="prName" >Rated</span> : <span className="prval" >{movieInfok?.Rated}</span></span>
               <span><span className="prName" >Released</span> : <span className="prval" >{movieInfok?.Released}</span></span>
               <span><span className="prName" >Runtime</span> : <span className="prval" >{movieInfok?.Runtime}</span></span>
               <span><span className="prName" >Genre</span> : <span className="prval" >{movieInfok?.Genre}</span></span>
               <span><span className="prName" >Director</span> : <span className="prval" >{movieInfok?.Director}</span></span>
               <span><span className="prName" >Cast</span> : <span className="prval" >{movieInfok?.Actors}</span></span>
               <span><span className="prName" >Plot</span> : <span className="prval" >{movieInfok?.Plot}</span></span>
            </div>
         <span className="offTab" onClick={()=>props.onMovieSelect()} >
         <IconButton>
             <ClearIcon />
         </IconButton>
         </span>
        </>:"Loading...."}
        </div>
    )
}

export default MovieInfoComponent;
