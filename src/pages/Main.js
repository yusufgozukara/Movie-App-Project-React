import axios from 'axios';
import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import './Main.css';

const Main = () => {

    const [loading, setLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/discover/movie?api_key=9c93618c90ee9fcfe38f6994e743d164`);
    const [inputSearch, setInputSearch] = useState('');


    // const APP_KEY = process.env.REACT_APP_KEY;


    // const url = `https://api.themoviedb.org/3/discover/movie?api_key=9c93618c90ee9fcfe38f6994e743d164`




    const getMovie = async () => {
        try {
            const {data} = await axios.get(url);
            setMovie(data.results);
            // console.log(data);
            setLoading(false);  
        } catch (error) {
            console.log(error);
        }
    } 


    const handleSearch = (e) => {
        e.preventDefault();
        // setUrl(`https://api.themoviedb.org/3/search/movie?api_key=9c93618c90ee9fcfe38f6994e743d164&query=${inputSearch}`)
        getMovie();
    }

        
    useEffect(() => {
        getMovie()
    }, [])
    console.log(inputSearch);

    if(loading){
        return <h1>Loading...</h1>
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
            
                {/* <MovieCard/> */}
            {/* {console.log(movie)} */}
            {movie.map((mov) => {
                return (<MovieCard mov={mov} key={mov.id}/>)
            })}


            
        </div>
    </div>
  )
}

export default Main