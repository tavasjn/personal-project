import React, {Component} from 'react';
import './Header.css';


class Header extends Component {
    render(){
        return(
            <div className='nav-bar'>
                <div className='nav-buttons'>Title</div>
                <div className='nav-buttons'>My Account</div>
                <div className='nav-buttons'>Find a Dog</div>
                <div className='nav-buttons'>Explore All Dogs</div>
            </div>
        )
    }
}

export default Header;