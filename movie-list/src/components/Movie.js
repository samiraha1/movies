import "./Movie.css";


function Movie(movie) {
    return (
        <section className="movie">
            <h3>{movie.name}</h3>
        </section>
    )
}

export default Movie;