import React from 'react'
import "./MovieRow.css"

const base_url = "https://image.tmdb.org/t/p/original/"

function MovieRow(props) {
    const { movie,onMovieSelect, setSelectType } = props;

    function getClicked(movieName){
        onMovieSelect(movieName);
        setSelectType('t');
    }

    return (
        <a className="poster" onClick={()=>getClicked(movie.original_title || movie.title || movie.name )} href="#" >
            <img src={`${base_url}${movie.poster_path}`} />
        </a>
    )
}

export default MovieRow
