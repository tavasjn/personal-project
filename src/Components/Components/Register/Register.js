import React, { Component } from 'react';
import './Register.css';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser} from '../../../ducks/reducer';
import axios from 'axios';



class Register extends Component {

    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {

    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = () => {
        axios.post('/api/register', {username: this.state.username, password: this.state.password}).then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('/')
            this.setState({
                username: '',
                password: ''
            })
            // this.props.login()
        })
            // .then(alert('Account Created'))
    }


    render() {
        return (
            <div className='register-page'>
                <div className='auth-box'>
                    <div>
                        UserName:
                        <input
                            value={this.state.username}
                            name='username'
                            onChange={(e) => this.handleInput(e)} />
                    </div>
                    <div>
                        Password:
                        <input
                            value={this.state.password}
                            type='password'
                            name='password'
                            onChange={(e) => this.handleInput(e)} />
                    </div>
                </div>
                <div>
                    <button onClick={this.handleRegister} className='register-buttons'>Register</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {user} = reduxState;
    return {
        user
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);