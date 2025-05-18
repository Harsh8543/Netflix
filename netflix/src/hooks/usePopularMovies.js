// import axios from "axios";
// import { Popular_Movie, options } from '../utils/constant';
// import { getPopularMovie } from '../redux/movieSlice';
// import {useDispatch} from "react-redux";


// const usePopularMovies = async () => {
//     const dispatch = useDispatch();
//     try {
//         const res = await axios.get(Popular_Movie, options);
//         dispatch(getPopularMovie(res.data.results))
//     } catch (error) {
//         console.log(error);
//     }
// }

// export default usePopularMovies


import axios from "axios";
import { Popular_Movie, options } from '../utils/constant';
import { getPopularMovie } from '../redux/movieSlice';
import { useDispatch } from "react-redux";

// Custom Hook for fetching popular movies
const usePopularMovies = () => {
    const dispatch = useDispatch();

    // Function to fetch popular movies
    const fetchPopularMovies = async () => {
        try {
            const res = await axios.get(Popular_Movie, options);
            dispatch(getPopularMovie(res.data.results));
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    // Return the fetch function for use in components
    return { fetchPopularMovies };
};

export default usePopularMovies;
