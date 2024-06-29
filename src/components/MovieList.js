import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies)
    return (
        <div className='px-14 py-4'>
            <div div className='py-2 font-bold text-3xl text-white'>
                {title}
            </div >
            <div className='flex overflow-x-scroll scrollbar-thumb-gray-700 scrollbar-track-gray-100'>
                <div className='flex'>
                    {movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div >
    )
}

export default MovieList
