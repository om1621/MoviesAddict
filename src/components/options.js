import React from 'react';
import axios from 'axios';
import Option from './option';

class Options extends React.PureComponent {

   state = {
       options:[ ]
   }

   componentDidMount(){

    let ids = this.props.ids;

        
            if(ids.length > 0)
            {
                localStorage.setItem('ids', JSON.stringify(ids));
                console.log(ids);
            }
            else
            {
               ids = localStorage.getItem('ids');
               ids = JSON.parse(ids);
               console.log(ids);
            }
           
        // if(ids === null)
        // {
        //     ids = localStorage.getItem("ids");
        //     console.log("here are ids");
        //     console.log(ids);
        // }
        // else
        // {
        //     localStorage.setItem("ids", ids);
        //     console.log("ids saved");
        //     console.log(this.props.ids);
        // }

            ids.map(id => {
                let option = {};
                axios.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=3af54e3536d0791aa80b3ca05af373bb')
                .then(res => {
                    option.id = res.data.id;
                    option.title = res.data.original_title;
                    option.rating = res.data.vote_average;
                    option.synopsis = res.data.overview;
                    option.poster_path = res.data.poster_path;
        
        
                    this.setState({
                        options: [...this.state.options , option]
                    });
                });
                return console.log(option);
               
            }); 
    }


    render() {
        return (
            <React.Fragment>
            <div className="row">
                <div className="col-sm-12 text-center mt-5">
                    <h1 className="result">RESULTS MATCHING YOUR SEARCH</h1>
                </div>
            </div>
       
            <div className='row my-4 option' style={{paddingLeft: "7.5%"}}>
                {this.state.options.map(option => (
                    <Option option = {option} key={option.id} getId={this.props.getId}/>
                ))}
            </div>   
            </React.Fragment>
            
        )
    }
}

export default Options;