import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({title, poster, genres, rating, synopsis}){
  return(
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre,index) => <MovieGenres genre={genre} key={index}/>)}
        </div>
        <div className="Movie__Rating">
          {rating}
        </div>
        <p className="Movie__Synopsis">
        <LinesEllipsis
          text={synopsis}
          maxLine='3'
          ellipsis=' ...'
          trimRight
          basedOn='letters'
        />
        </p>
      </div>
    </div>
  )
}

// Functional(Dumb) Component that has no state
function MoviePoster({poster, alt}){
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
  )
}

function MovieGenres({genre}){
  return (
    <span className="Movie__Genres">{genre} </span>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres :  PropTypes.array.isRequired,
  rating :  PropTypes.number.isRequired,
  synopsis :  PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenres.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie
