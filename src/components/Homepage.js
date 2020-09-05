import React from 'react';
import SearchBox from './SearchBox'
import './component-style/homepage.css';

class Homepage extends React.PureComponent {
    
   
    
    render() {
        return (
            <div className="body">
                <SearchBox  getCrieteria = {this.props.getCrieteria}/>
            </div>
        );
    }
}

export default Homepage;