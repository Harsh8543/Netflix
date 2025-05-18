// import axios from "axios";
// import { getNowPlayingMovies } from "../redux/movieSlice";
// import { Now_Playing_Movie, options } from "../utils/constant";
// import {useDispatch} from "react-redux";

// const useNowPlayingMovies = async () => {
//     const dispatch = useDispatch();
//     try {
//         const res = await axios.get(Now_Playing_Movie, options);
//         dispatch(getNowPlayingMovies(res.data.results));
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default useNowPlayingMovies;


import axios from "axios";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { Now_Playing_Movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";

// Custom Hook for fetching now playing movies
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    // Fetch Now Playing Movies
    const fetchNowPlayingMovies = async () => {
        try {
            const res = await axios.get(Now_Playing_Movie, options);
            dispatch(getNowPlayingMovies(res.data.results));
        } catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    };

    // Return the fetch function for use in components
    return { fetchNowPlayingMovies };
};

export default useNowPlayingMovies;
