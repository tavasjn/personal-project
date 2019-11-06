import React, { Component } from 'react';
// Make it so we can link our buttons to redirect the user //
import {Link} from 'react-router-dom';

// Css below
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <div>
                    <Link to='/home'><button className='nav-buttons'>Title</button></Link>
                </div>
                <div>
                    <Link to='/account'><button className='nav-buttons'>My Account</button></Link>
                </div>
                <div>
                    <Link to='/finddog'><button className='nav-buttons'>Find a Dog</button></Link>
                </div>
                <div>
                    <Link to='/alldogs'><button className='nav-buttons'>Explore All Dogs</button></Link>
                </div>
            </div>
        )
    }
}

export default Header;