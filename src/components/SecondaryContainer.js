import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
        movies.nowPlayingMovies && (
            <div className='bg-black pt-40 md:pt-0'>
                <div className='mt-0 md:-mt-48 relative z-20 '>
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Popular"} movies={movies.popularMovies} />
                    <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                </div>
            </div>
        )
    )
}

export default SecondaryContainer
