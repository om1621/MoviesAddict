import React from 'react';
import Header from './components/Header'
import Homepage from './components/Homepage'
import Options from './components/options'
import Movie from './components/Movie'
import './App.css';
import store from './store/index'

const App = () => {

  switch(store.getState().page){
    case 1:
      return (
        <>
          <Header />
          <Homepage />
        </>
      );

      case 2:
      return (
        <>
        <Header />
        <Options />
        </>
      );

      case 3:
      return (
        <>
         <Movie />
        </>
      );

      default:
        return(
          <>
          <Header />
          <Homepage />
          </>
        );

    
  }
}

export default App
