import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './component-style/option.css'
import './component-style/bootstrap.min.css'
import axios from 'axios'
import {updateMovie} from '../actions/index'
import store from '../store/index'
 
const Option = ({id}) => {

    const [option, setOption] = useState({});


    useEffect(() => {
       const getData = async () => {

        let option = {};
        await axios.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=3af54e3536d0791aa80b3ca05af373bb')
            .then(res => {
                option.id = res.data.id;
                option.title = res.data.original_title;
                option.rating = res.data.vote_average;
                option.synopsis = res.data.overview;
                option.poster_path = res.data.poster_path;
                setOption(option);
            });

       }

       getData();
    }, [id]);

    const setCurrentMovie = () => {
        store.dispatch(updateMovie(id));
    }

    let imgURL;
    if(option.poster_path == null)
    {
        imgURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g'
    }
    else
    {
        imgURL = 'https://image.tmdb.org/t/p/w500' + option.poster_path
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 bada-dibba my-4">
                    <div className="row card card-body dibba faded-one" style={{flexDirection: 'row', backgroundImage: 'url('+ imgURL +')' , backgroundPosition: 'center' , backgroundRepeat:'no-repeat' , backgroundSize:'cover', color: 'white'}}>
                    </div>
                    <div className="card card-body dibba text-one" style={{flexDirection: 'row', color: 'white'}}>
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="movie-title" style={{fontWeight: 'bold'}}>{option.title} </h4>
                                <h5 style={{fontWeight: 'bold'}} className="rating">Rating: {option.rating} / 10</h5>
                            </div>
                            <div className="col-sm-12  my-3">
                                <p className="synopsis">{option.synopsis}</p>
                                <button className="btn btn-primary px-2 details" onClick={setCurrentMovie} > <Link to="/movie" style={{color: "white", textDecoration: "none"}} className="link">View Details</Link></button>
                            </div>
                        </div>
                    </div>
        </div>  
    )
}

export default Option


