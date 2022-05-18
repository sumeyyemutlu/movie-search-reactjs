import React,{useState, useEffect} from "react";
import './App.css';
import Movie from "./components/Movie";


const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



function App() {

const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState("")

useEffect(() => {
  fetch(FEATURED_API)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setMovies(data.results)
  })
}, [])

const handleOnChange = (e) => {
  setSearchTerm(e.target.value)
}
const handleOnSubmit = (e) => {
  e.preventDefault()

  fetch(SEARCH_API + searchTerm)
  .then(res => res.json())
  .then(data => {
    setMovies(data.results)
  })
}

  return (
    <>
    <header>
      <h2>Movie Search</h2>
      <form onSubmit={handleOnSubmit}>
        <input type="search" className="search" placeholder="Search" onChange={handleOnChange} value={searchTerm} />
      </form>
    </header>
    <div className="movie-container">
      {movies.length> 0 && movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
    </>
  );
}

export default App;
