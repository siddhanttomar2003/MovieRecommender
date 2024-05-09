
import './App.css'
import {useState, useEffect } from 'react'
import SearchIcon from './search.svg'
import MovieCard  from './MovieCard'

const Api_Url='http://www.omdbapi.com/?i=tt3896198&apikey=6fdb55ae'
const movie1={
  
    "Title": "Spiderman in Cannes",
    "Year": "2016",
    "imdbID": "tt5978586",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"

}
function App() {
  const [movies,setMovies]=useState([]);
  const [searchTerm, setsearchTerm]=useState('Sid')
  const searchMovies =async(title) => {
    const response = await fetch(`${Api_Url}&s=${title}`)
    const data=await response.json();
    setMovies(data.Search);
  }
 useEffect(()=>{
searchMovies('Spiderman');
 },[])
  return (
   <div className="app">
    <h1>Movie Land</h1>
    <div className="search">
      <input type="text" placeholder="Search for movies" value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} />
      <img src={SearchIcon} onClick={()=>searchMovies(searchTerm)}></img>
    </div>
      {
        movies?.length >0 ? (
          <div className="container">
          {movies.map((movie)=>(
            <MovieCard movie={movie}/>
          ))}
        </div>
        ) : (
          <div className='empty'>
            <h2>No movies Found</h2>
          </div>
        )
      }
   </div>
  )
}

export default App
