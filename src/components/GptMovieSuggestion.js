import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
    const { movieResults, movieNames } = useSelector(store => store.gpt);
    // const { movieResults, movieNames } = gpt; - either above one line or create new const

    if (!movieNames) return null;

    return (
        <div className="p-6 m-4 bg-black bg-opacity-90 text-white rounded-lg shadow-lg">
            <div className="space-y-6">
                {movieNames.map((movieName, index) => (
                    <MovieList
                        className="hover:shadow-xl transition-shadow duration-300"
                        key={movieName}
                        title={movieName}
                        movies={movieResults[index]}
                    />
                ))}
            </div>
        </div>

    )
}

export default GptMovieSuggestion
