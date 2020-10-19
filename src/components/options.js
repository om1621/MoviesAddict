import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Option from './option';
import store from '../store/index'
import {updateIds} from '../actions/index'
import loader from '../loading.gif'

const Options = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const getData = async () => {

            let ids = [];
            if(store.getState().crieteriaType === "Name")
            {
            await axios.get('https://api.themoviedb.org/3/search/movie?query='+ store.getState().searchValue +'&api_key=cfe422613b250f702980a3bbf9e90716')
                .then(res => {
                    res.data.results.map((movie) => {
                        ids.push(movie.id);
                        return 1; // just to avoid warning
                    });

                   
                });
            }
            else if(store.getState().crieteriaType === "Genre")
            {
                let genreId;
                await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=cfe422613b250f702980a3bbf9e90716&language=en-US')
                .then(async (res) => {
                    res.data.genres.map((genre) => {
                        if(store.getState().genreValue === genre.name)
                        {
                            genreId = genre.id;
                        }
                        return 1;
                    });

                    await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3af54e3536d0791aa80b3ca05af373bb&with_genres=' + genreId)
                    .then(res => {
                        res.data.results.map((movie) => {
                            ids.push(movie.id);
                            return 1;
                        });
                    });
                });
                
            }

            store.dispatch(updateIds(ids));
            setLoading(true);

        }

        getData();
 
    }, [])

    return (
        <>
            { loading ? ( <> <div className="row">
                <div className="col-sm-12 text-center mt-5">
                    <h1 className="result"> {store.getState().ids.length} RESULTS MATCHING YOUR SEARCH </h1>
                </div>
            </div>
       
            <div className='row my-4 option'>
                {store.getState().ids.map(id => (
                    <Option id={id} />
                ))}
            </div> </> ) 
            : 
            (
                <>
                    <div style={{minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src={loader} alt="loader" />
                    </div>
                </>
            )}
            
        </>
    )
}

export default Options;


