import React from 'react'
import MovieCard from '../components/MovieCard';
import './Main.css';

const Main = () => {


    const url = `https://api.themoviedb.org/3/movie/550?api_key=9c93618c90ee9fcfe38f6994e743d164`

    // const getMovie = async () => {
    //     const {data} = await axio
    // } 

  return (
    <div className='mainDiv'>
        <section className='searchSection'>
            <form action="#">
                <input className='searchMovie' type="text" placeholder='Search a movie' />
            </form>
        </section>
        <div className='movieCardDiv'>
            <MovieCard/>
        </div>
    </div>
  )
}

export default Main