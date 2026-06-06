import React,{useState,useEffect} from 'react'
import "./App.css"
import mockMovies from "./data/mockMovies.js"
import MovieCard from "./components/MovieCard.jsx"
import MovieModel from "./components/MovieModel.jsx"
import Header from './components/Header.jsx'
const MOVIES_INITIAL =20;
const MOVIES_PER_LOAD =10;
const App = () => {
  const [movies,setMovies] = useState([]);
  const [visibleCount,setVisibleCount] = useState(MOVIES_INITIAL);
  const [modelMovie,setModelMovie] = useState(null);
  const [searchterm,setSearchTerm] = useState("");
  const [sortYear,setSortYear] = useState(null);
  const [darkMode,setDarkMode] = useState(false);
  console.log(darkMode);
  useEffect(()=>{
    setMovies(mockMovies);
  },[]);
  const handleMoreMovies = () => {
    setVisibleCount(visibleCount+MOVIES_PER_LOAD);
  }
  
  const filterMovies = movies.filter((movie)=>{
   return movie.title.toLowerCase().includes(searchterm.toLowerCase())
  });

  if(sortYear === "asc"){
    filterMovies.sort((a,b)=> a.year-b.year);
  }
  else if(sortYear === "desc"){
    filterMovies.sort((a,b)=> b.year-a.year);
  }
  

 
  const displaymovies = filterMovies.slice(0,visibleCount);

  return (
    <div className={darkMode? "App dark": "App"}>

      <Header searchterm={searchterm} 
        setSearchTerm={setSearchTerm} 
        sortYear={sortYear}
        setSortYear={setSortYear}
        darkMode ={darkMode}
        setDarkMode = {setDarkMode}
      />

      <div className='movie-list'>
        {
          displaymovies.map((movie)=> (
            <MovieCard key={movie.id} movie={movie} openModel={setModelMovie}/>
          ))
        }
       
      </div>
      
        {
            visibleCount < movies.length &&
            (<div className='load-more-container'>
              <button className='load-more-btn' onClick={handleMoreMovies}>Show More</button>
            </div>)
        }
        {
          modelMovie && (
            <MovieModel movie={modelMovie} closeModel={()=>setModelMovie(null)} />
          )
        }
        

      
    </div>
  )
}

export default App