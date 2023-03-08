import {Modal,show,Button} from 'react-bootstrap'
import '../App.css'
import React, { useState } from 'react'

function MovieChild({title,poster_path,vote_average,overview,release_date}) {
    const img ="https://image.tmdb.org/t/p/w500"
    const [show,setShow] =useState(false)
    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)
  
  return (
    <>
  <div className="card ">
        <div className="card-body">
          <img className="card-img-top" src={img+poster_path} />
         <button type='button'onClick={handleShow} className="button">
            View more
          </button> 
          <div className="card-body">
          
          <Modal  className='modal' show={show} onHide={handleClose}>

            <Modal.Header >
              <Modal.Title> 
                  <button  className='button1' 
                  onClick={handleClose}>
                  X
                  </button> 
              </Modal.Title>  
            </Modal.Header>

            <Modal.Body>
                <img className="card-img-top"  src={img+poster_path} />
                <h3>{title}</h3>
                <h4>Imdb:{vote_average}</h4>
                <h4>Release Date: {release_date}</h4>
                <h4>Overview</h4>
                <p>{overview}</p>
            </Modal.Body>

            </Modal>
          </div>
          </div>
        </div>
        </>
  )
}

export default MovieChild;