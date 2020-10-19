import React from 'react';
import axios from 'axios';
import './component-style/movies.css';
import logo from './images/logo.png';
import store from '../store/index'
import {updatePage} from '../actions/index'

class Movie extends React.PureComponent {

    state = {
        id: store.getState().id
    }

    componentDidMount() {

        console.log(store.getState());

       let id ;

       if(this.state.id > 0)
       {
         id = this.state.id;
         localStorage.setItem('id', JSON.stringify(id));
       }
       else
       {
           id = localStorage.getItem('id');
           id = JSON.parse(id);
       }

        axios.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=3af54e3536d0791aa80b3ca05af373bb')
        .then(res => {
            this.setState({
                id: res.data.id,
                original_title: res.data.original_title,
                tagline: res.data.tagline,
                overview: res.data.overview,
                poster_path: res.data.poster_path,
                release_date: res.data.release_date,
                revenue: res.data.revenue,
                runtime: res.data.runtime,
                rating: res.data.vote_average,
                backdrop_path: res.data.backdrop_path,
                genre: res.data.genres
            });
        });
    }

    goBack = () => {
        store.dispatch(updatePage(store.getState().page - 1));
    }

    render() {

        let backURL;
        if(this.state.backdrop_path == null)
        {
            backURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g'
        }
        else
        {
            backURL = 'https://image.tmdb.org/t/p/original' + this.state.backdrop_path;
        }

        let posterURL;
        if(this.state.poster_path == null)
        {
            posterURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g'
        }
        else
        {
            posterURL = 'https://image.tmdb.org/t/p/w500' + this.state.poster_path ;
        }

        let genres = nestedDataToString(this.state.genre);

        return (
           <div className="row pura-dabba" style={{backgroundImage: 'url('+ backURL +')' , backgroundPosition: 'center' , backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>
           <div className="col-sm-12 heading">
                <h1 className="thanks1">MoviesADDICT </h1>
           </div>
            <div className="col-md-8 col-sm-12 mt-4" style={{marginLeft: 'auto' , marginRight: 'auto'}}>
                <div className="row inner-dabba mt-4">
                    <div className="col-md-5 col-sm-12 photu-dabba">
                        <img src={posterURL} style={{width: '100%', height:'100%' , maxHeight: "75vh"}} alt="movie_poster"/>
                    </div>
                    <div className="col-md-7 col-sm-12 info-dabba">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="dibba-title">{this.state.original_title}</h2>
                                <p className="grey">{this.state.tagline}</p>
                                <p>{this.state.overview}</p>
                            </div>
                            <div className="col-sm-12">
                                <p className="grey">{genres}</p>
                            </div>
                            <div className="col-sm-12">
                                <div className="row">
                                <div className="col-xs-6 col-sm-6 mt-3">
                                <span className="properties">Rating:</span> <br/>
                                <span className="grey">{this.state.rating} / 10</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 mt-3">
                                <span className="properties">Box Office:</span> <br/>
                                <span className="grey">{this.state.revenue}</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 mt-3">
                                <span className="properties">Release Date:</span> <br />
                                <span className="grey">{this.state.release_date}</span>
                                </div>
                                <div className="col-xs-6 col-sm-6 mt-3">
                                <span className="properties">Runtime:</span>  <br />
                                <span className="grey">{this.state.runtime}mins</span>
                                </div>
                            </div>
                            <div className="col-sm-12 my-3 text-center">
                                <button className="btn btn-primary my-3" onClick={this.goBack} > Go Back </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 text-center p-4 mt-2">
            <h1 className="thanks">THANKS TO <img src={logo} alt="logo"/> API</h1>
            </div>
           </div>
        );
    }
}

function nestedDataToString(nestedData) {
    let nestedArray = [],
        resultString;
    if(nestedData !== undefined){
      nestedData.forEach(function(item){
        nestedArray.push(item.name);
      });
    }
    resultString = nestedArray.join(', '); // array to string
    return resultString;
  };

export default Movie;