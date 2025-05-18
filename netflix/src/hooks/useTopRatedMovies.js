// import axios from "axios";
// import { getTopRatedMovie } from "../redux/movieSlice";
// import { Top_Rated_Movie, options } from "../utils/constant";
// import {useDispatch} from "react-redux";

// const useTopRatedMovies = async () => {
//     const dispatch = useDispatch();
//     try {
//         const res = await axios.get(Top_Rated_Movie, options);
//         dispatch(getTopRatedMovie(res.data.results));
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default useTopRatedMovies;

// src/hooks/useTopRatedMovies.js
import { useDispatch } from "react-redux";
import axios from "axios";
import { getTopRatedMovie } from "../redux/movieSlice";
import { Top_Rated_Movie, options } from "../utils/constant";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }
};

export default useTopRatedMovies;

// import axios from "axios";
// import { getTopRatedMovie } from "../redux/movieSlice";
// import { Top_Rated_Movie, options } from "../utils/constant";
// import { useDispatch } from "react-redux";

// const useTopRatedMovies = () => {
//     const dispatch = useDispatch();

//     const fetchTopRatedMovies = async () => {
//         try {
//             const res = await axios.get(Top_Rated_Movie, options);
//             dispatch(getTopRatedMovie(res.data.results));
//         } catch (error) {
//             console.error("Error fetching top-rated movies:", error);
//         }
//     };

//     return { fetchTopRatedMovies };
// };

// export default useTopRatedMovies;
