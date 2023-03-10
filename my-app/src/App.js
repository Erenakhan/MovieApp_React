import React from 'react'
import { useState,useEffect } from 'react'
import MovieChild from './Components/MovieChild';
import './App.css'

function App() {
    const [className,setClassName] =useState("bottomButtons")
    const handleMouseLeave =()=>{
      setClassName("bottomButtons")
    }
    const handleMouseEnter =()=>{
      setClassName("bottomButtonsE")
    }
    const api_key =" a2c8c59db02aa468f8e8abcb8b5b8a7b"
    const head =()=>{
      setPage(1)
    }
    const [page,setPage] =useState(1)
    const nextPage =(()=>{
      setPage(page+1)
    })
    const prevPage =(()=>{
     page===1 ? setPage(1) : setPage(page-1)
    })
    const [movies,setMovies] = useState();

    const [searchItems,setSearchItems] = useState();

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a2c8c59db02aa468f8e8abcb8b5b8a7b&page=${page}&include_adult=false&include`)
        .then(Response=>Response.json())
        .then(Response=>setMovies(Response.results
            ))
      },[page])
  return (
    <div className='movie-conteiner'>
      <header>
        <div onClick={head} className='header-div'>
        <h1 >MovieDB</h1>
        <img className='icon' src="https://cdn-icons-png.flaticon.com/512/1179/1179120.png" />
        </div>
          <input type="text" onChange={((e)=>setSearchItems(e.target.value))} />
      </header>

      <hr></hr>
          <div className='grid'>
            {movies.map((e,i)=>
              <MovieChild key={i} {...e} />)}
          </div>
          <div className='buttons'>
           <button className= { className}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
           onClick={prevPage}>Prev</button>
           <button className={ className} 
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
           onClick={nextPage}>Next</button>
          </div>
    </div>
  )
}

export default App