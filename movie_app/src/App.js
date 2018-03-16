import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
  }

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() == true(if, different) -> componentWillUpdate() -> render() -> componentDidUpdate()

  componentWillMount(){
  //  console.log('1. will mount');
  }

  componentDidMount(){
    this._getMovies();
  //  console.log('3. did mount');
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie) =>{
      return <Movie title ={movie.title_english}
                    poster = {movie.medium_cover_image}
                    genres = {movie.genres}
                    rating = {movie.rating}
                    synopsis = {movie.synopsis}
                    key = {movie.id}/>
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = ()  => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err)) // catching errors
  }

  _loading = () =>{
  return  <img src="http://i.giftrunk.com/44frgm.gif"  alt="Loading"/>
  }

  render() {
  //  console.log('2. did render');
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : this._loading()}
      </div>
    )
  }
}

export default App;
