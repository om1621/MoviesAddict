import React from 'react';
import Header from './components/Header'
import Homepage from './components/Homepage'
import Options from './components/options'
import Movie from './components/Movie'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';

export const App = () => {
  return (
    <>
       <Router>
  
          <Route exact path='/' render = {props => (
            <>
              <Header />
              <Homepage />
            </>
          )} />

          <Route path='/options' render = {props => (
            <>
              <Header />
              <Options />
            </>
          )} />

          <Route path='/movie' render = {props => (
            <>
              <Movie />
            </>
          )} />

      </Router>

    </>
  )
}


export default App;
