import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser} from '../../../ducks/reducer';
import {login} from '../../../ducks/reducer';
import './Login.css';

class Login extends Component {

    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {

    }

    handleLogin = () => {
        console.log('hit')
        axios.post('/api/login', {username: this.state.username, password: this.state.password}).then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('/home')
            this.setState({
                username: '',
                password: ''
            })
        })
            .catch(err => console.log(err))
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        return(
            <div className='login-page'>
                <div className='about-box'>
                    This is TITLEHERE and we want to help you find the right dog for you and your needs!
                </div>
                <div className='auth-box'>
                    <div>
                        UserName:
                        <input 
                            value={this.state.username}
                            name='username'
                            onChange={(e) => this.handleInput(e)}/>
                    </div>
                    <div>
                        Password:
                        <input 
                            value={this.state.password}
                            type='password'
                            name='password'
                            onChange={(e) => this.handleInput(e)}/>
                    </div>
                </div>
                <div className='buttons'>
                    <div>
                        <button onClick={this.handleLogin}>Login</button>
                    </div>
                    <div>
                        <Link to='/register'>Register</Link>
                    </div>
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
    updateUser,
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);