import React from "react";

function Movie({ title, overview, poster_path, vote_average }) {
    return (
        <div className = "movie">
            <img src = {poster_path} alt = {title} title = {title} />
            <div className = "movie_data">
                <h3 className = "movie_title">{title}</h3>
                <span className="vote_average">{vote_average}</span>
            </div>
            <div class="inner-content">
                <span class="title">{title}</span>
                <br />
                <span class="overview">{overview.slice(0, 100)}...</span>
            </div>
        </div>
    );
}

export default Movie;