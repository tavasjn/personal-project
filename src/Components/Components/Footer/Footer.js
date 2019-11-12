import React from 'react';
import './Footer.css';
import {withRouter} from 'react-router-dom';

import Logout from '../../../logout.png';
import axios from 'axios';

const Footer = (props) => {

    const handleLogout = () => {
        axios.post('/api/logout').then(res => {
            props.history.push('/')
        })
            .catch(err => console.log(err))
    }

    return (
        <div className='footer'>
            <div>
                <button onClick={handleLogout}><img src={Logout} alt='' className='logout' /></button>
            </div>
        </div>
    )
}

export default withRouter(Footer);