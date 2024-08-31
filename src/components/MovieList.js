import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className="px-6 md:px-14 py-8">
            <div className="py-2 font-extrabold text-xl md:text-3xl text-white mb-4">
                {title}
            </div>
            <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent">
                <div className="flex space-x-4">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default MovieList
