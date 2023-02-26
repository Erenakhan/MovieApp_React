import React from 'react'
import { useState,useEffect } from 'react'
import MovieChild from './Components/MovieChild';
import './App.css'

function App() {
    const api_key =" a2c8c59db02aa468f8e8abcb8b5b8a7b"

    const [page,setPage] =useState(1)
    
    const nextPage =(()=>{
      setPage(page+1)
    })
    const prevPage =(()=>{
     page===1 ? setPage(1) : setPage(page-1)
    })

 
    console.log(page)
    const [movies,setMovies] = useState();
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a2c8c59db02aa468f8e8abcb8b5b8a7b&page=${page}&include_adult=false&include`)
        .then(Response=>Response.json())
        .then(Response=>setMovies(Response.results
            ))
      },[page])
      console.log(movies)
  return (
    <div className='movie-conteiner'>
     
          <div className='grid'>
            {movies.map((e,i)=>
              <MovieChild key={i} {...e} />)}
          </div>
          <div className='buttons'>
           <button  onClick={prevPage}>Prev</button>
           <button  onClick={nextPage}>Next</button>
          </div>
    </div>
  )
}

export default App