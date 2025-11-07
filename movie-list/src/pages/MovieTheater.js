import Movie from "../components/Movie";
import silence from '../images/silence of the lambs.jpg';
import shining from '../images/theShining.jpg';
import parasite from '../images/parasite.jpg';
// import insidious from '../images/insidious.png';
import orphan from '../images/orphan.jpg';
import React, {useState, useEffect} from "react";


const MovieTheater = () => {
    const [moviePlans, setMoviePlans] = useState([]);
    useEffect(() => {
        setMoviePlans = ["movie 1", "movie 2", "movie 3"];
    }, []);
    
    return (
        <div>
           <h2>Movie List</h2>
           {moviePlans.map((moviePlans)=>{
               return <Movie name="Sinister"/>
           })}
        </div>
    )
}

export default MovieTheater;