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
                    <Link to='/home'><button>Title</button></Link>
                </div>
                <div className='nav-buttons'>
                    <Link to='/account'><button>My Account</button></Link>
                </div>
                <div className='nav-buttons'>
                    <Link to='/finddog'><button>Find a Dog</button></Link>
                </div>
                <div className='nav-buttons'>
                    <Link to='/alldogs'><button>Explore All Dogs</button></Link>
                </div>
            </div>
        )
    }
}

export default Header;