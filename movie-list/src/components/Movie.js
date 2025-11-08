import "./Movie.css";


function Movie({ movie }) {
    return (
        <section className="movie">
            <h3>{movie.name}</h3>
            <p>Director: {movie.director}</p>
            <p>Release Date: {movie.releaseDate}</p>
            <img src={`http://localhost:3001${movie.img}`} alt={movie.name} />
        </section>
    );
}

export default Movie;