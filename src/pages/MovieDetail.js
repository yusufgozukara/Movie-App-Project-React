
import {useNavigate, useParams} from 'react-router-dom';

import axios from 'axios';
import React, { useState, useEffect } from 'react'
import spin from '../assets/indir.gif';
import './MovieDetails.css';

const MovieDetail = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const detailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=9c93618c90ee9fcfe38f6994e743d164`
    // console.log(detailUrl);


    const frameUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=9c93618c90ee9fcfe38f6994e743d164`
//************************** */
    const [loading, setLoading] = useState(true);
    const [tekmovie,setTekmovie] = useState([]);
    const [frame,setFrame] = useState([]);
    // const [detailUrl, setDetailUrl] = useState(`https://api.themoviedb.org/3/movie/${id}?api_key=9c93618c90ee9fcfe38f6994e743d164`);



    

    const getMovie = async () => {
        try {
            const {data} = await axios.get(detailUrl);

            setTekmovie(data);
            console.log(data);
            // setLoading(false);  
        } catch (error) {
            console.log(error);
        }
    } 

    const getFrame = async () => {
        try {
            const {data} = await axios.get(frameUrl);

            setFrame(data.results);
            console.log(data.results);
            // setLoading(false);  
        } catch (error) {
            console.log(error);
        }
    } 
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1200);
        getMovie()
        getFrame()
    }, [])
    // console.log(id);
    // console.log(tekmovie);

    if(loading){
        return <div className='loadingImage'><img src={spin} alt="Loading" /></div> 
      }
//************************************************ */
const imgBaseUrl = `https://image.tmdb.org/t/p/original${tekmovie.poster_path}`
  return (
    <div className='MovieDetailContainer'>
        <h2>{tekmovie.title}</h2>
        {frame && <div className='frame'>
            
            <iframe src={`https://www.youtube.com/embed/${frame[0].key}`} title={frame[0].name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div> }
        
        <div className="overviewContainer">

            <div className='detailImgDiv'>

                <img src={imgBaseUrl} alt="imeyç gelecek" />
            </div>
            <div className='detailRight'>
                <div>

                <h3>Overview</h3>
                <p>{tekmovie.overview}</p>
                </div>
                <div className='detailRightBottom'>

                <p>Release Date : {tekmovie.release_date}</p>
                <p>Rate : {tekmovie.vote_average}</p>
                <p>Total Vote : {tekmovie.vote_count}</p>
                
                <button onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MovieDetail