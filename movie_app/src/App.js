import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
    greeting : 'hello',
    movies : [
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
  }

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() == true(if, different) -> componentWillUpdate() -> render() -> componentDidUpdate()

  componentWillMount(){
  //  console.log('1. will mount');
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies:[
          ...this.state.movies,
          {
            title: "Transformer",
            poster: "https://upload.wikimedia.org/wikipedia/ko/e/e4/%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg"
          }
        ]
      })
    },5000)
  //  console.log('3. did mount');
  }

  render() {
  //  console.log('2. did render');
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) =>{
          return <Movie title ={movie.title} poster = {movie.poster} key = {index}/>
        })}
      </div>
    )
  }
}

export default App;
