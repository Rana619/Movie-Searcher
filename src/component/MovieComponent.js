import React from 'react'
import "./MovieComponent.css";
function MovieComponent(props) {

    const {movie} = props;

    return ( 
        <a className="movieCont" onClick={()=>{ 
            props.onMovieSelect(movie.imdbID) 
            props.setSelectType('i')} } href="#" >

            <img src={movie.Poster} />
             <span className="movieName" >{movie.Title}</span>
             <div className="shortInfo" >
                 <span>Year : {movie.Year}</span>
                 <span>Type : {movie.Type}</span>
             </div>
        </a>
    ) 
}

export default MovieComponent
