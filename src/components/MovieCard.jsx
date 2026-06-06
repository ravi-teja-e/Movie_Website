import React from 'react'
import './styles/MovieCard.css'
const MovieCard = ({movie,openModel}) => {
  return (
    <div className='movie-card' key={movie.id} onClick={()=>openModel(movie)}>
            <img src={movie.poster} 
                  alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Rating : {movie.rating}</p>
    </div>
  )
}

export default MovieCard