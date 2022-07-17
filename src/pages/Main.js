import axios from 'axios';
import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import './Main.css';

const Main = () => {

    const [loading, setLoading] = useState(true);
    const [movie,setMovie] = useState([]);


    // const APP_KEY = process.env.REACT_APP_KEY;

    // const url = `https://api.themoviedb.org/3/movie/550?api_key=${APP_KEY}`
    const url = `https://api.themoviedb.org/3/movie/550?api_key=9c93618c90ee9fcfe38f6994e743d164`

    const getMovie = async () => {
        try {
            const {data} = await axios.get(url);
            setMovie(data);
            console.log(data);
            setLoading(false);  
        } catch (error) {
            console.log(error);
        }
    } 
    
    useEffect(() => {
        getMovie()
    }, [])

    if(loading){
        return <h1>Loading...</h1>
      }
    

  return (
    <div className='mainDiv'>
        <section className='searchSection'>
            <form action="#">
                <input className='searchMovie' type="text" placeholder='Search a movie' />
            </form>
        </section>
        <div className='movieCardDiv'>
            <div className="filmCard">
                <MovieCard/>
            {/* {movie.map(() => {
                return (<MovieCard/>)
            })} */}
            </div>
        </div>
    </div>
  )
}

export default Main