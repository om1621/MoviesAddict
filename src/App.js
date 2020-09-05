import React from 'react';
import Header from './components/Header'
import Homepage from './components/Homepage'
import Options from './components/options'
import Movie from './components/Movie'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    id: [],
    movId: ''
  }

  getId = (id) => {
    this.setState({
      movId: id
    })
  }

  getCrieteria = (crieteria) => {

    if(crieteria.crieteriaType === "Name")
    {
      let id = [];
      axios.get('https://api.themoviedb.org/3/search/movie?query='+ crieteria.searchValue +'&api_key=cfe422613b250f702980a3bbf9e90716')
      .then(res => {
        res.data.results.map((movie) => {
          id.push(movie.id);
          return movie.id;
        });
        this.setState({
          id
        })
      });
    }
    else if(crieteria.crieteriaType === "Genre")
    {
        let genreId;
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=cfe422613b250f702980a3bbf9e90716&language=en-US')
        .then(res => {
          res.data.genres.map((genre) => {
            if(crieteria.genreValue === genre.name)
            {
              genreId = genre.id;
            }
           return genre.id
          });
          let id = [];
          axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3af54e3536d0791aa80b3ca05af373bb&with_genres=' + genreId)
          .then(res => {
            res.data.results.map((movie) => {
              id.push(movie.id);
              return movie.id;
            });
            this.setState({
              id
            })
          });
        });

      
        
    }

    
   
  }

  render() {
    return (
      <Router>
      <div>
        

        <Route exact path='/' render = {props => (
          <React.Fragment>
          <Header />
          <Homepage getCrieteria={this.getCrieteria} />
          </React.Fragment>
        )} />

        <Route path='/options' render = {props => (
          <React.Fragment>
          <Header />
          <Options ids={this.state.id} getId={this.getId}/>
          </React.Fragment>
        )} />

        <Route path='/movie' render = {props => (
          <React.Fragment>
            <Movie id={this.state.movId}/>
          </React.Fragment>
        )} />

      </div>
      </Router>
     
    );
  } 
    
  
}

export default App;
