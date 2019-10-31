import React, { Component } from 'react';
// Make it so we can link our buttons to redirect the user //
import {Link} from 'react-router-dom';

// Css below
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <div className='nav-buttons'>
                    <Link to='/home'>Title</Link>
                </div>
                <div className='nav-buttons'>
                    <Link to='/account'>My Account</Link>
                </div>
                <div className='nav-buttons'>
                    <Link to='/finddog'>Find a Dog</Link>
                </div>
                <div className='nav-buttons'>
                    <Link to='/alldogs'>Explore All Dogs</Link>
                </div>
            </div>
        )
    }
}

export default Header;