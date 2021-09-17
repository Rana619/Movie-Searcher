import React, {useState} from "react";
import Axios from "axios";
import './App.css';
import SearchIcon from '@material-ui/icons/Search';
import MovieComponent from './component/MovieComponent';
import MovieInfoComponent from './component/MovieInfoComponent';
import HomePage from "./component/HomePage";
const API_KEY = 'bd96ff03';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function App() {

const [searchQuery, updateSearchQuery] = useState()
const [timeOutId, updateTimeoutId] = useState();
const [movieList, updateMovieList] = useState([]);
const [selectedMovie, onMovieSelect] = useState();
const [selectType, setSelectType] = useState();

const fetchData = async (MOVIE_NAME)=>{
 const response = await Axios.get(`https://www.omdbapi.com/?s=${MOVIE_NAME}&apikey=${API_KEY}`);
//  console.log(response.data.Search);
 updateMovieList(response.data.Search)
}

function onTextChange(event){
  clearTimeout(timeOutId);
  updateSearchQuery(event.target.value);
  const timeout = setTimeout(()=> fetchData(event.target.value), 500);
  updateTimeoutId(timeout);
}

console.log( "movie id" + selectedMovie)
console.log("selectType" + selectType) 

  return (
    <div className="App">
        <div className="header" >
          <div className="title" >
           <img src="\img\movie logo.png" />
           Movie Searcher
           </div>
          <div className="searchBox" >
            <input 
            placeholder="Search Movie" 
            onChange={onTextChange}
            value={searchQuery}
            />
               <SearchIcon />
          </div>
        </div>
        {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} selectType={selectType} onMovieSelect={onMovieSelect} />}
        <div className="movieListCont" >
        { movieList?.length ? movieList.map((movie, index)=>(<MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect} setSelectType={setSelectType} />)) : <HomePage onMovieSelect={onMovieSelect} setSelectType={setSelectType} /> }
        </div>
     <div className="footer" >
        <p>Privacy Policy <span>|</span> Privacy & Security <span>|</span>  Movie Searchershares,inc. <span>|</span> Member FDIC. Equal Housing Lender </p>
        <p>© {currentYear}  Movie Searcher. All rights reserved</p>
     </div>
    </div>
  );
}

export default App;
