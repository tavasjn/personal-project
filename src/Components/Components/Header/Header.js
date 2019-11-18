import React, { Component } from 'react';
// Make it so we can link our buttons to redirect the user //
import { Link } from 'react-router-dom';

// Css below
import './Header.css';
import Axios from 'axios';

import { connect } from 'react-redux';
import { updateUser } from '../../../ducks/reducer';


class Header extends Component {

    constructor() {
        super();

        this.dropdown = React.createRef()
    }

    componentDidMount() {
        Axios.post('/api/getuser').then(res => {
            if (!res.data.cookie) {
                // console.log(res.data)
                this.props.updateUser(res.data);
            }
        })
            .catch(err => console.log(err));
    }

    toggleShow = () => {
        // console.log(this.dropdown.current)
        let { current } = this.dropdown

        if (current.classList.contains('show-animation')) {
            current.classList.add('hide-animation')
            current.classList.remove('show-animation')
        } else {
            current.classList.add('show-animation')
            current.classList.remove('hide-animation')
        }
    }


    render() {
        // let { icon } = this.state
        return (
            <div>
                <header className='nav-bar'>
                    <div>
                        All the good bois
                    </div>
                    <i id='hamburger-icon' className="fa fa-bars" onClick={this.toggleShow}></i>
                    <div className='menu-bar'>
                        <div>
                            <Link to='/home'><button className='menu-items'>Title</button></Link>
                        </div>
                        <div>
                            <Link to='/account'><button className='menu-items'>My Account</button></Link>
                        </div>
                        <div>
                            <Link to='/quiz/step-one'><button className='menu-items'>Find a Dog</button></Link>
                        </div>
                        <div>
                            <Link to='/alldogs'><button className='menu-items'>Explore All Dogs</button></Link>
                        </div>
                    </div>
                    <div className='dropdown' ref={this.dropdown}>
                        <div>
                            <Link to='/home'><button className='dropdown-menu-items'>Title</button></Link>
                        </div>
                        <div>
                            <Link to='/account'><button className='dropdown-menu-items'>My Account</button></Link>
                        </div>
                        <div>
                            <Link to='/quiz/step-one'><button className='dropdown-menu-items'>Find a Dog</button></Link>
                        </div>
                        <div>
                            <Link to='/alldogs'><button className='dropdown-menu-items'>Explore All Dogs</button></Link>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(null, mapDispatchToProps)(Header);