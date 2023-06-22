import React from "react";

const MovieCard = ({ movie }) => {
    const url1 = "https://www.imdb.com/title/"+movie.imdbID;
    
    return(
        <div className="movie">
        <a href={url1} target="_blank" rel="noreferrer">
            <div>
                <p>"Release Year: " + {movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N.A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </a>
        </div>
    );
}

export default MovieCard;
