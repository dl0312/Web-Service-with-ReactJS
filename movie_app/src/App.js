import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title:"Matrix",
    poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg"
  },
  {
    title:"Full Metal Jacket",
    poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,656,1000_AL_.jpg"

  },
  {
    title:"Oldboy",
    poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg",
  },
  {
    title:"Star Wars",
    poster:"https://blog.rebelpilgrim.com/wp-content/uploads/2017/10/7773769005_star-wars.jpg"
  }
]

class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() == true(if, different) -> componentWillUpdate() -> render() -> componentDidUpdate()

  componentWillMount(){
  //  console.log('1. will mount');
  }

  componentDidMount(){
  //  console.log('3. did mount');
  }

  render() {
  //  console.log('2. did render');
    return (
      <div className="App">
        {movies.map((movie, index) =>{
          return <Movie title ={movie.title} poster = {movie.poster} key = {index}/>
        })}
      </div>
    )
  }
}

export default App;
