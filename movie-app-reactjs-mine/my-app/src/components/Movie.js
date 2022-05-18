import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const setVoteClass = (vote) => {
    if(vote >= 8) {
        return "green"
    }
    else if (vote >= 6) {
        return "orange"
    }
    else{
        return "red"
    }
}

const Movie = ({poster_path, title, vote_average, overview}) => {
  return (
    <div className='movie'>
        <img src={poster_path ? IMG_API + poster_path: "https://picsum.photos/200/300"} alt={title} />
        <div className='movie-info'>
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>
        <div className='movie-over'>
            <h3>Overview:</h3>
            <p>{overview}</p>
        </div>
    </div>
  )
}

export default Movie