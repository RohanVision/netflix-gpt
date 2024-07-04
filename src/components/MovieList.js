import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-14 py-4'>
            <div div className='py-2 font-bold text-lg md:text-3xl text-white'>
                {title}
            </div >
            <div className='flex overflow-x-scroll scrollbar-webkit '>
                <div className='flex'>
                    {movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div >
    )
}

export default MovieList
