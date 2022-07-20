import axios from 'axios';
import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import './Main.css';
import spin from '../assets/indir.gif';

const Main = () => {


    
    const APP_KEY = process.env.REACT_APP_APP_KEY;
    const [loading, setLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}`);
    const [inputSearch, setInputSearch] = useState('');

    const getMovie = async () => {
        try {
            const {data} = await axios.get(url);
            setMovie(data.results);

 
        } catch (error) {
            console.log(error);
        }
    } 

    const handleSearch = (e) => {
        e.preventDefault();
        getMovie();
    }
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
        getMovie()
    }, [])


    if(loading){
        return <div className='loadingImage'><img src={spin} alt="Loading" /></div> 
      }
    

  return (
    <div className='mainDiv'>
        <section className='searchSection'>
            <form action="#" onSubmit={handleSearch}>
                <input className='searchMovie' type="text" placeholder='Search a movie' onChange={(e)=> {
                    
                    setInputSearch(e.target.value)
                    setUrl(`https://api.themoviedb.org/3/search/movie?api_key=9c93618c90ee9fcfe38f6994e743d164&query=${inputSearch}`)
                    }} value={inputSearch}/>
                <button>Search</button>
            </form>
        </section>
        <div className='movieCardDiv'>
            {movie.map((mov) => {
                return (<MovieCard mov={mov} key={mov.id}/>)
            })}


            
        </div>
    </div>
  )
}

export default Main