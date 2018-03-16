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
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err)) // catching errors
  //  console.log('3. did mount');
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie, index) =>{
      return <Movie title ={movie.title} poster = {movie.poster} key = {index}/>
    })
    return movies
  }

  _loading = () =>{
  return  <img src="http://i.giftrunk.com/44frgm.gif"  alt="Loading"/>
  }

  render() {
  //  console.log('2. did render');
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : this._loading()}
      </div>
    )
  }
}

export default App;
