import React from 'react'
import './MovieCard.css';

const MovieCard = ({mov}) => {
    // console.log(mov);
    const {poster_path, title, overview, id} = mov;

    const imgBaseUrl = `https://image.tmdb.org/t/p/original${poster_path}`

  return (
    <div className='movieCard' key={id}>
        <img src={imgBaseUrl} alt="klklkl" />
        <div className='miniCardTitle'>{title}</div>
        <div className="overview">
            <h3>Overview</h3>
            <p>{overview}</p>
        </div>

    </div>
  )
}

export default MovieCard