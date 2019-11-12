import React, { Component } from 'react';
// Make it so we can link our buttons to redirect the user //
import {Link} from 'react-router-dom';

// Css below
import './Header.css';
import Axios from 'axios';

import {connect} from 'react-redux';
import {updateUser} from '../../../ducks/reducer';


class Header extends Component {

    componentDidMount() {
        Axios.post('/api/getuser').then(res => {
            if(!res.data.cookie){
                // console.log(res.data)
                this.props.updateUser(res.data);
            }
        })
        .catch(err => console.log(err));
    }

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
                    <Link to='/quiz/step-one'><button className='nav-buttons'>Find a Dog</button></Link>
                </div>
                <div>
                    <Link to='/alldogs'><button className='nav-buttons'>Explore All Dogs</button></Link>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(null, mapDispatchToProps)(Header);