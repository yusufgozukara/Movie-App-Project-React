import React from 'react'
import './MovieCard.css';
// import notfound from '../assets/notfound.jpg';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({mov}) => {
    const navigate = useNavigate();
    const {poster_path, title, overview, id} = mov;

    const imgBaseUrl = `https://image.tmdb.org/t/p/original${poster_path}`

  return (
    // <div className='movieCard' key={id} onClick={() => {user ? navigate(`${id}`, {state:mov}) : alert('Giriş yapınız')} }>
    // <div className='movieCard' key={id} onClick={() => {user ? navigate(`${id}`, {state:mov}) : alert('Giriş yapınız')} }>
    <div className='movieCard' key={id} onClick={() => {navigate(`${id}`, {state:mov})} }>
        <button ><img src={imgBaseUrl}/></button>
        
        <div className='miniCardTitle'>{title}</div>
        <div className="overview">
            <h3>Overview</h3>
            <p>{overview}</p>
        </div>

    </div>
  )
}

export default MovieCard