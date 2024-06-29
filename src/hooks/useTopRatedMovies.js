
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    // fetch top rated movie API
    const getTopRatedMoies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTION);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results)) // this is an action
    };

    useEffect(() => {
        getTopRatedMoies()
    }, []);
}

export default useTopRatedMovies;