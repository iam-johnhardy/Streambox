import React from 'react'
import {Link} from 'react-router-dom'

function MovieList() {
  return (
    <div>
        <ul className='flex items-center gap-7 overflow-x-auto scrollbar-none px-3'>
            <li><Link to='./latest' className='cabin-sketch-bold '>Latest</Link></li>
            <li><Link to='./latest' className='cabin-sketch-bold'>Action</Link></li>
            <li><Link to='./latest' className='cabin-sketch-bold'>Family</Link></li>
            <li><Link to='./latest' className='cabin-sketch-bold'>Fantasy</Link></li>
                <li><Link to='./latest' className='cabin-sketch-bold'>Classics</Link></li>
                <li><Link to='./latest' className='cabin-sketch-bold'>Crime</Link></li>
            <li><Link to='./latest' className='cabin-sketch-bold'>Thriller</Link></li>
            <li><Link to='./latest' className='cabin-sketch-bold'>Comedy</Link></li>
            <li><Link to='./latest' className='cabin-sketch-bold'>Wildlife</Link></li>
        </ul>
    </div>
  )
}

export default MovieList
