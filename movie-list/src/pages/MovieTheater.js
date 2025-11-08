import Movie from "../components/Movie";
import silence from '../images/silence of the lambs.jpg';
import shining from '../images/theShining.jpg';
import parasite from '../images/parasite.jpg';
// import insidious from '../images/insidious.png';
import orphan from '../images/orphan.jpg';
import React, { useState, useEffect } from "react";
import axios from "axios"


const MovieTheater = () => {
    const [moviePlans, setMoviePlans] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/api/movies"
                );
                console.log("fetched movies: ", response.data);
                setMoviePlans(response.data);
            } catch (error) {
                console.error("error fetching data:", error);
            }
        })();
        // setMoviePlans (["movie 1", "movie 2", "movie 3"]);
    }, []);
    console.log("MovieTheater rendered, movies:", moviePlans);
    return (
        <div>
            {moviePlans.map((moviePlans) => (
                <Movie
                    key={moviePlans.id}
                    movie={moviePlans}
                    // name={moviePlans.name}
                    // img={moviePlans.image}
                    // director={moviePlans.director}
                    // release={moviePlans.releaseDate} 
                />
            ))}
            {/* {moviePlans.length === 0 ? (
                <p>Loading movies...</p>
            ) : (
                moviePlans.map((m, i) => (
                    <Movie key={i} name={m} />
                ))
            )} */}
        </div>
    );
};

export default MovieTheater;