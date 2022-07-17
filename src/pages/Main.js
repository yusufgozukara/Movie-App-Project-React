import React from 'react'
import './Main.css';

const Main = () => {
  return (
    <div className='mainDiv'>
        <section className='searchSection'>
            <form action="#">
                <input className='searchMovie' type="text" placeholder='Search a movie' />
            </form>
        </section>
        
    </div>
  )
}

export default Main