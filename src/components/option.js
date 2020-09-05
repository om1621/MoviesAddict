import React from 'react';
import {Link} from 'react-router-dom'
import './component-style/option.css'
import './component-style/bootstrap.min.css'

class Option extends React.PureComponent {

  
    render() {
       
        let imgURL;
        if(this.props.option.poster_path == null)
        {
            imgURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g'
        }
        else
        {
            imgURL = 'https://image.tmdb.org/t/p/w500' + this.props.option.poster_path
        }
        
        return (
           
                <div className="col-lg-4 col-md-6 col-sm-12 bada-dibba my-4">
                    <div className="row card card-body dibba faded-one" style={{flexDirection: 'row', backgroundImage: 'url('+ imgURL +')' , backgroundPosition: 'center' , backgroundRepeat:'no-repeat' , backgroundSize:'cover', color: 'white'}}>
                    </div>
                    <div className="card card-body dibba text-one" style={{flexDirection: 'row', color: 'white'}}>
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="movie-title" style={{fontWeight: 'bold'}}>{this.props.option.title} </h4>
                                <h5 style={{fontWeight: 'bold'}} className="rating">Rating: {this.props.option.rating} / 10</h5>
                            </div>
                            <div className="col-sm-12  my-3">
                                <p className="synopsis">{this.props.option.synopsis}</p>
                                <button className="btn btn-primary px-2 details" onClick={this.props.getId.bind(this , this.props.option.id)}> <Link to="/movie" style={{color: "white"}} className="link">View Details</Link></button>
                            </div>
                        </div>
                    </div>
                </div>  
    );
    }
}

export default Option;