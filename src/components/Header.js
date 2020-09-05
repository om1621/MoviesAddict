import React from 'react';
import './component-style/Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className= "header-div">
        <Link to="/" style={{textDecoration: 'none', color: '#1be67f'}}> <h3 className="title">MoviesADDICT</h3></Link>
        </div>
    );
}

export default Header;